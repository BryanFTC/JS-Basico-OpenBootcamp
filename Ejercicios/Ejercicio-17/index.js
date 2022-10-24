let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 43.670278,
        lng: -79.386667,
      },
      map,
      title: "Toronto",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 43.062083,
        lng: 141.354389,
      },
      map,
      title: "Sapporo",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 46.94798,
        lng:  7.44743,
      },
      map,
      title: "Berna",
    })
  );
}