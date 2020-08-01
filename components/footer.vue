<template>
  <footer class="footer bg-white p-2">
    <div class="text-sm flex">
      <router-link to="/faqs" class="m-2">
        FAQs
      </router-link>
      <router-link to="/request" class="m-2">
        Request Help
      </router-link>
      <a href="http://sbg.daiict.ac.in" class="m-2" target="_blank">
        SBG
      </a>
      <div class="skip"></div>
      <span class="m-2">
        Created by
        <a href="https://github.com/sanket143" target="_blank">
          Sanket Chaudhari
        </a>
      </span>
    </div>
  </footer>
</template>

<style>
.footer {
  bottom: 0;
}

.skip {
  flex: 1;
}
</style>
