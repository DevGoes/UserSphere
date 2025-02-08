<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>

  <div class="layout">

    <Header />

    <main class="content">

      <router-view />

    </main>

    <Footer />

  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
