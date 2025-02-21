let nums=[10,89,76,40]
let a=nums;//aliasing
console.log(a)
console.log(nums)
let num=[56,78,67,90]
//create new array based on existing array
let new_num=[]
let i=0;
while(i<=num.length-1){
    new_num.push(num[i]);
    i++
}
console.log(new_num)
let numbers=[10,70,30,80];
//crdeate new array based on existing array
//let new_numbers-nums.map((num)=>{return.num})
let new_numbers=numbers.map(numbers=>numbers)
console.log(new_numbers)