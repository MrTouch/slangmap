<template>
  <div id="mapContainer">
    <MenuNav :showMapLink="false"  :active="'home'"/>
    <div class="infoLayer" v-bind:class="{ active: isInfoLayer}">
      <div class="infoBox"  v-if="currentInfoBox === 1">
          <div class="infoText">
            Zoom into the map to choose a destination. The selected country will correspond to the language you want to learn.
          </div>
          <div @click="nextInfo" class="submitbtn ">
            Got it!
          </div>
      </div>

      <div class="infoBox"  v-if="currentInfoBox === 2">
          <div class="infoText">
            Where do you want to go? Choose one of the pins on the map to set your desired destination.
          </div>
          <div  @click="closeInfoLayer" class="submitbtn">
            Got it!
          </div>
      </div>

    </div>
    <MglMap
      container="map"
      :accessToken="accessToken"
      :mapStyle.sync="mapStyle"
      @load="onMapLoad"
      :center="centerCoordinates"
      ref="mb"
    >
      <!-- ref saves vue component as variable -->
      <!--<MglNavigationControl position="top-right" />-->
 <MglMarker
        v-for="coordinate in notImplementedLessons"
        :key="coordinate.name"
        :coordinates="coordinate.coordinate"
        color="#828282"
      >
        <MglPopup
          :coordinates="coordinate.coordinate"
          anchor="top"
          @open="goToMarkerStraight(coordinate.coordinate)"
        >
          <div>
            <h2>{{coordinate.title}}</h2>
            <p>{{coordinate.description}}</p>
             </div>
        </MglPopup>
      </MglMarker>

      <MglMarker
        v-for="coordinate in finishedLessons"
        :key="coordinate.id"
        :coordinates="coordinate.coordinate"
        color="#323232"
      >
        <MglPopup
          :coordinates="coordinate.coordinate"
          anchor="top"
          @open="togglefunction(coordinate.coordinate)"
        >
          <div class="popup-content-container">
            <h2>{{coordinate.title}}</h2>
            <p>{{coordinate.description}}</p>
            <div class="clickableText" v-on:click="go2RouteVideo( 1, coordinate.lessonPart)" v-if="(coordinate.id == 1 || finishedLessons[coordinate.lessonPart-1]['done'])">Start Lesson</div>
          </div>
        </MglPopup>
      </MglMarker>
      

      <MglMarker
        v-for="coordinate in finishedMarkers"
        :key="coordinate.name"
        :coordinates="coordinate.coordinate"
        color="#8AD154"
      >
        <MglPopup
          :coordinates="coordinate.coordinate"
          anchor="top"
          @open="togglefunction(coordinate.coordinate)"
        >
          <div>
            <h2>{{coordinate.title}}</h2>
            <p>{{coordinate.description}}</p>
            <div class="clickableText" v-on:click="go2RouteVideo( 1, coordinate.lessonPart)" v-if="(coordinate.id == 1 || finishedLessons[coordinate.lessonPart-1]['done'])">Start Lesson</div>
          </div>
        </MglPopup>
      </MglMarker>

      

      <MglMarker
        :coordinates="centerCoordinates"
        color="#8AD154"
        @click="cityfunction($event, centerCoordinates)"
        v-if="finishedLessons[1]['done'] && finishedLessons[4]['done'] && !mapSeen"
      >

      </MglMarker>
      <MglMarker
        :coordinates="centerCoordinates"
        color="#FD7122"
        @click="cityfunction($event, centerCoordinates)"
        v-if="finishedLessons[1]['done'] && !finishedLessons[4]['done'] && !mapSeen"
      >

      </MglMarker>
      <MglMarker
        :coordinates="centerCoordinates"
        color="#323232"
        @click="cityfunction($event, centerCoordinates)"
        v-if="!finishedLessons[1]['done'] && !mapSeen"
      >

      </MglMarker>
    </MglMap>

    <Level :showLevelLayer="showLevelLayer" :lessonId="lessonId" :lessonPart ="lessonPart"  />
  </div>
</template>


<script>
//import mapstyles from "@/styles.js";
import shared from "@/shared.js";
import cookies from "@/cookies.js";
import Mapbox from "mapbox-gl";
import lesson1 from "@/assets/lessons/lesson1"
import MenuNav from "@/components/MenuNav"
import notImplementedLessons from "@/assets/lessons/lessonsNotImplemented"
import { addthreedlayer, function2 } from "@/assets/map/threedlayer";
import { getRoute, getRouteFinished } from "@/assets/map/route";
import {
  MglMap,
  MglMarker,
  MglPopup,
  MglGeojsonLayer,
  MglNavigationControl
} from "vue-mapbox";
import Level from '@/components/Level';

