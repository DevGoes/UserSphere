<template>
  <div class="container mt-4">
    <!-- Botão de voltar -->
    <button class="btn mb-3" @click="goBack">
      <img src="@/assets/icons/back.svg" alt="Voltar" width="40" height="40">
    </button>

    <div class="col-lg-8 col-md-10 mx-auto text-center">
      <h1 class="title">{{ project.name }}</h1>
      <p class="fs-5 text-muted mt-4">{{ project.description }}</p>
    </div>

    <h2 class="subTitle mt-4">Tarefas</h2>
    <button class="button mb-4" data-bs-toggle="modal" data-bs-target="#addTaskModal">
      Adicionar Tarefa
    </button>

    <!-- Lista de Tarefas -->
    <div v-if="tasks.length > 0" class="list-group">
      <div v-for="task in tasks" :key="task.id" class="list-group-item d-flex justify-content-between align-items-start mb-4">
        <div>
          <h5>{{ task.name }}</h5>
          <p>{{ task.description }}</p>
          <span class="badge" :class="getBadgeClass(task.status)">
            {{ task.status }}
          </span>
        </div>
        <div class="d-flex align-items-start">
          <button class="btn p-0 me-2" @click="changeTaskStatus(task)">
            <img
                src="@/assets/icons/status.svg"
                alt="Status"
                width="24"
                height="24"
                :class="getNextStatusClass(task.status)"
            >
          </button>

          <button class="btn p-0 me-2" @click="editTask(task)">
            <img src="@/assets/icons/edit.svg" alt="Editar" width="24" height="24">
          </button>

          <button class="btn p-0 me-2" @click="deleteTask(task.id)">
            <img src="@/assets/icons/delete.svg" alt="Delete" width="24" height="24">
          </button>

        </div>
      </div>
    </div>
    <p v-else>Nenhuma tarefa adicionada.</p>

    <!-- Modal para Adicionar Tarefa -->
    <div class="modal fade" id="addTaskModal" tabindex="-1" aria-labelledby="addTaskModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addTaskModalLabel">Adicionar Nova Tarefa</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addTask">
              <div class="mb-3">
                <label for="taskName" class="form-label">Nome da Tarefa</label>
                <input type="text" id="taskName" v-model="newTask.name" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="taskDescription" class="form-label">Descrição</label>
                <textarea id="taskDescription" v-model="newTask.description" class="form-control" rows="3"></textarea>
              </div>
              <button type="submit" class="button" style="font-size: 13px">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para editar tarefa usando Bootstrap -->
    <div class="modal fade" id="editTaskModal" tabindex="-1" aria-labelledby="editTaskModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editTaskModalLabel">Editar Tarefa</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateTask">
              <div class="mb-3">
                <label class="form-label">Nome da Tarefa</label>
                <input type="text" v-model="editedTask.name" class="form-control" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Descrição</label>
                <textarea v-model="editedTask.description" class="form-control mb-4" rows="3"></textarea>
              </div>
              <div class="mb-4">
                <label class="form-label">Status</label>
                <select v-model="editedTask.status" class="form-control">
                  <option value="Pendente">Pendente</option>
                  <option value="Em andamento">Em andamento</option>
                  <option value="Concluído">Concluído</option>
                </select>
              </div>
              <button type="submit" class="button" style="font-size: 13px">Salvar Alterações</button>
            </form>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import ProjectService from "@/services/Project.js";
import TaskService from "@/services/Task.js";
import { Modal } from "bootstrap";

export default {
  data() {
    return {
      project: {},
      tasks: [],
      newTask: { name: "", description: "", status: "Pendente" },
      editedTask: { id: null, name: "", description: "", status: "" },
    };
  },
  methods: {
    async fetchProject() {
      try {
        const response = await ProjectService.getProjectById(this.$route.params.id);
        this.project = response.data;
        this.tasks = response.data.tasks;
      } catch (error) {
        console.error("Erro ao buscar projeto:", error);
      }
    },
    goBack() {
      this.$router.push("/projetos");
    },
    async addTask() {
      try {
        if (!this.newTask.name) {
          alert("O nome da tarefa é obrigatório!");
          return;
        }

        await TaskService.createTask(this.$route.params.id, this.newTask);
        this.fetchProject();
        this.newTask = {name: "", description: "", status: "Pendente"};

        // Simula um clique no botão "X" para fechar a modal
        document.querySelector("#addTaskModal .btn-close").click();

      } catch (error) {
        console.error("Erro ao adicionar tarefa:", error);
      }
    },
    async changeTaskStatus(task) {
      try {
        const updatedStatus = task.status === "Pendente"
            ? "Em andamento"
            : task.status === "Em andamento"
                ? "Concluído"
                : "Pendente";

        await TaskService.updateTask(this.$route.params.id, task.id, {...task, status: updatedStatus});
        this.fetchProject();
      } catch (error) {
        console.error("Erro ao alterar status da tarefa:", error);
      }
    },
    async deleteTask(taskId) {
      try {
        await TaskService.deleteTask(this.$route.params.id, taskId);
        this.fetchProject();
      } catch (error) {
        console.error("Erro ao excluir tarefa:", error);
      }
    },
    getBadgeClass(status) {
      return {
        "bg-warning": status === "Pendente",
        "bg-primary": status === "Em andamento",
        "bg-success": status === "Concluído"
      };
    },
    editTask(task) {
      this.editedTask = { ...task };

      // Obtém a modal e exibe com Bootstrap
      const modalElement = document.getElementById("editTaskModal");
      this.editModalInstance = new Modal(modalElement);
      this.editModalInstance.show();
    },
    // 🔹 Método para salvar edição e fechar modal automaticamente
    async updateTask() {
      try {
        if (!this.editedTask.name) {
          alert("O nome da tarefa é obrigatório!");
          return;
        }

        await TaskService.updateTask(this.$route.params.id, this.editedTask.id, this.editedTask);
        this.fetchProject();

        document.querySelector("#editTaskModal .btn-close").click();

      } catch (error) {
        console.error("Erro ao atualizar tarefa", error);
      }
    },
    getNextStatusClass(status) {
      if (status === "Pendente") return "next-status-blue"; // Azul para "Em andamento"
      if (status === "Em andamento") return "next-status-green"; // Verde para "Concluído"
      return "next-status-yellow"; // Amarelo para "Pendente" (reinicia o ciclo)
    }
  },
  mounted() {
    this.fetchProject();
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.title {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.5rem;
}

.subTitle {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;
}

.list-group-item {
  border: 1px solid #ddd;
  border-radius: 8px;
}

.badge {
  padding: 0.5em 1em;
  font-size: 0.9em;
}

.btn img {
  transition: transform 0.2s ease-in-out;
}

.btn:hover img {
  transform: scale(1.2);
}

.button {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #5b2ab5;
  color: #fff;
  padding: 12px 30px;
  border: 2px solid #5b2ab5;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 15px;
}

.button:hover {
  background-color: #fff;
  color: #5b2ab5;
  border: 2px solid #5b2ab5;
}

.next-status-blue {
  filter: invert(39%) sepia(93%) saturate(1082%) hue-rotate(192deg) brightness(95%) contrast(92%);
}

.next-status-green {
  filter: invert(47%) sepia(98%) saturate(305%) hue-rotate(91deg) brightness(90%) contrast(91%);
}

.next-status-yellow {
  filter: invert(85%) sepia(94%) saturate(463%) hue-rotate(360deg) brightness(95%) contrast(90%);
}


</style>
