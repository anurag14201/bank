// handler
document.getElementById('deposite').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-amount');
    const depositeAmount = depositeInput.value;
    console.log(depositeAmount);

    const depositeTotal = document.getElementById('deposite-total');

    depositeTotal.innerText = depositeAmount;
    depositeInput.value = '';
})