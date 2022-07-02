function heure() {
  var dayJSPlug = dayjs().hour(24);

  document.getElementById("heure").innerHTML = dayJSPlug;
}
setInterval(heure, 10);
