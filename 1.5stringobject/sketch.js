//https://github.com/shiffman/A2Z-F16
//https://github.com/CodingRainbow/Rainbow-Code/blob/master/A2Z/01_05_Strings/sketch.js
var txt;
var input;
var submit;

function setup() {
  noCanvas();
  input=select("#txt");
  submit = select("#submit");
  submit.mousePressed(newText);
}
function newText() {
  var s=input.value();
  createP(s.length);
  console.log(input.value());

  var words = splitTokens(s, ', ');
  for (var i = 0; i < words.length; i++) {
    createP(words[i]);
  }

  words = words.sort();
  s = join(words, ' ');
  createP(s);
}
