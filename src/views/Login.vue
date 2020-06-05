<template>
  <div class="register">
    <div class="fake_nav" v-if="showFakeNav"> <img @click="closeLoginForm" class="navicon" src="@/assets/icons/white_back.svg"/></div>
     
    <div class="grid-container full" v-if="!showLoginForm">
          <div class="grid-x">
            <div class="cell small-12">
            <div class="animatedLogo">
                <img class="logo" alt="SlangMap logo" src="../assets/slangmap-logo.svg">
            </div>
            </div>
          </div>

          <div class="grid-x">
           <div class="cell small-12">
             <div class="centered_btn_container">
              <div class="submitbtn"  @click="showLogin">Sign in</div>
             </div>
          </div>
        </div>
    <div class="register_wrapper">
      <div>Don't have an account?  
        <div class="clickable"> <router-link to="register" class="register">Sign up <b>here</b>.</router-link></div>
      </div>
    </div>
    <div class="register_wrapper">
     <!-- <p>Want to look around?  <router-link to="onboarding" class="onboaording">Checkout SlangMap.</router-link></p>-->
      <div class="clickable"><br/> <a class="register" v-on:click="addNewDummyUser">I want to take a look first.</a></div>
  </div>
  
  </div>
  <div class="grid-container full" v-if="showLoginForm">
      <div class="grid-x">
            <div class="cell small-12">
              <div class="symbollogo">
                  <img class="logo" id="logo_symbol" alt="SlangMap logo" src="../assets/slangmap-logo-symbol.svg">
              </div>
              <div class="slogan">
                discover great places. <br/>
                learn new things.
              </div>
            </div>
          </div>
      <form
        id="login"
        @submit.prevent="checkForm"
        novalidate="true"
        
      >
        <p v-if="seen">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>

        <p>
          <input id="email" v-model="email" type="email" name="email" placeholder="Email" >
        </p>

        <p>
          <input id="password" v-model="password" type="password" name="password" placeholder="Password" >
        </p>

        <div class="fp-wrapper">
          <div class="passive_link" v-on:click="changeShowNotice">Forgot your password?</div>
        </div>
  
          <p>
          <input class="submitbtn" type="submit" value="Sign in">
          </p>
      </form>  
  </div>
  <div class="notice" v-bind:class="{ active: showNotice }"><div class="attention">This function is not implemented in this prototype yet.</div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import cookies from "@/cookies.js";

export default {
  name: "login",
  components: {
  },
   data:function (){
      return {
        errors: [],
        seen: false,
        email: "",
        password: "",
        cUserUserName : "",
        cUserName : "",
        cUserEmail : "",
        cseenOnboarding: false,
        showLoginForm :false,
        showNotice: false,
        showFakeNav: false
      }

  },
  mounted: function(){
    cookies.deleteCookie("username");
    cookies.deleteCookie("seenOnboarding");
    cookies.deleteCookie("email");
    this.cUserUserName = cookies.getCookie("username");
    this.cUserName = cookies.getCookie("name");
    this.cUserEmail = cookies.getCookie("email");
    this.cseenOnboarding = cookies.getCookie("seenOnboarding");
    console.log("username: "+ this.cUserUserName);
    console.log(this.cseenOnboarding);
    if(this.cUserEmail != ''){
      //redirect user which is logged in.
      if(this.cseenOnboarding == "true"){
        this.$router.push("/map");
      }else{
        this.$router.push("/onboarding")
      }
    }
    /*if(this.cUserUserName != ''){
      //redirct user which has already continued without loging in.
      if(this.cseenOnboarding == true){
        this.$router.push("/lookigfor");
      }else{
        this.$router.push("/Onboarding")
      }
    }*/
  },
  methods: {
    showLogin: function(){
      this.showLoginForm = true;
      this.showFakeNav = true;
    },
    closeLoginForm: function(){
      this.showLoginForm = false;
      this.showFakeNav = false;
    },
    login: function(){
          window.contentfulClient.getEntries({
          'content_type': 'user',
          'fields.email': this.email
        })
        .then((entries)=>{
          entries.items.forEach((entry)=>{
          console.log(entry.sys.id);
          if(entry.fields.password == this.password){        
            document.cookie = "id="+entry.sys.id;
            document.cookie = "name="+entry.fields.name;
            document.cookie = "lastname="+entry.fields.lastname;
            document.cookie = "email="+entry.fields.email;
            document.cookie = "seenOnboarding="+entry.fields.seenOnboarding;
            this.$router.push("/onboarding");
          }
          else{
            console.log("wrong passwort, email")
            this.seen = true;
            this.errors.push("Wrong Email or Passwort.");
          }
          })
        }).catch();
    },
      checkForm: function (e) {
        this.errors = [];
        if (!this.email) {
          this.errors.push('Email required.');
        } else if (!this.validEmail(this.email)) {
          this.errors.push('Valid email required.');
        }
        if (!this.errors.length) {
          this.login();
          return true;
        }else{
          this.seen= true;
        }

        e.preventDefault();
      },
      nologin: function(){
        
      },
      addNewDummyUser: function(){
        if(this.cUserUserName != ""){
          //user already has a session but should not land here.
          //console.log("should not be here.");
          if(this.cseenOnboarding == true){
            this.$router.push("/lookigfor")
          }else{
            this.$router.push("/onboarding");
          }    
        }else{
          this.cUserUserName = "USER" + new Date().getTime()
          console.log("generated new username: "+ this.cUserUserName);
          contentfulManagementClient.getSpace('sxdh78bp7cct')
            .then((space) => space.getEnvironment('master'))
            .then((environment) => environment.createEntry('user', {
              fields: {
                username: {
                  'en-US': this.cUserUserName
                },
                seenOnboarding: {
                  'en-US': false
                },
                finishedLessons:{
                  'en-US' : {
                    0: {
                      0: false,
                      1: false,
                      2: false,
                      3: false
                    }
                  }
                }
              }
            }))
            .then((entry) => entry.publish())
            .then((entry)=> {
              document.cookie = "username="+this.cUserUserName;
              document.cookie = "id="+entry.sys.id;
              console.log(entry.fields.seenOnboarding["en-US"]);
              document.cookie = "seenOnboarding="+entry.fields.seenOnboarding["en-US"];     
              this.$router.push("/onboarding");
              })
            .catch(console.error)
        }
        
      },
      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      closeNotice: function(){
        this.showNotice = false;

      },
      changeShowNotice: function(){
        this.showNotice = true;
              setTimeout(()=>{
                this.closeNotice();
            }, 1000);
      }
    }
};
</script>

