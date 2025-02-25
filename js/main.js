// handle log out 
const logout = document.getElementById('logoutbtn');
logout.addEventListener('click', (e)=>{
    window.location.href = '../index.html'
})

let blanceAmount = parseInt(document.getElementById('blanceAmount').innerText) || 0;
console.log(blanceAmount);
const addmoney = document.getElementById('addmoney');

addmoney.addEventListener('click', (e) => {
    e.preventDefault()
    let addAmount = parseInt(document.getElementById('addAmount').value) || 0;

    blanceAmount += addAmount; 

    document.getElementById('blanceAmount').innerText = `$${blanceAmount}`; 
    console.log(blanceAmount);
});
