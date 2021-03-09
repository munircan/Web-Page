$(document).ready(function () {
    $('#about').click(function() {
    $('html, body').animate({
      scrollTop: $("#aboutus").offset().top
    }, 1500)
  }), 
  $("#home,#logo").click(function() {
    $("html, body").animate({ 
        scrollTop: 0 
    }, "slow");
    return false;
}),
    $('#communicate').click(function (){
      $('html, body').animate({
        scrollTop: $("#commu").offset().top
      }, 1500)
    }),
    $('#quality').click(function (){
        $('html, body').animate({
          scrollTop: $("#qual").offset().top
        }, 1500)
      }),
      $('#service').click(function (){
        $('html, body').animate({
          scrollTop: $("#serve").offset().top
        }, 1500)
      })
      $('#price').click(function (){
        $('html, body').animate({
          scrollTop: $("#pri").offset().top
        }, 1500)
      }),
      $('#backhome , #backlogo').click(function (){
        window.history.go(-1);
        //window.location = "index.html";
      })
});
/*
function getLocation () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (p) {
            var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
            var mapOptions = {
                center: LatLng,
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
            var marker = new google.maps.Marker({
                position: LatLng,
                map: map,
                title: "<div style = 'height:60px;width:120px'><b>Konumunuz:</b><br />Latitude: " + p.coords.latitude + "<br />Longitude: " + p.coords.longitude
            });
            google.maps.event.addListener(marker, "click", function (e) {
                var infoWindow = new google.maps.InfoWindow();
                infoWindow.setContent(marker.title);
                infoWindow.open(map, marker);
            });
        });
    } else {
        alert('Tarayıcınız Geolocation özelliklerini desteklemiyor');
    }
};
getLocation();*/
//if ingilizceye tıklanırsa jquery ile değerleri 