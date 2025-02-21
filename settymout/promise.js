let goToMovie=(success,failure)=>{
   let bal=100;
   if(bal>500){
    success("go and enjoy!")
   }
   else{
    failure("go out for roaming")
   }
}
goToMovie((msg)=>{
    console.log(msg)
},(err)=>{console.log(err)})

let employees=[
    {eid:2,ename:"sri",esal:67890};
    {eid:5,ename:"siri",esal:56890};
]
let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout()=>{
            let flag=true;
            flag? resolve("data inserted"):reject("failed")
            employees.push(emp)
        },4000)
    });
let getEmployees=()=>{
    
}
createEmployee({eid:3,ename:"sri",esal:78950})
.then((msg)=>{
    console.log(msg)
})
.catch((err)=>{
    console.log(err)
})
getEmployees()