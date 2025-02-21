class Account{
    acc_bal=90;
    min_bal=4890;

deposit_amount(amount){
    this.acc_bal=this.acc_bal+amount
}
get_bal(){
    console.log("your bal:",this.acc_bal-this.min_bal)
}
}
let a1=new Account()
a1.deposit_amount(67890)
a1.deposit_amount(67)
let a2=new Account()
a1.deposit_amount(56)
a1.get_bal()
a2.get_bal()


