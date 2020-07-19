<template>
  <div class="page">
    <div class="page-wrapper">
      <div class="landing-banner">
        <h1 class="banner-title">
          STUDENT EMERGENCY FUND
        </h1>
        <h2 class="banner-subtitle">
          Your support provides critical help to students in need
        </h2>
        <div class="action-buttons">
          <div class="btn-wrapper">
            <router-link to="/gift">
              <button class="sef-btn">
                MAKE A GIFT
              </button>
            </router-link>
          </div>
          <div class="btn-wrapper">
            <router-link to="/request">
              <button class="sef-btn">
                REQUEST HELP
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <section class="information">
        <div class="information-wrapper">
          <h1>Help in Critical Time</h1>
          <p>
            During this unprecedented time of global uncertainty alumni and friends are asking how to help DA-IICT students who are struggling to cover sudden costs related to access to technology for online learning and other emergency expenses.
          </p>
          <p>
            We are deeply grateful for the outpouring of concern for our students
            and your desire to help them in this global crisis. You can make
            an immediate difference today, for our students community with a
            gift of any amount. Thank you now and always for all that you are
            doing to help our DA-IICT students.
          </p>
          <button class="sef-btn">
            MAKE A GIFT
          </button>
        </div>
        <div class="information-wrapper">
          <h1>Areas Student Emergency Fund will support*</h1>
          <p>
            Students who need support and assistance can submit a request.
          </p>
          <h3>Critical Resources</h3>
          <p>
            The move to the virtual form of instruction deepens the socio-economic
            divide as many students rely on campus resources to access technology
            and course materials. Helping students acquire basic e-infrastructure
            facilities (broadband internet, computer) is necessary to have
            access to their education.
          </p>
          <h3>Assistance in tuition</h3>
          <p>
            Uncertainty in the job market affects students' families and leaves
            them questioning whether they can afford to pursue an education.
            This financial help gives them the opportunity to prioritize their
            future and pursue an education.
          </p>
          <h3>Basic Needs</h3>
          <p>
            Issues related to food, housing insecurity are worsened during
            times of crisis. Housing-insecure individuals can request grants from
            our student emergency fund to help fill the gaps when they need it
            most.
          </p>
          <p><small><em>* this list is not exhaustive</em></small></p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home"
}
</script>

<style scoped>
.landing-banner {
  min-height: 400px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.banner-title {
  margin: var(--space-1);
}

.banner-subtitle {
  color: var(--text-grey);
  margin: var(--space-0);
  margin-bottom: var(--space-4);
}

.action-buttons {
  display: flex;
}

.btn-wrapper {
  margin: var(--space-0);
}

.information {
  display: flex;
  padding: var(--space-4);
  background: white;
  min-height: 500px;
  align-items: center;
  box-shadow: 0px 0px 6px #e6e6e6;
  flex-direction: column;
}

.information-wrapper {
  padding: var(--space-0);
  margin-bottom: var(--space-4);
}
</style>
