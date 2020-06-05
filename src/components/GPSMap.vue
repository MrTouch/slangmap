<template>
  <MglMap
    container="map"
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
    @load="onMapLoad"
    :center="centerCoordinates"
    ref="mb"
  >

    <MglMarker
      v-for="coordinate in markerCoordinates"
      :key="coordinate.id"
      :coordinates="coordinate.coordinate"
      color="blue"
    >
      <MglPopup
        :coordinates="coordinate.coordinate"
        anchor="top"
        @open="togglefunction(coordinate.coordinate)"
      >
        <div>
          <span>{{coordinate.text}}</span>
          <br />
          <span>Test Text</span>
          <div v-on:click="go2RouteVideo( coordinate.lessonId, coordinate.lessonPart)">Start Lesson</div>
        </div>
      </MglPopup>
    </MglMarker>
  </MglMap>
</template>


<script>
//import mapstyles from "@/styles.js";
import shared from "@/shared.js";
import cookies from "@/cookies.js";
import Mapbox from "mapbox-gl";
import { addthreedlayer, function2 } from "@/assets/map/threedlayer";
import { getRoute, getRouteFinished } from "@/assets/map/route";
import {
  MglMap,
  MglMarker,
  MglPopup,
  MglGeojsonLayer,
  MglNavigationControl
} from "vue-mapbox";

export default {
  name: "GpsMap",
  components: {
    MglMap,
    MglMarker,
    MglGeojsonLayer,
    MglPopup,
    Mapbox,
    MglNavigationControl
  },
  props: {},
  data: function() {
    return {
      id: cookies.getCookie("id"),
      centerCoordinates: [8.5403, 47.3779],
      userPosition: {
        "longitude": null,
        "latitude" :null
      },
      markerCoordinates: {
        0: {
          id: 0,
          coordinate: [8.5403, 47.3779],
          text: "Zürich Hauptbahnhof",
          lessonId: 1,
          lessonPart: "part1"
        },
        1: {
          id: 1,
          coordinate: [8.538734, 47.375626],
          text: "Marker 1 Text",
          lessonId: 1,
          lessonPart: "part2"
        },
        2: {
          id: 2,
          coordinate: [8.540951, 47.37312],
          text: "Marker 2 Text",
          lessonId: 1,
          lessonPart: "part3"
        },
        3: {
          id: 3,
          coordinate: [8.544181, 47.37021],
          text: "Marker 3 Text",
          lessonId: 1,
          lessonPart: "part4"
        }
      },
      routeCoordinateString: "",
      finishedrouteCoordinateString: "",
      finishedLessons: {},
      //mapStyle: "mapbox://styles/mapbox/streets-v11",
      mapStyle: "mapbox://styles/mapbox/satellite-v9",
      accessToken:
        "pk.eyJ1IjoibXJ0b3VjaCIsImEiOiJjazlta2kybzQwNTV2M2Vta2RxN2R1cGRlIn0.c4oFVVtduKq5eCVvywfUeQ", // your access token. Needed if you using Mapbox maps
      coordinates: [8.5403, 47.3779]
    };
  },
  mounted: function() {
    console.log("mounted gps");
    this.id = cookies.getCookie("id");
  },
  async ready() {
      console.log("ready");
    //this.finishedLessons = await this.getUserData();
    //console.log("finishedlessons mounted", this.finishedLessons);
  },
  async created() {
    this.mapbox = Mapbox;
    await this.getUserPosition(true);
    this.finishedLessons = await this.getUserData();
  },
  methods: {
    togglefunction: function(coordinates) {
      console.log("toggle");
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
      this.userPosition = await this.getUserPosition();
      console.log("userpos", this.userPosition);
      const newParams = await asyncActions.flyTo({
        center: [this.userPosition.latitute, this.userPosition.longitude],
        zoom: 2,
        speed: 1
      });
      //$ means a value from vue.
      let map = this.$refs.mb.map;
      var start = [8.5403, 47.3779];
      var end = [8.4043, 47.3379];
      this.routeCoordinateString =
        this.markerCoordinates[0].coordinate[0] +
        "," +
        this.markerCoordinates[0].coordinate[1] +
        ";" +
        this.markerCoordinates[1].coordinate[0] +
        "," +
        this.markerCoordinates[1].coordinate[1] +
        ";" +
        this.markerCoordinates[2].coordinate[0] +
        "," +
        this.markerCoordinates[2].coordinate[1] +
        ";" +
        this.markerCoordinates[3].coordinate[0] +
        "," +
        this.markerCoordinates[3].coordinate[1];
      var http = this.$http;
      getRoute(map, this.routeCoordinateString, this.accessToken, http);
      //addthreedlayer(map);
    
      this.finishedLessons = await this.getUserData();
      let fcs = await this.createRouteForFinishedLessons();
      if(this.finishedrouteCoordinateString.length > 0){
        getRouteFinished(map,this.finishedrouteCoordinateString,this.accessToken,http);
      }

    },
    async createRouteForFinishedLessons(){
      let fl = await this.getUserData();
        //fucking ugly code:
        if(this.finishedLessons[0][0]){
            this.finishedrouteCoordinateString += this.markerCoordinates[0].coordinate[0] + ","+ this.markerCoordinates[0].coordinate[1]+";"
        }
        if(this.finishedLessons[0][1]){
            this.finishedrouteCoordinateString += this.markerCoordinates[1].coordinate[0] + ","+ this.markerCoordinates[1].coordinate[1]+";"
        } 
        if(this.finishedLessons[0][2]){
            
            this.finishedrouteCoordinateString += this.markerCoordinates[2].coordinate[0] + ","+ this.markerCoordinates[2].coordinate[1]+";"
        }
        if(this.finishedLessons[0][3]){
            
            this.finishedrouteCoordinateString += this.markerCoordinates[3].coordinate[0] + ","+ this.markerCoordinates[3].coordinate[1]+";"
        }
      //this.finishedrouteCoordinateString = this.finishedrouteCoordinateString.substring(0, this.finishedrouteCoordinateString.lenght -1);
    this.finishedrouteCoordinateString = this.finishedrouteCoordinateString.slice(0, -1);
    return this.finishedrouteCoordinateString.slice(0, -1);

    },
    go2RouteVideo: function(lessonId, lessonPart) {
      console.log("go2routevideo");
      this.$router.push("/map/lesson/" + lessonId);
    },
    async goToMarker(coordinates) {
      const asyncActions = this.event.component.actions;
      const newParams = await asyncActions.flyTo({
        center: [coordinates[0], coordinates[1]],
        zoom: 15,
        speed: 1
      });
    },
    getUserData: async function() {
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
    },
    getUserPosition: async function(first = false){
          if(navigator.geolocation){
              if(first == true){
                    await navigator.geolocation.getCurrentPosition(this.showPosition);
              }else{
                    await navigator.geolocation.getCurrentPosition(this.updatePosition);
              }
          }else{
            var error = "Geolocation is not supported by this browser.";
          }
      },
      showPosition: function(position){
        console.log('show', position.coords.latitude)
        this.userPosition["latitude"] = position.coords.latitude;
        this.userPosition["longitude"] = position.coords.longitude;
      },
      updatePosition: function(position){
        console.log('update',position)
      }

  }
};
</script>

<style lang="scss">
#map {
  min-height: 100vh;
  display: inline-block;
}
.mapboxgl-popup-content {
  color: black;
}
//#map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>