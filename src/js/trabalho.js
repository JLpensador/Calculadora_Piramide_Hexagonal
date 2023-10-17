function calculate() {
    
    var baseSideLength = document.getElementById("baseSideLength").value;
    var pyramidHeight = document.getElementById("pyramidHeight").value;
   
    // var baseArea = 6 * (baseSideLength ** 2) / 4; 
   
    // var totalArea = baseArea + 6 * (baseSideLength * pyramidHeight) / 2; 
    
    // var volume = (1 / 3) * baseArea * pyramidHeight; 

    var totalArea = baseSideLength + 2 * (1/2) * baseSideLength * pyramidHeight;
    var volume = (1/3) * baseSideLength * pyramidHeight;
   
    document.getElementById("totalArea").innerHTML = totalArea;
    document.getElementById("volume").innerHTML = volume;
 }
