let video;
let poseNet;
let poses = [];
let leftWristX = 0;
let rightWristX = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelLoaded);

  // This sets up an event that listens to 'pose' events
  poseNet.on('pose', gotPoses);

  // Hide the video element, and just show the canvas
  video.hide();
}

function modelLoaded() {
  console.log('Model Loaded!');
}

function gotPoses(results) {
  poses = results;
  if (poses.length > 0) {
    leftWristX = poses[0].pose.keypoints[9].position.x;
    rightWristX = poses[0].pose.keypoints[10].position.x;
  }
}

function draw() {
  background(0); // Set background color to black
  
  textSize(floor(abs(leftWristX - rightWristX))); // Dynamic text size based on wrist movement
  fill(255); // Set text color to white
  
  text('Kavin', 50, 100); // Replace 'Your Name' with your actual name and adjust coordinates
}
