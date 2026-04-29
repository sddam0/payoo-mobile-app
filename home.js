
// add money feature
const validPin = 1234

document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("add")
    const bank = document.getElementById("bank").value 
    const accountNumber = document.getElementById("account-number").value 
    const amount = parseInt(document.getElementById("add-amount").value)
    
    const pin = parseInt(document.getElementById("add-pin").value) 
    const avilableBalance = parseInt(document.getElementById("avilable-blance").innerText)

    if(accountNumber.length <11){
        alert("Please provide valid account number")
        return;
    }
    
    if(pin !==validPin){
        alert("please enter correct pin number")
        return;
    }

    const totalNewAvilableBalance = amount+avilableBalance
    document.getElementById("avilable-blance").innerText = totalNewAvilableBalance
    
    
})

// cashout feture

document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault()
    const amount = parseInt(document.getElementById("withdraw-amount").value)
    const avilableBalance = parseInt( document.getElementById("avilable-blance").innerText)
    const totalNewAvilableBalance = avilableBalance - amount
    document.getElementById("avilable-blance").innerText = totalNewAvilableBalance
})



// toggling features

document.getElementById("add-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cash-out-button").addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
    
})

