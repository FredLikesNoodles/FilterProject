function preload() {}
function setup() {
  canvas = createCanvas(800, 700);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(800, 700);
  video.hide();
  posenet = ml5.poseNet(video, modelLoaded);
  posenet.on("pose", gotPoses);
}

function draw() {
  image(video, 0, 0, 800, 700);
}

function take_snapshot() {
  save("mypic.png");
}
function modelLoaded() {
  console.log("poseNet model has been loaded");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    x = results[0].pose.nose.x;
    y = results[0].pose.nose.y;
    console.log(x);
    console.log(y);
  }
}
