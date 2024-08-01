// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let sum = '';
for(const num of numbers){
    sum = sum + num; 
}
numbers = sum;
console.log(numbers);


//cl= 'TomTimTinTik'