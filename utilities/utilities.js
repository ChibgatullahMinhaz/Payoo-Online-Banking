// initial card status
function cardStatus(id) {
    document.getElementById(id).style.display = 'none';
}
// handle close
function addingEvent(idBtn, cardId, status) {
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