function validate () {
    var username=document.getElementById("username").value ;
    var password=document.getElementById("password").value ;
if(username=="lebron_james"&& password=="1234" )
{
   location.href = "bmi.html";
    
}
else {
    alert("login failed");
    
}

}