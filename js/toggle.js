// initial card value
cardStatus('addMoney');
cardStatus('cashout');
cardStatus('getbonus');
cardStatus('Transfer');
cardStatus('paybill');
cardStatus('transiction');

// close handle 
handleClose('cashoutClose', 'cashout', 'none');
handleClose('AddmonyClose', 'addMoney', 'none');
handleClose('TransferClose', 'Transfer', 'none');
handleClose('getbonusClose', 'getbonus', 'none');
handleClose('paybillClose', 'paybill', 'none');
handleClose('transictionClose', 'transiction', 'none');

// show card pupup
cardPupup('addMonyCard-box','addMoney','block');
cardPupup('cashOut-box','cashout','block');
cardPupup('TransferBox','Transfer','block');
cardPupup('getBonus-box','getbonus','block');
cardPupup('paybill-box','paybill','block');
cardPupup('Transactions-box','transiction','block');