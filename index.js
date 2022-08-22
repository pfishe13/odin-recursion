console.log('Starting');

// Using iteration, write a function fibs which takes a number and returns an array
// containing that many numbers from the fibonacci sequence.
// Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(num) {
  let array = [];
  for (let i = 0; i < num; i += 1) {
    if (i === 0 || i === 1) {
      array.push(i);
    } else {
      array.push(array[i - 2] + array[i - 1]);
    }
  }
  return array;
}

console.log(fibs(8));

// Now write another method fibsRec which solves the same problem recursively.
// This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider
// either of these lengths a requirement… just get it done).

function recFibs(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return recFibs(num - 1) + recFibs(num - 2);
}

console.log(recFibs(7));

// Write a recursive merge sort algorithm
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let index = Math.ceil(arr.length / 2);
  let left = arr.slice(0, index);
  let right = arr.slice(index);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let temp = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      temp.push(left.shift());
    } else {
      temp.push(right.shift());
    }
  }

  while (left.length) {
    temp.push(left.shift());
  }
  while (right.length) {
    temp.push(right.shift());
  }
  return temp;
}

let unsortedArray = [4, 7, 2, 3, 8, 1, 5, 6];
console.log(mergeSort(unsortedArray));
