function heure() {
  var dayJSPlugH = dayjs().hour();
  var dayJSPlugM = dayjs().minute();
  var dayJSPlugS = dayjs().second();

  document.getElementById("heure").innerHTML = dayJSPlugH;
  document.getElementById("min").innerHTML = dayJSPlugM;
  document.getElementById("sec").innerHTML = dayJSPlugS;
}
setInterval(heure, 10);
