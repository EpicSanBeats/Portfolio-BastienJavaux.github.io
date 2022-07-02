function heure() {
  var dayJSPlug = dayjs().hour(12);

  document.getElementById("heure").innerHTML = dayJSPlug;
}
setInterval(heure, 10);
