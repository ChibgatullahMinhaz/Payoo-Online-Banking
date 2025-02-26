// handle log-out 
const logout = document.getElementById('logoutbtn');
logout.addEventListener('click', (e) => {
    window.location.href = '../index.html'
})

// add money  calculation handle
let blanceAmount = parseFloat(document.getElementById('blanceAmount').innerText);
const addmoneyBtn = document.getElementById('addmoney');
addmoneyBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const PinField = document.getElementById('AcountPIN');
    const AmountField = document.getElementById('addAmount');
    const Pin = parseFloat(PinField.value);
    let addAmount = parseFloat(AmountField.value);
    addAmount && Pin
        ? (Pin === 1234
            ? (blanceAmount += addAmount, document.getElementById('blanceAmount').innerText = blanceAmount,  document.getElementById('addMoney').style.display = 'none'  )
            : alert('Enter Valid PIN'))
        : alert('Invalid User');
    AmountField.value = "";
});

