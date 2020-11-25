/*Code from https://www.w3schools.com/html/html5_geolocation.asp */

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
   console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
    debugger;
  console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
}

export {getLocation};
