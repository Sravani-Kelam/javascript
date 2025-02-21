class Account{
  min_bal=3908;
  open_account(){
    console.log("my account is opened successfully")
  }
  deposit_amount(){
    console.log("amount deposit successfully")
  }
  get_bal(){
    console.log("get account balance")
  }
}
let a1=new Account()
a1.open_account()
a1.deposit_amount()
a1.get_bal()
let a2=new Account()
a2.open_account()
a2.deposit_amount()
a2.get_bal()
console.log(a1)
console.log(a2)