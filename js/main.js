// handle log out 
const logout = document.getElementById('logoutbtn');
logout.addEventListener('click', (e)=>{
    window.location.href = '../index.html'
})


// add money 
let blanceAmount = parseFloat(document.getElementById('blanceAmount').innerText);
const addmoney = document.getElementById('addmoney');
addmoney.addEventListener('click', (e) => {
    e.preventDefault()
    const Pin = parseFloat(document.getElementById('AcountPIN').value);
    let addAmount = parseFloat(document.getElementById('addAmount').value);
    Pin === 1234  ? blanceAmount += addAmount : alert('pin tik nei ');
    document.getElementById('blanceAmount').innerText = blanceAmount; 
});



