/*Slider styles */
var slider = document.getElementById("myRange");

slider.addEventListener("mousemove", function () {
  var x = slider.value;
  var color = "linear-gradient(90deg, #a4f3eb" + x + "%, #ecf0fb" + x + "%)";
  slider.style.background = color;
});
