
// add money feature
const validPin = 1234

// function to get input values (reuse function create)
function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber

}

// without convert parsentInt converted
function getInputValue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

// function for inner text
function getInnerText (id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber

}

// function for total balance inner text
function setInnerText(value){
const avilableBalanceElement = document.getElementById("avilable-blance")
avilableBalanceElement.innerText = value
}

document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("add")
    const bank = getInputValue ("bank");
    const accountNumber = document.getElementById("account-number").value 
    const amount = getInputValueNumber("add-amount")
    
    const pin = getInputValueNumber("add-pin")
    const avilableBalance = getInnerText ("avilable-blance")

    if(accountNumber.length <11){
        alert("Please provide valid account number")
        return;
    }
    
    if(pin !==validPin){
        alert("please enter correct pin number")
        return;
    }

    const totalNewAvilableBalance = amount+avilableBalance

    setInnerText(totalNewAvilableBalance)
    
    
    
})


// function to toggle
function handleToggle(id){

    const forms = document.getElementsByClassName ("form")
    for (const form of forms){
        form.style.display = "none"
    }
document.getElementById(id).style.display = "block"

}


// cashout feture

document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault()
    const amount = getInputValueNumber("withdraw-amount")
    const avilableBalance = getInnerText ("avilable-blance")
    const totalNewAvilableBalance = avilableBalance - amount
    setInnerText(totalNewAvilableBalance)
})



// toggling features

document.getElementById("add-button").addEventListener("click",function(e){

 handleToggle("add-money-parent")


})
document.getElementById("cash-out-button").addEventListener("click",function(){
   
handleToggle("cash-out-parent")
    
})

document.getElementById("transfer-button").addEventListener("click", function(){
    
handleToggle("transfer-money-parent")
})
document.getElementById("bonus-button").addEventListener("click", function(){
    
handleToggle("get-bonus-money-parent")

})
document.getElementById("bil-button").addEventListener("click", function(){
    
handleToggle("pay-bil-money-parent")
})
document.getElementById("transaction-button").addEventListener("click", function(){

handleToggle("transaction-money-parent")
})