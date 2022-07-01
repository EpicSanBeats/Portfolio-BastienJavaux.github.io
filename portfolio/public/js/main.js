// import L from "../../node_modules/leaflet/dist/leaflet";

const apiKey =
  "pk.eyJ1IjoiZXBpY3NhbmJlYXRzIiwiYSI6ImNsNTJmeWR6aTBmYWszY21hcmtkN2d4ZGkifQ._suiTDl45Rcip8d1Uh0yRA";

const map = L.map("map").setView([50.849, 4.35], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

//Markers
var a0001 = L.marker([50.87652, 4.36345]).addTo(map);
var a0002 = L.marker([50.85529, 4.3411]).addTo(map);

//Popup
a0001.bindPopup(`<b>A0001</b><br><p>I am a popup.</p>`).openPopup();
a0002
  .bindPopup(
    `<b>A0002</b><br>Devant MolenGeek.<br> <audio src="../../portfolio/public/audio/A0002.wav" controls ></audio>`
  )
  .openPopup();
