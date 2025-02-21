let a=7;
let emp={
    eid:2,
    ename:"sri",
    esal:36790
}
console.log(a)
let {eid=2}=emp;
console.log(eid)

let user={
    id:3,
    name:"siri",
    address: {
        city:"hyd",
        pin:523223,
        landmark:"saroornagar"
    },
    phn:9392555620
}
    let {address}=user;
    let {landmark="saroornagar"}=address;
console.log(landmark)