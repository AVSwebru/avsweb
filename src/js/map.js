
var map;
 
function initMap() {
  if (google) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 51.700440, lng: 39.149655 },
      zoom: 12,
      styles:
        [
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#444444"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
              {
                "color": "#f2f2f2"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "lightness": 45
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
              {
                "color": "#f0228c"
              },
              {
                "visibility": "on"
              }
            ]
          }
        ]


    });
        // Создаем маркер на карте
      var marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 51.700440, lng: 39.149655},

        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,
        icon: {
          url: "../img/custom-marker.svg"
        },
        animation: google.maps.Animation.BOUNCE,
        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: 'Наш маркер: Большой театр'
      });
  }
}

window.addEventListener('load', initMap);
