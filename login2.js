function validate () {
    var username=document.getElementById("username").value ;
    var password=document.getElementById("password").value ;
if(username=="lebron_james"&& password=="1234" )
{
   window.open('file:///C:/Users/HP840/Desktop/BMI/bmi.html');
    
}
else {
    alert("login failed , your account name or password is incorrect");
    
}

}