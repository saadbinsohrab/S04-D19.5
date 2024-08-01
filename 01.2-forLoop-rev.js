const friends = ['shahria', 'aziz', 'sakib', 'firoz', 'alamin'];
const reFnd = [];
for(let i = 0; i < friends.length; i++){
    let rev = friends[i];
    reFnd.unshift(rev);
}
console.log(reFnd);
//cl= [ 'alamin', 'firoz', 'sakib', 'aziz', 'shahria' ]

const bondhu = ['shahria', 'aziz', 'sakib', 'firoz', 'alamin'];
for(let i = bondhu.length-1; i >= 0; i--){
    console.log(bondhu[i]);
}
// cl=
        // alamin
        // firoz
           // sakib
           // aziz
           // shahria