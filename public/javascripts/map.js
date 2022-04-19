mapboxgl.accessToken = 'pk.eyJ1Ijoic2hva29sYXQiLCJhIjoiY2s2Mmx4MWk3MDBjdTNwbnlrODNjOGwzayJ9.-QWso7fdPCt3Ap7X1Rbmig';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-103.462181, 25.551555],
    zoom: 11.9
});

map.addControl(new mapboxgl.NavigationControl());

const marker1 = new mapboxgl.Marker({ color: 'skyblue', properties: {title: 'Hola', desc: 'Mundo'}})
.setLngLat([-103.501632, 25.581021])
.addTo(map);

const marker2 = new mapboxgl.Marker({ color: 'skyblue'})
.setLngLat([-103.416852, 25.544339])
.addTo(map);

const marker3 = new mapboxgl.Marker({ color: 'skyblue'})
.setLngLat([-103.418398, 25.560910])
.addTo(map);

const marker4 = new mapboxgl.Marker({ color: 'skyblue'})
.setLngLat([-103.522493, 25.529469])
.addTo(map)