export default {
  name: "Map",
  components: {
    MglMap,
    MglMarker,
    MglGeojsonLayer,
    MglPopup,
    Mapbox,
    MglNavigationControl,
    Level,
    MenuNav
  },
  props: {},
  data: function() {
    return {
      id: cookies.getCookie("id"),
      centerCoordinates: [8.544241, 47.376823],
      routeCoordinateString: "",
      finishedrouteCoordinateString: "",
      finishedLessons : localStorage.progress ? JSON.parse(localStorage.progress) : lesson1,
      mapSeen : localStorage.mapSeen ? localStorage.mapSeen : false,
      finishedMarkers: null,
      isInfoLayer: false,
      currentInfoBox: 1,
      mapStyle: "mapbox://styles/mapbox/streets-v11",
      accessToken:
        "pk.eyJ1IjoibXJ0b3VjaCIsImEiOiJjazlta2kybzQwNTV2M2Vta2RxN2R1cGRlIn0.c4oFVVtduKq5eCVvywfUeQ", // your access token. Needed if you using Mapbox maps
      coordinates: [8.5403, 47.3779],
      showLevelLayer: false,
      lessonId: 0,
      lessonPart: 0,
      notImplementedLessons : notImplementedLessons
    };
  },
  mounted: function() {
    console.log("mounted map");
    this.finishedMarkers = {};
    this.getFinshedMarkers();
    this.id = cookies.getCookie("id");
  },
  async created() {
    this.mapbox = Mapbox;
    
    //this.finishedLessons = await this.getUserData();
  },
  methods: {
    togglefunction: function(coordinates) {
      console.log("toggle");
      this.goToMarker(coordinates);
    },
    cityfunction: function($event, coordinates) {
      console.log("city");
      console.log($event.component)
      $event.component.remove();
      this.goToMarker(coordinates);
    },
    handleClick: function() {
      console.log("handle click");
    },
    onMapLoaded(event) {
      console.log("map loaded");
      // in component
      this.map = event.map;
    },
    async onMapLoad(event) {
      // Here we cathing 'load' map event
      const asyncActions = event.component.actions;
      this.event = event;
      console.log(this.mapSeen)
      if(this.mapSeen){
          console.log("not first time map")
          if(localStorage.lastPositionLng && localStorage.lastPositionLat){
          console.log("lng", localStorage.lastPositionLng, "lat", localStorage.lastPositionLat);
          const newParams = await asyncActions.flyTo({
            center: [localStorage.lastPositionLng, localStorage.lastPositionLat],
            zoom: 17,
            speed: 4,                
            bearing:"+180",
            pitch: 60
            });
          }

      }else{
        /*const newParams = await asyncActions.flyTo({
            center: [8.5403, 47.3779],
            zoom: 2,
            speed: 1
        });*/
        this.showInfoLayer();
      }
      //$ means a value from vue.
      let map = this.$refs.mb.map;
      var start = [8.5403, 47.3779];
      var end = [8.4043, 47.3379];

      this.routeCoordinateString =
        this.finishedLessons[1].coordinate[0] + "," + this.finishedLessons[1].coordinate[1] + ";" +
        this.finishedLessons[2].coordinate[0] + "," + this.finishedLessons[2].coordinate[1] + ";" +
        this.finishedLessons[3].coordinate[0] + "," +this.finishedLessons[3].coordinate[1] +  ";" +
        this.finishedLessons[4].coordinate[0] +  "," +this.finishedLessons[4].coordinate[1] +";" +
        this.finishedLessons[5].coordinate[0] +"," +this.finishedLessons[5].coordinate[1] +";" +
        this.finishedLessons[6].coordinate[0] +"," +this.finishedLessons[6].coordinate[1] +";" +
        this.finishedLessons[7].coordinate[0] +"," +this.finishedLessons[7].coordinate[1] +";" +
        this.finishedLessons[8].coordinate[0] +"," +this.finishedLessons[8].coordinate[1];
console.log("old coordinate string", this.routeCoordinateString)
        this.routeCoordinateString = "";
        if(!this.finishedLessons[1]["done"]){
        }
        if(!this.finishedLessons[2]["done"]){
          this.routeCoordinateString += this.finishedLessons[1].coordinate[0] + "," + this.finishedLessons[1].coordinate[1] + ";" 
        }
        if(!this.finishedLessons[3]["done"]){
           this.routeCoordinateString += this.finishedLessons[2].coordinate[0] + "," + this.finishedLessons[2].coordinate[1] + ";" 
        }        
        if(!this.finishedLessons[4]["done"]){
           this.routeCoordinateString += this.finishedLessons[3].coordinate[0] + "," + this.finishedLessons[3].coordinate[1] + ";" 
        }
        if(!this.finishedLessons[5]["done"]){
           this.routeCoordinateString += this.finishedLessons[4].coordinate[0] + "," + this.finishedLessons[4].coordinate[1] + ";" 
        }
        this.routeCoordinateString += this.finishedLessons[5].coordinate[0] + "," + this.finishedLessons[5].coordinate[1] + ";" 
        this.routeCoordinateString += this.finishedLessons[6].coordinate[0] +"," +this.finishedLessons[6].coordinate[1] +";" +
        this.finishedLessons[7].coordinate[0] +"," +this.finishedLessons[7].coordinate[1] +";" +
        this.finishedLessons[8].coordinate[0] +"," +this.finishedLessons[8].coordinate[1];
console.log("new coordinate string", this.routeCoordinateString);

      var http = this.$http;
      getRoute(map, this.routeCoordinateString, this.accessToken, http);
      addthreedlayer(map);
    
      //this.finishedLessons = await this.getUserData();
      let fcs = await this.createRouteForFinishedLessons();
      if(this.finishedrouteCoordinateString.length > 0){
        getRouteFinished(map,this.finishedrouteCoordinateString,this.accessToken,http);
      }

    },
    getFinshedMarkers: function(){
        var arfl = Object.entries(this.finishedLessons);
        console.log('arf', arfl)
       for (var i = 0; i < arfl.length; i++) {
            if(arfl[i][1]["done"] == true){
                this.finishedMarkers[i] = this.finishedLessons[i+1];
            }
        }
    },
    showInfoLayer: function(){
      this.isInfoLayer = true;
    },
    nextInfo: function(){
      this.isInfoLayer = false;
      setTimeout(()=>{
          this.isInfoLayer = true;
          this.currentInfoBox = this.currentInfoBox + 1;
      }, 2500);
    },
    closeInfoLayer: function(){
      this.isInfoLayer = false;
      this.currentInfoBox = 1; //not necesarry.
    },
    async createRouteForFinishedLessons(){
      //let fl = await this.getUserData();
      console.log("finished lessons", this.finishedLessons)
        //fucking ugly code:
        if(this.finishedLessons[1]["done"]){
            this.finishedrouteCoordinateString += this.finishedLessons[1].coordinate[0] + ","+ this.finishedLessons[1].coordinate[1]+";"
        }
        if(this.finishedLessons[2]["done"]){
            this.finishedrouteCoordinateString += this.finishedLessons[2].coordinate[0] + ","+ this.finishedLessons[2].coordinate[1]+";"
        } 
        if(this.finishedLessons[3]["done"]){
            
            this.finishedrouteCoordinateString += this.finishedLessons[3].coordinate[0] + ","+ this.finishedLessons[3].coordinate[1]+";"
        }
        if(this.finishedLessons[4]["done"]){
            
            this.finishedrouteCoordinateString += this.finishedLessons[4].coordinate[0] + ","+ this.finishedLessons[4].coordinate[1]+";"
        }
        if(this.finishedLessons[5]["done"]){
            
            this.finishedrouteCoordinateString += this.finishedLessons[5].coordinate[0] + ","+ this.finishedLessons[5].coordinate[1]+";"
        }        
        if(this.finishedLessons[6]["done"]){
            
            this.finishedrouteCoordinateString += this.finishedLessons[6].coordinate[0] + ","+ this.finishedLessons[6].coordinate[1]+";"
        }
        if(this.finishedLessons[7]["done"]){
            
            this.finishedrouteCoordinateString += this.finishedLessons[7].coordinate[0] + ","+ this.finishedLessons[7].coordinate[1]+";"
        }
        if(this.finishedLessons[8]["done"]){
            
            this.finishedrouteCoordinateString += this.finishedLessons[8].coordinate[0] + ","+ this.finishedLessons[8].coordinate[1]+";"
        }
      //this.finishedrouteCoordinateString = this.finishedrouteCoordinateString.substring(0, this.finishedrouteCoordinateString.lenght -1);
    this.finishedrouteCoordinateString = this.finishedrouteCoordinateString.slice(0, -1);
    return this.finishedrouteCoordinateString.slice(0, -1);

    },
    go2RouteVideo: function(lessonId, lessonPart) {
      let map = this.$refs.mb.map;
      console.log("go2routevideo");
      var longitude = map.getCenter().lng;
      var latitude = map.getCenter().lat

      localStorage.lastPositionLng = longitude;
      localStorage.lastPositionLat = latitude; 
      console.log("center", localStorage.lastPosition)
      if(!localStorage.selectedLevelName || localStorage.selectedLevelName == ''){
        this.showLevelLayer = true;
        this.lessonId = lessonId;
        this.lessonPart = lessonPart;
      }else{
        this.$router.push("/map/lesson/" + lessonId+'.'+lessonPart);
      }

    },
    async goToMarker(coordinates) {
      this.mapSeen = true;
      localStorage.mapSeen = this.mapSeen;
      const asyncActions = this.event.component.actions;
      const newParams = await asyncActions.flyTo({
        center: [coordinates[0], coordinates[1]],
        zoom: 17,
        speed: 1,
                
        bearing:"+180",
        pitch: 60
      });
    },
    async goToMarkerStraight(coordinates) {
      const asyncActions = this.event.component.actions;
      const newParams = await asyncActions.flyTo({
        center: [coordinates[0], coordinates[1]],
        zoom: 9,
        speed: 1,        
        bearing:"0",
        pitch: 0
      });
    },
    /*getUserData: async function() {
      let entries = await contentfulClient.getEntries({
        content_type: "user",
        "sys.id": this.id
      });
      let entry = await entries.items.forEach(entry => {
          
        if (entry.fields) {
            this.finishedLessons = entry.fields.finishedLessons;
          return entry.fields.finishedLessons
        }
      });
        return this.entry;
    }*/
  }
};
</script>

