<template>
   <div class="grid-container full">
        <div class="grid-x warumnidfullbra" v-if="this.step == 0">

        <div class="paddingGrid">
          <div class="cell small-12 touchpointer">
              <img id="welcome_ilu" alt="Welcome Illustration" src="@/assets/images/onboarding/welcome.png" />
              <h1>hello travelgeek!</h1>
              <p>Welcome to slangmap.</p> 
              <div v-if="cUserMail != ''"><p>You can now access every route on slangmap to discover even more great places and learn more languages. Ready for your first journey?</p></div>
              <div v-if="cUserMail == ''"><p>You can access one route in slangmap to discover great places and learn a language. Ready for your first journey?</p></div>
            <div id="onboardingNext" v-on:click="nextStep" class="submitbtn">Let's go!</div>
            </div>
          </div>
      </div>

      <div class="grid-x warumnidfullbra" v-if="this.step == 1">

        <div class="paddingGrid">
          <div v-touch:swipe.left="swipeLeftHandler" v-touch:swipe.right="swipeRightHandler" class="cell small-12 touchpointer">
              <img id="onboarding1_ilu" alt="Welcome Illustration" src="@/assets/images/onboarding/onboarding1.png" />
              <h1>Learn languages and get<br> to know new cultures</h1>
              <p>Every country has its own culture and language. <br/>Learn it all depending on where you travel!</p>
            <!-- <button id="onboardingNext" v-on:click="nextStep" class="submitbtn">Next</button>-->
            </div>
              <div id="circleContainer">
                <div id="circles">
                  <span class="circle active" v-on:click="go2Step(1)" ></span><span v-on:click="go2Step(2)" class="circle"></span><span class="circle" v-on:click="go2Step(3)"></span><span class="circle" v-on:click="go2Step(4)"></span>
                </div>
              </div>
          </div>
      </div>

      <div class="grid-x warumnidfullbra"  v-if="this.step == 2">
        <div class="paddingGrid">
          <div v-touch:swipe.left="swipeLeftHandler" v-touch:swipe.right="swipeRightHandler" class="cell small-12 touchpointer">
            <img id="onboarding2_ilu" alt="Welcome Illustration" src="@/assets/images/onboarding/onboarding2.png" />
            <h1>TRAVEL VIRTUALLY<br> OR TRAVEL FOR REAL!</h1>  
            <p>Are you at home or traveling somewhere?</p>
            <p>Don't worry you can use slangmap in the virtual mode to discover places from home or on site.</p>
            <!--  <button id="onboardingBack" v-on:click="previousStep" class="submitbtn">Back</button>          
              <button id="onboardingNext" v-on:click="nextStep" class="submitbtn">Next</button>-->
              <div id="circleContainer">
                <div id="circles">
                  <span class="circle" v-on:click="go2Step(1)"></span><span v-on:click="go2Step(2)" class="circle active"></span><span class="circle" v-on:click="go2Step(3)"></span><span class="circle" v-on:click="go2Step(4)"></span>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div class="grid-x warumnidfullbra"  v-if="this.step == 3">
        <div class="paddingGrid">
          <div v-touch:swipe.left="swipeLeftHandler" v-touch:swipe.right="swipeRightHandler" class="cell small-12 touchpointer">
            <img id="onboarding3_ilu" alt="Welcome Illustration" src="@/assets/images/onboarding/onboarding3.png" />
            <h1>Track your progress and the places you visited.</h1>
            <p>Check the places you visited and <br> track your progress anytime!</p>
           <!--<button id="onboardingBack" v-on:click="previousStep" class="submitbtn">Back</button>          
            <button id="onboardingNext" v-on:click="nextStep" class="submitbtn">Next</button>-->
            <div id="circleContainer">
              <div id="circles">
                <span class="circle" v-on:click="go2Step(1)"></span><span v-on:click="go2Step(2)" class="circle"></span><span class="circle active" v-on:click="go2Step(3)"></span><span class="circle" v-on:click="go2Step(4)"></span>
              </div>
            </div>  
          </div>
        </div>
      </div>

      <div class="grid-x warumnidfullbra"  v-if="this.step == 4">
        <div class="paddingGrid">
          <div v-touch:swipe.left="swipeLeftHandler" v-touch:swipe.right="swipeRightHandler" class="cell small-12 touchpointer">
            <img id="onboarding4_ilu" alt="Welcome Illustration" src="@/assets/images/onboarding/onboarding4.png" />
            <h1>Discover routes <br> according to your interests</h1>
            <p>Are you interested in museums or are historical landmarks what interests you most in other cultures?</p>
            <!--<button id="onboardingBack" v-on:click="previousStep" class="submitbtn">Back</button> -->         
            <button id="onboardingNext" v-on:click="finish" class="submitbtn">Got it</button>
            <button  v-on:click="restart" class="passive_link linkblock"><div>Show me again!</div></button>
            <div id="circleContainer">
              <div id="circles">
                <span class="circle" v-on:click="go2Step(1)"></span><span v-on:click="go2Step(2)" class="circle"></span><span class="circle" v-on:click="go2Step(3)"></span><span class="circle active" v-on:click="go2Step(4)"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

