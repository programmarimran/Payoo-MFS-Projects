


const selectBank =document.getElementById('add-select-bank')

const bankAccountNumber =document.getElementById('add-money-account-number')

const addAmount =document.getElementById('add-money-enter-amount')

const accountPinNumber =document.getElementById('add-money-pin-number')

document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.defaultPrevented()
    console.log(selectBank.value)
})
