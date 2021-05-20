<template>
  <footer class="footer bg-white p-2">
    <div class="text-sm flex flex-col sm:flex-row text-center">
      <router-link to="/faqs" class="m-2">
        FAQs
      </router-link>
      <router-link to="/request" class="m-2">
        Request Help
      </router-link>
      <button class="m-2" style="color:#4b7a47; outline: none; margin: 7px;" @click="ContactUs()">
        Contact Us
      </button>
    </div>
    <div class="skip" />
    <div id="contact" class="text-center" style="display: none; margin-top: -10px;">
      <p>Mail Us At : <a href="mailto:sef@daiict.ac.in">sef@daiict.ac.in</a></p>
      <p>Bhavya Kedar : +91 9106601855</p>
      <p>Tvesha Srivastava : +91 9315730752</p>
    </div>
    <div class="text-center sm:text-left text-xs mt-5">
      <span class="m-2">
        Created by
        <a href="https://github.com/sanket143" target="_blank">
          Sanket Chaudhari
        </a>
      </span> <span class="m-2">
        © 2021
        <a href="http://sbg.daiict.ac.in" target="_blank">
          SBG, DA-IICT
        </a></span>
    </div>
  </footer>
</template>

<script>
export default{
  methods: {
    ContactUs(){
      const cls = document.getElementById("contact")
      if(cls.style.display === "none"){
        cls.style.display = "inherit"
      } else{
        cls.style.display = "none"
      }
    }
  }
}
</script>

<style>
.footer {
  bottom: 0;
}

.skip {
  flex: 1;
}
</style>
