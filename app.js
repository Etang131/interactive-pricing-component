/*Slider styles */
var sliderPrice = document.getElementById("myRange");
var output = document.getElementById("myRange").value;

//Make switch statement to get var value to show for the price
/*
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


*/

var start_value = sliderPrice.getAttribute("value");

var x = start_value;
var color =
  "linear-gradient(90deg, rgb(164, 243, 235)" +
  x +
  "% , rgb(236, 240, 251)" +
  x +
  "%)";
sliderPrice.style.background = color;

sliderPrice.addEventListener("mousemove", function () {
  x = sliderPrice.value;
  color =
    "linear-gradient(90deg, rgb(164, 243, 235)" +
    x +
    "% , rgb(236, 240, 251)" +
    x +
    "%)";
  sliderPrice.style.background = color;
});
