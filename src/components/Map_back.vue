<!--<template>
    <div class="grid-container full">
        <div class="grid-x warumnidfullbra">
            <div class="cell small-12">
                <div id="map"></div>
            </div>
        </div>
        <div class="fixed_bottom">
             <div class="options_section"> 
                <div id="option_people" v-bind:class="{active: userMode}" class="hCursor map_option" v-on:click="changeMapToPeople"><h2>People</h2></div>
                <div id="option_events"  v-bind:class="{active: !userMode}"  class="hCursor map_option" v-on:click="changeMapToEvents"><h2>Events</h2></div>
                <div class="chatcontainer">
                    <div class="chatbtn">
                        <img src="../assets/white_chat.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>-->

<template>
  <div id="map">
      
  </div>

</template>


<script>
import mapstyles from "@/styles.js";
import shared from "@/shared.js";
import cookies from "@/cookies.js";
import mapboxgl from 'mapbox-gl'


export default {
  name: "Map",
  components:{
      
  },
  props: {
  },
  data: function (){
      return {
          style : {},
          userMode : true,
          userLat : 0,
          userLng : 0,
          markers : [],
          mapboxgl: {},
          map: {},
          canvas: {},
          start: [],
          geojson:{},
          accessToken: "pk.eyJ1IjoibXJ0b3VjaCIsImEiOiJjazlta2kybzQwNTV2M2Vta2RxN2R1cGRlIn0.c4oFVVtduKq5eCVvywfUeQ", // your access token. Needed if you using Mapbox maps
      }
  },
    mounted: function() {
        const element = document.getElementById("map");
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [8.540537,47.378497],
            zoom: 15.5,
            pitch: 45,
            bearing: -17.6,
            antialias: true,
            accessToken: this.accessToken
        }); 
        //this.canvas = map.getCanvasContainer();
        this.start = [-0.0983506,51.5138453];
        this.geojson = {
            type: 'FeatureCollection',
            features: 
            [{
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-0.0989506, 51.5131453]
                },
                properties: {
                    title: 'Popup Title',
                    description: 'Popup Description'
                }
            },
            { 
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-0.0983236, 51.5138453]
                },
                properties: {
                    title: 'Saint Paul\'s Cathedral',
                    description: 'Lorem ipsum....'
                }
            },
            { 
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-0.100827,51.512101]
                },
                properties: {
                    title: 'Synology Church',
                    description: 'Lesson 3: Don\'t join synology.'
                }
            }]
        };
/*
    this.getUserPosition(true);
    this.interval = setInterval(() => this.getUserPosition(), 100000);
    this.interval2 = setInterval(() => this.updateMapData(), 7000);
    this.style = mapstyles["lighttheme"];
    if(this.$route.params.pref){
        if(this.$route.params.pref == "user"){
            this.userMode = true;
            this.style = mapstyles["lighttheme"];
        }else if(this.$route.params.pref=="events"){
            this.userMode = false;          
            this.style = mapstyles["darktheme"];
        }
    }*/
  },
  created(){

  },
  methods:{
    onMapLoaded(event) {
      // in component
      this.map = event.map;
      // or just to store if you want have access from other components
      this.$store.map = event.map;
    },
       getUserPosition: function(first = false){
          if(navigator.geolocation){
              if(first == true){
                    navigator.geolocation.getCurrentPosition(this.showPosition);
              }else{
                    navigator.geolocation.getCurrentPosition(this.updatePosition);
              }
          }else{
            var error = "Geolocation is not supported by this browser.";
          }
      },
    updatePosition: function(position){
          //update position in database (contentful)

        window.contentfulManagementClient.getSpace('vqa5vjiwaxli')
        .then((space)=>{
          space.getEntry(cookies.getCookie("id"))
          .then(async (entry)=>{
            //let music = {'en-US':[{sys:{id:"4wcSKrltAI2eao2WIgiais", linkType:'Entry', type: 'Link'}}]};
            entry.fields.lat = {'en-US' : position.coords.latitude};
            entry.fields.long = {'en-US' : position.coords.longitude};
            return entry.update();
            //return null;
          }).then(entry =>{ return entry.publish();})
        })
      },
      changeMapToPeople: function(){
          console.log(this.userMode);
          if(!this.userMode){
              this.userMode = true;

          }
        this.changeMap();
       this.$router.push("/map/user");
      },
      changeMapToEvents: function(){
          if(this.userMode){
              this.userMode = false;
          }
           this.changeMap();
            
       this.$router.push("/map/events");
      },
      resetData: function(){

            this.markers.forEach(function(marker) {
                marker.setMap(null);
            }); 
            this.markers = [];
        }
  }
}
</script>

<style scoped lang="scss">
/*
    #map {
        height: 90vh;
        width: 100vw;
        display:inline-block;
    }
    */
	#map { position: absolute; top: 0; bottom: 0; width: 100%; }
    .mapboxgl-popup {
        max-width: 400px;
        font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
    }
</style>

<style lang="scss">
    #map{
        bottom: -20px;
        .profileimg{
            border-radius: 50%;
            max-width:200px;
        }
        .location img {
           border-radius:10px;
        }
        #markerLayer img {
           border-radius:30px;
        }
    }

    .fixed_bottom{
        position: absolute;
        width:100%;
        bottom: 0;
        background-color: rgba(50,50,50,0.8);
       
        .map_option{
            display: inline-block;
            width: 50%;
            text-transform: uppercase;
            font-weight: 700;
        }
        #option_people{
            &.active{
                color:#e6475f;
            }
        }
        #option_events{
            &.active{
                color:#a06a2c;
            }
        }
        .chatcontainer{
            position: absolute;
            width:100%;
            height: 44px;
            bottom:44px;
            .chatbtn{
                display:inline-block;
                text-align:center;
                width:50px;
                height:50px;
                border-radius: 50%;
                padding: 0px;
                text-align: center;
                text-transform: uppercase;
                transition: 0.5s;
                color: white;
                cursor:pointer;
                margin-top:10px;
                /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
                border-bottom:none;
                /*background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);*/
                background-image: linear-gradient(to right, #e6475f 0%, #ef8138 100%);
                img{
                    padding: 10px;
                    }
            }
        }
       
    }
</style>