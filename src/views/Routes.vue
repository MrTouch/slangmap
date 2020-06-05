<template>
<div class="grid-container full">
        <div class="grid-x warumnidfullbra">
    
            <MenuNav :specialStyle="true" :showHomeLink="!isRoutes && !isCompletedLink && !isIncompletedLink && !isBackToSwitzerland" :showIncompletedLink="isIncompletedLink" :showBackToSwitzerland="isBackToSwitzerland" :showRoutesLink="isRoutes" :showCompletedLink="isCompletedLink" :active="'routes'" @closeRoutes="closeRoutes" @backToSwitzerland="backToSwitzerland" @backToRoutes="backToRoutes" @backToCompletedRoutes="backToCompletedRoutes" @backToIncompletedRoutes="backToIncompletedRoutes" @toggleSettings="toggleSettings"/>
            <div id="routes" class="routes main active" ref="routes">
                <div class="container">
                    <h2>my routes</h2>
                    <div class="list">
                        <div class="settings-item" @click="showCompleted">
                            <span class="settings-text">Completed routes</span> 
                            <img src="@/assets/icons/arrow-right.svg">
                        </div>
                        <div class="settings-item" @click="showIncompleted">
                            <span class="settings-text">Incompleted routes</span> 
                            <img src="@/assets/icons/arrow-right.svg">
                        </div>
                    </div>
                </div>
            </div>

            <div id="incompleted" class="routes incompleted" ref="incompleted" >
                <div class="container">
                    <h2>incompleted routes</h2>
                    <div class="list">
                        <div class="settings-item highlight" @click="showError">
                            <span class="settings-text">france</span> 
                            <span class="settings-text passive">1 route</span> 
                            <img class="pulldown2" src="@/assets/icons/arrow-right.svg">
                        </div>
                        <div class="settings-item highlight" @click="showError">
                            <span class="settings-text">sweden</span> 
                            <span class="settings-text passive">1 route</span> 
                            <img class="pulldown2" src="@/assets/icons/arrow-right.svg">
                        </div>
                        <div class="settings-item highlight" @click="showSwitzerlandIncompleted">
                            <span class="settings-text">switzerland</span> 
                            <span class="settings-text passive">4 routes</span> 
                            <img class="pulldown2" src="@/assets/icons/arrow-right.svg">
                        </div>
                    </div>
                </div>
            </div>

            <div id="completed" class="routes completed " ref="completed">
                <div class="container">
                    <h2>completed routes</h2>
                    <div class="list">
                        <div class="settings-item highlight" @click="showSwitzerlandCompleted">
                            <span class="settings-text">switzerland</span> 
                            <span class="settings-text passive">1 route</span> 
                            <img  class="pulldown2" src="@/assets/icons/arrow-right.svg">
                        </div>
                    </div>
                </div>
            </div>

            <div id="nocompleted" class="routes nocompleted" ref="nocompleted">
                <div class="container">
                     <h2>completed routes</h2>
                    <div class="centered-textcentered-text">
                        You don't have any finished routes yet. So go ahead, choose a destination and start discovering and learning!
                    </div>
                    <div class="centered_btn_container bottom-button">
                        <div class="submitbtn" @click="goToMap()">GO TO MAP</div>
                    </div>
                </div>
            </div>
      
            <div id="swisscomplete" class="routes switzerlandComplete" ref="swisscomplete">
                <div class="container">
                    <h2>switzerland</h2>
                    <div class="list">
                        <div class="settings-item highlight" @click="showSwitzerlandCompleteDetail">
                            <span class="settings-text">route 1</span> 
                            <span class="settings-text passive">Central → Bellevue</span> 
                            <img class="pulldown2"  src="@/assets/icons/arrow-right.svg">
                        </div>
                    </div>
                </div>
            </div>

            <div id="swissincomplete" class="routes switzerlandIncomplete" ref="swissincomplete">
                <div class="container">
                    <h2>switzerland</h2>
                    <div class="list" v-if="!exercise[4]['done']">
                        <div class="settings-item highlight" @click="showSwitzerlandIncompleteDetail">
                            <span class="settings-text">route 1</span> 
                            <span class="settings-text passive">Central → Bellevue</span> 
                            <img class="pulldown2"  src="@/assets/icons/arrow-right.svg">
                        </div>
                    </div>
                    <div class="list">
                        <div class="settings-item highlight" @click="showError">
                            <span class="settings-text">route 2</span> 
                            <span class="settings-text passive">Zürich HB → Fraumünster</span> 
                            <img  class="pulldown2" src="@/assets/icons/arrow-right.svg">
                        </div>
                    </div>
                    <div class="list">
                        <div class="settings-item highlight" @click="showError">
                            <span class="settings-text">route 3</span> 
                            <span class="settings-text passive">Landesmuseum → Limmatplatz</span> 
                            <img  class="pulldown2" src="@/assets/icons/arrow-right.svg">
                        </div>
                    </div>
                    <div class="list">
                        <div class="settings-item highlight" @click="showError">
                            <span class="settings-text">route 4</span> 
                            <span class="settings-text passive">Europaallee → Kanzlei</span> 
                            <img src="@/assets/icons/arrow-right.svg">
                        </div>
                    </div>
                </div>
            </div>

            <div id="swisscompletedetail" class="routes switzerlandCompleteDetail no-margin" ref="swisscompletedetail">
                <div class="container">
                    <h2>route 1: central - bellevue</h2>
                    <div class="list">
                        <div class="route-item" @click="goToLesson(1)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[1]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[1]['done']">
                            <span class="settings-text">welcome to central!</span> 
                            <span class="settings-text passive">Start at one of Zurich's nodal points fo road and public transportation.</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>
                        <div class="route-item" @click="goToLesson(2)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[2]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[2]['done']">
                            <span class="settings-text">walking through niederdorf</span> 
                            <span class="settings-text passive">Discover the pedestrian zone with its many stores, bars and cafés.</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>
                        <div class="route-item" @click="goToLesson(3)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[3]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[3]['done']">
                            <span class="settings-text">psss... quiet please!</span> 
                            <span class="settings-text passive">Pay a visit to the beatiful central library "Zentralbibliothek Zürich".</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>

                        <div class="route-item" @click="goToLesson(4)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[4]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[4]['done']">
                            <span class="settings-text">coffee, wine and more</span> 
                            <span class="settings-text passive">Take a break at Café Zähringer and enjoy a refreshing beverage.</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>

                        <div class="route-item" @click="goToLesson(4)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[4]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[4]['done']">
                            <span class="settings-text">old and impressive</span> 
                            <span class="settings-text passive">Travel back in time admiring the impressive "Grossmünster" church.</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>
                        
                        <div class="route-item" @click="goToLesson(4)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[4]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[4]['done']">
                            <span class="settings-text">on the tracks of dürrenmatt</span> 
                            <span class="settings-text passive">How about savouring a typical "Zürcher Geschnetzeltes"?</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>

                       <div class="route-item" @click="goToLesson(4)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[4]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[4]['done']">
                            <span class="settings-text">on the tracks of dürrenmatt</span> 
                            <span class="settings-text passive">How about savouring a typical "Zürcher Geschnetzeltes"?</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>
                    </div>
                </div>
            </div>

             <div id="swissincompletedetail" class="routes switzerlandIncompleteDetail no-margin" ref="swissincompletedetail">
                <div class="container">
                    <h2>route 1: central - bellevue</h2>
                    <div class="list">
                        <div class="route-item" @click="goToLesson(1)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[1]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[1]['done']">
                            <span class="settings-text">welcome to central!</span> 
                            <span class="settings-text passive">Start at one of Zurich's nodal points fo road and public transportation.</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>
                        <div class="route-item" @click="goToLesson(2)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[2]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[2]['done']">
                            <span class="settings-text">walking through niederdorf</span> 
                            <span class="settings-text passive">Discover the pedestrian zone with its many stores, bars and cafés.</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>
                        <div class="route-item" @click="goToLesson(3)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[3]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[3]['done']">
                            <span class="settings-text">psss... quiet please!</span> 
                            <span class="settings-text passive">Pay a visit to the beatiful central library "Zentralbibliothek Zürich".</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>

                        <div class="route-item" @click="goToLesson(4)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[4]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[4]['done']">
                            <span class="settings-text">coffee, wine and more</span> 
                            <span class="settings-text passive">Take a break at Café Zähringer and enjoy a refreshing beverage.</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>

                        <div class="route-item" @click="goToLesson(4)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[4]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[4]['done']">
                            <span class="settings-text">old and impressive</span> 
                            <span class="settings-text passive">Travel back in time admiring the impressive "Grossmünster" church.</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>
                        
                        <div class="route-item" @click="goToLesson(4)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[4]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[4]['done']">
                            <span class="settings-text">on the tracks of dürrenmatt</span> 
                            <span class="settings-text passive">How about savouring a typical "Zürcher Geschnetzeltes"?</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>

                       <div class="route-item" @click="goToLesson(4)">
                            <img class="status" src="@/assets/icons/done.svg" v-if="exercise[4]['done']" >
                            <img class="status" src="@/assets/icons/undone.svg"  v-if="!exercise[4]['done']">
                            <span class="settings-text">on the tracks of dürrenmatt</span> 
                            <span class="settings-text passive">How about savouring a typical "Zürcher Geschnetzeltes"?</span> 
                            <img src="@/assets/icons/arrow-right.svg" class="pulldown">
                        </div>
                    </div>
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
                    We're very sorry but this route has just not been implemented yet. We're working hard to give you a great language experience and
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
import MenuNav from "@/components/MenuNav";
import Settings from "@/components/Settings";
import lesson1 from "@/assets/lessons/lesson1";


