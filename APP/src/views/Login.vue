<template>
  <main class="form-signin w-100 m-auto d-flex align-items-center justify-content-center vh-100 back">
    <form v-if="!isRegister" class="text-center" style="max-width: 360px; width: 100%;" @submit.prevent="authLogin">
      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 20 20"><g fill="none"><path fill="url(#fluentColorPeopleTeam200)" d="M14.25 8C13.56 8 13 8.56 13 9.25V13c0 1.486 1.25 3 2.5 3s2.5-1.514 2.5-3V9.25C18 8.56 17.44 8 16.75 8z"/><path fill="url(#fluentColorPeopleTeam209)" fill-opacity="0.5" d="M14.25 8C13.56 8 13 8.56 13 9.25V13c0 1.486 1.25 3 2.5 3s2.5-1.514 2.5-3V9.25C18 8.56 17.44 8 16.75 8z"/><path fill="url(#fluentColorPeopleTeam201)" d="M3.25 8C2.56 8 2 8.56 2 9.25V13c0 1.486 1.25 3 2.5 3S7 14.486 7 13V9.25C7 8.56 6.44 8 5.75 8z"/><path fill="url(#fluentColorPeopleTeam20a)" fill-opacity="0.5" d="M3.25 8C2.56 8 2 8.56 2 9.25V13c0 1.486 1.25 3 2.5 3S7 14.486 7 13V9.25C7 8.56 6.44 8 5.75 8z"/><path fill="url(#fluentColorPeopleTeam202)" d="M6 9.25C6 8.56 6.56 8 7.25 8h5.5c.69 0 1.25.56 1.25 1.25V14a4 4 0 0 1-8 0z"/><path fill="url(#fluentColorPeopleTeam203)" d="M6 9.25C6 8.56 6.56 8 7.25 8h5.5c.69 0 1.25.56 1.25 1.25V14a4 4 0 0 1-8 0z"/><path fill="url(#fluentColorPeopleTeam204)" d="M17.5 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/><path fill="url(#fluentColorPeopleTeam205)" d="M17.5 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill="url(#fluentColorPeopleTeam206)" d="M6.5 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/><path fill="url(#fluentColorPeopleTeam207)" d="M6.5 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill="url(#fluentColorPeopleTeam208)" d="M12.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"/><defs><linearGradient id="fluentColorPeopleTeam200" x1="14.189" x2="18.721" y1="9.063" y2="13.586" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#7a41dc"/><stop offset="1" stop-color="#5b2ab5"/></linearGradient><linearGradient id="fluentColorPeopleTeam201" x1="3.189" x2="7.721" y1="9.063" y2="13.586" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#9c6cfe"/><stop offset="1" stop-color="#7a41dc"/></linearGradient><linearGradient id="fluentColorPeopleTeam202" x1="7.902" x2="13.402" y1="9.329" y2="16.354" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#bd96ff"/><stop offset="1" stop-color="#9c6cfe"/></linearGradient><linearGradient id="fluentColorPeopleTeam203" x1="10" x2="18.372" y1="6.81" y2="19.324" gradientUnits="userSpaceOnUse"><stop stop-color="#885edb" stop-opacity="0"/><stop offset="1" stop-color="#e362f8"/></linearGradient><linearGradient id="fluentColorPeopleTeam204" x1="14.451" x2="16.49" y1="3.532" y2="6.787" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#7a41dc"/><stop offset="1" stop-color="#5b2ab5"/></linearGradient><linearGradient id="fluentColorPeopleTeam205" x1="14.451" x2="16.49" y1="3.532" y2="6.787" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#7a41dc"/><stop offset="1" stop-color="#5b2ab5"/></linearGradient><linearGradient id="fluentColorPeopleTeam206" x1="3.451" x2="5.49" y1="3.532" y2="6.787" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#9c6cfe"/><stop offset="1" stop-color="#7a41dc"/></linearGradient><linearGradient id="fluentColorPeopleTeam207" x1="3.451" x2="5.49" y1="3.532" y2="6.787" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#9c6cfe"/><stop offset="1" stop-color="#7a41dc"/></linearGradient><linearGradient id="fluentColorPeopleTeam208" x1="8.689" x2="11.237" y1="2.665" y2="6.734" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#bd96ff"/><stop offset="1" stop-color="#9c6cfe"/></linearGradient><radialGradient id="fluentColorPeopleTeam209" cx="0" cy="0" r="1" gradientTransform="matrix(4.02372 0 0 10.9215 12.214 11.813)" gradientUnits="userSpaceOnUse"><stop offset=".433" stop-color="#3b148a"/><stop offset="1" stop-color="#3b148a" stop-opacity="0"/></radialGradient><radialGradient id="fluentColorPeopleTeam20a" cx="0" cy="0" r="1" gradientTransform="matrix(-4.45292 0 0 -12.0865 8.62 11.813)" gradientUnits="userSpaceOnUse"><stop offset=".433" stop-color="#3b148a"/><stop offset="1" stop-color="#3b148a" stop-opacity="0"/></radialGradient></defs></g></svg>

      <h1 class="title mb-3">UserShepe</h1>

      <div class="form-floating mb-3">
        <input v-model="email" class="form-control" type="email" placeholder="Email" required />
        <label>Email</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="password" class="form-control" type="password" placeholder="Senha" required minlength="6" />
        <label>Senha</label>
      </div>

      <button class="button mt-2 mb-4 w-100 py-3" type="submit">Entrar</button>

      <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>

      <small class="fs-6 text-body-secondary">Ainda não tem conta? <a href="#" @click.prevent="isRegister = true">Cadastre-se</a></small>
    </form>

    <!-- Formulário de Cadastro -->
    <form v-if="isRegister" class="text-center" style="max-width: 360px; width: 100%;" @submit.prevent="register">
      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 20 20"><g fill="none"><path fill="url(#fluentColorPeopleTeam200)" d="M14.25 8C13.56 8 13 8.56 13 9.25V13c0 1.486 1.25 3 2.5 3s2.5-1.514 2.5-3V9.25C18 8.56 17.44 8 16.75 8z"/><path fill="url(#fluentColorPeopleTeam209)" fill-opacity="0.5" d="M14.25 8C13.56 8 13 8.56 13 9.25V13c0 1.486 1.25 3 2.5 3s2.5-1.514 2.5-3V9.25C18 8.56 17.44 8 16.75 8z"/><path fill="url(#fluentColorPeopleTeam201)" d="M3.25 8C2.56 8 2 8.56 2 9.25V13c0 1.486 1.25 3 2.5 3S7 14.486 7 13V9.25C7 8.56 6.44 8 5.75 8z"/><path fill="url(#fluentColorPeopleTeam20a)" fill-opacity="0.5" d="M3.25 8C2.56 8 2 8.56 2 9.25V13c0 1.486 1.25 3 2.5 3S7 14.486 7 13V9.25C7 8.56 6.44 8 5.75 8z"/><path fill="url(#fluentColorPeopleTeam202)" d="M6 9.25C6 8.56 6.56 8 7.25 8h5.5c.69 0 1.25.56 1.25 1.25V14a4 4 0 0 1-8 0z"/><path fill="url(#fluentColorPeopleTeam203)" d="M6 9.25C6 8.56 6.56 8 7.25 8h5.5c.69 0 1.25.56 1.25 1.25V14a4 4 0 0 1-8 0z"/><path fill="url(#fluentColorPeopleTeam204)" d="M17.5 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/><path fill="url(#fluentColorPeopleTeam205)" d="M17.5 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill="url(#fluentColorPeopleTeam206)" d="M6.5 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/><path fill="url(#fluentColorPeopleTeam207)" d="M6.5 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill="url(#fluentColorPeopleTeam208)" d="M12.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"/><defs><linearGradient id="fluentColorPeopleTeam200" x1="14.189" x2="18.721" y1="9.063" y2="13.586" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#7a41dc"/><stop offset="1" stop-color="#5b2ab5"/></linearGradient><linearGradient id="fluentColorPeopleTeam201" x1="3.189" x2="7.721" y1="9.063" y2="13.586" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#9c6cfe"/><stop offset="1" stop-color="#7a41dc"/></linearGradient><linearGradient id="fluentColorPeopleTeam202" x1="7.902" x2="13.402" y1="9.329" y2="16.354" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#bd96ff"/><stop offset="1" stop-color="#9c6cfe"/></linearGradient><linearGradient id="fluentColorPeopleTeam203" x1="10" x2="18.372" y1="6.81" y2="19.324" gradientUnits="userSpaceOnUse"><stop stop-color="#885edb" stop-opacity="0"/><stop offset="1" stop-color="#e362f8"/></linearGradient><linearGradient id="fluentColorPeopleTeam204" x1="14.451" x2="16.49" y1="3.532" y2="6.787" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#7a41dc"/><stop offset="1" stop-color="#5b2ab5"/></linearGradient><linearGradient id="fluentColorPeopleTeam205" x1="14.451" x2="16.49" y1="3.532" y2="6.787" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#7a41dc"/><stop offset="1" stop-color="#5b2ab5"/></linearGradient><linearGradient id="fluentColorPeopleTeam206" x1="3.451" x2="5.49" y1="3.532" y2="6.787" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#9c6cfe"/><stop offset="1" stop-color="#7a41dc"/></linearGradient><linearGradient id="fluentColorPeopleTeam207" x1="3.451" x2="5.49" y1="3.532" y2="6.787" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#9c6cfe"/><stop offset="1" stop-color="#7a41dc"/></linearGradient><linearGradient id="fluentColorPeopleTeam208" x1="8.689" x2="11.237" y1="2.665" y2="6.734" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#bd96ff"/><stop offset="1" stop-color="#9c6cfe"/></linearGradient><radialGradient id="fluentColorPeopleTeam209" cx="0" cy="0" r="1" gradientTransform="matrix(4.02372 0 0 10.9215 12.214 11.813)" gradientUnits="userSpaceOnUse"><stop offset=".433" stop-color="#3b148a"/><stop offset="1" stop-color="#3b148a" stop-opacity="0"/></radialGradient><radialGradient id="fluentColorPeopleTeam20a" cx="0" cy="0" r="1" gradientTransform="matrix(-4.45292 0 0 -12.0865 8.62 11.813)" gradientUnits="userSpaceOnUse"><stop offset=".433" stop-color="#3b148a"/><stop offset="1" stop-color="#3b148a" stop-opacity="0"/></radialGradient></defs></g></svg>
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
        <input v-model="phone" class="form-control" type="tel" placeholder="Celular" required />
        <label>Celular</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="regPassword" class="form-control" type="password" placeholder="Senha" required minlength="6" />
        <label>Senha</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="confirmPassword" class="form-control" type="password" placeholder="Confirmar Senha" required />
        <label>Confirmar Senha</label>
      </div>

      <button class="button btn-lg w-100 py-3 mt-3" type="submit">Criar conta</button>

      <div v-if="feedbackMessage" class="alert mt-4" :class="feedbackClass">
        {{ feedbackMessage }}
      </div>

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
      phone: "",
      regEmail: "",
      regPassword: "",
      confirmPassword: "",
      errorMessage: "",
      isRegister: false,
      feedbackMessage: "",
      feedbackClass: "",
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

      await this.login({
        email: this.email,
        password: this.password,
      });
      setTimeout(() => window.location.reload(), 200);
    },

    async register() {
      if (!this.validateForm()) {
        return;
      }

      try {
        await Auth.register({
          name: this.name,
          email: this.regEmail,
          phone: this.phone,
          password: this.regPassword,
          password_confirmation: this.confirmPassword,
          role: "user",
        });

        this.feedbackMessage = "Cadastro realizado com sucesso!";
        this.feedbackClass = "alert-success";

        await this.$nextTick();

        setTimeout(() => {
          this.feedbackMessage = "";
          this.feedbackClass = "";
          this.isRegister = false;
        }, 1500);

      } catch (error) {
        console.error("Erro no cadastro:", error);
        this.feedbackMessage = "Erro no cadastrar";
        this.feedbackClass = "alert-danger";

        await this.$nextTick();

        setTimeout(() => {
          this.feedbackMessage = "";
          this.feedbackClass = "";
        }, 3000);
      }
    },

    validateForm() {
      if (!this.name || !this.regEmail || !this.phone || !this.regPassword || !this.confirmPassword) {
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
</style>
