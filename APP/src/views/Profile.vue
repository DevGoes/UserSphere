<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">

      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center">
          <img src="@/assets/icons/userProfile.svg" alt="Foto de perfil" class="rounded-circle mt-5 mb-3 profile-img" />
          <span class="font-weight-bold">{{ user.name }}</span>
          <span class="text-black-50">{{ user.email }}</span>
        </div>
      </div>

      <div class="col-md-9">
        <div class="p-3 py-5">
          <h4 class="title text-center mb-4">Configurações do Perfil</h4>
          <form @submit.prevent="saveProfile">

            <div class="row mt-3 justify-content-center">
              <div class="col-md-5">
                <label class="labels">Nome</label>
                <input v-model="user.name" type="text" class="form-control" placeholder="Nome" required />
              </div>
            </div>

            <div class="row mt-3 justify-content-center">
              <div class="col-md-5">
                <label class="labels">Email</label>
                <input v-model="user.email" type="email" class="form-control" placeholder="E-mail" required />
              </div>
            </div>

            <div class="row mt-3 justify-content-center">
              <div class="col-md-5">
                <label class="labels">Senha</label>
                <input v-model="user.password" type="password" class="form-control" placeholder="Nova senha" />
              </div>
            </div>

            <div class="mt-5 text-center">
              <button class="button" type="submit">Salvar Perfil</button>
            </div>

            <div v-if="feedbackMessage" class="alert mt-3 text-center" :class="feedbackClass">
              {{ feedbackMessage }}
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/User.js";

export default {
  name: "Profile",

  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      feedbackMessage: "",
      feedbackClass: "",
    };
  },

  async created() {
    try {
      const userData = localStorage.getItem("user");
      if (!userData) {
        throw new Error("Nenhum dado de usuário encontrado no localStorage.");
      }

      const parsedUser = JSON.parse(userData);

      const response = await UserService.getUserById(parsedUser.id);

      this.user = {
        name: response.data.name || "",
        email: response.data.email || "",
        password: ""
      };
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
    }
  },

  methods: {
    async saveProfile() {
      try {
        const userData = localStorage.getItem("user");
        if (!userData) {
          throw new Error("Nenhum dado de usuário encontrado no localStorage.");
        }

        const parsedUser = JSON.parse(userData);

        // Monta objeto com os dados para atualização
        const updatedUser = {
          name: this.user.name,
          email: this.user.email,
        };

        // Só adiciona a senha se o usuário digitar algo
        if (this.user.password) {
          updatedUser.password = this.user.password;
        }

        await UserService.updateUser(parsedUser.id, updatedUser);
        this.feedbackMessage = "Dados alterados com sucesso!";
        this.feedbackClass = "alert-success";

        // Oculta a mensagem após 3 segundos
        setTimeout(() => {
          this.feedbackMessage = "";
        }, 3000);

      } catch (error) {
        console.error("Erro ao salvar o perfil:", error);
        this.feedbackMessage = "Erro ao alterar dados.";
        this.feedbackClass = "alert-danger";
      }
    }
  },
};
</script>


<style scoped>
.title {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  color: #333;
  font-size: 2rem;
}

.button {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #5b2ab5;
  color: #fff;
  padding: 12px 35px;
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
</style>