export default {
  name: "Routes",
  components: {
      MenuNav,
      Settings,
  },
  props: {
      
  },
  data: function(){
        return {
            cUserUserName : "",
            cUserName : "",
            cUserEmail : "",
            isRoutes : false,
            isCompletedLink : false,
            isIncompletedLink: false,
            isError: false,
            isBackToSwitzerland: false,
            exercise : localStorage.progress ? JSON.parse(localStorage.progress) : lesson1,
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
      closeRoutes: function(){
          console.log("close Routes");
          this.$refs.completed.classList.remove("active");
          this.$refs.incompleted.classList.remove("active");
          this.$refs.nocompleted.classList.remove("active");
          this.$refs.routes.classList.remove("hide");
          this.isRoutes = false;
      },
      backToRoutes: function(){
          console.log("back to routes");
      },
      backToCompletedRoutes: function(){
          console.log("back to completed routes");
          this.$refs.swisscomplete.classList.remove("active");
          this.$refs.completed.classList.remove("hide");
          this.isCompletedLink = false;
      },
        backToIncompletedRoutes: function(){
          console.log("back to incompleted routes");
          this.$refs.swissincomplete.classList.remove("active");
          this.$refs.incompleted.classList.remove("hide");
          this.isIncompletedLink = false;
      },
      toggleSettings: function(){
          console.log("showsettings");
          this.isSettings = !this.isSettings;
      },
      showCompleted: function(){
        if(this.exercise[4]["done"]){
            this.$refs.completed.classList.add("active");
        }else{
            this.$refs.nocompleted.classList.add("active");
        }
        this.$refs.routes.classList.add("hide");
        this.isRoutes = true;
      },
      showIncompleted: function(){
        this.$refs.incompleted.classList.add("active");
        this.$refs.routes.classList.add("hide");
        this.isRoutes = true;
      },
      showSwitzerlandCompleted: function(){
          this.$refs.swisscomplete.classList.add("active");
          this.$refs.completed.classList.add("hide");
          this.isCompletedLink = true;
      },
      showSwitzerlandIncompleted: function(){
         this.$refs.swissincomplete.classList.add("active");
          this.$refs.incompleted.classList.add("hide");
          this.isIncompletedLink = true;
      },
      showSwitzerlandCompleteDetail: function(){
          console.log("abcd")
        this.$refs.swisscompletedetail.classList.add("active");
        this.$refs.swisscomplete.classList.add("hide");
        this.isRoutes = false;
        this.isBackToSwitzerland = true;
      },
      showSwitzerlandIncompleteDetail: function(){
          console.log("abcd")
        this.$refs.swissincompletedetail.classList.add("active");
        this.$refs.swissincomplete.classList.add("hide");
        this.isRoutes = false;
        this.isBackToSwitzerland = true;
      },
      backToSwitzerland: function(){
          this.$refs.swisscompletedetail.classList.remove("active");
          this.$refs.swisscomplete.classList.remove("hide");
          this.isBackToSwitzerland = false;
          this.isRoutes = true;
      },
      goToMap: function(){
          this.$router.push("/map");
      },
      showError: function(){
          this.isError = true;
      },
      closeError: function(){
          this.isError= false;
      },
      goToLesson(id){
          this.$router.push("/map/lesson/1."+id);
      }

  }
}
</script>

<style scoped lang="scss">
h2{
    font-family: "Roboto Slab", serif;
    font-size: 18px;
    font-weight:bold;
    letter-spacing: 1.5px;
}
.container{
    width: 90%;
    margin: 0 auto;
     @media print, screen and (min-width: 40em) {
        max-width: 500px;
    }

}
.centered-text{
    text-align:center;
}
.centered_btn_container{
    text-align:center;
    
    &.bottom-button{
        margin-top:250px;
        width: 100%;
        left: 0;
        position: relative;
    }
}
.routes{
    position: absolute;
    left:100%;
    transition: left 0.6s ease-in;
    text-align:left;
    width: 100%;
    margin-top: 70px;
    &.active{
        left:0%;
        transition: left 0.6s ease-out;
    }
    &.hide{
        left:-100%;
    }
    &.no-margin{
        margin:0;
    }
}
.route-item{
        margin: 0 0 0 0;
        cursor:pointer;
        min-height:100px;
        position: relative;
        &:first-child{
            margin-top:0px;
        }
        &.highlight{
            border: 1px solid #00BBBE;
            padding: 15px 15px 30px 15px;
            background-color: #4F4F4F;
            border-radius: 15px;
        }

        img{
            margin-right: 10px;
            float:right;
            margin-top:4px;
            &.status{
                float:left;
            }
            &.pulldown{
                margin-top:30px;
            }
             &.pulldown2{
                margin-top:12px;
            }
            &.pullup{
                margin-top: -5px;
            }
        }
        .click-container{
            display:inline;
            cursor:pointer;
        }
        .settings-text{
            font-family: 'Roboto Slab', serif;
            font-size: 14px;
            font-weight:bold;
            &.passive{
                font-family: 'Manrope', sans-serif;
                font-size:12px;
                font-weight: normal;
                position: absolute;
                left: 44px;
                top: 32px;
                right: 37px;
            }
        }
}
 .settings-item{
        margin: 10px 0 0 0;
        cursor:pointer;
        position: relative;
         img{
            margin-right: 10px;
            float:right;
            margin-top:4px;
            width:10px;
            height:17px;

            &.pull-down{
                margin-top:15px;
            }
            &.pullup{
                margin-top: -5px;
            }
            &.pulldown2{
                
                margin-top:10px;
            }
        }
        &.highlight{
            border: 1px solid #00BBBE;
            padding: 15px 15px 30px 15px;
            background-color: #4F4F4F;
            border-radius: 15px;
        }

       
        .click-container{
            display:inline;
            cursor:pointer;
        }
        .settings-text{
            font-family: 'Roboto Slab', serif;
            font-size: 14px;
            font-weight:bold;
            &.passive{
                font-family: 'Manrope', sans-serif;
                font-size:12px;
                font-weight: normal;
                position: absolute;
                top: 36px;
                left: 14px
            }
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
</style>