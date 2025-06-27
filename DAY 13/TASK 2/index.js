//MERGE TWO ARRAYS USING CONCAT
console.log("\n");
console.log("FIRST TASK");
var arr1=[1,2,3,4];
var arr2=[5,6,7,8];
var ans=arr1.concat(arr2);
console.log(`The Concatenated Array is: ${ans}`);
console.log("\n");

// Use splice() to remove 2 elements from the middle
console.log("SECOND TASK");
var arr=[1,2,3,34];
var reduced=arr.splice(1,2);
console.log(`The Reduced elements using splice is: ${reduced}`);
console.log(`The Original array after reduced using Splicde is: ${arr}`);
console.log("\n");

//Sort a numeric array
console.log("THIRD TASK");
var lis=[34,12,36,1,4,6];
console.log(`The Original Array is: ${lis}`);
lis.sort();
console.log(`The Array after sorted is: ${lis}`);
console.log("\n");

//Check if an array includes a specific item
console.log("FOURTH TASK");
var fruits = ["Apple", "Orange", "Banana", "Grapes", "cherry"];
console.log(`The Fruit Orange is Found or Not? Return True or False. ${fruits.includes("Orange")}`);
console.log("\n");

//Find the index of an element
console.log("FIFTH TASK");
console.log(`The Indexc of the Fruit Orange is ${fruits.indexOf("Orange")}`);

