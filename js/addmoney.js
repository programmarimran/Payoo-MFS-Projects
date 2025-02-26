
    const selectBankDefault =document.getElementById("add-select-bank")

    const bankAccountNumberDefault =document.getElementById("add-money-account-number").defaultValue = "21234569874";

    const addAmountDefault =document.getElementById("add-money-enter-amount").defaultValue="50";
    
    const accountPinNumberDefault =document.getElementById("add-money-pin-number").defaultValue="1234"

//*********************************************************** */
    const selectBank =document.getElementById("add-select-bank");

    const bankAccountNumber =document.getElementById("add-money-account-number");
    
    const addAmount =document.getElementById("add-money-enter-amount");
    
    const accountPinNumber =document.getElementById("add-money-pin-number");

    let mainBalanceUpdate=document.getElementById("main-balance");
    let mainBalance =document.getElementById("main-balance").innerText;
    parseFloat(mainBalance);
//********************************************** */

document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault()
    
    
  if(bankAccountNumber.value.length!==11 || bankAccountNumber.value[0]!=='2'){
    alert('please valid account number')
  }
  else if(parseFloat(addAmount.value)<50){
    alert("please minimam add 50 tk")
  }
  else if(accountPinNumber.value.length!==4){
    alert("please valid pin number")
  }
 else{
    mainBalanceUpdate.innerText=parseFloat(mainBalance)+parseFloat(addAmount.value)
 }
 
})
//******************************************** */
document.getElementById("main-add-money")
.addEventListener("click",function(event){
    event.preventDefault()
    window.location.href="./addmoney.html"
})

document.getElementById("main-cashout")
.addEventListener("click",function(event){
    event.preventDefault()
    window.location.href="./cashout.html"
})

document.getElementById("main-sendmoney")
.addEventListener("click",function(event){
    event.preventDefault()
    window.location.href="./sendmoney.html"
})

document.getElementById("main-get-bonus")
.addEventListener("click",function(event){
    event.preventDefault()
    window.location.href="./getbonus.html"
})

document.getElementById("main-paybill")
.addEventListener("click",function(event){
    event.preventDefault()
    window.location.href="./paybill.html"
})

document.getElementById("main-transaction")
.addEventListener("click",function(event){
    event.preventDefault()
    window.location.href="./history.html"
})