<style scoped lang="scss">

#app{
 .animatedLogo{
  // background: linear-gradient(to right, #e6475f 0%, #ef8138 60%, #e6475f 130%);
    margin-top:125px;
   margin-bottom: 85px;
    background-size: 200% 100%;
   -webkit-animation: AnimationName 3s ease infinite;
  -moz-animation: AnimationName 3s ease infinite;
  animation: AnimationName 3s ease infinite;
  .logo{
    width: 200px;
  }
 }
  .symbollogo{
    margin-top:70px;
    #logo_symbol{
      height:80px;
      width:150px;
    }
  }
.slogan{
  color:#00BBBE;
  font-family:'Roboto Slab', serif;
  font-size:22px; 
  margin-top:15px;
  font-weight:bold;
}
 @-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

  #login{
    margin-top:90px;
    input:not([type='submit']){

      width: 76%;
      @media print, screen and (min-width: 40em) {
        width:350px;
      }
      margin: 8px 0;
      
      padding-left: 15px;
      padding-top: 12px;
      padding-bottom: 12px;
      
      border:none;
      border:0px solid #fff;
      border-radius:15px;
      background-color:rgba(54, 73, 74, 0.7);

      display: inline-block;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      color: #fff;

      &:focus {outline: none;}
    }

    .submitbtn{
      margin-top: 15px;
      width: 50%;
          @media print, screen and (min-width: 40em) {
            width:200px;
          }
    }
    p{
      margin: 5px;
    }
    
    .fp-wrapper{
      &:after{
        content: '';
        display: block;
        clear: both;
      }
      a.forgotpw{
        color:#a0a0a0;
        text-decoration: none;
        font-size:12px;
      }
    }

  }
  .register_wrapper{
    font-size: 14px;
    text-align: center;
    display: block;
    color:#ffffff;
    padding-top: 0px;
    margin:48px;
    a.register{
      color:#00bbbe;
      text-decoration: none;
    }
  }
}
.centered_btn_container{
  display:inline-block;
}
.passive_link{
  cursor:pointer;
  color:#999999;
}
.notice{
  display: none;
  position: fixed;
  width:100%;
  bottom:0;
  left:0;
  margin-bottom:10px;
  text-align: center;
  .attention{
    width:auto;
    background-color: #222222;
    color: #fc8484;
  }
  &.active{
    display: inline-block;
  }
}
ul{
  list-style: none;
}
</style>
