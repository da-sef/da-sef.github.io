<template>
  <div class="page">
    <div class="page-wrapper">
      <div class="landing-banner">
        <h1>Emergency Fund Application</h1>
      </div>
      <section class="main-content">
        <h2>
          Sign-in with daiict.ac.in domain to avail the funds.
        </h2>
        <!--
          <div id="firebaseui-auth-container" />
        -->
        <div v-show="ui_rendered && !verified">
          Sign-in with daiict.ac.in domain to avail the funds.
        </div>
        <div class="request-form">
          <form>
            <input
              type="text"
              placeholder="SID"
              class="form-field"
            ><br>
            <input
              type="text"
              placeholder="Full Name"
              class="form-field"
            ><br>
            <input
              type="text"
              placeholder="DA-IICT Email Id"
              class="form-field"
              :value="email"
            ><br>
            <input
              type="text"
              placeholder="Personal Contact Number"
              class="form-field"
              :value="email"
            >
            <input
              type="text"
              placeholder="Guardian Contact Number"
              class="form-field"
              :value="email"
            ><br>
            <input
              type="text"
              placeholder="Local Address"
              class="form-field"
              :value="email"
            ><br>
            <input
              type="text"
              placeholder="Permanent Address"
              class="form-field"
              :value="email"
            ><br>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data(){
    return {
      ui_rendered: true
    }
  },
  computed: {
    ...mapState([
      "email",
      "loggedIn"
    ]),
    verified(){
      return false
    }
  },
  mounted(){
    if(process.browser && !this.loggedIn && !this.ui_rendered){
      const firebase = require("firebase/app")
      const firebaseui = require("firebaseui")

      require("firebase/auth")

      const firebaseConfig = {
        apiKey: "AIzaSyDcaguozmiEDHdLmKZMwPH2rPgTN5SvVjg",
        authDomain: "dasef-68ba5.firebaseapp.com",
        databaseURL: "https://dasef-68ba5.firebaseio.com",
        projectId: "dasef-68ba5",
        storageBucket: "dasef-68ba5.appspot.com",
        messagingSenderId: "923884417325",
        appId: "1:923884417325:web:47eeba7214573701cea3a4",
        measurementId: "G-YLFQYS59N1"
      }

      firebase.initializeApp(firebaseConfig)

      const ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start("#firebaseui-auth-container", {
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccessWithAuthResult: (currentUser, credential, redirectUrl) => {
            this.$store.dispatch("user/setUser", currentUser.email)
            this.ui_rendered = true

            return false
          }
        }
      }, (data) => {
        console.log(data)
      })
    }
  },
  head(){
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css"
        }
      ]
    }
  }
}
</script>

<style>
/* Firebase Override */
#firebaseui-auth-container {
  width: 220px;
}

.firebaseui-card-content {
  padding: 0px;
}
</style>

<style scoped>
.landing-banner {
  min-height: 300px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.main-content {
  background: white;
  padding: var(--space-4);
}

.form-field {
  background: white;
  padding: var(--space-0);
  margin: var(--space-0) 0;
  margin-right: var(--space-0);
  border: 1px solid var(--border-grey);
}
</style>
