<template>
  <nav>
    <router-link to="/">
      <h1 class="navbar-brand">
        DA-SEF
      </h1>
    </router-link>
  </nav>
</template>

<style scoped>
nav {
  height: 50px;
  display: flex;
  padding: 0 10px;
  background: white;
  align-items: center;
  color: var(--primary-swatch);
  box-shadow: 0px 0px 6px #e6e6e6;
}

.navbar-brand {
  margin: 0;
  color: var(--text-black);
}
</style>
