<template>
  <div class="page">
    <div class="page-wrapper p-5">
      <h2 class="title">
        Make a Gift
      </h2>
      <h3>
        Use
        <a href="https://pages.razorpay.com/pl_FRSXhOTnxzHOwt/view">
          Razorpay
        </a>
        to make a donation.
      </h3>
    </div>
  </div>
</template>

<script>
import axios from "axios"

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
  name: "Gift",
  data(){
    return {
      razorpayLoaded: false,
      checkoutpayLoaded: false,
      btn_pressed: false,
      errors: [],
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
      const errors = []

      options.amount = options.amount * 100

      this.btn_prevent = true
      axios.get(`https://2tsmu1yjs1.execute-api.ap-south-1.amazonaws.com/generate-orderid?amount=${options.amount}`)
        .then((resp) => {
          const data = resp.data

          options.order_id = data.orderid

          const rzp1 = new Razorpay(options) // eslint-disable-line

          console.log(options)
          rzp1.open()
        })
        .catch((err) => {
          console.log(err)
          errors.push("Error occured, try again submitting.")
          this.btn_prevent = false
        })
    }
  },
  head: {
    title: "Make a Gift | Student Emergency Fund",
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
    ],
    meta: [
      {
        hid: "redirect",
        "http-equiv": "refresh",
        content: "0;URL='https://pages.razorpay.com/pl_FRSXhOTnxzHOwt/view'"
      }
    ]
  }
}
</script>

<style scoped>
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

.errors {
  color: crimson;
  margin-bottom: 15px;
}
</style>
