function preload(){

}
function setup(){
 canvas = createCanvas(700, 500);
 canvas.center();
 video = createCapture(VIDEO);
 video.center();
 video.hide();
}
function draw(){
  image(video, 0, 0, 700, 500);
}