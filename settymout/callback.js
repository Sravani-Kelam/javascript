let cal=(a,b,operation)=>{
    if(operation==="sum"){
        return a+b
    }
    if(operation==="mul"){
        return a*b
    }

}
let r1=cal(3,5,"sum")
let r2=cal(7,9,"mul")
console.log(r1)
console.log(r2)

let sum=(a,b)=>{
    return a+b;
}
let mul=(a,b)=>{
    return a*b;
}
let calc=(a,b,callback)=>{
    return callback(a,b);
}
let r3=calc(6,7,sum)
let r4=calc(6,5,mul)
console.log(r3)
console.log(r4)