function initMap() {
    //10.853339163347586, 106.74586824282119 22 Duong so 21, phuong Linh Dong, Thu Duc, TPHCM
    const uluru = { lat: 10.853339163347586, lng: 106.74586824282119 }; //10.853339163347586, 106.74586824282119
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}