<style lang="scss">
#map {
  min-height: 100vh;
  display: inline-block;
}
.popup-content-container{
  margin:10px;
}
.mapboxgl-popup-content {
  font-family: 'manrope', 'sans-serif';
  user-select: none;
  color: #323232 !important;
  background-color: rgba(255,255,255,0.8);
  border: 2px solid #00BBBE;
  border-radius:30px;
  min-width:200px;
  padding: 0;
  p{
    font-size:16px;
    color:#323232;
    font-family: 'manrope', 'sans-serif';
    margin: 3px 0;
  }
  h2{
    color:#323232;
    font-size:20px;
    margin: 9px 0 0 0;
  }

}
.mapboxgl-map{
  font: 14px/20px 'manrope', 'sans-serif';
}
.mapboxgl-popup-anchor-top .mapboxgl-popup-tip{
    //border-bottom-color: #323232;
    &::before{
      content: '';
      position: absolute;
      right: calc(50% - 7.5px);
      top: 5px;
      background-color: rgba(255,255,255,1);;
      height: 15px;
      width: 15px;
      transform: rotate(45deg);
    }
    &::after{
        content: '';
        position: absolute;
        right: calc(50% - 8.5px);
        top: 2px;
        background-color: #00BBBE;
        height: 17px;
        width: 17px;
        transform: rotate(45deg);
        z-index: -1;

  }
}
.mapboxgl-popup-close-button{
  display:none;
}
#nav{
  display: none;
}
.clickableText{
  color: #00BBBE;
  cursor:pointer;
  font-family: 'manrope', 'sans-serif';
}
.infoLayer{
    display:none;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 900000;
    &.active{
      display: block;
    }
    .infoText{
      padding:5px;
    }
  .infoBox{
    background-color: rgba(50, 50, 50, 0.9);
    width: 75%;
      @media print, screen and (min-width: 40em) {
        max-width: 500px;
    }
    padding: 10px 20px;
    margin: 300px auto;
    padding-bottom:20px;
    border-radius: 15px;
    .submitbtn{
      margin-top:20px;
    }
  }
  .infoBtn{
    margin: 20px auto 0 auto;
  }
}


//#map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>