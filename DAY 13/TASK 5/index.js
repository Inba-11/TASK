function bmiCal(weight,height){
    return Math.round(weight/(height**2));
}
console.log(bmiCal(65,1.8));