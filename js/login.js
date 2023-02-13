document.getElementById('btn-submit').addEventListener('click',function(){
    const emailFiled =document.getElementById('user-email');
    const email = emailFiled.value;
    

    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;
    

    if(email === 'niloy1435@gmail.com' && password === '123456789'){
       window.location.href = 'bank.html'
    }
    else{
     alert('invalid user')
    }
})