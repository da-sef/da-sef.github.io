<template>
  <div class="gift-page">
    <div class="wrapper">
      <h2 class="title">
        Make a Gift
      </h2>
      <form @submit.prevent="checkout">
        <input
          v-model="options.prefill.name"
          type="text"
          placeholder="Full Name"
          class="form-field"
          required
        ><br>
        <input
          v-model="options.notes.country"
          type="text"
          placeholder="Country"
          class="form-field"
          required
        ><br>
        <input
          v-model="options.prefill.email"
          type="email"
          placeholder="Email"
          class="form-field"
          required
        >
        <input
          v-model="options.prefill.contact"
          type="tel"
          placeholder="Phone Number"
          class="form-field"
          required
        ><hr>
        <input
          v-model="options.amount"
          type="number"
          placeholder="Amount"
          class="form-field"
          required
        >
        <span>INR</span>
        <br>

        <select
          v-model="options.notes.affiliation"
          class="form-field"
          required
        >
          <option value="daiict-current-student">
            DA-IICT Current Student
          </option>
          <option value="daiict-alumnus">
            DA-IICT Alumnus
          </option>
          <option value="daiict-current-staff">
            DA-IICT Current Faculty/Staff
          </option>
          <option value="daiict-former-staff">
            DA-IICT Former Faculty/Staff
          </option>
          <option value="parent">
            Parent
          </option>
          <option value="friend">
            Friend
          </option>
          <option value="corporation">
            Corporation
          </option>
          <option value="foundation">
            Foundation
          </option>
        </select><br>
        <label class="form-checkbox">
          <input v-model="options.notes.contactme" type="checkbox">
          <span class="checkbox-text">
            DA-IICT may contact me at the email address above
          </span>
        </label><br>
        <button class="sef-btn">
          Make Donation
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const defaultOpt = {
  key: "rzp_test_UOq8piMTR8cjDM",
  currency: "INR",
  name: "DA-IICT",
  description: "Student Emergency Fund",
  image: "/da-logo.png",
  handler: (response) => {
    console.log(response)
  },
  theme: {
    color: "#4b7a47"
  }
}

export default {
  data(){
    return {
      razorpayLoaded: false,
      checkoutpayLoaded: false,
      options: {
        amount: 100,
        prefill: {
          name: "",
          email: "",
          contact: ""
        },
        notes: {
          country: "",
          contactme: false,
          affiliation: ""
        }
      }
    }
  },
  methods: {
    checkout(){
      const options = Object.assign(defaultOpt, this.options)
      options.amount = options.amount * 100
      const rzp1 = new Razorpay(options) // eslint-disable-line

      console.log(options)
      rzp1.open()
    }
  },
  head(){
    return {
      script: [
        {
          hid: "razorpay",
          src: "https://checkout.razorpay.com/v1/razorpay.js",
          defer: true,
          callback: () => {
            console.log("Razorpay loaded")
          }
        },
        {
          hid: "checkout",
          src: "https://checkout.razorpay.com/v1/checkout.js",
          defer: true,
          callback: () => {
            console.log("Checkout loaded")
          }
        }
      ]
    }
  }
}
</script>

<style>
.gift-page {
  display: flex;
  justify-content: center;
}

.wrapper {
  width: 1000px;
  display: flex;
  padding: var(--space-1) 0;
  flex-direction: column;
  justify-content: center;
}

.title {
  margin: var(--space-1) 0;
}

.form-field {
  background: white;
  padding: var(--space-0);
  margin: var(--space-0) 0;
  margin-right: var(--space-0);
  border: 1px solid var(--border-grey);
}

.form-checkbox {
  display: flex;
  align-items: center;
  margin: var(--space-1) 0;
  margin-bottom: var(--space-0);
}

.checkbox-text {
  margin-left: var(--space-0);
}

hr {
  color: var(--border-grey);
  border-top: 1px solid var(--border-grey);
}
</style>
