<template>
  <div class="wrapper">
    <header>
      <div class="container">
        <nav class="d-flex flex-wrap justify-content-center">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-xl-0 me-xl-auto text-decoration-none"
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
              <li class="nav-item">
                <NuxtLink to="ourrobot" class="nav-link">OUR ROBOT</NuxtLink>
              </li>
              <!-- <li class="nav-item">
                <a href="#" class="nav-link">OUR PORTFOLIO</a>
              </li> -->
              <li class="nav-item">
                <NuxtLink to="contact" class="nav-link">CONTACT US</NuxtLink>
              </li>
            </ul>
          </div>

          <br />
          <a
            class="btn btn-primary d-block d-xl-none"
            data-bs-toggle="offcanvas"
            href="#offcanvasNavbar"
            role="button"
            aria-controls="offcanvasNavbar"
          >
            offcanvas navbar **
          </a>
        </nav>
      </div>
    </header>

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
.nuxt-link-exact-active {
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
