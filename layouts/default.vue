<template>
  <div class="wrapper">
    <header>
      <div class="container">
        <nav class="navbar navbar-light d-flex flex-wrap justify-content-center">
          <a
            href="/"
            class="d-flex align-items-center mb-xl-0 me-xl-auto text-decoration-none"
          >
            <img src="~/assets/logo.svg" class="logo" />
            <span class="py-3 brandnamewhite">TEAM&nbsp;</span
            ><span class="py-3 brandnamegold">EUCLID</span>
          </a>

          <div class="d-xl-block d-none">
            <ul class="nav nav-pills py-5">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link">HOME</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="about" class="nav-link">ABOUT US</NuxtLink>
              </li>
              <!-- <li class="nav-item">
                <NuxtLink to="ourrobot" class="nav-link">OUR ROBOT</NuxtLink>
              </li> -->
              <!-- <li class="nav-item">
                <a href="#" class="nav-link">OUR PORTFOLIO</a>
              </li> -->
              <li class="nav-item">
                <NuxtLink to="contact" class="nav-link">CONTACT US</NuxtLink>
              </li>
            </ul>
          </div>
        </nav>

        <nav class="navbar navbar-dark d-flex flex-wrap justify-content-center d-block d-xl-none">
            <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
             
            </button> -->

            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"  aria-controls="offcanvasNavbar"> <span class="navbar-toggler-icon"></span> </button>
          </nav>

      </div>
    </header>

    <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >

      <div class="offcanvas-header">
      <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-header">
          

          <h2 class="offcanvas-title" id="offcanvasNavbarLabel">
            <a
            href="/"
            class="d-flex align-items-center mb-xl-0 me-xl-auto text-decoration-none"
          >
            <span class="py-3 brandnameblue">TEAM&nbsp;</span
            ><span class="py-3 brandnamegold">EUCLID</span>
          </a>
          </h2>
          
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item-offcanvas" data-bs-dismiss="offcanvas">
                <NuxtLink to="/" class="nav-link" >HOME</NuxtLink>
              </li>
              <li class="nav-item-offcanvas" data-bs-dismiss="offcanvas">
                <NuxtLink to="about" class="nav-link" >ABOUT US</NuxtLink>
              </li>
              <!-- <li class="nav-item">
                <NuxtLink to="ourrobot" class="nav-link">OUR ROBOT</NuxtLink>
              </li> -->
              <!-- <li class="nav-item">
                <a href="#" class="nav-link">OUR PORTFOLIO</a>
              </li> -->
              <li class="nav-item-offcanvas" data-bs-dismiss="offcanvas">
                <NuxtLink to="contact" class="nav-link">CONTACT US</NuxtLink>
              </li>
          </ul>
        </div>
      </div>


    <div class="content">
      <Nuxt />
    </div>

    <footer
      class="d-flex flex-wrap justify-content-center align-items-center py-3 mt-4 border-top"
    >
      <center><img src="~/assets/secondarylogo.svg" style="width:7rem; height:7rem;"></center>
    </footer>
  </div>
</template>

<style>
.nav-item-offcanvas > .nav-link {
  font-size:3rem;
  color: #001a46 !important;
}

.nav-item-offcanvas .nuxt-link-exact-active {
  font-size:3rem;
  color: #cba33a !important;
}

* {
  font-family: 'Manrope', sans-serif;
  overflow-x: hidden;
}

.nav-item {
  font-size: 2rem;
  border-radius: 0.375rem;
  margin-left: 0.5rem;
  letter-spacing: 0.1rem;
}
.nav-item .nuxt-link-exact-active {
  background-color: #eff0f2 !important;
  color: #001a46 !important;
}

.nav-item:hover {
  background-color: #eff0f2 !important;
  font-family: 'League Gothic', sans-serif;
}

.nav-link:hover {
  color: #cba33a !important;
}

.nav-link {
  color: #eff0f2;
  font-family: 'League Gothic', sans-serif;
}

.brandnamewhite:hover {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
}
.brandnamegold:hover {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
}
.logo:hover {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
}
.brandnameblue {
  color: #001a46;
  font-family: 'League Gothic', sans-serif;
  font-size: 4rem;
  letter-spacing: 0.1rem;
}
.brandnamewhite {
  color: #fff;
  font-family: 'League Gothic', sans-serif;
  font-size: 4rem;
  letter-spacing: 0.1rem;
}
.brandnamegold {
  color: #cba33a;
  font-family: 'League Gothic', sans-serif;
  font-size: 4rem;
  letter-spacing: 0.1rem;
}

.logo {
  width: 4rem;
  margin-right: 1rem;
  height: auto;
}
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #eff0f2;
}

nav {
  max-width: 1240px;
}

.container {
  max-width: 1240px;
}

header {
  background-color: #001a46;
}

footer {
  background-color: #001a46;
}

.content {
  /* margin-top: 160px; /* Change the value to the height of the navbar */
  flex-grow: 1;
}

.footer {
  margin-top: auto;
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

