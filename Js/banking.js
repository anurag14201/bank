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
})