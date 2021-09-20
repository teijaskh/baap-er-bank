document.getElementById('deposit-submit').addEventListener('click', function () {
    const newDeposit = document.getElementById('new-deposit');
    const newDepositV = newDeposit.value;

    // console.log(newDepositV);

    const oldDeposit = document.getElementById('old-deposit');
    oldDeposit.innerText = parseFloat(oldDeposit.innerText) + parseFloat(newDepositV);
    // console.log(oldDeposit.innerText);


    const totalDepositold = document.getElementById('total-balance');
    totalDepositold.innerText = parseFloat(totalDepositold.innerText) + parseFloat(newDepositV);

    newDeposit.value = '';

    // const totalDeposit = oldDepositV

})

// CASH WITHDRAWAL AND BALANCE UPDATE

// FINDING NEW WITHDRAWN IN INPUT 
document.getElementById('withdraw-submit').addEventListener('click', function () {

    // FINDING OLD WITHDRAWN AMOUNT AND PARSE
    const oldWithdrawParse = document.getElementById('withdraw-total');
    const parsedOldWithdraw = oldWithdrawParse.innerText;
    const oldWithdrawn = parseFloat(parsedOldWithdraw);

    // NEW WITHDRAW INPUT AND PARSE 
    const newWithdrawUnparsed = document.getElementById('withdraw-money');
    const unparsedWithdrawText = newWithdrawUnparsed.value;
    const NewWithdrawn = parseFloat(unparsedWithdrawText);

    newWithdrawUnparsed.value = '';

    const totalWithdrawn = oldWithdrawn + NewWithdrawn;
    oldWithdrawParse.innerText = totalWithdrawn;

    // UPDATE BALANCE
    const totalBalanceCollect = document.getElementById('total-balance');
    const totalBalanceText = totalBalanceCollect.innerText;
    const oldTotalBalance = parseFloat(totalBalanceText);

    const finalTotalAfterWithdaw = oldTotalBalance - NewWithdrawn;

    totalBalanceCollect.innerText = finalTotalAfterWithdaw;

})
