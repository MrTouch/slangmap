<template>
    <div id="nav-container" :class="{hackfix: specialStyle}">
        <div id="top-nav">
            <div class="back-container" @click="backToMap" v-if="showMapLink">
                <img class="back-icon" src="@/assets/icons/white_back.svg"/>
                <div class="back-text">Map view</div>
            </div>

             <div class="back-container" @click="backToStreetView" v-if="showStreetViewLink && !showExerciseLink">
                <img class="back-icon" src="@/assets/icons/white_back.svg"/>
                <div class="back-text">Street view</div>
            </div>
            <div class="back-container" @click="backToExercise" v-if="showExerciseLink">
                <img class="back-icon" src="@/assets/icons/white_back.svg"/>
                <div class="back-text">Exercise view</div>
            </div>

            <div class="back-container" @click="backToHome" v-if="showHomeLink">
                <img class="back-icon" src="@/assets/icons/white_back.svg"/>
                <div class="back-text">Home</div>
            </div>

            <div class="back-container" @click="toggleSetting" v-if="showProfile">
                <img class="back-icon" src="@/assets/icons/white_back.svg"/>
                <div class="back-text">Profile overview</div>
            </div>

            <div class="back-container" @click="backToRoutes" v-if="showRoutesLink && !showCompletedLink && !showIncompletedLink && !showBackToSwitzerland">
                <img class="back-icon" src="@/assets/icons/white_back.svg"/>
                <div class="back-text">My routes</div>
            </div>

              <div class="back-container" @click="backToCompleted" v-if="showCompletedLink && !showBackToSwitzerland">
                <img class="back-icon" src="@/assets/icons/white_back.svg"/>
                <div class="back-text">Completed routes</div>
            </div>

              <div class="back-container" @click="backToIncompleted" v-if="showIncompletedLink && !showBackToSwitzerland">
                <img class="back-icon" src="@/assets/icons/white_back.svg"/>
                <div class="back-text">Incompleted routes</div>
            </div>

            <div class="back-container" @click="backToSwitzerland" v-if="showBackToSwitzerland">
                <img class="back-icon" src="@/assets/icons/white_back.svg"/>
                <div class="back-text">Switzerland</div>
            </div>

           <div class="back-container" @click="backProgressOverview" v-if="showSwissDetailView">
                <img class="back-icon" src="@/assets/icons/white_back.svg"/>
                <div class="back-text">Progress</div>
            </div>

            
           <div class="back-container" @click="backToSwissDetailView" v-if="showVocabularyView">
                <img class="back-icon" src="@/assets/icons/white_back.svg"/>
                <div class="back-text">Swiss-German</div>
            </div>

            <div class="right-container" v-if="showHomeLink && active!='progress'" @click="toggleSetting">
                <img class="settings-icon" src="@/assets/icons/settings.svg"/>
            </div>

        </div>
        <div id="bottom-nav">
            <div class="icon-container">
                <div id="home">
                    <img class="icon" id="home_icon" alt="Home" src="@/assets/icons/slangmap-home.svg"  v-if="active!='home'" @click="goToPage('map')" />
                    <img class="icon" id="home_icon" alt="Home" src="@/assets/icons/slangmap-home-bluegreen.svg"  v-if="active=='home'" />
                    <div class="nav-text" v-if="active!='home'">home</div>
                    <div class="nav-text bluegreen"  v-if="active=='home'" >home</div>
                </div>
                <div id="profile">
                    <img class="icon" id="home_icon" alt="Profile" src="@/assets/icons/profile-white.svg" v-if="active!='profile'"  @click="goToPage('profile')" />
                    <img class="icon" id="profile_icon" alt="Profile" src="@/assets/icons/profile-blue.svg" v-if="active=='profile'" />
                    <div class="nav-text" v-if="active!='profile'">profile</div>
                    <div class="nav-text bluegreen"  v-if="active=='profile'" >profile</div>
                </div>
                <div id="routes">
                    <img class="icon" id="home_icon" alt="Home" src="@/assets/icons/pin-map-white.svg" v-if="active!='routes'"  @click="goToPage('routes')" />
                    <img class="icon" id="home_icon" alt="Home" src="@/assets/icons/pin-map-bluegreen.svg" v-if="active=='routes'"  />
                    <div class="nav-text" v-if="active!='routes'">routes</div>
                    <div class="nav-text bluegreen" v-if="active=='routes'" >routes</div>
                </div>
                <div id="progress">
                    <img class="icon" id="home_icon" alt="Home" src="@/assets/icons/progress.png" @click="goToPage('progress')" v-if="active!='progress'"  />
                    <img class="icon" id="home_icon" alt="Home" src="@/assets/icons/progress-bluegreen.svg" v-if="active=='progress'"  />
                    <div class="nav-text" v-if="active!='progress'">progress</div>
                    <div class="nav-text bluegreen"  v-if="active=='progress'" >progress</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import cookies from "@/cookies.js";

