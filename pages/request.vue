<template>
  <div class="page">
    <h1>Request</h1>
    <div v-show="auth && !verified">
      Please sign-in with daiict.ac.in domain name
    </div>
    <div id="firebaseui-auth-container" />
  </div>
</template>

<script>

export default {
  data(){
    return {
      auth: false,
      verified: false
    }
  },
  mounted(){
    if(process.browser){
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
            console.log(currentUser.email)

            this.auth = true
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
