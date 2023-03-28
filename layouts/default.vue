<template>
  <div class="wrapper">
    <header>
      <div class="container">
        <nav class="d-flex flex-wrap justify-content-center">
          <a
            href=""
            class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-decoration-none"
          >
            <img src="~/assets/logo.svg" class="logo"/>
            <span class="py-3 brandnamewhite">TEAM&nbsp;</span><span class="py-3 brandnamegold">EUCLID</span>
          </a>

          <div class="d-lg-block d-none">
            <ul class="nav nav-pills py-5">
              <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">HOME</a>
              </li>
              <li class="nav-item"><a href="#" class="nav-link">ABOUT US</a></li>
              <li class="nav-item"><a href="#" class="nav-link">OUR ROBOT</a></li>
              <li class="nav-item"><a href="#" class="nav-link">OUR PORTFOLIO</a></li>
              <li class="nav-item"><a href="#" class="nav-link">CONTACT US</a></li>
            </ul>
          </div>
          
          <br>
          <a class="btn btn-primary d-block d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasNavbar" role="button" aria-controls="offcanvasNavbar">
            offcanvas navbar **
          </a>


        </nav>
      </div>
    </header>

    <div class="content">
      <Nuxt />
    </div>
    <footer class="footer">
      <UtilsFooter />
    </footer>
  </div>
</template>

<style>
* {
  font-family: "Manrope", sans-serif;
}
.nav-item {
  font-size: 2rem;
  letter-spacing: 0.1rem;
}
.nav-link.active {
  background-color: #F8F8FF !important;
  color: #001a46 !important;
}
.nav-link {
  color: #F8F8FF !important;
  font-family: "League Gothic", sans-serif;
}

.brandnamewhite:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
}
.brandnamegold:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
}


.brandnamewhite {
  color: #fff;
  font-family: "League Gothic", sans-serif;
  font-size: 4rem;
  letter-spacing: 0.1rem;
}
.brandnamegold {
  color: #CBA33A;
  font-family: "League Gothic", sans-serif;
  font-size: 4rem;
  letter-spacing: 0.1rem;
}

.logo {
  width: 4rem;
  margin-right:1rem;
  height: auto;
}
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color:#F8F8FF;
}

nav {
  max-width: 1240px;
}

header {
  background-color: #001a46;
}

.content {
  margin-top: 60px; /* Change the value to the height of the navbar */
  flex-grow: 1;
}

.footer {
  margin-top: auto;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  
  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(2px, 0, 0);
}}

</style>
