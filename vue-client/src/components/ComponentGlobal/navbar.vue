<template>
  <header id="header" :class="navVar === 0 ? 'header3': 'inner-header'">
    <div class="search">
      <form id="cp-top-search">
        <input name="search" type="text" placeholder="Enter your search" required>
        <button type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
    <div class="cp-top-bar">
      <div class="container">
        <div class="row">
          <div :class="navVar === 0 ? 'col-sm-4 col-xs-12': 'col-md-6'">
            <div class="left-box">
              <ul>
                <li>PHOTOGRAPHY</li>
                <li>CINEMATOGRAPHY</li>
              </ul>
            </div>
          </div>
          <div v-if="navVar === 0" class="col-md-4 col-sm-4 col-xs-12">
            <strong class="cp-logo-style-1"><a href="index.html"><img class="logo-main" src="../../assets/images/logo-main.png" alt="img"></a></strong> 
          </div>
          <div :class="navVar === 0 ? 'col-md-3 col-sm-4 col-xs-12': 'col-md-6'">
            <div class="right-box">
              <div class="cp-header-search-box">
                <div class="burger">
                  <i class="fa fa-search"></i>
                </div>
              </div>
              <ul class="cp-top-bar-social">
                <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                <li><a href="#"><i class="fa fa-envelope"></i></a></li>
                <li><a href="#"><i class="fa fa-rss"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cp-navigation-section">
      <nav class="navbar navbar-inverse">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
            <strong v-if="navVar === 1" class="cp-logo-style-2"><a href="index.html"><img class="logo-main" src="../../assets/images/logo-main-black.png" alt="img"></a></strong>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul id="nav" class="navbar-nav">
				      <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="#">Our products</a>
                <ul>
                  <li><a href="/showroom">Showroom</a></li>
                  <li><a href="/pictures">Pictures</a></li>
                  <li><a href="/videos">Videos</a></li>
                  <li><a href="/flycam">Flycam</a></li>
                </ul>
              </li>
              <li><a href="#">Pricing</a>
              <ul>
                <li><a href="/price?title=Combo&type=2">Combo Price</a></li>
                <li><a href="/price?title=Albums&type=0">Albums Price</a></li>
                <li><a href="/price?title=Videos&type=1">Videos Price</a></li>
              </ul>
              </li>
              <li><a href="">Services</a>
                <ul>
                  <li><a href="/offer">Offer</a></li>
                  <li><a href="/costume">Costumes</a></li>
                  <li><a href="/concept">Concept</a></li>
                  <li><a href="/posing">Posing</a></li>
                  <li><a href="/ask">Ask & Answer</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Get Albums</a>
              </li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import * as types from '../../store/types'
  import {fbLogout} from '../../helper/authFacebook.js'

  export default{
    props: ['navVar'],
    methods: {
      ...mapActions({
        setConnected: types.SET_CONNECTION,
        setCurrentUser: types.SET_CURRENT_USER,
        logoutEmail: types.LOG_OUT
      }),
      logout () {
        const provider = localStorage.getItem('PROVIDER')
        localStorage.clear()
        if (provider === 'fb') {
          fbLogout()
          .then(response => {
            this.setConnected({status: false, provider: ''})
            this.setCurrentUser(null)
          })
        } else if (provider === 'email') {
          this.logoutEmail()
        }
      }
    },
    computed: {
      ...mapGetters({
        currentUser: types.CURRENT_USER,
        connected: types.CONNECTED
      })
    }
  }
</script>
<style scoped>
.logo-main {
  width: 300px;
  margin: 0 auto;
}
</style>
