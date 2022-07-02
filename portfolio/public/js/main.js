// const apiKey =
//   "pk.eyJ1IjoiZXBpY3NhbmJlYXRzIiwiYSI6ImNsNTJmeWR6aTBmYWszY21hcmtkN2d4ZGkifQ._suiTDl45Rcip8d1Uh0yRA";

const map = L.map("map").setView([50.849, 4.35], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

//Markers
var a0001 = L.marker([50.87652, 4.36345]).addTo(map);
var a0002 = L.marker([50.85529, 4.3411]).addTo(map);
//Popup
a0001
  .bindPopup(
    `<b>A0001</b><br><p>Le canal.</p> <audio src="https://ipfs.io/ipfs/bafybeiankwaoxdld2c5a4yxmhhqr3qcduim4oyo2burukkvfn5eif2qwbu?filename=30%3A06%3A2022-7H45.3.wav" controls >`
  )
  .openPopup();
a0002
  .bindPopup(
    `<b>A0002</b><br>Devant MolenGeek.<br> <audio src="https://ipfs.io/ipfs/bafybeiczts35l7rltvsfffsudiotdzafoat4ph765xk2fuejee2y7m4xqy?filename=30%3A06%3A2022-8H20.wav" controls ></audio>`
  )
  .openPopup();

export { a0001, a0002 };
