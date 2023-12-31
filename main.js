const carCanvas = document.getElementById("carCanvas");
carCanvas.height = window.innerHeight;
carCanvas.width = 1600;
const carCtx = carCanvas.getContext("2d");
const car = new Car("M 8,97 7,96 v -5 h 7 V 90 H 12 L 3,82 V 65 L 4,64 V 62 L 5,61 4,42 0,43 V 40 L 4,39 5,10 7,8 V 7 l 6,-6 13,-1 13,1 6,6 v 1 l 2,2 1,29 4,1 v 3 l -4,-1 -1,19 1,1 v 2 l 1,1 v 17 l -9,8 h -2 v 1 h 7 v 5 l -1,1 -18,-1 -18, 1");
const pathData = "m 825,315 h 90 l 156,73 l 90,126 v 73 v 8 l 24,13 l 42,7 h 416 h 24 l 42,-7 l 24,-13 v -8 v -73 l 90,-126 l 156,-73 h 91 h 91 l 156,73 l 90,126 v 886 v 8 l 24,13 l 42,7 h 25 h 25 l 42,-7 l 24,-13 v -8 v -73 l 90,-126 l 156,-73 h 90 h 24 l 42,-7 l 24,-13 l 1,-621 l -1,-73 l 90,-126 l 156,-73 h 90 h 90 l 156,73 l 90,126 v 1306 v 73 l -90,126 l -156,73 h -1280 h -90 l -156,-73 l -90,-126 v -73 v -8 l -24,-13 l -42,-7 h -24 h -24 l -42,7 l -24,13 v 8 v 73 l -90,126 l -156,73 h -1032 h -90 l -156,-73 l -90,-126 v -73 v -73 l 90,-126 l 156,-73 h 90 h 24 l 42,-7 l 24,-13 v -8 v -73 l 90,-126 l 156,-73 h 114 l 42,-7 l 24,-13 v -8 v -8 l -24,-13 l -42,-7 h -462 l -156,-73 l -90,-126 v -304 v -73 l 90,-126 l 156,-73 h 92";
const pathData2 = "m 447,562 h -26 l -42,7 l -24,13 v 8 v 239 l 24,13 l 42,7 h 24 h 438 l 156,73 l 90,126 v 73 v 73 l -90,126 l -156,73 h -90 h -24 l -42,7 l -24,13 v 8 v 73 l -90,126 l -156,73 h -90 h -24 l -42,7 l -24,13 v 8 v 8 l 24,13 l 42,7 h 24 h 966 l 42,-7 l 24,-13 v -8 v -73 l 90,-126 l 156,-73 h 90 h 90 l 156,73 l 90,126 v 73 v 8 l 24,13 l 42,7 h 25 h 1215 l 42,-7 l 24,-13 v -8 v -1241 l -24,-13 l -42,-7 h -25 h -25 l -42,7 l -24,13 v 8 v 686 l -90,126 l -156,73 h -90 h -24 l -42,7 l -24,13 v 8 v 73 l -90,126 l -156,73 h -90 h -90 l -156,-73 l -90,-126 v -73 v -820 l -24,-13 l -42,-7 h -25 h -25 l -42,7 l -24,13 v 8 v 73 l -90,126 l -156,73 h -90 h -481 l -156,-73 l -90,-126 v -73 v -8 l -24,-13 l -42,-7 h -27";
let border1 = this.parsePathData(pathData);
let border2 = this.parsePathData(pathData2);
border1 = border1.map(element => {
    element[0] += 900-600;
    element[1] += 600-400;
  return element;
});

