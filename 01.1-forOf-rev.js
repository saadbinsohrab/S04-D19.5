const friends = ['shahria', 'sakib', 'firoz', 'aziz', 'alamin'];
const reFnd = [];
for(const friend of friends){
    console.log(friend);
    reFnd.unshift(friend);
}
console.log(reFnd);
// cl=
    // shahria
    // sakib
    // firoz
    // aziz
    // alamin
//cl= [ 'alamin', 'aziz', 'firoz', 'sakib', 'shahria' ]