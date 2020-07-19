<template>
  <div class="page">
    <div class="page-wrapper">
      <div class="landing-banner">
        <h1>Emergency Fund Application</h1>
      </div>
      <section class="main-content">
        <div v-show="!user.loggedIn" class="sign-in-wrapper">
          <h2>
            Sign-in with daiict.ac.in domain to avail the funds.
          </h2>
          <button class="google-signin-btn" @click="google_sign_in">
            <img src="/google/btn_google_signin_light_normal_web.png">
          </button>
        </div>
        <div v-if="user.loggedIn" class="request-form">
          <form @submit.prevent="submit">
            <h4
              class="form-label"
            >
              Personal Information
            </h4>
            <input
              v-model="form.sid"
              type="text"
              placeholder="SID"
              class="form-field"
              required
            ><br>
            <input
              v-model="form.full_name"
              type="text"
              placeholder="Full Name"
              class="form-field"
              required
            ><br>
            <input
              v-model="form.email_id"
              type="text"
              placeholder="DA-IICT Email Id"
              class="form-field"
              required
            ><br>
            <input
              v-model="form.personal_number"
              type="text"
              placeholder="Personal Contact Number"
              class="form-field"
              required
            >
            <input
              v-model="form.guardian_number"
              type="text"
              placeholder="Guardian Contact Number"
              class="form-field"
              required
            ><br>
            <input
              v-model="form.local_address"
              type="text"
              placeholder="Local Address"
              class="form-field"
              required
            >
            <input
              v-model="form.permanent_address"
              type="text"
              placeholder="Permanent Address"
              class="form-field"
              required
            ><br>
            <h4
              class="form-label"
            >
              Have you applied for any scholarship this year?
            </h4>
            <label>
              <input
                v-model="form.scholarship_this_year"
                name="scholarship"
                type="radio"
                value="yes"
              > Yes
            </label>
            <label>
              <input
                v-model="form.scholarship_this_year"
                name="scholarship"
                type="radio"
                value="no"
              > No
            </label><br>
            <h4
              class="form-label"
            >
              Have you received funds from the Student Emergency Fund before?
            </h4>
            <label>
              <input
                v-model="form.sef_before"
                name="sef"
                type="radio"
                value="yes"
              > Yes
            </label>
            <label>
              <input
                v-model="form.sef_before"
                name="sef"
                type="radio"
                value="no"
              > No
            </label><br>
            <h4
              class="form-label"
            >
              Amount of funds requested from Student Emergency Fund (in Indian Rupee)
            </h4>
            <input
              v-model="form.amount"
              type="number"
              placeholder="Amount"
              class="form-field"
              required
            >
            <span>INR</span>
            <br>
            <h4
              class="form-label"
            >
              Please describe what led to your emergent financial need, providing as much detail as you arecomfortable providing.
            </h4>
            <textarea
              v-model="form.q_descneed"
              rows="4"
              class="form-textarea"
            />
            <br>
            <h4
              class="form-label"
            >
              Please explain in detail what the funds will be used for.
            </h4>
            <textarea
              v-model="form.q_whatfor"
              rows="4"
              class="form-textarea"
            />
            <br>
            <h4
              class="form-label"
            >
              Please describe the specific impact of the emergency on your ability to be a student.
            </h4>
            <textarea
              v-model="form.q_impact"
              rows="4"
              class="form-textarea"
            />
            <br>
            <h4
              class="form-label"
            >
              Please describe your efforts to obtain assistance to address your needs through other sources(family, friends, campus/community organizations, etc.)
            </h4>
            <textarea
              v-model="form.q_efforts"
              rows="4"
              class="form-textarea"
            />
            <br>
            <h4
              class="form-label"
            >
              What do you plan to do to return to financial stability after receiving help to prevent a pattern?
            </h4>
            <textarea
              v-model="form.q_plan"
              rows="4"
              class="form-textarea"
            /><br>
            <div class="mandatory-checkboxes">
              <label class="form-checkbox">
                <input type="checkbox" required>
                <span class="checkbox-text">
                  I understand that I may not be eligible for an award from the Student Emergency Fund, and will respect that decision.
                </span>
              </label><br>
              <label class="form-checkbox">
                <input type="checkbox" required>
                <span class="checkbox-text">
                  I agree to use any award of funds for the requested purpose(s) only and I understand that this is a one-time grant of funds.
                </span>
              </label><br>
              <label class="form-checkbox">
                <input type="checkbox" required>
                <span class="checkbox-text">
                  I agree to use any award of funds for the requested purpose(s) only and I understand that this is a one-time grant of funds.
                </span>
              </label><br>
              <label class="form-checkbox">
                <input type="checkbox" required>
                <span class="checkbox-text">
                  I affirm that the information that I have provided on this application and any additional information that I provide in support of my request for emergency funds is complete, accurate and true, to the best of my knowledge. I also understand that providing false information may result in revocation of any award of emergency funds and/or referral to the Disciplinary Action Committee(DAC), DA-IICT for formal disciplinary action.
                </span>
              </label><br>
              <label class="form-checkbox">
                <input type="checkbox" required>
                <span class="checkbox-text">
                  I understand that this application falls under the non-urgent category and will be received during normal business hours (M-F 8-5).
                </span>
              </label>
            </div>
            <div class="form-attachment">
              <span class="attachment-text">
                Attachment [Supporting Documentation- Photos, video, email, and other supporting documents may be attached below.]
              </span>
              <FileUpload @filesUpdate="fileUpdateHandler" />
            </div>
            <button
              class="sef-btn"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import FileUpload from "@/components/file-upload.vue"

