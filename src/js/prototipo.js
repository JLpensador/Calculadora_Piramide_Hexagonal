function calculate() {
  var baseSideLength = document.getElementById("baseSideLength").value;
  var pyramidHeight = document.getElementById("pyramidHeight").value;

  var totalArea = baseSideLength + 2 * (1 / 2) * baseSideLength * pyramidHeight;
  var volume = (1 / 3) * baseSideLength * pyramidHeight;

  document.getElementById("totalArea").innerHTML = totalArea;
  document.getElementById("volume").innerHTML = volume;
}
