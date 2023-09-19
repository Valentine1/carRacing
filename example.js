const carCanvas = document.getElementById("carCanvas");
carCanvas.height = window.innerHeight;
carCanvas.width = 800;

const carCtx = carCanvas.getContext("2d");
let angle = 0;
let xDelta = 0;
let yDelta = 0;
let controls = new Controls("KEYS");
let speed = 0;
let acceleration = 0.015;
let deceleration = 0.03
let maxSpeed = 2;
let borderPath = "m 825,315 h 90 l 156,73 l 90,126 v 73 v 8 l 24,13 l 42,7 h 416 h 24 l 42,-7 l 24,-13 v -8 v -73 l 90,-126 l 156,-73 h 91 h 91 l 156,73 l 90,126 v 886 v 8 l 24,13 l 42,7 h 25 h 25 l 42,-7 l 24,-13 v -8 v -73 l 90,-126 l 156,-73 h 90 h 24 l 42,-7 l 24,-13 l 1,-621 l -1,-73 l 90,-126 l 156,-73 h 90 h 90 l 156,73 l 90,126 v 1306 v 73 l -90,126 l -156,73 h -1280 h -90 l -156,-73 l -90,-126 v -73 v -8 l -24,-13 l -42,-7 h -24 h -24 l -42,7 l -24,13 v 8 v 73 l -90,126 l -156,73 h -1032 h -90 l -156,-73 l -90,-126 v -73 v -73 l 90,-126 l 156,-73 h 90 h 24 l 42,-7 l 24,-13 v -8 v -73 l 90,-126 l 156,-73 h 114 l 42,-7 l 24,-13 v -8 v -8 l -24,-13 l -42,-7 h -462 l -156,-73 l -90,-126 v -304 v -73 l 90,-126 l 156,-73 h 92 m 0,245 h -26 l -42,7 l -24,13 v 8 v 239 l 24,13 l 42,7 h 24 h 438 l 156,73 l 90,126 v 73 v 73 l -90,126 l -156,73 h -90 h -24 l -42,7 l -24,13 v 8 v 73 l -90,126 l -156,73 h -90 h -24 l -42,7 l -24,13 v 8 v 8 l 24,13 l 42,7 h 24 h 966 l 42,-7 l 24,-13 v -8 v -73 l 90,-126 l 156,-73 h 90 h 90 l 156,73 l 90,126 v 73 v 8 l 24,13 l 42,7 h 25 h 1215 l 42,-7 l 24,-13 v -8 v -1241 l -24,-13 l -42,-7 h -25 h -25 l -42,7 l -24,13 v 8 v 686 l -90,126 l -156,73 h -90 h -24 l -42,7 l -24,13 v 8 v 73 l -90,126 l -156,73 h -90 h -90 l -156,-73 l -90,-126 v -73 v -820 l -24,-13 l -42,-7 h -25 h -25 l -42,7 l -24,13 v 8 v 73 l -90,126 l -156,73 h -90 h -481 l -156,-73 l -90,-126 v -73 v -8 l -24,-13 l -42,-7 h -25";

animate();
function animate() {
  carCanvas.height = window.innerHeight;
 // rotating();


  carCtx.beginPath();
  carCtx.rect(350, 400, 26, 50);
  carCtx.strokeStyle = "red";
  carCtx.stroke();

  carCtx.save();
  carCtx.translate(350 + 13 , 400 + 3);
  carCtx.rotate(angle);

  if (controls.forward) {
    speed += acceleration;
  }

  if (controls.reverse) {
    speed -= deceleration;
  }

  if (speed > maxSpeed) {
    speed = maxSpeed
  }

  if (speed < -maxSpeed / 2) {
    speed = -maxSpeed / 2
  }

  if (speed != 0) {
    const flip = speed > 0 ? 1 : -1;
    if (controls.left) {
      angle += 0.009* flip;
    }
  
    if (controls.right) {
      angle -= 0.012* flip;
    }
  }


  xDelta -= Math.sin(angle) * speed;
  yDelta -= Math.cos(angle) * speed;
  console.log(xDelta);

  carCtx.beginPath();
  carCtx.strokeStyle = "black";
  carCtx.moveTo(150 - xDelta, -150 - yDelta);
  carCtx.lineTo(5000 - xDelta, -150 - yDelta);
  carCtx.stroke();

  carCtx.beginPath();
  carCtx.moveTo(150 - xDelta, -20 - yDelta);
  carCtx.lineTo(5000 - xDelta, -20 - yDelta);
  carCtx.stroke();

  carCtx.beginPath();
  carCtx.rect(300 - xDelta, -300 - yDelta, 200, 100);
  carCtx.strokeStyle = "green";
  carCtx.stroke();

  carCtx.beginPath();
  carCtx.translate(-xDelta, -yDelta);
  let path = new Path2D(borderPath);
  carCtx.stroke(path);

  carCtx.restore();
  requestAnimationFrame(animate);
}

function rotating() {
  carCtx.save();
  carCtx.translate(200, 100);
  carCtx.rotate(angle);
  //carCtx.rotate(Math.PI/6)
  
  carCtx.beginPath();
  carCtx.moveTo(0,0);
  carCtx.lineTo(0,  100);
  xDelta -= Math.sin(angle);
  yDelta -= Math.cos(angle);
  //carCtx.lineTo(-Math.sin(angle) * 100, Math.cos(angle) * 100);

  console.log("X:", xDelta, " Y: ",  
    yDelta);
  angle += 0.001;
  
  carCtx.strokeStyle = "black";
  const x = 0;
  const y = 100;
  const transform = carCtx.getTransform();
  const point = new DOMPoint(x, y);
  const transformedPoint = point.matrixTransform(transform);
  carCtx.stroke();
  
  carCtx.beginPath();
  carCtx.rect(10, 10, 50, 100);
  carCtx.strokeStyle = "red";
  carCtx.stroke();
 
  carCtx.restore();
}

