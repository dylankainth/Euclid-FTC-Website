<template>
    <div>
  
      <div class="text px-5">
          <span class="gold">CONTACT US</span>
        </div>
  
      <div class="container col-xxl-8 px-4 pt-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="~/assets/DSC01785.jpg"
              class="d-block mx-lg-auto rounded img-fluid"
              width="750"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3 subtitle">WHO ARE WE?</h1>
            <p class="lead">
              <span style="color: #cba33a"><b>We're Team Euclid.</b></span> We are
              an FTC robotics team made up of a group of passionate students who
              are dedicated to exploring and mastering the world of robotics.
              <br /><br />
              Our team is focused on designing, building, and programming robots
              to compete in the First Tech Challenge Competiton. <br /><br />
              We strive to develop innovative solutions to real-world problems and
              learn valuable skills in teamwork, problem-solving, and engineering.
              <br />
            </p>
          </div>
        </div>
      </div>
  
  
      <div class="bluebackground text-white px-4 py-5 text-center">
        <div class="py-5">
          <h1 class="display-5 text-white subtitle">AT A GLANCE</h1>
  
          <div class="row pt-4 mx-3">
            <div class="col-lg-3">
              <span class="material-icons glanceicon">groups</span>
  
              <h2>19 Members</h2>
            </div>
            <div class="col-lg-3">
              <span class="material-icons glanceicon">public</span>
  
              <h2>from 13 Countries</h2>
            </div>
            <div class="col-lg-3">
              <span class="material-icons glanceicon"
                >precision_manufacturing</span
              >
  
              <h2>1 robot</h2>
            </div>
            <!-- /.col-lg-4 -->
            <div class="col-lg-3">
              <span class="material-icons glanceicon">school</span>
  
              <h2>2 Mentors</h2>
            </div>
            <!-- /.col-lg-4 -->
          </div>
        </div>
      </div>
  
      <div class="container col-xxl-8 px-4 pt-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3 subtitle">WHAT IS FTC?</h1>
            <p class="lead">
              
              FTC stands for FIRST Tech Challenge, which is a robotics competition for middle and high school students. <br> <br> In this competition, teams of students design, build, and program robots to compete in various challenges that test their technical skills and creativity. FTC aims to inspire students to pursue careers in science, technology, engineering, and math (STEM) fields by providing them with hands-on experience in robotics and problem-solving. <br> <br>The program also emphasizes the importance of teamwork, collaboration, and gracious professionalism, which are essential skills for success in any field.
            </p>
          </div>
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="~/assets/20230325_181520.jpg"
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
          <h1 class="display-5 text-white subtitle">OUR GOAL</h1>
          
          <h2>
          To inspire future generations to pursue their interests in STEM and make a positive impact on the world.</h2>
  
        </div>
      </div>
  
      <div class="container col-xxl-8 px-4 pt-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="~/assets/20230325_185827.jpg"
              class="d-block mx-lg-auto rounded img-fluid"
              width="750"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3 subtitle">OUR SUCCESSES</h1>
            <p class="lead">
              Our team started in late 2022. We recently participated in the South East UK FTC Regional tournament, where we placed 4th in the qualifying competition. We then formed an alliance, which won the elimination match series. <br><br> We are currently preparing for the UK National Championship in June at Cambridge University, where we hope to place in the top 10 teams in the UK. 
            </p>
          </div>
        </div>
      </div>
  
  
    </div>
  </template>
  
  <style>
  .mover h1 {
    font-family: "League Gothic", sans-serif;
    font-size: 15rem;
    color: #001a46;
  }
  .movercontainer {
    width: 100%;
    height: 20rem;
    overflow: hidden;
    white-space:nowrap
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
    mounted() {
      var movercontainer = document.getElementById('movercontainer')
  
      window.addEventListener('scroll', function () {
        // if the scroll is between 700 and 1600, relate that to a horizontal position
        var scroll = window.scrollY
  
        if (scroll > 600 && scroll < 1500) {
          var scrollPercent = (scroll - 700) / 900
  
          // get window width
  
          var scrollPosition = scrollPercent * window.innerWidth
          document.getElementById('car').style.right = scrollPosition + 'px'
        }
        
  
      })
    },
  }
  </script>
  
  