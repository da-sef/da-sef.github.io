<template>
  <div class="page">
    <div class="page-wrapper">
      <div class="landing-banner">
        <h1>Emergency Fund Application</h1>
      </div>
      <section class="main-content">
        <div v-show="!user.loggedIn && !submitted" class="sign-in-wrapper">
          <h2>
            Sign-in with daiict.ac.in domain to avail the funds.
          </h2>
          <button class="google-signin-btn" @click="google_sign_in">
            <img src="/google/btn_google_signin_light_normal_web.png">
          </button>
        </div>
        <div v-if="user.loggedIn && !submitted" class="request-form">
          <form @submit.prevent="submit">
            <h4
              class="form-label"
            >
              Personal Information
            </h4>
            <input
              v-show="!preview"
              v-model="form.sid"
              type="text"
              placeholder="SID"
              class="form-field"
              required
            ><br>
            <div v-show="preview">
              <strong>SID: </strong>
              <span>{{ form.sid }}</span>
            </div>
            <input
              v-show="!preview"
              v-model="form.full_name"
              type="text"
              placeholder="Full Name"
              class="form-field"
              required
            ><br>
            <div v-show="preview">
              <strong>Full Name: </strong>
              <span>{{ form.full_name }}</span>
            </div>
            <input
              v-show="!preview"
              v-model="form.email_id"
              type="text"
              placeholder="DA-IICT Email Id"
              class="form-field"
              required
            ><br>
            <div v-show="preview">
              <strong>Email address: </strong>
              <span>{{ form.email_id }}</span>
            </div>
            <input
              v-show="!preview"
              v-model="form.personal_number"
              type="text"
              placeholder="Personal Contact Number"
              class="form-field"
              required
            >
            <input
              v-show="!preview"
              v-model="form.guardian_number"
              type="text"
              placeholder="Guardian Contact Number"
              class="form-field"
              required
            ><br>
            <div v-show="preview">
              <strong>Personal Contact Number: </strong>
              <span>{{ form.personal_number }}</span>
            </div>
            <div v-show="preview">
              <strong>Guardian Contact Number: </strong>
              <span>{{ form.guardian_number }}</span>
            </div>
            <br>
            <div v-show="!preview">
              <h4
                class="form-label"
              >
                Address
              </h4>
              <input
                v-model="form.address.address1"
                type="text"
                class="form-field address-field"
                required
              ><br>
              <input
                v-model="form.address.address2"
                type="text"
                class="form-field address-field"
                required
              ><br>
              <input
                v-model="form.address.city"
                type="text"
                class="form-field"
                placeholder="City"
                required
              >
              <input
                v-model="form.address.state"
                type="text"
                class="form-field"
                placeholder="State"
                required
              >
              <input
                v-model="form.address.zip"
                type="number"
                class="form-field"
                placeholder="Zip"
                required
              ><br>
              <input
                v-model="form.address.country"
                name="country"
                type="text"
                class="form-field"
                placeholder="Country"
                required
              >
            </div>
            <div v-show="preview">
              <strong>Address: </strong><br>
              <span>{{ form.address.address1 }}</span><br>
              <span>{{ form.address.address2 }}</span><br>
              <span>{{ form.address.city }}, {{ form.address.state }}, {{ form.address.zip }}, {{ form.address.country }}</span>
            </div>
            <br>
            <div v-show="!preview">
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
                  required
                > Yes
              </label>
              <label>
                <input
                  v-model="form.scholarship_this_year"
                  name="scholarship"
                  type="radio"
                  value="no"
                  required
                > No
              </label><br>
              <textarea
                v-show="!preview"
                v-if="form.scholarship_this_year == 'yes'"
                v-model="form.scholarship_info"
                rows="2"
                class="form-textarea"
                placeholder="Details of scholarship"
                required
              />
            </div>
            <div v-show="preview">
              <strong>
                Have you applied for any scholarship this year?
              </strong>
              <span>{{ form.scholarship_this_year }}</span>
              <br>
              <p>{{ form.scholarship_info }}</p>
            </div>
            <div v-show="!preview">
              <h4
                class="form-label"
              >
                Have you received funds from the DA-IICT Emergency Fund before?
              </h4>
              <label
                v-show="!preview"
              >
                <input
                  v-model="form.sef_before"
                  name="sef"
                  type="radio"
                  value="yes"
                  required
                > Yes
              </label>
              <label
                v-show="!preview"
              >
                <input
                  v-model="form.sef_before"
                  name="sef"
                  type="radio"
                  value="no"
                  required
                > No
              </label><br>
            </div>
            <div v-show="preview">
              <strong>
                Have you received funds from the DA-IICT Emergency Fund before?
              </strong>
              <span>{{ form.sef_before }}</span>
            </div>
            <div v-show="!preview">
              <h4
                class="form-label"
              >
                Amount of funds requested from DA-IICT Emergency Fund (in Indian Rupee)
              </h4>
              <input
                v-show="!preview"
                v-model="form.amount"
                type="number"
                placeholder="Amount"
                class="form-field"
                required
              >
              <span>INR</span>
            </div>
            <br>
            <div v-show="preview">
              <strong>
                Requested Funds:
              </strong>
              <span>{{ form.amount }} INR</span>
            </div>
            <h4
              class="form-label"
            >
              Please describe what led to your emergent financial need, providing as much detail as you are comfortable providing.
            </h4>
            <textarea
              v-show="!preview"
              v-model="form.q_descneed"
              rows="4"
              class="form-textarea"
              required
            />
            <div v-show="preview">
              <span>{{ form.q_descneed }}</span>
            </div>
            <br>
            <h4
              class="form-label"
            >
              Please explain in detail what the funds will be used for.
            </h4>
            <textarea
              v-show="!preview"
              v-model="form.q_whatfor"
              rows="4"
              class="form-textarea"
              required
            />
            <div v-show="preview">
              <span>{{ form.q_whatfor }}</span>
            </div>
            <br>
            <h4
              class="form-label"
            >
              Please describe the specific impact of the emergency on your ability to be a student.
            </h4>
            <textarea
              v-show="!preview"
              v-model="form.q_impact"
              rows="4"
              class="form-textarea"
              required
            />
            <div v-show="preview">
              <span>{{ form.q_impact }}</span>
            </div>
            <br>
            <h4
              class="form-label"
            >
              Please describe your efforts to obtain assistance to address your needs through other sources (family, friends, campus/community organizations, etc.)
            </h4>
            <textarea
              v-show="!preview"
              v-model="form.q_efforts"
              rows="4"
              class="form-textarea"
              required
            />
            <div v-show="preview">
              <span>{{ form.q_efforts }}</span>
            </div>
            <br>
            <h4
              class="form-label"
            >
              What do you plan to do to return to financial stability after receiving help to prevent a pattern?
            </h4>
            <textarea
              v-show="!preview"
              v-model="form.q_plan"
              rows="4"
              class="form-textarea"
              required
            />
            <div v-show="preview">
              <span>{{ form.q_plan }}</span>
            </div>
            <br>
            <div class="mandatory-checkboxes">
              <label class="form-checkbox">
                <input type="checkbox" required>
                <span class="checkbox-text">
                  I understand that I may not be eligible for an award from the DA-IICT Emergency Fund, and will respect that decision.
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
                  I understand that this application falls under the non-urgent category and will be received during normal business hours (M-F 8-5).
                </span>
              </label>
            </div>
            <div class="form-attachment">
              <span class="attachment-text">
                Add Attachment [It is advisable to attach documents, photos etc. to prove or support your claims]
              </span>
              <FileUpload @filesUpdate="fileUpdateHandler" />
            </div>
            <div v-show="errors.len > 0" class="errors">
              <span v-for="error in errors" :key="error">{{ error }}</span><br>
            </div>
            <button
              type="button"
              class="sef-btn"
              @click="togglePreview"
            >
              {{ preview ? "Edit" : "Preview" }}
            </button>
            <button
              class="sef-btn"
            >
              Submit
            </button>
          </form>
        </div>
        <div v-if="submitted" class="thank-you-wrapper">
          <h2>
            Thank you for filling out the form. You'll be hearing from us
            very soon.
          </h2>
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
      submitted: false,
      errors: [],
      preview: false,
      form: {
        sid: "",
        full_name: "",
        email_id: "",
        personal_number: "",
        guardian_number: "",
        address: {
          address1: "",
          address2: "",
          city: "",
          state: "",
          country: ""
        },
        scholarship_this_year: "",
        scholarship_info: "",
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
    togglePreview(){
      this.preview = !this.preview
      return false
    },
    trim(text){
      console.log(text)
      return text.replace(/^\s+|\s+$/gm, "")
    },
    submit(){
      this.errors = []

      const payload = { ...this.form, user: { ...this.user } }

      for(const key in payload){
        if(key === "address"){
          for(const k1 in payload.address){
            payload.address[k1] = this.trim(payload.address[k1])
          }

          continue
        } else if(key === "attachments" ||
          key === "user" ||
          key === "amount"
        ){
          continue
        }

        payload[key] = this.trim(payload[key])
      }

      const date_now = new Date()
      payload.timestamp = date_now.toString()

      this.$fireStore.collection("submissions").add(payload)
        .then((ref) => {
          this.submitted = true
        })
        .catch((err) => {
          console.log(err)
        })
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
      this.form.attachments = files
    }
  },
  head(){
    return {
      title: "Request Help | DA-IICT Emergency Fund",
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

.address-field {
  width: 649px;
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

.errors {
  color: crimson;
  margin-bottom: 15px;
}
</style>
