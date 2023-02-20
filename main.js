var X = 0;
var Y = 0;
function preload(){
nomequeeuquiser = loadImage('https://i.postimg.cc/x17wZP4y/Ilustra-o-Bigode-PNG.png')
}
function setup(){
canvas = createCanvas(500, 500);
canvas.center();
video = createCapture(VIDEO);
video.size(500, 500);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}
function draw(){
    image(video, 0, 0, 500, 500);
    fill(225,0,0);
    stroke('white');
    //circle(X,Y,20)
    image(nomequeeuquiser, X-25, Y, 50, 50);
}
function salvador(){
    save('123.png')
}
function modelLoaded(){
console.log('que burro da 0 para ele');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
     X = results[0].pose.nose.x
     Y = results[0].pose.nose.y
    console.log('nariz X = ' + X)
    console.log('nariz y = ' + Y)
    }
}