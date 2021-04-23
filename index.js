// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let x = `John`;
let y = `Doe`;
console.log(`${x} <> ${y}`);

//   22) Create an object with properties such name, surname, email
let user = {
  name: "Samuel",
  surname: "Obeng",
  email: "samuel@email.com",
};

//   23) Delete Email from the previously created object
delete user.email;

//   24) Create an array with 10 strings in it
let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
//   25) Print in the console every string in the previous array
for (letters of arr) {
  console.log(letters);
}
//   26) Create an array with 100 random numbers in it
let newArr = [];
for (let i = 0; i < 100; i++) {
  newArr.push(Math.floor(Math.random() * 100));
}
console.log(newArr)
//   27) Write a function to get the MAX and the MIN from the previously created array
function MinMax() {
  console.log('MAX: ', Math.max.apply(Math, newArr));
  console.log('MIN: ', Math.min.apply(Math, newArr));
}

//   28) Create an array of arrays, in which every array has 10 random numbers
const arrayOfArrays = new Array(10);
for (var i = 0; i < x.length; i++) {
  arrayOfArrays.push(Math.floor(Math.random()*10));
}
console.log(arrayOfArrays)

// 29) Create a function that gets 2 arrays and returns the longest one
function twoArrays(array1, array2) {
  array1 = [1,2,3,4,5]
  array2 = [2,3,4,6,7,8,5];
  if(array1.length>array2.length){
    return array1;
  }else{
    return array2;
  }
}
// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
function gets2Arrays(array1, array2) {
  array1 = [2,3,4,6,4,2,4,5,3];
  array2 = [6,3,6,7,4,8,9,8,4,423,5,7];
  let sumofArray1 = 0;
  let sumofArray2 = 0;
  for(let i =0; i<array1.length; i++){
    sumofArray1+=array1[i];
  }
  for(let y = 0; y< array2.length; y++){
    sumofArray2+=array2[i];
  }
  if(sumofArray1>sumofArray2){
    return sumofArray1;
  }
  else{
    return sumofArray2;
  }
}


// DOM 

//   31) Get element with ID "container" from the page
let container = document.getElementById("container");
//   32) Get every "td" from the page
let td = document.querySelectorAll("td")
for(everyTd of  td){
console.log(everyTd);
}
//   33) Create a cycle that prints the text inside every td of the page
let allTd = document.querySelectorAll("td")
for(printTD of  allTd){
console.log(printTD.innerText);
  }
//   34) Write a function to change the heading of the page
function changeHeading() {
let heading = document.querySelector("div h1")
heading.innerText = "Changed Heading"
}

//   35) Write a function to add an extra row to the table
function addExtraRow() {
  let newRow = document.createElement("tr");
  //<tr></tr>
  let table = document.getElementsByTagName("table")
  let td = document.createElement("td");
  //<td></td>
  let img = document.createElement("img");
  img.setAttribute
  //<img>


}
  
//   36) Write a function to add the class "test" to each row in the table
//   37) Write a function to add a red background to every link in the page
//   38) Console log "Page loaded" when the page is correctly loaded
//   39) Write a function to add new items to a UL
//   40) Write a function to empty a list

