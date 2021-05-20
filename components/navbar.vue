<template>
  <nav>
    <h1 class="navbar-brand">
      <a href="http://sbg.daiict.ac.in">
        <img class="logo" src="/da-logo.png">
      </a>
      <router-link to="/">
        <span>DA-IICT Emergency Fund</span>
      </router-link>
    </h1>
    <div class="skip" />
    <div class="md:flex hidden">
      <!--<a href="https://pages.razorpay.com/pl_FRSXhOTnxzHOwt/view" target="_blank">
        <span class="navbar-item">
          Make a Gift
        </span>
      </a>-->
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
    </div>
  </nav>
</template>

<style scoped>
.logo {
  width: 50px;
}

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
  display: flex;
  align-items: center;
  font-size: var(--size-4);
}

.navbar-brand span {
  color: var(--text-black);
}

.navbar-brand a:hover {
  text-decoration: none;
}

.skip {
  flex: 1;
}

.navbar-item {
  font-weight: bold;
  margin-left: var(--space-1);
}
</style>
