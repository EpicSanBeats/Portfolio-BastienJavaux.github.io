var t = new Date().getHours();

if (t < 10) {
  document.body.style.backgroundColor = "##B3E0F2";
} else if (t < 20) {
  document.body.style.backgroundColor = "##48A1D9";
} else {
  document.body.style.backgroundColor = "#F2CD5E";
}
