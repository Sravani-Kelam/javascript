function cal_age(dob_year){
    let current_yr=new Date().getfullyear();
    return current_yr-dob_year
}
let age1= cal_age(2000)
let age2= cal_age(2021)
console.log(age1)
console.log(age2)