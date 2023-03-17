var _background = "#1d1f20";
var _white = "#c5c8c6";
var _grey = "#6f7474";
var _pink = "#f22572";
var _green = "#9fff60";

var y, flag, box;
var xArr = [],
  yArr = [];

function setup() {
  createCanvas(windowWidth, 500);
  frameRate(1);
  background(0);
  strokeWeight(10);
  stroke(_grey);

  //Generating random lines to sort
  for (let i = 100; i <= windowWidth - 100; i += 20) {
    y = parseInt(random(50, 450));
    line(i, 490, i, y);
    xArr.push(i);
    yArr.push(y);
  }
}

function draw() {
  background(0);
  //drawing the updated sorting
  for (i in xArr) {
    stroke(yArr[i] / 2);
    line(xArr[i], 490, xArr[i], yArr[i]);
  }
  bubbleSort();
  //quickSort();
}

function mousePressed() {
  if (isLooping()) {
    noLoop();
    document.getElementById("status").textContent = "⚠ Loop Stopped";
  } else {
    loop();
    document.getElementById("status").textContent = "☑ Loop Resumed";
  }
}

function bubbleSort() {
  document.getElementById(
    "info"
  ).textContent = `Bubble sort works on the repeatedly swapping of adjacent 
  elements until they are not in the intended order. Time complexity: O(n2).`;

  for (let i = 0; i < yArr.length - 1; i++) {
    flag = i + 1;
    if (yArr[i] > yArr[flag]) {
      box = yArr[flag];
      yArr[flag] = yArr[i];
      yArr[i] = box;
    }
  }
}

function quickSort() {
  document.getElementById(
    "info"
  ).textContent = `Merge sort is the sorting technique that follows the 
  divide and conquer approach. Time complexity: O(n*logn)`;
}
