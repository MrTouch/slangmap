
  // create a function to make a directions request
export function getRoute(map, routeCoordinateString, accessToken, http) {
    
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change
    var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + routeCoordinateString + '?steps=true&geometries=geojson&access_token=' + accessToken;
    //console.log(url);
    //var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[0] + ',' + start[1] + ';-0.115992,51.511566;-0.125756,51.521815;' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + accessToken;
    // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    http.get(url)
    .then(res =>{
        var json = JSON.parse(res.bodyText);
        var data = json.routes;
        var route = data[0].geometry.coordinates;
        var geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        };
      // if the route already exists on the map, reset it using setData
      if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
      } else { // otherwise, make a new request
        //console.log("addlayer geojson", geojson)
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: geojson
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#000000',
            'line-width': 5,
            'line-opacity': 0.75
          }
        });

      }
    }).catch(err =>{

        console.error(err);
    })
  }

  // create a function to make a directions request
export function getRouteFinished(map, routeCoordinateString, accessToken, http) {
    
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change
    var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + routeCoordinateString + '?steps=true&geometries=geojson&access_token=' + accessToken;
    //console.log(url);
    //var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[0] + ',' + start[1] + ';-0.115992,51.511566;-0.125756,51.521815;' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + accessToken;
    // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    http.get(url)
    .then(res =>{
        var json = JSON.parse(res.bodyText);
        var data = json.routes;
        var route = data[0].geometry.coordinates;
        var geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        };
      // if the route already exists on the map, reset it using setData
      if (map.getSource('routeFinished')) {
        map.getSource('routeFinished').setData(geojson);
      } else { // otherwise, make a new request
        //console.log("addlayer geojson", geojson)
        map.addLayer({
          id: 'routeFinished',
          type: 'line',
          source: {
            type: 'geojson',
            data: geojson
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#8AD154',
            'line-width': 5,
            'line-opacity': 0.75
          }
        });

      }
    }).catch(err =>{

        console.error(err);
    })
  }