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
  // quickSort();
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

  function partition(arr, low, high) {
    // Choosing the pivot
    let pivot = arr[high];

    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      // If current element is smaller than the pivot
      if (arr[j] < pivot) {
        // Increment index of smaller element
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
    return i + 1; // Return the partition index
  }

  // The main function that implements QuickSort
  function quickSort(arr, low, high) {
    if (low < high) {
      // pi is the partitioning index, arr[pi] is now at the right place
      let pi = partition(arr, low, high);

      // Separately sort elements before partition and after partition
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }

  // Driver code
  let arr = [10, 7, 8, 9, 1, 5];
  let N = arr.length;

  // Function call
  quickSort(arr, 0, N - 1);
  console.log("Sorted array:");
  console.log(arr.join(" "));
}
