// initial card value
cardStatus('addMoney');
cardStatus('cashout');
cardStatus('getbonus');
cardStatus('Transfer');
cardStatus('paybill');
cardStatus('transiction');

// close handle 
addingEvent('AddmonyClose', 'addMoney', 'none');
addingEvent('cashoutClose', 'cashout', 'none');
addingEvent('TransferClose', 'Transfer', 'none');
addingEvent('getbonusClose', 'getbonus', 'none');
addingEvent('paybillClose', 'paybill', 'none');
addingEvent('transictionClose', 'transiction', 'none');

// show card pupup
cardPupup('addMonyCard-box','addMoney','block');
cardPupup('cashOut-box','cashout','block');
cardPupup('TransferBox','Transfer','block');
cardPupup('getBonus-box','getbonus','block');
cardPupup('paybill-box','paybill','block');
cardPupup('Transactions-box','transiction','block');