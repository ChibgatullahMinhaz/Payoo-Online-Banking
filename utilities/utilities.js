// initial card status
function cardStatus(id) {
    document.getElementById(id).style.display = 'none';
}
// handle close
function handleClose(idBtn, cardId, status) {
    document.getElementById(idBtn).addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(cardId).style.display = status;

    });
}
// handle show card
function cardPupup(boxId, cardId, status) {
    document.getElementById(boxId).addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(cardId).style.display = status;
    });
}
// validate bank selected
function validateSelectedBank(BankId) {
    const SelectBank = document.getElementById(BankId).value;
    if(SelectBank === ''){
      alert('Select Bank');
      return  false;
    }
    return SelectBank
}
// geting input, text feild and values
const getFeildVlue = (id) => {
    const getValue =  document.getElementById(id).value;
    return getValue;
}
const getFeild = (id) => {
    const getFeild = document.getElementById(id);
    return getFeild;
}
const getConvertedFeild = (id) => {
    const valueFeild = getFeildVlue(id);
    const convertValue = parseFloat(valueFeild);
    return convertValue;
}
// transection id 
function generateTransactionID() {
    return 'TXN-' + Math.random().toString(36).substring(2, 10).toUpperCase();
}