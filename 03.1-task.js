// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const revers = [];
for(const color  of colors){
    revers.unshift(color);
}
console.log(revers);

//cl= ['orange', 'yellow', 'green', 'blue', 'red']

