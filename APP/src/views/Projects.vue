<template>
  <div class="container py-5 mt-4">
    <h1 class="title mb-4">Meus Projetos</h1>
    <button
        class="button mb-5"
        data-bs-toggle="modal"
        data-bs-target="#createProjectModal"
    >
      Criar Projeto
    </button>

    <!-- Modal para criar projeto -->
    <div
        class="modal fade"
        id="createProjectModal"
        tabindex="-1"
        aria-labelledby="createProjectModalLabel"
        aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="createProjectModalLabel">Criar Novo Projeto</h5>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createProject">
              <div class="mb-3">
                <label for="projectName" class="form-label">Nome do Projeto</label>
                <input
                    type="text"
                    id="projectName"
                    v-model="newProject.name"
                    class="form-control"
                    required
                />
              </div>
              <div class="mb-3">
                <label for="projectDescription" class="form-label">Descrição</label>
                <textarea
                    id="projectDescription"
                    v-model="newProject.description"
                    class="form-control"
                    rows="3"
                ></textarea>
              </div>
              <button type="submit" class="button" style="font-size: 13px">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para editar projeto -->
    <div class="modal fade" id="editProjectModal" tabindex="-1" aria-labelledby="editProjectModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editProjectModalLabel">Editar Projeto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateProject">
              <div class="mb-3">
                <label for="editProjectName" class="form-label">Nome do Projeto</label>
                <input type="text" id="editProjectName" v-model="editedProject.name" class="form-control" required />
              </div>
              <div class="mb-3">
                <label for="editProjectDescription" class="form-label">Descrição</label>
                <textarea id="editProjectDescription" v-model="editedProject.description" class="form-control mb-4" rows="3"></textarea>
              </div>
              <button type="submit" class="button" style="font-size: 13px">Salvar Alterações</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Lista de projetos -->
    <div v-if="projects.length > 0" class="row">
      <div
          v-for="project in projects"
          :key="project.id"
          class="col-md-4 mb-4"
      >
        <div class="card h-100">
          <div class="card-body d-flex justify-content-between align-items-start">
            <!-- Título e descrição -->
            <div>
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">{{ project.description }}</p>
            </div>

            <!-- Botões de ação -->
            <div class="d-flex align-items-start">
              <button class="btn p-0 me-2" @click="viewProject(project.id)">
                <img src="@/assets/icons/details.svg" alt="Detalhes" width="24" height="24">
              </button>

              <button class="btn p-0 me-2" @click="editProject(project)">
                <img src="@/assets/icons/edit.svg" alt="Editar" width="24" height="24">
              </button>

              <button class="btn p-0 me-2" @click="deleteProject(project.id)">
                <img src="@/assets/icons/delete.svg" alt="Delete" width="24" height="24">
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div v-else>
      <p>Nenhum projeto encontrado. Clique no botão acima para criar um novo projeto.</p>
    </div>
  </div>
</template>

<script>
import ProjectService from "@/services/Project.js";
import { Modal } from "bootstrap";

export default {
  data() {
    return {
      projects: [], // Lista de projetos
      newProject: {
        name: "",
        description: ""
      },
      editedProject: { id: null, name: "", description: "" },
    };
  },
  methods: {
    // Busca os projetos da API
    async fetchProjects() {
      try {
        const response = await ProjectService.getAllProjects();
        this.projects = response.data;
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    },
    // Cria um novo projeto
    async createProject() {
      try {
        if (!this.newProject.name) {
          alert("O nome do projeto é obrigatório!");
          return;
        }

        await ProjectService.createProject(this.newProject);
        this.fetchProjects(); // Atualiza a lista de projetos
        this.newProject = { name: "", description: "" }; // Limpa os campos do formulário

        document.querySelector("#createProjectModal .btn-close").click();

      } catch (error) {
        console.error("Erro ao criar projeto:", error);
      }
    },
    // Redireciona para a página de detalhes do projeto
    viewProject(id) {
      this.$router.push(`/projetos/${id}`);
    },
    // Exclui um projeto
    async deleteProject(id) {
      try {
        await ProjectService.deleteProject(id);
        this.fetchProjects(); // Atualiza a lista após excluir
      } catch (error) {
        console.error("Erro ao excluir projeto:", error);
      }
    },
    editProject(project) {
      this.editedProject = { ...project };

      // Acesse o modal corretamente
      const modalElement = document.getElementById("editProjectModal");
      const modalInstance = new Modal(modalElement);
      modalInstance.show();
    },
    async updateProject() {
      try {
        if (!this.editedProject.name) {
          alert("O nome do projeto é obrigatório!");
          return;
        }

        await ProjectService.updateProject(this.editedProject.id, this.editedProject);
        this.fetchProjects();

        document.querySelector("#editProjectModal .btn-close").click();

      } catch (error) {
        console.error("Erro ao atualizar projeto:", error);
      }
    }
  },
  mounted() {
    this.fetchProjects(); // Busca os projetos ao montar o componente
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
  color: #333;
}

.card {
  height: 100%; /* Garante que todos os cards tenham o mesmo tamanho */
  overflow: hidden; /* Evita que o conteúdo ultrapasse o card */
}

.card-title {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  color: #333;
}

.modal-title {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
}

.card-text {
  display: -webkit-box; /* Usado para truncamento em múltiplas linhas */
  -webkit-line-clamp: 3; /* Limita a 3 linhas */
  -webkit-box-orient: vertical;
  overflow: hidden; /* Esconde o conteúdo que ultrapassar */
  text-overflow: ellipsis; /* Adiciona reticências (...) */
}

.btn img {
  transition: transform 0.2s ease-in-out;
}

.btn:hover img {
  transform: scale(1.3);
}

.button {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #5b2ab5;
  color: #fff;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 15px;
}

.button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  background-color: rgb(91, 42, 181);
}

.button:active {
  transform: translateY(0.5em);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

</style>
