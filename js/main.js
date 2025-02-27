// handle log-out 
const logout = document.getElementById('logoutbtn');
logout.addEventListener('click', (e) => {
    window.location.href = '../index.html'
})

// Add money calculation handle
let mainBalance = parseFloat(document.getElementById('blanceAmount').innerText);
function addMoneyCalculatin() {
    const addMoneyBtn = document.getElementById('addmoney');
    addMoneyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const accountNumber = getFeildVlue('AcNumber');
        const pin = getConvertedFeild("AcountPIN");
        const addAmount = getConvertedFeild("addAmount");

        const Bank = validateSelectedBank('addMoneyBank');
        if (!Bank) return;

        if (accountNumber.length !== 11) {
            return alert("Invalid User, Please Enter a Valid Account Number");
        } else if (pin !== 1234) {
            return alert('not valid pin')
        }

        if (isNaN(addAmount) || addAmount <= 0) {
            return alert("Enter a Valid Amount");
        }
        mainBalance += addAmount;
        document.getElementById('blanceAmount').innerText = mainBalance;
        document.getElementById('addMoney').style.display = 'none';
        getFeild('addAmount').value = "";

        // make history
        const historyContaier = document.getElementById('transictionHistory');
        const TRNXID = generateTransactionID();
        const div = document.createElement('div');
        div.classList.add("font-bold", "border", "p-4");
        div.innerHTML = `
         <h1 class="text-violet-700">Add Money History</h1>
        <p>Trasnsiction ID :${TRNXID} </p>
        <p>Amount is: ${addAmount} Tk</p>
        <p>Added From ${Bank} Online Banking </p>
        <p>Acount Number: ${accountNumber} </p>
        `
        historyContaier.appendChild(div)
    });

}
// cashout 
function cashOut() {
    const cashOutbtn = document.getElementById('cashoutBTN');
    cashOutbtn.addEventListener('click', (e) => {
        e.preventDefault();
        const cashOutAmount = getConvertedFeild("cashoutAmount");
        const cashOutCharge = (cashOutAmount * 1.5) / 100;

        const AgentNumber = getFeildVlue('AgentNumber');
        const pin = getConvertedFeild("cashoutPin");

        if (AgentNumber.length !== 11) {
            return alert("Invalid User, Please Enter a Valid Account Number");
        } else if (pin !== 1234) {
            console.log('click');
            return alert("Invalid Pin")
        }
        if (isNaN(cashOutAmount) || cashOutAmount <= 0) {
            return alert("Enter a Valid Amount");
        }
        if (mainBalance < cashOutAmount + cashOutCharge) {
            return alert("Insuficient Blance")
        }

        const remainingBlance = mainBalance - (cashOutAmount + cashOutCharge);
        document.getElementById('blanceAmount').innerText = remainingBlance;
        document.getElementById('cashout').style.display = 'none';
        getFeild('cashoutAmount').value = "";
        // make history
        const historyContaier = document.getElementById('transictionHistory');
        const TRNXID = generateTransactionID();
        const div = document.createElement('div');
        div.classList.add("font-bold", "border", "p-4");
        div.innerHTML = `
         <h1 class="text-violet-700">Cash Out History</h1>
        <p>Trasnsiction ID :${TRNXID} </p>
        <p>Amount is: ${cashOutAmount + cashOutCharge} Tk</p>
        <p>Agent Number: ${AgentNumber} </p>
        `
        historyContaier.appendChild(div)
    })
}
// biller 
function PayBill() {
    document.getElementById('billerBtn').addEventListener('click', (e) => {
        e.preventDefault()
        const Bank = validateSelectedBank('billerBank');
        const billerNumber = getFeildVlue('billerNumber');
        const Pin = getConvertedFeild('payPin');
        const payAmount = getConvertedFeild('payAmount')
        if (billerNumber.length !== 11) {
            return alert('Invalid User')
        }
        if (Pin !== 1234) {
            return alert('Invalid PIN')
        }
        if (!payAmount || payAmount <= 0) {
            return alert('Invalid Amount')
        }
        const remainingBlance = mainBalance - payAmount;
        document.getElementById('blanceAmount').innerText = remainingBlance;
        document.getElementById('paybill').style.display = 'none';
        getFeild('payAmount').value = "";

        // make history
        const historyContaier = document.getElementById('transictionHistory');
        const TRNXID = generateTransactionID();
        const div = document.createElement('div');
        div.classList.add("font-bold", "border", "p-4");
        div.innerHTML = `
         <h1 class="text-violet-700">Biller History</h1>
        <p>Trasnsiction ID :${TRNXID} </p>
        <p>Biller Amount is: ${payAmount} Tk</p>
        <p>biller Number: ${billerNumber} </p>
        `
        historyContaier.appendChild(div)
    })
}
function init() {
    addMoneyCalculatin();
    cashOut()
    PayBill()
}
init();