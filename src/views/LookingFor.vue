<template>
  <div class="lookingfor">
    <div class="grid-container full">
            <div class="grid-x warumnidfullbra">
           <div class="cell small-10 small-offset-1">
             </div>
             </div>
             </div>
    <h1>What are your interests? <br> Choose one or more!</h1> <br/>

    <form      
      id="interests"
      @submit.prevent="updateInterests"
      novalidate="true">
        <div class="interest" name="interests" v-for="interest of interests" :key="interest.name">
          <input v-model='interest.checked' type="checkbox" name="interests" :value='interest.name' :id='interest.name' /><label v-bind:class="{ active: interest.checked }" :for="interest.name">{{interest.name}}</label>
        </div>
        <div class="btnContainer">
          <input type="submit" value="Confirm" class="submitbtn">
        </div>
    </form>
    
    <!--
      <div class="grid-x warumnidfullbra">
        <div class="cell small-10 small-offset-1">
          <div class="container container-first">
              <div class="activities activities_checked" name="interest" v-for="interest in userInterests">
                <div class="select" v-on:click="deselectInterest(interest)">{{interest.fields.interest}}</div>
              </div>
          </div>
        </div>
      </div>
   
   <div class="grid-x">
      <div class="cell small-10 small-offset-1">
        <div class="container">
          <div class="activities " name="activity" v-for="interest in interests">
            <div class="select" v-if="interest.show" v-on:click="selectInterest(interest)">{{interest.name}}</div>
          </div>
        </div>
      </div>
    </div>
  -->
  </div>
</template>

<script>
// @ is an alias to /src
import cookies from "@/cookies.js";
import db from "@/db.js";

export default {
  name: "lookingfor",
  components: {
  },
   data:function (){
      return {
        cUserName : '',
        cName : '',
        cEmail : '',
        id:'',
        cSeenOnboarding: '',
        interests: [],
        userInterests:[],
        newInterests:[],
        visitedInterests: localStorage.visitedInterests ? localStorage.visitedInterests : false,
      }

  },
  mounted: function(){
    this.userInterests = [];
    this.cUserName = cookies.getCookie("username");
    this.cName = cookies.getCookie("name")
    this.id = cookies.getCookie("id");
    this.cEmail = cookies.getCookie("email");
    this.cSeenOnboarding = cookies.getCookie("seenOnboarding");
    this.interests = db.getInterestsAsArray("interests");
    this.getUserData();
    console.log("next display user interests")
    console.log(this.visitedInterests)
    if(this.visitedInterests){
      this.$router.push("/mode")
    }
    //update interests checked according to userdata.
  },
  methods: {
    /*
     getUserData: function(){
        contentfulClient.getEntries({
          'content_type': 'user',
          'sys.id': this.id
        })
        .then((entries)=>{
          entries.items.forEach((entry)=>{ 
            if(entry.fields && entry.fields.interests){
              console.log(entry.fields);
              entry.fields.interests.forEach((interest)=>{
                //check what happens here. is it necesairy?
                //interests.show = true;
                this.userInterests.push(interest);
                console.log("push to user interests");
              })
            }
            //get more data of user.
            /*
            entry.fields.music.forEach((genre)=>{
              genre.show = true;
              this.userMusic.push(genre);
            })*//*
          })
        }).catch();
    },*/
    getUserData: async function(){
        let entries = await contentfulClient.getEntries({
          'content_type': 'user',
          'sys.id': this.id
        });
        let entry = await entries.items.forEach((entry)=>{ 
            if(entry.fields && entry.fields.interests){
              console.log(entry.fields);
              entry.fields.interests.forEach((interest)=>{
                //check what happens here. is it necesairy?
                //interests.show = true;
                this.userInterests.push(interest);
              })
            }

          });

          //this.updateUserInterests(this.userInterests);
    },
    updateInterests: function(){

      this.newInterests = [];
      this.interests.forEach((interest)=> {			
        if(interest.checked == true){
          this.newInterests.push(interest);
        }			
      })	
      db.updateUserInterests(this.newInterests);
      localStorage.firstTimeMap = true;
      localStorage.visitedInterests = true;
      this.$router.push("/mode");
    },
    goToEvents: function(){
      console.log('function call events');
      this.$router.push("/map/events");
    },
    displayUserInterests: async function(displayInterests){
      console.log("userinterest", displayInterests);
      for (let interest of displayInterests) {
        if(interest.checked == true){
          console.log(this.interest);
          console.log(interest);
        }
      }
    }
    /*,
    selectInterest: function(interest){
      this.userInterests.forEach((cinterests)=>{
        if(cinterests.name == interests.name){
          interests.show = false;
        }
      })
      this.userInterests.push(interest)
    },
    deselectActivity: function(activity){
      this.userActivities.forEach((cactivity)=>{
        if(cactivity.fields.activity == activity.fields.activity){
          cactivity.show = true;
        }
      })
      this.currentActivities.pop(activity)
    },*/
  }
};
</script>

<style scoped lang="scss">

.lookingfor{
  
  h1{
    margin-top:50px;
    margin-bottom: 50px;
    font-size:20px;
  font-family: 'Roboto Slab', serif;
  text-transform: lowercase;
    }
}

.submitbtn{
  margin-bottom: 20px;
}  

form{
  &#interests{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .interest{
    margin: 15px 5px;
    input{
      display:none;
    }
    label{
      border: 1px solid #87FFF2;
      border-radius: 30px;
      padding: 11px 12px;
      &.active{
        background-color:#87FFF2;
        color: #323232;
      }
    }
  }
  .btnContainer{
    display:block;
    width: 100%;;
    margin-top:30px;
  }
}


</style>
