function getRedArea(width, height){
  var areaRect = width * height;
  var radius = height / 2;
  var areaCircle = Math.PI * Math.pow(radius,2);
  var solution = (areaRect - (2 * areaCircle)) / 2;
  return (solution);
}

var answer = getRedArea(20,10);
console.log ("The solution is " + answer);
