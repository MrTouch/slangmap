<template>
  <div class="map">
    <!-- <Logout />
   <p> Email: {{cUserEmail}} </p> -->
    <GPSMap />
  </div>
</template>

<script>
// @ is an alias to /src
import GPSMap from "@/components/GPSMap.vue";
import Logout from "@/components/Logout.vue";
import cookies from "@/cookies.js";

export default {
  name: "gps_mapview",
  components: {
    GPSMap,
    Logout
  },
  mounted: function(){
    this.cUserName = cookies.getCookie("name");
    this.cUserLastName = cookies.getCookie("lastname");
    this.cUserEmail = cookies.getCookie("email");
  },
  data: function() {
    return{
      cUserName : "",
      cUserLastName : "",
      cUserEmail : "",
    }
  },
  methods:{

  }
};


</script>

<style scoped lang="scss">

.options_section{
  display:block;
  width:100%;
  margin-top:40px;
  margin-bottom:40px;
}

</style>

