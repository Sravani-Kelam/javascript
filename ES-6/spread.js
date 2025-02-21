let eid=[80,60,50,30]
let new_eid=[...eid]
console.log(eid)
console.log(new_eid)
//what is spread?
/* spread operator applicable for arrays and object
simply-extract and copy
extract array/object elements and copy into new array/object */

let a=[2,3,45,89]
let b=[5,6,8,9,4,22]
let c=[...a,...b]
console.log(c)

let emp={
    eid:29,
    ename:'sri',
    esal:38990,
    email:'sri@gmail.com'
}
let details={
    email:'sri@gmail.com',
    eloc:"ongole"
}
let emp_details={...emp,...details}
console.log(emp_details)