
//Slider value updater
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

slider.oninput = function () {
  output.innerHTML = this.value;
}