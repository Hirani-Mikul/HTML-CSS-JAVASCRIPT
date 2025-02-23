var lists = document.getElementById("list");
var answer = document.querySelector("#result h1");
const maxbtn = document.getElementById("max");
const minbtn = document.getElementById("min");
const sumbtn = document.getElementById("sum");
const newBtn = document.getElementById("new-num");
const oddBtn = document.getElementById("odd");
const evenBtn = document.getElementById("even");
let inputNum = document.getElementById("inputNum");
let inputRange = document.getElementById("inputRange");
let sum;
let min;
let max;
let odd;
let even;
var array;
var li;
function getNewNum() {
  array = Array(parseInt(inputNum.value))
    .fill()
    .map(() => Math.floor(Math.random() * parseInt(inputRange.value)));
}
function updateList() {
  lists.innerText = "";
  for (var i = 0; i < array.length; i++) {
    li = document.createElement("li");
    li.innerText = array[i];
    lists.appendChild(li);
  }
}
function updateTheResult() {
  answer.innerText = "";
  sum = array.reduce((acc, val) => (acc += val));
  min = array.reduce((acc, val) => {
    if (val < acc) {
      acc = val;
    }
    return acc;
  });
  max = array.reduce((acc, val) => {
    if (val > acc) {
      acc = val;
    }
    return acc;
  });
  odd = array.filter((x) => x % 2);
  even = array.filter((x) => !(x % 2));
}
getNewNum();
updateList();
updateTheResult();
newBtn.addEventListener("click", function () {
  getNewNum();
  updateList();
  updateTheResult();
});
//...copying array
// result = array.slice();
// or
// result = [...array];

// var result = [...array].reduce((acc, val) => {
//   maxbtn.addEventListener("click", () => {
//     if (val > acc) {
//       acc = val;
//     }
//     return acc;
//   });
// });
// console.log(result);

maxbtn.addEventListener("click", function () {
  answer.innerText = max;
});
minbtn.addEventListener("click", function () {
  answer.innerText = min;
});
sumbtn.addEventListener("click", function () {
  answer.innerText = sum;
});
oddBtn.addEventListener("click", function () {
  answer.innerText = odd;
});
evenBtn.addEventListener("click", function () {
  answer.innerText = even;
});

// answer.innerHTML = max;

// function findMax(acc, val) {
//   if (val > acc) {
//     acc = val;
//   }
//   return acc;
// }
// function findMin(acc, val) {
//   if (val < acc) {
//     acc = val;
//   }
//   return acc;
// }
// function findSum(acc, val) {
//   return (acc += val);
// }
