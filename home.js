
// add money feature
const validPin = 1234
const transactionData = []

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
// add money 
document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("add")
    const bank = getInputValue ("bank");
    const accountNumber = document.getElementById("account-number").value 
    const amount = getInputValueNumber("add-amount")

    if(amount<=0){
        alert("Invalid amount")
        return;
    }
    
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

    const data = {
        name:"Add Money",
        date:new Date().toLocaleTimeString()
    }
    
    transactionData.push(data)
    
    
})


// function to toggle
function handleToggle(id){

    const forms = document.getElementsByClassName ("form")
    for (const form of forms){
        form.style.display = "none"
    }
document.getElementById(id).style.display = "block"

}


// function to toggle buttons

function handleButtonToggle(id){
     const formBtns = document.getElementsByClassName("form-buttons")
     for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-300")

     }
     document.getElementById(id).classList.remove("border-gray-300")
     document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}

// cashout feture

document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault()
    const amount = getInputValueNumber("withdraw-amount")

    const avilableBalance = getInnerText ("avilable-blance")

    if(amount<=0 || amount>avilableBalance){
        alert("Invalid amount")
        return;
    }

    const totalNewAvilableBalance = avilableBalance - amount
    setInnerText(totalNewAvilableBalance)

    const data = {
        name:"Cash Out",
        date:new Date().toLocaleTimeString()
    }
    
    transactionData.push(data)
})

//  transaction history 

document.getElementById("transaction-button").addEventListener("click",function(){
    const TransactionContainer = document.getElementById("transaction-container")
    TransactionContainer.innerText = ""

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML=`
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
            <div class="flex items-center">
                <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" alt="">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>

           </div>
        `

        TransactionContainer.appendChild(div)

    }
})


// toggling features

document.getElementById("add-button").addEventListener("click",function(e){

 handleToggle("add-money-parent")
 handleButtonToggle("add-button")


})
document.getElementById("cash-out-button").addEventListener("click",function(){
   
handleToggle("cash-out-parent")
handleButtonToggle("cash-out-button")
    
})

document.getElementById("transfer-button").addEventListener("click", function(){
    
handleToggle("transfer-money-parent")

handleButtonToggle("transfer-button")
})
document.getElementById("bonus-button").addEventListener("click", function(){
    
handleToggle("get-bonus-money-parent")

handleButtonToggle("bonus-button")

})
document.getElementById("bil-button").addEventListener("click", function(){
    
handleToggle("pay-bil-money-parent")

handleButtonToggle("bil-button")
})
document.getElementById("transaction-button").addEventListener("click", function(){

handleToggle("transaction-money-parent")

handleButtonToggle("transaction-button")
})