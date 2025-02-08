<template>
  <div class="container px-1 py-5">
    <h1 class="pb-2 title text-center">Bem-vindo ao UserShepe</h1>
    <p class="text-body-secondary mb-5 text-center">
      O UserShepe é um sistema desenvolvido para facilitar a gestão de projetos e tarefas,
      promovendo organização e eficiência no dia a dia.
    </p>

    <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-4">
      <div class="col d-flex flex-column align-items-start gap-2">
        <h2 class="fw-bold text-body-emphasis">Explore as funcionalidades do UserShepe</h2>
        <p class="text-body-secondary">
          Com o UserShepe, você pode criar projetos, gerenciar tarefas, acompanhar o progresso
          e colaborar com sua equipe de maneira simples e eficiente. Nossa interface é intuitiva
          e pensada para otimizar sua produtividade.
        </p>

        <router-link to="/projetos" class="btn btn-primary mt-4">
          Crie seus Projetos
        </router-link>

      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon">
              <img src="@/assets/icons/projects.svg" alt="Gerenciamento de Projetos">
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Gerenciamento de Projetos</h4>
            <p class="text-body-secondary">Crie e organize seus projetos de forma eficiente.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon">
              <img src="@/assets/icons/task.svg" alt="Gerenciamento de Projetos">
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Tarefas Personalizadas</h4>
            <p class="text-body-secondary">Adicione e gerencie tarefas com status e prazos.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon">
              <img src="@/assets/icons/progress.svg" alt="Gerenciamento de Projetos">
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Acompanhamento de Progresso</h4>
            <p class="text-body-secondary">Monitore o status de cada tarefa em tempo real.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon">
              <img src="@/assets/icons/design.svg" alt="Gerenciamento de Projetos">
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Interface Intuitiva</h4>
            <p class="text-body-secondary">Design simples e funcional para uma ótima experiência.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.title {
  font-family: "Source Sans Pro", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3rem;
  color: #000;
}

.btn {
  position: relative;
  font-size: 17px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 2.5em;
  display: inline-block;
  cursor: pointer;
  border-radius: 6em;
  transition: all 0.2s;
  border: none;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: bold;
  color: #fff;
  background-color: #5b2ab5;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btn::after {
  background-color: #5b2ab5;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

</style>
