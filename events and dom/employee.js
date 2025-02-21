let employee=[
    {id:2,name:"sri",sal:89760},
    {id:3,name:"siri",sal:78960},
    {id:4,name:"ajju",sal:56780},
    {id:5,name:"avi",sal:23480}
]
function displayData(){
    let rows=""
    for(let emp of employee){
        rows = rows+`<tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td>
                    </tr>`
    }
    document.getElementById('abc').innerHTML=rows
}