border2 = border2.map(element => {
    element[0] += 900-600;
    element[1] += 600-400;
  return element;
});
const track = new Track("m 825,315 h 90 l 156,73 l 90,126 v 73 v 8 l 24,13 l 42,7 h 416 h 24 l 42,-7 l 24,-13 v -8 v -73 l 90,-126 l 156,-73 h 91 h 91 l 156,73 l 90,126 v 886 v 8 l 24,13 l 42,7 h 25 h 25 l 42,-7 l 24,-13 v -8 v -73 l 90,-126 l 156,-73 h 90 h 24 l 42,-7 l 24,-13 l 1,-621 l -1,-73 l 90,-126 l 156,-73 h 90 h 90 l 156,73 l 90,126 v 1306 v 73 l -90,126 l -156,73 h -1280 h -90 l -156,-73 l -90,-126 v -73 v -8 l -24,-13 l -42,-7 h -24 h -24 l -42,7 l -24,13 v 8 v 73 l -90,126 l -156,73 h -1032 h -90 l -156,-73 l -90,-126 v -73 v -73 l 90,-126 l 156,-73 h 90 h 24 l 42,-7 l 24,-13 v -8 v -73 l 90,-126 l 156,-73 h 114 l 42,-7 l 24,-13 v -8 v -8 l -24,-13 l -42,-7 h -462 l -156,-73 l -90,-126 v -304 v -73 l 90,-126 l 156,-73 h 92 m 0,245 h -26 l -42,7 l -24,13 v 8 v 239 l 24,13 l 42,7 h 24 h 438 l 156,73 l 90,126 v 73 v 73 l -90,126 l -156,73 h -90 h -24 l -42,7 l -24,13 v 8 v 73 l -90,126 l -156,73 h -90 h -24 l -42,7 l -24,13 v 8 v 8 l 24,13 l 42,7 h 24 h 966 l 42,-7 l 24,-13 v -8 v -73 l 90,-126 l 156,-73 h 90 h 90 l 156,73 l 90,126 v 73 v 8 l 24,13 l 42,7 h 25 h 1215 l 42,-7 l 24,-13 v -8 v -1241 l -24,-13 l -42,-7 h -25 h -25 l -42,7 l -24,13 v 8 v 686 l -90,126 l -156,73 h -90 h -24 l -42,7 l -24,13 v 8 v 73 l -90,126 l -156,73 h -90 h -90 l -156,-73 l -90,-126 v -73 v -820 l -24,-13 l -42,-7 h -25 h -25 l -42,7 l -24,13 v 8 v 73 l -90,126 l -156,73 h -90 h -481 l -156,-73 l -90,-126 v -73 v -8 l -24,-13 l -42,-7 h -25",
  border1,
  border2);
const traffic = [];

animate();
function animate(time) {
  carCanvas.height = window.innerHeight;
  
  car.update(border1.concat(border2), traffic);
  track.draw(carCtx, car);
  car.draw(carCtx);
 
  
 // carCtx.stroke();
  
  requestAnimationFrame(animate);
}

function parsePathData(pathData) {
  pathData = pathData.trim();
  
  // Split the path data string into individual commands and coordinates
  const tokens = pathData.split(/[ ,]+/);

  let currentX = 0;
  let currentY = 0;

  const coordinates = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (!isNaN(parseFloat(token))) {
      // Coordinate Pair
      const x = parseFloat(token);
      const y = parseFloat(tokens[i + 1]);

      // Update current coordinates
      currentX += x;
      currentY += y;
      coordinates.push([currentX, currentY]);
      i += 1;
    } 
    else if (token === 'm' || token === 'l') {
      // Move To or Line To command
      const x = parseFloat(tokens[i + 1]);
      const y = parseFloat(tokens[i + 2]);
      currentX += x;
      currentY += y;
      coordinates.push([currentX, currentY]);
      i += 2;
    } else if (token === 'h') {
      // Horizontal Move command
      const x = parseFloat(tokens[i + 1]);

      currentX += x;
      coordinates.push([currentX, currentY]);
      i += 1;
    } else if (token === 'v') {
      // Vertical Move command
      const y = parseFloat(tokens[i + 1]);

      currentY += y;
      coordinates.push([currentX, currentY]);
      i += 1;
    }
  }

  return coordinates;
}

function parseAndRoundString(inputString) {
  let outputString = '';
  
  const regex = /(\d+(\.\d+)?)/g;
  let matches = inputString.match(regex);
  
  if (matches !== null) {
    for (let i = 0; i < matches.length; i++) {
      let roundedNum = Math.round(parseFloat(matches[i]));
      outputString += inputString.substring(0, inputString.indexOf(matches[i]));
      outputString += roundedNum.toString();
      inputString = inputString.substring(inputString.indexOf(matches[i]) + matches[i].length);
    }
  }
  
  outputString += inputString;
  return outputString;
}

