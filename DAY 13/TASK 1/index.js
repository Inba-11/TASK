//FIRST TASK
var fruits=['Apple','Orange','Banana','Grapes','cherry'];
console.log(fruits[2]);

//SECOND TASK
fruits.push('Mango');
console.log(fruits);

//THIRD TASK
fruits.shift();
console.log(fruits);

//FOURTH TASK
let len=fruits.length;
console.log(len);

//FIFTH TASK
for(var i=0;i<len;i++){
    console.log(fruits[i] + " ");
}
//SIXTH TASK
console.log(fruits.reverse());

//SEVENTH TASK
var numbers=[1,2,3,5,6,8];
sum=0;
for(var i of numbers){
    sum+=i;
}
console.log((sum));