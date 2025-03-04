<template>
  <main class="form-signin w-100 m-auto d-flex align-items-center justify-content-center vh-100 back">
    <form v-if="!isRegister" class="text-center" style="max-width: 360px; width: 100%;" @submit.prevent="authLogin">
      <img src="@/assets/icons/userShepe.svg" alt="Icone UserShepe">

      <h1 class="title mb-3">UserShepe</h1>

      <div class="form-floating mb-3">
        <input v-model="email" class="form-control" type="email" placeholder="Email" required />
        <label>Email</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="password" class="form-control" type="password" placeholder="Senha" required minlength="6" />
        <label>Senha</label>
      </div>

      <div v-if="errorMessage" class="alert alert-danger d-flex justify-content-between align-items-center mt-3">
        {{ errorMessage }}
        <button type="button" class="btn-close" @click="errorMessage = ''"></button>
      </div>

      <button class="button mt-2 mb-4 w-100 py-3" type="submit" :disabled="loading">
        <span v-if="loading" class="spinner-border spinner-border-sm"></span>
        <span v-else>Entrar</span>
      </button>

      <small class="fs-6 text-body-secondary">Ainda não tem conta? <a href="#" @click.prevent="isRegister = true">Cadastre-se</a></small>
    </form>

    <!-- Formulário de Cadastro -->
    <form v-if="isRegister" class="text-center" style="max-width: 360px; width: 100%;" @submit.prevent="register">
      <img src="@/assets/icons/userShepe.svg" alt="Icone UserShepe">
      <h1 class="h3 mb-3 title">Criar Conta</h1>

      <div class="form-floating mb-3">
        <input v-model="name" class="form-control" type="text" placeholder="Nome" required />
        <label>Nome</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="regEmail" class="form-control" type="email" placeholder="E-mail" required />
        <label>E-mail</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="regPassword" class="form-control" type="password" placeholder="Senha" required minlength="6" />
        <label>Senha</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="confirmPassword" class="form-control" type="password" placeholder="Confirmar Senha" required />
        <label>Confirmar Senha</label>
      </div>

      <div v-if="feedbackMessage" class="alert d-flex justify-content-between align-items-center mt-4" :class="feedbackClass">
        {{ feedbackMessage }}
        <button type="button" class="btn-close" @click="feedbackMessage = ''"></button>
      </div>

      <button class="button btn-lg w-100 py-3 mt-3" type="submit" :disabled="loading">
        <span v-if="loading" class="spinner-border spinner-border-sm"></span>
        <span v-else>Criar conta</span>
      </button>

      <button type="button" class="btn btn-dark-link mt-3" @click="isRegister = false">Voltar para Login</button>
    </form>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import Auth from "@/services/Auth";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      regEmail: "",
      regPassword: "",
      confirmPassword: "",
      errorMessage: "",
      isRegister: false,
      feedbackMessage: "",
      feedbackClass: "",
      loading: false,
    };
  },

  methods: {
    ...mapActions({
      login: "Auth/login",
    }),

    async authLogin() {
      if (!this.email || !this.password) {
        this.errorMessage = "Preencha todos os campos!";
        return;
      }

      this.loading = true;

      try {
        await this.login({
          email: this.email,
          password: this.password,
        });

        setTimeout(() => {
          this.loading = false;
          window.location.reload();
        }, 200);
      } catch (error) {
        this.errorMessage = error.response?.data?.message || "Erro ao fazer login!";
        console.error("Erro ao fazer login:", error);
        this.loading = false;
      }
    },

    async register() {
      if (!this.validateForm()) {
        return;
      }

      this.loading = true;

      try {
        await Auth.register({
          name: this.name,
          email: this.regEmail,
          password: this.regPassword,
          password_confirmation: this.confirmPassword,
          role: "user",
        });

        this.feedbackMessage = "Cadastro realizado com sucesso!";
        this.feedbackClass = "alert-success";

        // **Troca para o formulário de login e preenche os campos**
        this.isRegister = false;
        this.email = this.regEmail;
        this.password = this.regPassword;

      } catch (error) {
        console.error("Erro no cadastro:", error);

        if (error.response && error.response.data && error.response.data.message) {
          this.feedbackMessage = error.response.data.message;
        } else {
          this.feedbackMessage = "Erro ao cadastrar";
        }

        this.feedbackClass = "alert-danger";
      } finally {
        this.loading = false;
      }
    },

    validateForm() {
      if (!this.name || !this.regEmail || !this.regPassword || !this.confirmPassword) {
        alert("Todos os campos são obrigatórios!");
        return false;
      }

      if (this.regPassword.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return false;
      }

      if (this.regPassword !== this.confirmPassword) {
        alert("As senhas não coincidem!");
        return false;
      }

      return true;
    },
  },
};
</script>

<style scoped>
.back {
  background-color: #F8FAFC;
}

.title {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 25px;
  color: #333;
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
  font-size: 18px;
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

.spinner-border {
  vertical-align: middle;
  margin-right: 5px;
}

.alert {
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-close {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
