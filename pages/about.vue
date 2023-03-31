<template>
  <div>
    <div class="text px-5">
      <span class="gold">ABOUT US</span>
    </div>

    <h1 class="display-5 fw-bold lh-1 mb-3 subtitle px-5">MEET THE TEAM</h1>

    <div class="px-5">
      <div class="row row-cols-2 row-cols-lg-4 align-items-stretch g-4 py-5">
        <div
          class="col"
          v-for="person in people"
          :key="person.name"
          @click="openModal(person.name)"
        >
          <div
            class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-sm personcard"
            v-bind:style="
              'background: url(' +
              require(`~/assets/people/${person.image}`) +
              '); '
            "
          >
            <div
              class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="container col-xxl-8 px-4 pt-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-lg-6 mx-auto">
          <h1 class="display-5 fw-bold lh-1 mb-3 subtitle">HARROW SCHOOL</h1>
          <p class="lead">
            Harrow School is a public school in Harrow on the Hill, Greater
            London, England. The school was founded in 1572 by John Lyon, a
            local landowner and farmer, under a Royal Charter of Queen Elizabeth
            I. <br />
            <br />
            The school has an enrolment of about 820 boys, all of whom board
            full-time, in twelve boarding houses.
          </p>
        </div>
        <div class="col-10 col-sm-8 col-lg-6 mx-auto">
          <img
            src="~/assets/harrowschool.jpg"
            class="d-block mx-lg-auto rounded img-fluid"
            width="750"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div class="bluebackground text-white px-4 py-5 text-center">
      <div class="py-5">
        <h1 class="display-5 text-white subtitle">DEPARTMENTS</h1>

        <div class="row pt-4 mx-3">
          <div class="col-lg-6 mx-auto">
            <span class="material-icons glanceicon">construction</span>

            <h2>Design Technology and Engineering</h2>
          </div>

          <!-- /.col-lg-4 -->
          <div class="col-lg-6 mx-auto">
            <span class="material-icons glanceicon">straighten </span>

            <h2>Physics</h2>
          </div>
          <!-- /.col-lg-4 -->
        </div>
      </div>
    </div>
    .

    <div class="container col-xxl-8 px-4 pt-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6 mx-auto">
          <img
            src="https://www.reds10.com/wp-content/uploads/2015/12/Harrow-School-Design-and-Technology-Suite.jpg"
            class="d-block mx-lg-auto rounded img-fluid"
            width="750"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6 mx-auto">
          <h1 class="display-5 fw-bold lh-1 mb-3 subtitle">THE WORKSHOP</h1>
          <p class="lead">
            The Design Technology and Engineering workshop has everything we
            need to make a great robot. We meet there every Thursday.
          </p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="exampleModalLabel">
              {{ toUpperCase(selectedperson.name) }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div
              class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-sm personcard"
              v-bind:style="
                'background: url(' +
                require(`~/assets/people/${selectedperson.image}`) +
                '); '
              "
            >
              <div
                class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
              ></div>
            </div>

            <span class="role">{{ toUpperCase(selectedperson.role) }}</span>

            <p>
              {{ selectedperson.joining_reasons }}
            </p>

            <p>Interests: {{ selectedperson.interests.toString() }}</p>

            <p>Fun Fact: {{ selectedperson.fun_fact }}</p>


            <div class="row justify-content-start">
              <div class="col-2" v-for="link in selectedperson.links" :key="link.url">
                <a :href="link.url" target="_blank">
                  <img style="width:3rem;height:3rem" :src="require(`~/assets/${link.image}`)">
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-close {
  font-size: 3rem;
}
.modal-title {
  font-family: 'League Gothic', sans-serif;
  font-size: 6rem;
  color: #001a46;
}
.personcard {
  height: 15rem !important;
  background-position: center !important;
  background-size: cover !important;
  cursor: pointer;
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

.role {
  color: #cba33a;
  font-size: 3em; /* adjust font size as needed */
  font-family: 'League Gothic', sans-serif;
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
import { Modal } from 'bootstrap'

export default {
  methods: {
    toUpperCase(string) {
      return string.toUpperCase()
    },
    openModal(name) {
      this.selectedperson = this.people.find((person) => person.name == name)
      var myModal = new Modal(document.getElementById('exampleModal'), {
        keyboard: false,
      })
      myModal.show()
    },
  },
  data() {
    return {
      selectedperson: {
        name: 'Nikita',
        role: 'Project Manager / Marketing Team Lead',
        school_year: 'Year 12',
        nationality: 'Ukrainian',
        robotics_experience:
          'Team member (2018-2022) and captain (2021-2022) of the first Ukrainian FRC team (7851); volunteer of Ukrainian FTC events',
        joining_reasons:
          'Nikita is the most experienced and one of the most passionate participants, so fleeing the war with a piece of his life by creating a new FIRST team. He believes that one day he will return to peaceful and prosperous Ukraine, and he will be able to help the development of FIRST programs in his country.',
        interests: [
          'Robotics',
          'Debating',
          'Graphic Design',
          'Social Sciences',
        ],
        fun_fact: 'He hates chocolate ice cream',
        image: 'nikita.jpg',
      },
      people: [
        {
          name: 'Nikita',
          role: 'Project Manager / Marketing Team Lead',
          school_year: 'Year 12',
          nationality: 'Ukrainian',
          robotics_experience:
            'Team member (2018-2022) and captain (2021-2022) of the first Ukrainian FRC team (7851); volunteer of Ukrainian FTC events',
          joining_reasons:
            'Nikita is the most experienced and one of the most passionate participants, so fleeing the war with a piece of his life by creating a new FIRST team. He believes that one day he will return to peaceful and prosperous Ukraine, and he will be able to help the development of FIRST programs in his country.',
          interests: [
            'Robotics',
            'Debating',
            'Graphic Design',
            'Social Sciences',
          ],
          fun_fact: 'He hates chocolate ice cream',
          image: 'nikita.jpg',
        },
        {
          name: 'Luca',
          role: 'Engineering team lead',
          school_year: 'Year 11',
          nationality: 'British',
          robotics_experience: '',
          joining_reasons:
            "Robotics is the career field I'm most interested in, and doing this club will allow me to expand upon my experience while gaining practical experience and more experience in leading a team.",
          interests: ['Robotics', 'AeroAstro', 'Nuclear'],
          fun_fact: 'Has built a Nuclear Fusion Reactor',
          image: 'luca.jpg',
          links: [
            { 
              image: 'linkedin.svg',
              url: 'https://www.linkedin.com/in/luca-sa/',
            },
          ]
        },

        {
          name: 'Dylan',
          role: 'Programming Lead',
          school_year: 'Year 12',
          nationality: 'British',
          robotics_experience:
            'Dylan has helped host FLL Jr at previous school, he captained team to FLL UK national finals 2018',
          joining_reasons:
            'Dylan wished to further his programming skills in Java. He also wanted to gain expertise with mentoring and managing a subteam.',
          interests: ['Python', 'Greenpower Electric Car', 'Microelectronics'],
          fun_fact:
            'Dylan is well known for bad puns in his maths and physics classes.',
          image: 'dylan.jpg',
          links: [
            { 
              image: 'website.svg',
              url: 'https://dylankainth.com/',
            },
            { 
              image: 'github.svg',
              url: 'https://github.com/dylankainth',
            }
          ]
        },

        {
          name: 'Naryan',
          role: 'Notebook Manager',
          school_year: 'Year 11',
          nationality: 'Indian',
          robotics_experience: '',
          joining_reasons:
            'Naryan is very interested in robotics more specifically, the design and engineering behind them',
          interests: [
            'Design',
            'Biology',
            'Medicine',
            'Business',
            'Robotics',
            'Astronomy',
            'Cars',
          ],
          fun_fact: 'Naryan races (and crashes) go-karts',
          image: 'naryan.jpg',
        },

        {
          name: 'Hayden',
          role: 'Programmer',
          school_year: 'Year 12',
          nationality: 'Hong Kong',
          robotics_experience: '',
          joining_reasons:
            'He wants to gain more experience with coding and do robotics in an competitive environment.',
          interests: ['Science Fiction', 'Contact Bridge', 'Programming'],
          fun_fact: 'Hayden comes from Mars.',
          image: 'hayden.jpg',
          links: [
            { 
              image: 'github.svg',
              url: 'https://github.com/hayden1126',
            },
          ]
        },

        {
          name: 'Ulrico',
          role: 'Engineer and Part Manufacturer',
          school_year: 'Year 12',
          nationality: '',
          robotics_experience: '',
          joining_reasons:
            'He wants to expand on his passion for engineering/robotics and believes it will help him in the future',
          interests: [
            'Off-piste Skiing',
            'Remote control toys: drones and boats',
            'Harrow football',
          ],
          fun_fact: 'He can 360 on skis',
          image: 'ulrico.jpg',
        },

        {
          name: 'Andrew',
          role: 'Awards',
          school_year: 'Year 11',
          nationality: '',
          robotics_experience: '',
          joining_reasons:
            'Andrew joined to hone his skills in problem solving and designing. He thinks FTC is a great opportunity to connect with others collaborate and manage time.',
          interests: ['Problem Solving', 'Maths', 'Programming'],
          fun_fact: "He's a foodie",
          image: 'andrew.jpg',
          links: [
            { 
              image: 'github.svg',
              url: 'https://github.com/s3yoonpark',
            },
          ]
        },

        {
          name: 'Andy',
          role: 'Programming',
          school_year: 'Year 11',
          nationality: '',
          robotics_experience: '',
          joining_reasons:
            ' Andy had never done this sort of competition before, so he wanted to try it out and gain experience. The entire premise of the competition seemed fascinating to him, and it would also help with my University CV.',
          interests: ['Reading', 'Maths', 'Programming'],
          fun_fact: 'He once had a goldfish and it suffocated to death',
          image: 'andy.jpg',
        },

        {
          name: 'Alex',
          role: 'Programming',
          school_year: 'Year 12',
          nationality: 'Chinese',
          robotics_experience: '',
          joining_reasons:
            'Alex wished to learn more about the field of robotics',
          interests: ['AI', 'Maths', 'Programming'],
          fun_fact:
            'He likes cookies, and is obsessed with fourier transforms.',
          image: 'alexy.jpg',
          links: [
            { 
              image: 'github.svg',
              url: 'https://github.com/ywq0321',
            },
          ]
          
        },

        {
          name: 'Cary',
          role: 'Programming',
          school_year: 'Year 11',
          nationality: '',
          robotics_experience: '',
          joining_reasons:
            'Cary really wanted to improve his java programming skills he thought that joining FTC was also a good opportunity to work with other talented people',
          interests: ['Programming'],
          fun_fact:
            "His right hand's ring finger and pinkie finger are independent",
          image: 'cary.jpg',
        },

        {
          name: 'Julian',
          role: 'SMM Manager',
          school_year: 'Year 12',
          nationality: 'Bulgaria',
          robotics_experience: '',
          joining_reasons:
            'Julian believed that FTC is good for university applications, and is interested in studying in the STEM field in the future',
          interests: [
            'Programming',
            'Mathematics',
            'Videogames',
            'Chess',
            'Traveling',
          ],
          fun_fact: 'He won a person of the year award in Bulgaria',
          image: 'julian.jpg',
        },

        {
          name: 'Victor',
          role: 'Programming',
          school_year: 'Year 10',
          nationality: '',
          robotics_experience: '',
          joining_reasons:
            'Victor wished to expand his skillset and knowledge as well as create new friends and work well as a team to achieve something great',
          interests: [
            'Chess',
            'Football',
            'Tennis',
            'Programming',
            'Videogames',
          ],
          fun_fact: 'He cannot swim.',
          image: 'victorx.jpg',
        },

        {
          name: 'Maahir',
          role: 'Finance Manager',
          school_year: 'Year 12',
          nationality: 'Indian',
          robotics_experience: '',
          joining_reasons:
            'Maahir wished to expand his knowledge of finances and apply them to a real world experience',
          interests: ['Chess', 'Cricket', 'Geography', 'Videogames'],
          fun_fact: 'He has a chess.com rating of 1100',
          image: 'maahir.jpg',
        },

        {
          name: 'Richard',
          role: 'Awards',
          school_year: 'Year 10',
          nationality: 'Chinese',
          robotics_experience: '',
          joining_reasons:
            'Richard thought it would be a fun experience to be in a team with like-minded individuals and gain experience in working on major group projects with other people.',
          interests: ['Maths', 'Go', 'Table Tennis', 'Football'],
          fun_fact: '*beep* *boop* Richard is a robot',
          image: 'richard.jpg',
        },

        {
          name: 'Johnathan',
          role: 'Awards',
          school_year: 'Year 10',
          nationality: 'Korean',
          robotics_experience: '',
          joining_reasons:
            'Jonathan thought it would be a fun experience and thought that it would help him get real experience in things to do with engineering.',
          interests: ['Physics', 'Go'],
          fun_fact: 'Jonathan is writing this segment at 3am in the morning.',
          image: 'johnathan.jpg',
        },
      ],
    }
  },
}
</script>
