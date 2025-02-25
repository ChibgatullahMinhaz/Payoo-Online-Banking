// handle log out 
const logout = document.getElementById('logoutbtn');
logout.addEventListener('click', (e)=>{
    window.location.href = '../index.html'
})

// add money 
let blanceAmount = parseInt(document.getElementById('blanceAmount').innerText);
const addmoney = document.getElementById('addmoney');
addmoney.addEventListener('click', (e) => {
    e.preventDefault()
    let addAmount = parseInt(document.getElementById('addAmount').value);
    blanceAmount += addAmount; 
    document.getElementById('blanceAmount').innerText = `${blanceAmount}`; 
});



