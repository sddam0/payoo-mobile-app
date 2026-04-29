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