let greetings : string = "Hello Uzain"
//Number 
//let mynum : number = 6 ; //bad
let mynum = 6 //good type inference 
greetings.toLowerCase()
console.log(greetings);
// any should be avoided 
let hero ;
function myhero(){
    return hero
}
hero = myhero();

export {} 