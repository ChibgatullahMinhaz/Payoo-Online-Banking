// handle log-out 
const logout = document.getElementById('logoutbtn');
logout.addEventListener('click', (e) => {
    window.location.href = '../index.html'
})

// add money  calculation handle
let mainBlance = parseFloat(document.getElementById('blanceAmount').innerText);
const addmoneyBtn = document.getElementById('addmoney');
addmoneyBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const acountNumberField = getFeild('AcNumber');
    const Pin = getConvertedFeild("AcountPIN");
    let addAmount = getConvertedFeild("addAmount");

    if (acountNumberField.length === 11 && Pin === 1234) {
        if (addAmount && addAmount > 0) {
            mainBlance += addAmount
            document.getElementById('blanceAmount').innerText = mainBlance
            document.getElementById('addMoney').style.display = 'none'
        } else {
            alert("Enter Valid Amount")
        }
    } else {
        alert('Invalid User, Please Enter a Valid Acount Number');
    }
    document.getElementById('addAmount').value = "";
});

