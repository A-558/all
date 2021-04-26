console.log("js start")
var a='';
function eo() { 
    a = document.getElementById('text1').value;
    if (a % 2 == 0 ){

        console.log("this is even number");
        document.getElementById('result').value= 'this is even number';
    
        

    }
    else {
        
        console.log("this is odd number");
        document.getElementById('result').value = 'this is odd number';

    
    }
    return false;
}
