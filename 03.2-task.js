// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];
const no= [];
for(const num of numbers){
    if(num % 2 === 0){
    no.push(num);
    }
}
console.log(no);
// cl= [ 12, 98, 78, 46 ]