  
var  button = document.getElementById('btn') ;

button.addEventListener('click', () => {
    var height = parseInt(document.getElementById('height').value);
    var weight = parseInt(document.getElementById('weight').value);
    var result = document.getElementById('output');
   var height_status=false, weight_status=false;
    if(height ===''|| isNaN(height) || (height<=0)){
        document.getElementById('height_error').innerHTML = 'Please put a valide height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }
    if(weight ===''|| isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please put a valide weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }
    if(height_status && weight_status){
      var  bmi = (weight / ((height*height)/10000)).toFixed(2);
        if(bmi < 18.6){
            result.innerHTML = 'Under weight  :  ' + bmi + '\ you need to eat more' ;
           
        }else if(bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 'Normal :   '  + bmi + '\ good job ';
        
        }else{
            result.innerHTML = ' over weight :  ' + bmi + '\ go to gym ,nothing impossible ';
        }
        }else{
            alert('ERRORS FORM') ;
            result.innerHTML = '' ;
        }
 }) ;
 