export default {
  components: {
    FileUpload
  },
  data(){
    return {
      uploadTask: "",
      ui_rendered: true,
      form: {
        sid: "",
        full_name: "",
        email_id: "",
        personal_number: "",
        guardian_number: "",
        local_address: "",
        permanent_address: "",
        scholarship_this_year: "",
        sef_before: "",
        amount: 0,
        q_descneed: "",
        q_whatfor: "",
        q_impact: "",
        q_efforts: "",
        q_plan: "",
        attachments: []
      }
    }
  },
  computed: {
    ...mapState([
      "user"
    ]),
    verified(){
      return false
    }
  },
  methods: {
    submit(){
      console.log({ ...this.form, ...this.user })
    },
    google_sign_in(){
      const provider = new this.$fireAuthObj.GoogleAuthProvider()

      this.$fireAuth.signInWithPopup(provider).then((result) => {
        const { email } = result.user
        const domain = "daiict.ac.in"

        if(email.includes(domain, email.length - domain.length)){
          this.$store.dispatch("user/setUser", result.user)
          this.form.email_id = result.user.email
        } else {
          alert("Please sign in with daiict.ac.in to proceed")
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    fileUpdateHandler(files){
      this.attachments = files
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

<style scoped>
.landing-banner {
  min-height: 300px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.google-signin-btn {
  border: none;
  padding: 0;
  background: none;
  margin-top: var(--space-0);
}

.main-content {
  background: white;
  padding: var(--space-4);
}

.form-field, .form-textarea {
  background: white;
  padding: var(--space-0);
  margin: var(--space-0) 0;
  margin-right: var(--space-0);
  border: 1px solid var(--border-grey);
}

.form-label {
  margin: var(--space-1) 0 var(--space-0) 0;
}

.form-textarea {
  width: 100%;
  resize: none;
}

.mandatory-checkboxes, .form-attachment {
  margin: var(--space-1) 0;
  font-weight: bold;
}

.form-checkbox {
  display: inline-block;
  margin: var(--space-0) 0;
}

.attachment-text {
  display: inline-block;
  margin: var(--space-0) 0;
}
</style>
