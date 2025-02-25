document.getElementById("btnlogin").addEventListener('click', (event)=>{

   const acounNumber = document.getElementById('AcNumber').value.trim();
   const acountPIN = parseInt(document.getElementById("AcountPIN").value);
  console.log(acounNumber.length);
   if (acounNumber.length === 11 ) {
    if (acountPIN === 1234) {
        window.location.href = '../view/main.html';
    }
    else{
        alert("tik nei ")
    }
   }else{
    alert("not okky ")
   }
    event.preventDefault();

})


