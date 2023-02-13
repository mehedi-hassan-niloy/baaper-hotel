document.getElementById('btn-withdraw').addEventListener('click',function(){
const withdrawFiled = document.getElementById('withdraw-filed');
const newWithdrawAmountstirng = withdrawFiled.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountstirng);

withdrawFiled.value = '';

 if(isNaN(newWithdrawAmount)){
    alert('plz provide a valid number');
    return;
 }

const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



const balanceTotalElement = document.getElementById('blance-total');
      const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawAmount > previousBalanceTotal){
        alert('eto taka nai');
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal-newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})