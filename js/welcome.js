//Deposit event handler
document.getElementById('deposite-btn').addEventListener('click', function(){
    //get user amount
    const depositeFiled = document.getElementById('deposite-filed');
    const depositeAmmount = depositeFiled.value;
    //add amount with deposite balance
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeAmmount = depositeTotal.innerText;
    const overAllDeposite = parseFloat(depositeAmmount) + parseFloat(previousDepositeAmmount);
    
    depositeTotal.innerText = overAllDeposite;
    //blank filed
    depositeFiled.value = '';

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalance) + parseFloat(depositeAmmount);
    balanceTotal.innerText = newBalanceTotal;


})

//Withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //get withdraw amount from user
    const withdrawFiled = document.getElementById('withdraw-filed');
    const withdrawAmount = withdrawFiled.value;
    //add amount on withdraw balance
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousDepositeTotal = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(withdrawAmount) + parseFloat(previousDepositeTotal);
    withdrawTotal.innerText = newWithdrawTotal;
    //clear
    withdrawFiled.value = '';

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmmount = parseFloat( balanceTotal.innerText);
    const newBalance = balanceTotalAmmount - parseFloat(withdrawAmount);
    balanceTotal.innerText = newBalance;


    
})

