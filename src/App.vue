<template>
  <div id="app">
    <div id="nav" v-if="$route.name != 'login'" :class="{'fixed':$root.fixedNav, 'hidden': $root.hideNav}" >
      <a href="javascript:history.go(-1)" class="backlink"> <img class="navicon" src="@/assets/icons/white_back.svg"/></a>
      <div class="navright">
        <!--<router-link to="/" v-if="$route.name != 'register' && $route.name != 'lookingfor' && $route.name != 'user'"><img src="@/assets/icons/white_filter.svg" class="navicon"/></router-link>-->
      <!--  <router-link to="" @click.native="logout"><img src="@/assets/icons/white_settings.svg" class="navicon" /></router-link>-->
      </div>
    </div>
    <router-view/>
  </div>
</template>


<script>

import cookies from "@/cookies.js";

export default {
  name: "app",
  methods: {
      logout: function(){
        cookies.deleteCookie("email");
        cookies.deleteCookie("name");
        cookies.deleteCookie("lastname");
        this.$router.push("/");
      }
  }
};
</script>

<!-- Globaler import -->
<style src="@/assets/css/foundation.css"></style>
<style src="@/assets/css/style.css"></style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway');
body{
  background-color:#323232;
  font-size: 14px;
}
body::-webkit-scrollbar{
  display:none;
}
#app {
  font-family: 'Manrope', sans-serif;
  letter-spacing: 0.08rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
#nav {
  padding: 15px;
  height: 71px;
  bottom: 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  &.fixed{
    position:fixed;
    width:100%;
    top: 0;
    z-index:9011;
    
  }
  &.hidden{
    display:none;
  }
}


.backlink{
  float: left;
  margin-top: 8px;
}

.navright{
  float:right;
  margin-top: 8px;
  a{
    margin:10px;
  }
}
.navicon{
    width: 25px;
    height:25px;
}

.submitbtn{
  //width:70%;
  flex: 1 1 auto;
  margin: 0 auto;
  max-width:90%;
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.6vw; 
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  cursor:pointer;
  letter-spacing:1.2px;
  width: 200px;
  min-width: 200px;
/* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
  border:none;
  border-radius: 30px;
  background-color: #00BBBE;
  /*background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);*/
  //background-image: linear-gradient(to right, #00BBBE 0%, #00BBBE 51%, #00BBBE 100%);

  &:hover{
    background-position: right center; /* change the direction of the change here */
    background-color: #36d7e0;
  }
}

.warumnidfullbra{
  width: 100%;
}

.paddingGrid{
  padding-left:10px;
  padding-right:10px;
}

.fake_nav{
    top: 18px;
    left: 15px;
    position: fixed;
}
</style>


