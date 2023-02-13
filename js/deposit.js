document.getElementById('btn-deposit').addEventListener('click',function(){
      const depositFiled = document.getElementById('deposit-filed');
      const newDepositAmountString = depositFiled.value;
      const newDeposit = parseFloat(newDepositAmountString);
      
      depositFiled.value = '';
      
      if(isNaN(newDeposit)){
        alert('plz provide a valid number');
        return;
      }

      const depositTotalElement = document.getElementById('deposit-total');
      const previousDipositTotalString = depositTotalElement.innerText;
      const previousDipositTotal = parseFloat(previousDipositTotalString);

      const currentDeposit = previousDipositTotal + newDeposit;
      depositTotalElement.innerText = currentDeposit;
      
      const balanceTotalElement = document.getElementById('blance-total');
      const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDeposit;
    balanceTotalElement.innerText = currentBalanceTotal;

      

})