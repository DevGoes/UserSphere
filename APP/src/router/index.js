import { createRouter, createWebHistory } from "vue-router";
import Store from "@/store/index.js";
import MainLayout from "@/components/layouts/MainLayout.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Profile from "@/views/Profile.vue";
import Projects from "@/views/Projects.vue";
import ProjectDetails from "@/views/ProjectDetails.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", name: "Home", component: Home, meta: { auth: true } },
      { path: "perfil", name: "Profile", component: Profile, meta: { auth: true } },
      { path: "projetos", name: "Projects", component: Projects, meta: { auth: true } },
      { path: "projetos/:id", name: "ProjectDetails", component: ProjectDetails, meta: { auth: true } },
    ]
  },
  {
    path: "/Auth/login",
    name: "Login",
    component: Login,
    meta: { auth: false }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = Store.getters["Auth/getToken"];

  // Se não houver token válido, bloqueia acesso às rotas protegidas
  if (!token && to.meta.auth) {
    return next({ name: "Login" });
  }

  // Se estiver logado e tentar acessar login, redireciona para Home
  if (token && to.name === "Login") {
    return next({ name: "Home" });
  }

  return next();
});

export default router;
