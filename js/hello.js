document.getElementById('submit-btn').addEventListener('click', function(){
    const emailFiled = document.getElementById('email-filed');
    const userEmail = emailFiled.value; 
     const passFiled = document.getElementById('pass-filed');
     const userPass = passFiled.value;

     if(userEmail == 'tanim@gmail.com' && userPass == 'tanim' ){
      console.log('you are right')
     }

})

document.getElementById('email-filed').addEventListener('focus', function(){
   document.getElementById('main-section').style.backgroundColor = 'orange';
})