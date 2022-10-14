let x = "John";
let y = "Doe";

console.log("x:", x, "\ny:", y);

const newObj = {
  name: "Aygen",
  surname: "Yucel",
  email: "aygenyucel@outlook.com",
};

console.log("newObj:", newObj);

delete newObj["email"];
// delete newObj.email;
console.log("newObj:", newObj);

const newArr = [
  "lorem1",
  "lorem2",
  "lorem3",
  "lorem4",
  "lorem5",
  "lorem6",
  "lorem7",
  "lorem8",
  "lorem9",
  "lorem10",
];

for (let i of newArr) {
  console.log(i);
}

const randomNumberArr = [];

for (let i = 0; i < 100; i++) {
  const randomNumber = Math.floor(Math.random() * 100);
  randomNumberArr.push(randomNumber);
}

console.log("randomNumberArr:", randomNumberArr);

const getMaxMin = function () {
  let maxOfArr = Math.max(...randomNumberArr);
  let minOfArr = Math.min(...randomNumberArr);
  console.log("max num:", maxOfArr, "\nmin num:", minOfArr);
};

getMaxMin();

const arrOfArr = [];
for (let i = 0; i < 5; i++) {
  let tempArr = [];
  for (let i = 0; i < 10; i++) {
    tempArr.push(Math.floor(Math.random() * 100));
  }
  arrOfArr.push(tempArr);
}
console.log("arrOfArr:", arrOfArr);

const longestArr = function (arr1, arr2) {
  if (arr1.length > arr2.length) {
    console.log("longest arr is first one:", arr1);
    return arr1;
  } else {
    console.log("longest arr is second one:", arr2);
    return arr2;
  }
};

longestArr(newArr, arrOfArr);

const higherSum = function (arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i of arr1) {
    sum1 += i;
  }
  for (let i of arr2) {
    sum2 += i;
  }
  if (sum1 > sum2) {
    return sum1;
  } else if (sum1 < sum2) {
    return sum2;
  } else {
    console.log("The sums of number are equal");
  }
};

//------------DOM-------------

const container = document.getElementById("container");
console.log(typeof container);

const allTd = document.querySelectorAll("td");
console.log(typeof allTd);

for (let td of allTd) {
  console.log(td.innerText);
}

const changeHeading = function (newH1) {
  const h1 = document.querySelector("h1");
  h1.innerText = newH1;
};

const addRow = function () {
  const table = document.querySelector("table");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  td1.innerText = "td of new row";
  td2.innerText = "td of new row";
  td3.innerText = "td of new row";
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  table.appendChild(tr);
};

const addClass = function () {
  const allTr = document.querySelectorAll("tr");
  for (let tr of allTr) {
    tr.classList.add("test");
  }
};

const addBackground = function () {
  const allLinks = document.querySelectorAll("a");
  for (let link of allLinks) {
    link.style.backgroundColor = "red";
  }
};

//CHECKING IF THE PAGE IS CORRECTLY LOADED?
window.onload = function () {
  console.log("PAGE IS LOADED");
};

const addLiItems = function (str) {
  const ul = document.querySelector("ul");
  const newLiItem = document.createElement("li");
  newLiItem.innerText = str;
  ul.appendChild(newLiItem);
};

const emptyList = function () {
  const ul = document.querySelector("ul");
  ul.innerHTML = null;
  console.log(ul);
  console.log(typeof ul);
};
