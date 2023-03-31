<template>
  <div>
    <div class="text px-5">
      <span class="gold">CONTACT US</span>
    </div>

    <div class="container py-5">
      <div class="card my-3">
        <div class="card-header">
          <h1 class="display-5 fw-bold lh-1 mb-3 subtitle">GET IN TOUCH</h1>
        </div>
        <div class="card-body" v-if="form.status == 0">
          <div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Your Name</label
              >
              <input type="text" class="form-control" v-model="form.name" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Your Email Address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="form.email"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                type="text"
                class="form-control"
                v-model="form.message"
                id="message"
              />
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              @click="submitContactForm"
            >
              Submit
            </button>
          </div>
        </div>

        <div class="card-body" v-if="form.status == 1">
          <div>
            <center>
              <div class="spinner-border" role="status"></div>
            </center>
          </div>
        </div>

        <div class="card-body" v-if="form.status == 2">
          <div>
            <center>
              <h1 style="overflow-y: hidden">✔️</h1>
              <h1 style="overflow-y: hidden">Thank you for your message!</h1>
              <p>We will get back to you as soon as possible.</p>
            </center>
          </div>
        </div>

        <div class="card-body" v-if="form.status == 3">
          <div>
            <center>
              <h1 style="overflow-y: hidden">❌</h1>
              <h1 style="overflow-y: hidden">
                Your message failed to send, please contact
                19kainthd@harrowschool.org.uk
              </h1>
            </center>
          </div>
        </div>
      </div>

      <div class="card my-3">
        <div class="card-header">
          <h1 class="display-5 fw-bold lh-1 mb-3 subtitle">
            FOLLOW OUR SOCIALS
          </h1>
        </div>
        <div class="card-body">
          <div class="px-4 py-1 text-center">
            <div class="py-5">
              <div class="row pt-4 mx-3 justify-content-center">
                <div class="col-lg-3">
                  <a href="https://www.instagram.com/teameuclid_22640/">
                    <img src="~/assets/instagram.svg" style="width: 5rem" />
                  </a>
                </div>

                <div class="col-lg-3">
                  <a href="https://www.linkedin.com/company/team-euclid/about/">
                    <img src="~/assets/linkedin.svg" style="width: 5rem" />
                  </a>
                </div>

                <div class="col-lg-3">
                  <a href="https://www.tiktok.com/@teameuclid_22640">
                    <img src="~/assets/tiktok.svg" style="width: 5rem" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-header {
  background-color: white;
}
.mover h1 {
  font-family: 'League Gothic', sans-serif;
  font-size: 15rem;
  color: #001a46;
}
.movercontainer {
  width: 100%;
  height: 20rem;
  overflow: hidden;
  white-space: nowrap;
}
.mover {
  position: absolute;
}

.glanceicon {
  font-size: 5rem;
}
h2 {
  overflow-y: hidden;
}
@media (max-width: 768px) {
  .subtitle {
    font-size: 4rem;
    font-family: 'League Gothic', sans-serif;
    line-height: 1.2;
    letter-spacing: 0.1rem;
    color: #001a46;
    overflow-y: hidden;
  }
  .gold {
    color: #cba33a;
    font-size: 5em; /* adjust font size as needed */
    font-family: 'League Gothic', sans-serif;
    letter-spacing: 0.1rem;
    line-height: 6rem;
  }
}

/* if on desktop media q */
@media (min-width: 768px) {
  .subtitle {
    font-size: 6rem;
    font-family: 'League Gothic', sans-serif;
    line-height: 1.2;
    letter-spacing: 0.5rem;
    color: #001a46;
    overflow-y: hidden;
  }
  .gold {
    color: #cba33a;
    font-size: 15em; /* adjust font size as needed */
    font-family: 'League Gothic', sans-serif;
    letter-spacing: 0.5rem;
    line-height: 13rem;
  }

}
.text {
  overflow-y: hidden;
}

.bluebackground {
  background-color: #001a46;
}

@keyframes rotate-gear {
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-2px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(2px, 0, 0);
  }
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        message: '',
        name: '',
        email: '',
        status: 0,
      },
    }
  },
  methods: {
    submitContactForm() {
      // use nuxt axios to send form data to a netlify function called submitContactForm
      this.form.status = 1
      this.$axios
        .$post('submitContactForm', this.form)
        .then((res) => {
          console.log(res)
          this.form.status = 2
        })
        .catch((err) => {
          console.log(err)
          this.form.status = 3
        })
    },
  },
}
</script>
