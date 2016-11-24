//var txt;
//function preload() {
  //txt=loadStrings("myfile.txt");
//}
function loadFile() {
  //txt=loadStrings("myfile.txt");
  txt=loadStrings("myfile.txt",fileLoaded);
}
function fileLoaded(data){
  createP(join(data,"<br>"));
  console.log(data);
}
function fileSelected(file){
  createP(file.data);
  //console.log(file);
  console.log(file.name+" "+file.size+" "+ file.type);
}
function setup() {
  noCanvas();
  createFileInput(fileSelected);

  var button=select("#loadfile");
  button.mousePressed(loadFile);

  //console.log(txt);
  //createP(join(txt,"<br/>"));
}
