<template>
  <nav>
    <router-link to="/">
      <h1 class="navbar-brand">
        DA-SEF
      </h1>
    </router-link>
    <div class="skip" />
    <router-link to="/gift">
      <span class="navbar-item">
        Make a Gift
      </span>
    </router-link>
    <router-link to="/faqs">
      <span class="navbar-item">
        FAQs
      </span>
    </router-link>
    <router-link to="/request">
      <span class="navbar-item">
        Request Help
      </span>
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

.skip {
  flex: 1;
}

.navbar-item {
  font-weight: bold;
  margin-left: var(--space-1);
}
</style>
