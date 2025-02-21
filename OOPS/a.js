class A{
    min_bal=2900;
    open_acc(){
        console.log("acc opened successfully")
    }
    deposit_amount(amount){
        console.log("amount deposited")
    }
    withdrawl_amount(amount){
        console.log("amount withdrawl successfull")
    }
    get_bal(){
        console.log("server down")
    }
}
let a1=new A()
console.log(a1)
a1.open_acc()
a1.deposit_amount()
a1.withdrawl_amount()
a1.get_bal();