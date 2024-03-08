// //funcao n parametrizada

// const n1 = 10;
// const n2 = 5;

// function soma() {
//     return n1+n2;
// }

// console.log(soma());

// //funcao parametrizada

// function soma2(n3=0,n4=0){
//     return n3+n4;
// }

// console.log(soma2(10,20));

// //funcao anonima 

// const f=function(v1,v2){
//     return v1-v2;
// }
// console.log(f(10,15));

// //vetores
// let mulheres =['auzira','beth','cecilia'];
// console.log(mulheres);

// mulheres.map((el)=>{
//     console.log(el)
// })

//funcao construtor anonima

const f1=new Function('v3','v4','return v3*v4')
console.log(f1(5,9))


//sem arrow function
const soma1=function(v5,v6){
    return v5/v6;
}

console.log(soma1(30,3));

//arrow function
const soma3=(v7,v8)=>{
    return v7*v8
}
console.log(soma3(7,8));