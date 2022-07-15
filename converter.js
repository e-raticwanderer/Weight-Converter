/* When the input field receives input, convert the value from pounds to kilograms */

function poundsweightConvert(value) {
  document.getElementById("Kilograms").innerHTML = value / Math.round(2.2046);
  document.getElementById("Ounces").innerHTML = value / 35.274;
  document.getElementById("Grams").innerHTML = value / 1000;
  document.getElementById("Stones").innerHTML = value / 0.1574;
}
