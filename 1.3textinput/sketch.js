// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/uNQSVU0IKec

var textfield;
var input;
var output;
var submit;

function setup() {
  noCanvas();
  input = createInput("your favorite food");
  //textfield = select("#blueberry");
  input.changed(newText);
  //input.input(newTyping);
  //textfield.input(newTyping);
  //output = select('#output');
  //submit = select("#submit");
  //submit.mousePressed(newText);

}

function newTyping() {
  output.html(textfield.value());
  console.log(input.value());
}


function newText() {
  createP(input.value());
  console.log(input.value());
}
