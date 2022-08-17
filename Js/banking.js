// handler
document.getElementById('deposite').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-amount');
    const depositeAmount = depositeInput.value;
    // console.log(depositeAmount);

    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeAmount = depositeTotal.innerText;
    const newDepositeTotal = parseFloat(previousDepositeAmount) + parseFloat(depositeAmount);
    depositeTotal.innerText = newDepositeTotal;

    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const perBlanceTotal = parseFloat(blanceTotalText);
    const newBlanceTotal = perBlanceTotal + parseFloat(depositeAmount);
    blanceTotal.innerText = newBlanceTotal;

    depositeInput.value = '';
});

document.getElementById('withdraw').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawInput.value;
    // console.log(withdrawAmount);

    const withdrawTotal = document.getElementById('withdraw-total');
    const perWithdrawTotal = withdrawTotal.innerText;
    const newWithdraw = parseFloat(perWithdrawTotal) + parseFloat(withdrawAmount);
    withdrawTotal.innerText = newWithdraw;

    const blanceTotalWith = document.getElementById('blance-total');
    const blanceTotalTextWith = blanceTotalWith.innerText;
    const perBlanceTotalWith = parseFloat(blanceTotalTextWith);
    const newBlanceTotalWith = perBlanceTotalWith - parseFloat(withdrawAmount);
    blanceTotalWith.innerText = newBlanceTotalWith;

    withdrawInput.value = '';
})