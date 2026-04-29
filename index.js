// Login button functionality
document.getElementById("loginButton").addEventListener("click",function(e){
    e.preventDefault()
    
    const mobileNumber = 12345678910
    const pinNumber = 1234
    const mobilenumberValue = document.getElementById("mobile-number").value
    const mobilenumberValueConverted = parseInt(mobilenumberValue)

    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)
    
    if(mobilenumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
       window.location.href="./home.html"
    }
    else{
        alert("Please enter correct Info")
    }

})