export default {
  name: "Map",
  components: {
  },
  props: {
      showMapLink : Boolean,
      showStreetViewLink: Boolean,
      showExerciseLink: Boolean,
      showHomeLink: Boolean,
      showProfile: Boolean,
      showRoutesLink: Boolean,
      showCompletedLink: Boolean,
      showIncompletedLink: Boolean,
      showBackToSwitzerland: Boolean,
      showSwissDetailView: Boolean,
      showVocabularyView: Boolean,
      active: String,
      specialStyle: Boolean
  },
  data: function(){
        return {
            showSettings: false,
        }
  },
  mounted: function(){

  },
  methods: {
      backToMap: function(){
          console.log("back 2 map");
          this.$router.push("/map");
      },
      backToHome: function(){
          console.log("back 2 home");
          this.$router.push("/map");
      },
      backToStreetView: function(){
        this.$emit("closeInput");
      },
      backToExercise: function(){
          console.log("back to exercise");
          this.$emit("closeExercise");
      },
      backToRoutes:function(){
          this.$emit("closeRoutes");
      },
      backToCompleted:function(){
          this.$emit("backToCompletedRoutes")
          console.log("back to completed")
      },
      backToIncompleted:function(){
          this.$emit("backToIncompletedRoutes");
      },
      backToSwitzerland:function(){
          this.$emit("backToSwitzerland");
      },
      goToPage: function(pageName){
        this.$router.push("/"+pageName);
      },
      backProgressOverview: function(){
          console.log("back to language overview")
          this.$emit("backToProgressOverview")
      },
      backToSwissDetailView: function(){
          this.$emit("backToSwissDetailView");
      },
      toggleSetting: function(){
          console.log("toggle settings")
          this.$emit("toggleSettings");
      },
  }
};

</script>

<style lang="scss" scoped>

#nav-container{
    z-index: 9012;
    display: block;
    position: absolute;
    &.hackfix{
        #bottom-nav{
            top:90vh;
            width: 100vw;
        }
    }
    #top-nav{
        position: fixed;
        width: 100%;
        height: 50px;
        top: 0;
        background-color: #323232;
        border-bottom: 1px solid #585858;
        .back-container{
            float: left;
            margin-top: 10px;
            margin-left: 10px;
            cursor: pointer;
            .back-icon{
                width: 20px;
                height: 20px;
                display: inline-block;
                margin-top: -2px;
            }

            .back-text{
                display: inline-block;
                margin-top: 3px;
                margin-left: 10px;
                padding-top: 1px;
            }
        }
        .settings-icon{
            cursor:pointer;
        }
    }
    #bottom-nav{
        position: fixed;
        bottom: 0;
        background-color: rgba(50,50,50,1);
        width: 100%;
        height: 80px;
        border-top: 1px solid #585858;
        .icon-container{
            display: flex;
            width: 100%;
            max-width: 80%;
            flex-direction: row;
            justify-content: space-around;
            margin:0 auto;
            height:100%;
            > div{
                cursor:pointer;
            }
            .icon{
                margin-top: 15px;
                cursor: pointer;
                max-width: 27px;
                height: 27px;
            }
            .nav-text{
                margin-top:5px;
                font-family: 'Roboto Slab', serif;
                font-size: 11px;
                &.bluegreen{
                    color:#87FFF2;
                }
            }
        }
    }
    .right-container{
        float: right;
        margin:12px 20px;
    }
}


</style>