import cookies from "@/cookies.js";
import db from "@/db.js";
import Vue2TouchEvents from 'vue2-touch-events'
import {
  MglMap,
  MglMarker,
  MglPopup,
  MglGeojsonLayer,
  MglNavigationControl
} from "vue-mapbox";

export default {
  name: "onboarding",
    data: function() {
    return{
      cUserUserName: '',
      cUserMail: '',
      step:0,
      music: [],
      activities:[]
    }
  },
  mounted: function(){
    this.cUserUserName = cookies.getCookie("username");  
    //this.music = db.getMusicAsArray("music");
    //this.activities = db.getActivitiesAsArray("activities");

    this.$root.hideNav = true;
    this.cUserMail = cookies.getCookie("email")
    console.log("seen onboarding: " + cookies.getCookie("seenOnboarding"));
    if(cookies.getCookie("seenOnboarding") == "true"){
      console.log('seenOnboarding go to lookingfor page ');
      this.$router.push("lookingfor");
    }
  },
  methods: {
    nextStep: function (){
      this.step++;
    },
    previousStep: function(){
      this.step--;
    },
    restart: function (){
      this.step=1;
    },
    finish: function(){
      db.updateUserSeenOnboarding();
      document.cookie = "seenOnboarding=true";
      this.$router.push("/lookingfor");
    },
    updateUserActivity: function(){
        //db.updateUserActivities(this.activities);
        this.$router.push("/lookingfor");
    },
    go2Step: function(n){
      this.step = n;
    },
    swipeLeftHandler: function(){
      console.log("swipe left");
        if(this.step <4)
            this.step++;
    },
    swipeRightHandler: function(){
      console.log("swipe right");
          if(this.step > 1)
            this.step--;
    }
  }
};
</script>


<style scoped lang="scss">

.passive_link{
  cursor:pointer;
  color:#999999;
}
#welcome_ilu{
  margin-top:30px;
  max-height:200px;
}
#onboarding1_ilu{
  margin-top:30px;
  max-height:200px;
}
#onboarding2_ilu{
  margin-top:30px;
  max-height:200px;
}
#onboarding3_ilu{
  margin-top:30px;
  max-height:200px;
}
#onboarding4_ilu{
  margin-top:30px;
  max-height:200px;
}
.circle{
  cursor:pointer;

}
h1{
  margin: 35px 20px 20px 20px;
  font-family: 'Roboto Slab', serif;
  font-weight:bold;
  text-transform:lowercase;
}
p{
  margin: 0 20px;
  font-size:16px;
}
.circle:before {
  content: ' \25CF';
  font-size: 33px;
}
span.circle{
    color: #e0e0e0;
  &.active{
    color: #828282;
  }
}
.touchpointer{
  cursor:pointer;
  height: 100%;
  user-select: none;
}
div#circleContainer{
  width: 100%;
    position: absolute;
    left: 0;
    bottom: 5vh;
}
.paddingGrid{
  height:78vh;
}
#onboardingNext{
  margin-top:20px;
}
.linkblock{
    color: white;
    font-family: 'manrope', sans-serif;
    display: inline-block;
    text-align: center;
    width: 100%;
    margin-top: 20px;
    div{
    border-bottom: 1px solid white;
    display: inline;
    }
}
.submitbtn{
  margin-top:35px;
}
</style>
