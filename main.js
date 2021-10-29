leftEyeX=0;
leftEyeY=0;
function preload(){
horn=loadImage("https://i.postimg.cc/kXzPjJPL/48-483766-purple-devilhorns-devil-purpledevil-purpledevilhorns-purple-devil-horns-removebg-preview.png")
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO)
    video.size(600,400)
    video.hide()
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('pose net is initialized')
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        leftEyeX=results[0].pose.leftEye.x-90
        leftEyeY=results[0].pose.leftEye.y-130
        console.log("leftEye x=" +results[0].pose.leftEye.x);
        console.log("leftEye y=" +results[0].pose.leftEye.y);
    }
}

function draw(){
    tint('#8c56b8')
    image(video,0,0,600,400)
    image(horn,leftEyeX,leftEyeY,150,100)
}

function take_snapshot(){
    save('myFilter.jpg')
}

