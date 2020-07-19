<template>
  <div class="page">
    <div class="page-wrapper">
      <div class="landing-banner">
        <h1>Frequently Asked Questions</h1>
      </div>
      <section class="main-content">
        <div class="faq-section">
          <h2 class="faq-question">
            How to request help/make a donation?
          </h2>
          <div class="faq-answer">
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
        </div>
        <div class="faq-section">
          <h2 class="faq-question">
            Is my contribution tax-deductible?
          </h2>
          <div class="faq-answer">
            <p>
              Yes! You may be able to claim a charitable deduction for your gift.
            </p>
          </div>
        </div>
        <div class="faq-section">
          <h2 class="faq-question">
            How will my gift be used?
          </h2>
          <div class="faq-answer">
            <p>
              Your gift will support emergency grants for students to assist with technology needs related to distance learning, basic needs, immediate financial needs and against other hardship faced during crisis. Your gift will be administered through the Student Emergency Fund Committee after a thorough review in accordance with institute approved methodology.
            </p>
          </div>
        </div>
        <div class="faq-section">
          <h2 class="faq-question">
            How do I pledge my contribution on a regular basis and know about fundraising events?
          </h2>
          <div class="faq-answer">
            <p>
              Please write to <a href="mailto:sef@daiict.ac.in">sef@daiict.ac.in</a>, we will guide you through and you will be added to the recurring gift subscriber’s list which will send out periodic reminders and notify you regarding fundraising events.
            </p>
          </div>
        </div>
        <div class="faq-section">
          <h2 class="faq-question">
            I am having trouble making a gift online. Who can I contact for additional assistance?
          </h2>
          <div class="faq-answer">
            <p>
              Please contact <a href="mailto:sef@daiict.ac.in">sef@daiict.ac.in</a> for troubleshooting issues and questions regarding making a gift online.
            </p>
          </div>
        </div>
        <div class="faq-section">
          <h2 class="faq-question">
            What is the awarding criteria?
          </h2>
          <div class="faq-answer">
            <p>
              In general these things are kept in mind before approving a request for help
              <ul>
                <li>The totality of the student’s hardship</li>
                <li>Other resources or support that the student may or may not have available to them</li>
                <li>The specific and immediate impacts the emergency may be having on the student’s living and academic circumstances; and</li>
                <li>Other information provided by third parties, such as advocates or advisors, that may help to illuminate and clarify the student’s situation in developing appropriate rationale for decisions.</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="faq-section">
          <h2 class="faq-question">
            Is there a maximum amount that can be awarded? If so, how much is it?
          </h2>
          <div class="faq-answer">
            <p>
              Yes, there is a maximum amount that can be awarded to each applicant. This is decided by the Student Emergency Fund Committee from time-to-time but this knowledge should not worry the applicant and they should request for whatever fund they actually need.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  head(){
    return {
      title: "FAQs | Student Emergency Fund"
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

.main-content {
  background: white;
  padding: var(--space-4);
}

.faq-section {
  margin-bottom: var(--space-3);
}

.faq-answer {
  margin-top: var(--space-1);
}

.action-buttons {
  display: flex;
}

.btn-wrapper {
  margin-right: var(--space-0);
}
</style>
