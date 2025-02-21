let employee=[
   {eid:2,ename:"sri",esal:67890};
   {eid:5,ename:"siri",esal:56890};
]
let createEmployee=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp);
        Callback()
    },4000)
}
let getEmployee=()=>{
    setTimeout(()=>{
        let rows="";
        employees.forEach((emp)=>{
            rows=row+`
                     <tr>
                     <td>${emp.eid}</td>
                     <td>${emp.ename}</td>
                     <td>${emp.esal}</td>
                     </tr>`
        })
        document.getElementById('abc').innerHTML="avi"
    },1000)
}
createEmployee({eid:8,ename:"ajju",esal:68490}),getEmployee

