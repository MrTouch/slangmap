<template>
<div class="grid-container full">
        <div class="grid-x warumnidfullbra">
    
            <MenuNav :showHomeLink="!isSettings" :showProfile="isSettings" :active="'profile'" @closeProfile="closeProfile" @backToProfile="backToProfile" @toggleSettings="toggleSettings"/>
            <div id="profile" :class="{ hide: isSettings }">
                <div class="main-data">
                    <div class="profile-image">
                        <img src="@/assets/images/profileimage.svg" >   
                    </div>
                    <div class="profile-main">
                        <div v-if="cUserName"><h2>{{cUserName}} </h2></div>
                        <div v-if="!cUserName && cUserUserName"><h2>{{cUserUserName}}</h2></div>
                        <div class="email">{{cUserEmail}}</div>
                    </div>
                </div>


                <div class="profile-data">
                    <div class="label">i speak</div>
                    <div class="fake-input">English</div>
                    <div class="label">currently active language</div>
                    <div class="fake-input">Swiss-German</div>
                    <div class="label">level</div>
                    <div class="fake-input">Beginner</div>
                </div>

            </div>
            <Settings v-if="isSettings"/>
        </div>
    </div>
</template>

<script>
import cookies from "@/cookies.js";
import MenuNav from "@/components/MenuNav";
import Settings from "@/components/Settings";


export default {
  name: "Profile",
  components: {
      MenuNav,
      Settings
  },
  props: {
      
  },
  data: function(){
        return {
            cUserUserName : "",
            cUserName : "",
            cUserEmail : "",
            isSettings : false
        }
  },
  mounted: function(){
    this.cUserUserName = cookies.getCookie("username");
    this.cUserName = cookies.getCookie("name");
    this.cUserEmail = cookies.getCookie("email");
    this.cseenOnboarding = cookies.getCookie("seenOnboarding");
    console.log(this.cUserUserName)
  },
  methods: {
      closeProfile: function(){
          console.log("close profile");
      },
      backToProfile: function(){
          console.log("back to profile");
      },
      toggleSettings: function(){
          console.log("showsettings");
          this.isSettings = !this.isSettings;
      }
  }
}
</script>

<style scoped lang="scss">

#profile{
    width:90%;
    margin:0px auto 0 auto;
    margin-top:70px;
    &.hide{
        display:none;
    }
    @media print, screen and (min-width: 40em) {
        max-width: 500px;
    }

    .main-data{
        display: inline-block;
        width: 100%;
        .profile-image{
            max-width: 100px;
            float: left;
           img{
               width:100px;
           }
        }
        .profile-main{
            text-align: left;
            margin-left: 30px;
            float: left;
            h2{
    font-family: 'Roboto Slab', serif;
                font-size: 18px;
            }
            .email{
                margin-top:-15px;
            }
        }
    }
    .login-data, .profile-data{
        width: 100%;
        text-align: left;
        margin-top: 50px;
        .label{
  font-family: 'Roboto Slab', serif;
            font-size: 14px;
            font-weight: bold;
            color: #828282;
        }
        input{

            border-bottom: 1px solid #828282;
        }
        .fake-input{
            border-bottom: 1px solid #828282;
            margin-bottom: 20px;
            font-size:16px;
        }
    }
}

</style>