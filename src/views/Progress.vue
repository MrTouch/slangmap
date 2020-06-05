<template>
   <div class="grid-container full">
        <div class="grid-x warumnidfullbra">
            <div class="withmenucontainer">
            <MenuNav :active="'progress'" :showHomeLink="!isSwissDetailView && !isVocabularyView" :showSwissDetailView="isSwissDetailView" :showVocabularyView="isVocabularyView" @backToProgressOverview="backToProgressOverview" @backToSwissDetailView="backToSwissDetailView"/>

            <div id="progress" ref="progress" class="active"  :class="{ hide: isLanguageOverview || isVocabularyView || isSwissDetailView }">
                <div class="container">
                    <div><h2>progress</h2></div>
                                                                 
                        <div class="settings-item highlight" @click="showLanguageOverview">
                            <span class="settings-text">swiss-german</span> 
                            <span class="settings-text passive">Your vocabulary and performance</span> 
                                <img src="@/assets/icons/arrow-right.svg">
                        </div>
                        
                        <div class="settings-item highlight" @click="showError">
                            <span class="settings-text">french</span> 
                            <span class="settings-text passive">Your vocabulary and performance</span> 
                            <img src="@/assets/icons/arrow-right.svg">
                        </div>

                        <div class="settings-item highlight" @click="showError">
                            <span class="settings-text">swedish</span> 
                            <span class="settings-text passive">Your vocabulary and performance</span> 
                            <img src="@/assets/icons/arrow-right.svg">
                        </div>

                    </div>
                </div>    

                <div id="languageOverview" class="no-margin"  ref="languageOverview"  :class="{ active: isSwissDetailView}" v-if="isSwissDetailView">
                    <div class="container">
                        <div class="language">
                            <div><h2>swiss-german</h2></div>
                            <img src="@/assets/icons/donut.svg">
                            <div class="text">correctly solved exercises</div>
                            <div class="lrc">
                                <div class="left">
                                    <img src="@/assets/icons/104.svg">
                                    <div class="text">total words learned</div>
                                </div>
                                <div class="right">
                                    <img src="@/assets/icons/1.png">
                                    <div class="text">route completed</div>
                                </div>
                            </div>

                        <div class="btns-container">
                            <div class="submitbtn" @click="showVocabulary" >MY VOCABULARY</div>
                        </div>

                    </div>

                    </div>
                </div> 

                <div id="vocabulary" class="no-margin"  ref="vocabulary"   :class="{active: isVocabularyView}"  v-if="isVocabularyView">
                    <div class="container">
                        <div class="voci">
                            <div class="centered-title"><h2>my vocabulary</h2></div>
                            
                            <div class="cat-container"  @click="showError">
                                <img src="@/assets/icons/gastronomy.png"/>
                            </div>
                            <div class="cat-container"  @click="showError">
                                <img src="@/assets/icons/history.png"/>
                            </div>
                            <div class="cat-container"  @click="showError">
                                <img src="@/assets/icons/landmarks.png"/>
                            </div>
                              <div class="cat-container"  @click="showError">
                                <img src="@/assets/icons/museumarts.png"/>
                            </div>
                            <div class="cat-container"  @click="showError">
                                <img src="@/assets/icons/music.png"/>
                            </div>
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
import MenuNav from "@/components/MenuNav";


export default {
  name: "Progress",
  components: {
      MenuNav,
  },
  props: {
      
  },
  data: function(){
        return {
            cUserUserName : "",
            cUserName : "",
            cUserEmail : "",
            isLanguageOverview : false,
            isSwissDetailView : false,
            isVocabularyView : false,
            isError : false
        } 
  },
  mounted: function(){
    this.cUserUserName = cookies.getCookie("username");
    this.cUserName = cookies.getCookie("name");
    this.cUserEmail = cookies.getCookie("email");
    this.cseenOnboarding = cookies.getCookie("seenOnboarding");
    this.$refs.progress.classList.add("active")
        this.$root.hideNav = true;
    console.log(this.cUserUserName)
  },
  methods: {
      showVocabulary: function(){
          this.$refs.languageOverview.classList.remove("hide");
          this.isVocabularyView = true;
          this.isSwissDetailView = false;
      },
      showLanguageOverview: function(){
          this.isSwissDetailView = true;
          this.$refs.progress.classList.add("hide");

      },
      backToProgressOverview: function(){
          this.isSwissDetailView = false;
          this.$refs.progress.classList.remove("hide");
      },
      backToSwissDetailView: function(){
          console.log("backj to swiss detail")
          //this.isVocabularyView = false;
          this.isVocabularyView = false;
          this.isSwissDetailView = true;
          
      },
      showError: function(){
          this.isError = true;
      },
      closeError: function(){
          this.isError = false;
      }
  }
}
</script>

<style lang="scss" scoped>

#progress, #languageOverview, #vocabulary{
    
    position: absolute;
    left:100%;
    transition: left 0.6s ease-in;  
    margin-top:50px;
    text-align:left;
    width: 100%;
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
.lrc{
    margin-top:20px;
    display: flex;
    justify-content: center;
}
.left,.right{
    display: inline-block;
    margin:1px 5px 20px 5px;
    width: 40%;
}
.text{
    margin-top:10px;
}
.container{
    width: 100%;;
    .language{
        width:90%;
        margin: 0 auto;
        text-align:center;
    }
}
.centered-title{
    width: 90%;
    margin: 0 auto;

}
.settings-item{
        margin: 10px 0 0 0;
        cursor:pointer;
        position: relative;
        &.highlight{
            border: 1px solid #00BBBE;
            padding: 15px 15px 30px 15px;
            background-color: #4F4F4F;
            border-radius: 15px;
        }

        img{
            margin-right: 10px;
            float:right;

            &.pull-down{
                margin-top:15px;
            }
            margin-top:10px;
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
            font-weight: bold;
            font-size: 14px;
            &.passive{
            font-family: 'Manrope', sans-serif;
                font-size:12px;
                position: absolute;
                font-weight: normal;
                left: 15px;
                top: 37px;

            }
        }
    }
#vocabulary h2{
    margin-top:0;
    margin-left: 20px;;
}
h2{
    font-family: "Roboto Slab", serif;
    font-size: 18px;
    font-weight:bold;
}
.withmenucontainer{
    position: fixed;
    display: inline-block;
    width: 100%;
    height: 100%;
    #progress{
        width: 90%;
    margin: 0 auto;
    position: relative;
    margin-top: 80px;
    }
    #languageOverview{
        position: fixed;
        top:70px;
    }
    #vocabulary{
        position: fixed;
        top: 85px;
    }
}
    .cat-container{
        width:100%;
        cursor: pointer;
        text-align: center;
        margin: 10px 0px;
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
