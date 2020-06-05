<template>
   <div>
      <div class="grid-x warumnidfullbra levelscreen"  v-bind:class="{active: showLevelLayer}">
        <h1>how do you estimate your swiss-german level?</h1>
        <div class="btns-container">
          <div>I am a newbie to this language and I have no prior knowledge.</div>
          <div class="optionbtn" v-bind:class="{ active: selectedLevel.a }"  @click="selectLevel('a')" >Beginner (Level A1/ A2)</div>
          <div>I already have some knowledge and I can have a more or less simple conversation.</div>
          <div class="optionbtn" v-bind:class="{ active: selectedLevel.b }" @click="selectLevel('b')" >Intermediate (Level B1/ B2) </div> <!--<span class="hint">GPS needs to be enabled.</span>-->

          </div>
            <div class="btns-container">
              <div class="submitbtn" v-bind:class="{ active: selectedLevel.a || selectedLevel.b }"  @click="confirmLevel" >Confirm</div>
            </div>
      </div>
      <div class="grid-x error-layer" v-bind:class="{active: isError}">
        <img alt="not 404 illustration" src="@/assets/images/onboarding/not404.png" />
        <h1>uh oh...</h1>
        <div class="btns-container">
          <div class="text">
            Hey my friend, if you think this page took the day off... Well it didn't. <br/>
            <br/>
            We're very sorry but this function has just not been implemented yet. We're working hard to give you a great language experience and
             we'll send you a notification as soon as this function is ready. Until then, feel free to try out our virtual mode. Happy Discovering!
          </div>

        </div>

        <div class="btns-container">
          <div class="submitbtn"  @click="closeError" >Go Back</div>
        </div>
      </div>
  </div>
</template>



<script>

import cookies from "@/cookies.js";
import db from "@/db.js";
import Vue2TouchEvents from 'vue2-touch-events'

export default {
  name: "Level",
    data: function() {
    return{
      cUserUserName: '',
      selectedLevel:{
        a: false,
        b: false
      },
      isError: false,
    }
  },    
  props: {
        showLevelLayer : Boolean,
        lessonId: Number,
        lessonPart: Number
  },
  mounted: function(){
    this.cUserUserName = cookies.getCookie("username");
  },
  methods: {
    selectLevel: function (level){
      console.log("selectlevel", level)
      if(level == "b"){
        this.selectedLevel[level]=true;
        this.selectedLevel["a"]=false;
      }else if(level == "a"){
        this.selectedLevel[level]=true;
        this.selectedLevel["b"]=false;
      }
    },
    confirmLevel: function(){
      //db.updateUserSeenOnboarding();
      //write in db necesairy?
      document.cookie = "level="+this.selectedLevel;
      console.log(this.selectedLevel)
      if(this.selectedLevel["b"] == true){
        console.log("selected Level b")
        this.showError();
      //this.$router.push("/gps_map");
    
      }else if(this.selectedLevel["a"] == true){

        localStorage.selectedLevelName = this.selectedLevel["a"];
        this.$router.push("/map/lesson/" + this.lessonId+'.'+this.lessonPart);
        //this.$router.push("/lesson");
    
      }},
    showError: function(){
      console.log("showerror")
        this.isError = true;
    },
    closeError: function(){
      this.isError = false;
    }
  }
};
</script>


<style scoped lang="scss">
h1{
  margin: 90px 20px 40px 20px;
}

.circle{
  cursor:pointer;

}
.submitbtn{
  margin: 20px auto;
}
.circle:before {
  content: ' \25CF';
  font-size: 40px;
}
span.circle.active{
  color: #400AA0;
}
.touchpointer{
  cursor:pointer;
  height: 86%;
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
.btns-container{  
  display:inline-block;
  width:100%;
  .optionbtn{
        cursor:pointer;
        width: 200px;
        max-width: 90%;
        margin: 20px auto;
        border: 1px solid #87FFF2;
        border-radius: 30px;
        padding: 11px 7px;
        &.active{
          background-color:#87FFF2;
          color: #323232;
        }
  }
}

.error-layer{
  display:none;
  position: absolute;
  top: 0px;
  height:100%;
  background-color: #323232;
  z-index:9005;
  &.active{
    display:block;
  }
  img{
     margin-top:20px;
     max-width: 200px;

  }
  .text{
    padding: 0 10px;
    @media print, screen and (min-width: 40em) {
        padding: 0 35px;
    }
  }
  .submitbtn{
    margin-top:50px;
  }
}

.levelscreen{
  display:none;
  background-color:#323232;
    z-index: 9002;
    position: absolute;
    height: 100%;
    &.active{
      display:block;
    }
}
</style>
