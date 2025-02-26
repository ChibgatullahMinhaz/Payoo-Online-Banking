// // close handle 
document.getElementById('addMoney').style.display = 'none'
  
function addmoneClose() {
    document.getElementById('AddmonyClose').addEventListener('click', (e) => {
        e.preventDefault();
        const addmonyCard = document.getElementById('addMoney');
    addmonyCard.style.display = 'none'   
    });
}

// show add mooney form
document.getElementById('addMonyCard').addEventListener('click', (e) => {
    e.preventDefault();
   const addmonyBtn= document.getElementById('addMoney');
   addmonyBtn.style.display = 'block'
})


function init(){
    addmoneClose()
}
init();