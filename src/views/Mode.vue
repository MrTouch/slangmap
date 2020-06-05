<template>
   <div class="grid-container full">
      <div class="grid-x warumnidfullbra">
        <h1>are you traveling <br> virtually or for real?</h1>
        <div class="btns-container">
          <div class="optionbtn" v-bind:class="{ active: selectedMode.virtual }"  @click="selectMode('virtual')" >Virtually</div>
          <div class="optionbtn" v-bind:class="{ active: selectedMode.real }" @click="selectMode('real')" >For Real </div> <!--<span class="hint">GPS needs to be enabled.</span>-->

          </div>
            <div class="btns-container">
              <div class="submitbtn" v-bind:class="{ active: selectedMode.virtual || selectedMode.real }"  @click="submit" >Confirm</div>
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
             we'll send you a notification as soon as this function is ready. Until then, feel free to try out the beginners level. Happy Discovering!
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
  name: "mode",
    data: function() {
    return{
      cUserUserName: '',
      selectedMode:{
        virtual: false,
        real: false
      },
      isError: false
    }
  },
  mounted: function(){
    this.cUserUserName = cookies.getCookie("username");
  },
  methods: {
    selectMode: function (mode){
      if(mode == "real"){
        this.selectedMode[mode]=true;
        this.selectedMode["virtual"]=false;
      }else if(mode == "virtual"){
        this.selectedMode[mode]=true;
        this.selectedMode["real"]=false;
      }
    },
    submit: function(){
      //db.updateUserSeenOnboarding();
      //write in db necesairy?
      document.cookie = "mode="+this.selectedMode;
      console.log(this.selectedMode)
      if(this.selectedMode["real"] == true){
      this.showError();
      //this.$router.push("/gps_map");
    
      }else if(this.selectedMode["virtual"] == true){

        this.$router.push("/map");
    
      }},
    showError: function(){
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
  //margin: 15px 135px;
  margin: 0 auto;
  letter-spacing:2px;
  width: 90%;
  margin-top: 20px;
  font-size:20px;
  font-family: 'Roboto Slab', serif;
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
  margin-top: 50px;
  .optionbtn{
        cursor:pointer;
        width: 200px;
        max-width: 90%;
        margin: 20px auto;
        border: 1px solid #87FFF2;
        border-radius: 30px;
        padding: 11px 7px;
        text-transform: uppercase;
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
  h1{
    font-size:20px;
    font-family: "Roboto Slab", serif;
    font-weight:bold;
    text-align:center;
    text-transform: lowercase;
  }
}
</style>
