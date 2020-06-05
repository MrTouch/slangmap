<template>
  <div class="register">
    <div class="grid-container full">
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
          <div class="grid-x warumnidfullbra">
           <div class="cell small-10 small-offset-1">
              <form
                id="register"
                @submit.prevent="checkForm"
                novalidate="true"
              >

                <p v-if="errors.length" id="errors">
                  <b>Please correct the following error(s):</b>
                  <ul>
                    <li v-for="error in errors">{{ error }}</li>
                  </ul>
                </p> 

                <p>
                  <input id="name" v-model="name" type="text" name="name" placeholder="Name" >
                </p>
                
                <p>
                  <input id="email" v-model="email" type="email" name="email"  placeholder="Email">
                </p>

                <p>
                  <input id="password" v-model="password" type="password" name="password"  placeholder="Password">
                </p>

                  <p>
                  <input class="submitbtn" type="submit" value="Sign Up">
                  </p>
              </form>
            </div>
          </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import cookies from "@/cookies.js";

export default {
  name: "register",
  components: {
  },
   data:function (){
      return {
      errors: [],
      username: "",
      name: "",
      email: "",
      password:""
      }

  },
  methods: {
      addUser: function(){
        contentfulManagementClient.getSpace('sxdh78bp7cct')
          .then((space) => space.getEnvironment('master'))
          .then((environment) => environment.createEntry('user', {
            fields: {
              username: {
                'en-US': this.username
              },
              name: {
                'en-US': this.name
              },
              email: {
                'en-US' : this.email
              },
              password: {
                'en-US' : this.password
              },
              seenOnboarding: {
                'en-US' : false
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

            this.$router.push("/");
            })
          .catch(console.error)
      },
/*
      displayImage: function(event){
        this.file = event.target.files[0];
        let urlReader = new FileReader();
        urlReader.onload = function(result) {
            //console.log(urlReader.result);
            //console.log(result);
            this.imgSrc  = urlReader.result;
        }.bind(this);
        urlReader.readAsDataURL(this.file)
      },
*/
      
      checkForm: function (e) {
        this.errors = [];
        if (!this.name) {
          this.errors.push("Name required.");
        }
        if (!this.email) {
          this.errors.push('Email required.');
        } else if (!this.validEmail(this.email)) {
          this.errors.push('Valid email required.');
        }
        if (!this.password) {
          this.errors.push("Password required.");
        }        
        if (!this.errors.length) {
          this.username = this.name + new Date().getTime()
          this.addUser();
          return true;
        }else{
         this.scrollTop();
        }

        e.preventDefault();
      },
      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      scrollTop: function(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    }
};
</script>

<style scoped lang="scss">


  #register{
    margin-top:75px;
    user-select: none;
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
      margin-top: 40px;
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
/*
#register{
    input:not([type='submit']){
      width: 100%;

      margin: 5px 0;
      
      padding-left: 5px;
      padding-top: 12px;
      padding-bottom: 6px;
      
      border:none;
      border-bottom:1px solid #fff;
      opacity: 1;

      background-color:#323232;

      display: inline-block;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      color: #fff;

      &:focus {outline: none;}
    }

    .submitbtn{
      width: 80%;
      margin-top: 20px;

    }


    #errors{
          margin-top: 40px;
          color: #e6475f;
              width: 100%;
        li{
          list-style: none;
          color: #e6475f;
    text-align: center;
        }
      }

      #profileimage{
        margin-top: 50px;
        border-bottom: none;
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
        margin-right:10%;
        float:right;
      }
    }

  }
  */
      .warumnidfullbra{
      width: 100%;
      }
.symbollogo{
    //margin-top:10px;
    #logo_symbol{
      width:150px;
      height:80px;
    }
  }
.slogan{
  color:#00BBBE;
  font-family:'Roboto Slab', serif;
  font-size:22px; 
  margin-top:15px;
}
</style>
