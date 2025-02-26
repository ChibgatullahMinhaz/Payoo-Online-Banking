function userLogin() {
    const acounNumber = document.getElementById('AcNumber').value.trim();
    const acountPIN = parseInt(document.getElementById("AcountPIN").value);
    acounNumber.length === 11 ?
        acountPIN === 1234 ?
            window.location.href = './view/main.html' : alert('Invalid PIN')
        : alert('Invalid User')
}
document.getElementById("btnlogin").addEventListener('click', (event) => {
    event.preventDefault();
    userLogin();
});