let input = "m 825.49089,315.404 90.29416,0.0117 155.87745,73.0029 89.9961,126.4449 0.051,73.14619 0.051,7.5799 24.3244,12.8809 42.1311,7.4367 415.8833,0.0195 24.3233,0.0195 42.1311,-7.4367 24.3244,-12.8809 -0.015,-7.55995 -0.015,-73.12625 89.9962,-126.4449 155.8775,-73.0029 90.5052,-0.0107 90.5053,-0.0107 155.8775,73.0029 89.9961,126.4449 -0.011,885.79311 -0.011,7.9119 24.3244,12.8809 42.1311,7.4367 24.6331,-0.011 24.6331,-0.011 42.1311,-7.4367 24.3244,-12.8809 v -7.6018 -73.1681 l 89.9962,-126.4449 155.8775,-73.0029 90.1696,0.021 24.4983,0.021 42.1311,-7.4367 24.3244,-12.8809 0.7813,-620.88907 -0.7813,-72.6527 89.9962,-126.4449 155.8775,-73.0029 90.1942,-0.004 90.1943,-0.004 155.8775,73.0029 89.9961,126.4449 0,1306.23817 0,73.1075 -89.9961,126.4449 -155.8775,73.0029 -1280.3896,0.01 -90.4283,0.017 -155.8775,-73.0029 -89.9962,-126.4449 0.014,-73.1997 0.014,-7.6334 -24.3244,-12.8809 -42.1311,-7.4367 h -24.4838 -24.4839 l -42.1311,7.4367 -24.3244,12.8809 v 7.5328 73.099 l -89.9961,126.4449 -155.8775,73.0029 -1032.09568,-0.01 -90.22946,-0.01 -155.8775,-73.0029 -89.996101,-126.4449 0.02788,-73.1447 0.02788,-73.1447 89.996101,-126.4449 155.8775,-73.0029 90.16147,0 24.48997,0 42.1311,-7.4367 24.3244,-12.8809 0,-7.6072 -0.001,-73.1735 89.9961,-126.4449 155.8775,-73.0029 h 90.08927 24.41778 l 42.1311,-7.4367 24.3244,-12.8809 0.002,-7.5732 0.002,-7.5732 -24.3244,-12.8809 -42.1311,-7.4367 H 445.33876 355.18031 l -155.8775,-73.0029 -89.9961,-126.44489 0.007,-304.11957 0.007,-73.27464 89.9961,-126.4449 155.8775,-73.0029 92.11473,0.017 m 0.003,244.71346 -26.44263,-0.0169 -42.1311,7.4367 -24.3244,12.8809 -0.007,7.63081 -0.007,238.6308 24.3244,12.8809 42.1311,7.4367 24.48695,-0.002 438.15845,-0.002 155.87749,73.0029 89.9961,126.44483 v 73.1395 73.1395 l -89.9961,126.4449 -155.87747,73.0029 h -90.08928 -24.41777 l -42.1311,7.4367 -24.3244,12.8809 0,7.6072 0.001,73.1735 -89.9961,126.4449 -155.87752,73.0029 -90.16147,0 -24.48997,0 -42.1311,7.4367 -24.3244,12.8809 -0.0279,7.5784 -0.0279,7.5784 24.3244,12.8809 42.1311,7.4367 24.49097,0.01 966.49091,0.01 42.1311,-7.4367 24.3244,-12.8809 v -7.5327 -73.0991 l 89.9962,-126.4449 155.8775,-73.0029 h 90.1555 90.1554 l 155.8775,73.0029 89.9961,126.4449 -0.014,73.1997 -0.014,7.6334 24.3244,12.8809 42.1311,7.4367 h 24.7404 l 1214.7403,-0.01 42.1311,-7.4367 24.3244,-12.8809 0,-7.5094 0,-1240.70362 -24.3244,-12.8809 -42.1311,-7.4367 -24.5227,0.004 -24.5227,0.004 -42.1311,7.4367 -24.3244,12.8809 v 7.63917 685.90265 l -89.9961,126.4449 -155.8775,73.0029 -90.1697,-0.021 -24.4983,-0.021 -42.1311,7.4367 -24.3244,12.8809 v 7.6018 l -0.01,73.1548 -89.9961,126.4449 -155.8775,73.0029 -90.3047,0.011 -90.3046,0.011 -155.8775,-73.0029 -89.9962,-126.4449 0.011,-73.2342 0.011,-820.47085 -24.3244,-12.8809 -42.1311,-7.4367 -24.8337,0.0107 -24.8336,0.0107 -42.1311,7.4367 -24.3244,12.8809 0.015,7.55995 0.015,73.12625 -89.9961,126.4449 -155.8775,73.0029 -90.1526,-0.0195 -481.3969,-0.0195 -155.8775,-73.0029 -89.99615,-126.4449 -0.0511,-73.1462 -0.0511,-7.57989 -24.3244,-12.8809 -42.1311,-7.4367 -24.60346,-0.0117";
let output = parseAndRoundString(input);
console.log(output);