<template>
    <div id="settings">
        <div class="settings-container">
            <h2>settings</h2>
            <div class="settings-sub-container account">
                <div class="header">
                    <img src="@/assets/icons/user.svg"> 
                    <span class="title-text">account</span>
                </div>
                <div class="settings-item" @click="showError">
                    <span class="settings-text">Change e-mail / password</span> 
                    <img src="@/assets/icons/arrow-right.svg">
                </div>
                <div class="settings-item" @click="toggleSetting('gps')">
                    <span class="settings-text">GPS Tracking</span> 
                    <div class="click-container" >
                        <img class="pullup" v-if="settings['gps']" src="@/assets/icons/active-toggle-icon.svg"> 
                        <img class="pullup" v-if="!settings['gps']" src="@/assets/icons/inactive-toggle-icon.svg"> 
                    </div>
                </div>
                <div class="settings-item" @click="toggleSetting('mic')">
                    <span class="settings-text">Microphone</span> 
                    <div class="click-container" >
                        <img class="pullup" v-if="settings['mic']" src="@/assets/icons/active-toggle-icon.svg"> 
                        <img class="pullup" v-if="!settings['mic']" src="@/assets/icons/inactive-toggle-icon.svg"> 
                    </div>
                </div>
            </div>

            <div class="settings-sub-container languages">
                <div class="header">
                    <img src="@/assets/icons/language.svg"> 
                    <span class="title-text">my languages</span>
                </div>
                <div class="settings-item" @click="showError">
                    <span class="settings-text">Change language settings</span> 
                    <img src="@/assets/icons/arrow-right.svg">
                </div>
                <div class="settings-item" @click="showError">
                    <span class="settings-text">Learning level</span> 
                    <img src="@/assets/icons/arrow-right.svg">
                </div>
            </div>

            <div class="settings-sub-container more">
                <div class="header">
                    <img src="@/assets/icons/more.svg"> 
                    <span class="title-text">more</span>
                </div>
                <div class="settings-item" @click="showError">
                    <span class="settings-text">Privacy and security</span> 
                    <img src="@/assets/icons/arrow-right.svg">
                </div>
                <div class="settings-item" @click="showError">
                    <span class="settings-text">Support</span> 
                    <img src="@/assets/icons/arrow-right.svg">
                </div>
            </div>

            <div class="settings-sub-container logout">
                 <div @click="logout" class="settings-logout">
                    <img class="pullup" src="@/assets/icons/logout.svg">
                    <span class="settings-text">Logout</span> 
                </div>
            </div>

        </div>
        
        <div class="grid-x error-layer" v-bind:class="{active: isError}">
            <div class="error">
                <div class="img-container">
                    <img alt="not 404 illustration" src="@/assets/images/onboarding/not404.png" />
                </div>
                <h1>uh oh...</h1>
                <div class="btns-container">
                <div class="text">
                    Hey my friend, if you think this page took the day off... Well it didn't. <br/>
                    <br/>
                    We're very sorry but this function has just not been implemented yet. We're working hard to give you a great language experience and
                    we'll send you a notification as soon as this function is ready. Happy Discovering!
                </div>

                </div>

                <div class="btns-container">
                    <div class="submitbtn" @click="closeError" >Go Back</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import cookies from "@/cookies.js";

import userSettings from "@/assets/settings/usersettings";
export default {
  name: "Settings",
  components: {
  },
  props: {
      
  },
  data: function(){
        return {
            cUserUserName : "",
            cUserName : "",
            cUserEmail : "",
            isSettings : false,
            settings: localStorage.userSettings ? JSON.parse(localStorage.userSettings) : userSettings,
            isError : false
        }
  },
  mounted: function(){
  },
    methods: {
    closeProfile: function(){
          console.log("close profile");
      },
      toggleSetting: function(setting){
          this.settings[setting] = !this.settings[setting];
          this.isSeetings = !this.isSettings;
          
         localStorage.userSettings = JSON.stringify(this.settings);
      },
      logout: function(){
        cookies.deleteCookie("username");
        cookies.deleteCookie("name");
        cookies.deleteCookie("email");
        this.$router.push("/");
      },
      showError: function(){
          this.isError = true;
      },
      closeError: function(){
          this.isError= false;
      }
    }
}

  </script>

<style lang="scss" scoped>
#settings{
    width: 90%;
    margin: auto;
    text-align: left;
    user-select: none;
    margin-top:-5px;
    h2{
        font-family: "Roboto", "Sans-Serif";
        font-size: 18px;
        font-weight:bold;
    }
    .header{
        border-bottom: 1px solid #828282;
        img{
            margin-bottom: 3px;
        }
        .title-text{
            margin-left: 15px;
            color: #828282;
            font-family: 'Roboto Slab', serif;
            font-size: 14px;
        }
    }
    .settings-sub-container{
        margin-top: 25px;
        &.account{
            margin-top:15px;
        }
    }
    .settings-item{
        margin: 10px 0 0 0;
        cursor:pointer;
        img{
            margin-right: 10px;
            float:right;
            &.pullup{
                margin-top: -5px;
            }
        }
        .click-container{
            display:inline;
            cursor:pointer;
        }
        .settings-text{
            font-family: 'Manrope', sans-serif;
            font-size: 16px;
        }
    }
    .settings-logout{
        img.pullup{
            margin-top:-5px;
        }
        .settings-text{
            margin-left: 15px;
            font-family: 'Manrope', sans-serif;
            font-size: 16px;
        }
    }
}
.error{
    width:90%;
    margin:0 auto;
    @media print, screen and (min-width: 40em) {
        max-width: 250px;
    }
}
.error-layer{
  display:none;
  position: absolute;
  top: 0px;
  left:0;
  height:100%;
  background-color: #323232;
  z-index:9030;
  &.active{
    display:block;
  }
  .img-container{
      width: 100%;
      text-align:center;
    img{
        margin-top:40px;
        max-width: 200px;
    }
  }
  .text{
    @media print, screen and (min-width: 40em) {
    }
  }
  .submitbtn{
    margin-top:50px;
  }
    h1{
    font-size:20px;
    font-family: "Roboto Slab", serif;
    font-weight:bold;
    text-align:center;
    text-transform: lowercase;
  }
}

.btns-container{
    text-align: center;
}
</style>