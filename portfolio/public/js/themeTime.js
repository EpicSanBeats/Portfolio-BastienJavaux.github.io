var t = new Date().getHours();

if (t < 10) {
  document.getElementById("momentDeLaJournee").innerHTML =
    '<i class="fa-solid fa-mug-saucer"></i>';
} else if (t < 20) {
  document.getElementById("momentDeLaJournee").innerHTML =
    '<i class="fa-solid fa-sun"></i>';
} else {
  document.getElementById("momentDeLaJournee").innerHTML =
    '<i class="fa-solid fa-moon"></i>';
}
