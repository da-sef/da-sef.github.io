<template>
  <footer class="footer bg-white p-2">
    <div class="text-sm flex flex-col sm:flex-row text-center">
      <router-link to="/faqs" class="m-2">
        FAQs
      </router-link>
      <router-link to="/request" class="m-2">
        Request Help
      </router-link>
      <a href="mailto:sef@daiict.ac.in" class="m-2" target="_blank">
        Contact Us
      </a>
      <div class="skip"></div>
    </div>
    <div class="text-center sm:text-left text-xs mt-5">
      <span class="m-2">
        Created by
        <a href="https://github.com/sanket143" target="_blank">
          Sanket Chaudhari
        </a>
      </span>
      <span class="m-2">
        © 2020
        <a href="http://sbg.daiict.ac.in" target="_blank">
          SBG, DA-IICT
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
