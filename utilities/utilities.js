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

// geting input, text feild and values
const getFeildVlue = (id) => {
    return document.getElementById(id).value;
}
const getFeild = (id) => {
    const getValue = document.getElementById(id).value;
    return getValue;
}
const getConvertedFeild = (id) => {
    const valueFeild = getFeildVlue(id);
    const convertValue = parseFloat(valueFeild);
    return convertValue;
}
