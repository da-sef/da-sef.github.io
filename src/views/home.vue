<template>
  <div class="home">
    <div class="landing-banner">
      <h1 class="banner-title">STUDENT EMERGENCY FUND</h1>

      <h2 class="banner-subtitle">Your support provides critical help to students in need</h2>
      <div>
        <Button text="MAKE A GIFT" />
        <Button text="REQUEST HELP" />
      </div>
    </div>
    <div class="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_FChrdBNKQtD9hm/view" data-text="Donate" data-color="#528FF0" data-size="large">
    </div>
  </div>
</template>

<script>
import Button from "@/components/sef-btn.vue"

export default {
  name: 'Home',
  components: {
    Button
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}

.landing-banner {
  height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.banner-title {
  margin: var(--space-1);
}

.banner-subtitle {
  color: var(--text-grey);
  margin: var(--space-0);
  margin-bottom: var(--space-4);
}
</style>
