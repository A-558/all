console.log("js started")

function p() {
              
    var n, i, p = true;
      
    
    n = document.getElementById("text").value;
    
    for (i = 2; i <n; i++)
        if (n % i == 0) {
            p = false;
            break;
        }
          
    if (p){
        console.log("this is prime="+n);
        output="the number is prime";
        document.getElementById("result").value=output;
        document.getElementById("result").style.color =" blue"

    }else{
        console.log("this is not prime ="+n);
        output="the number is not prime";
        document.getElementById("result").value=output;
        document.getElementById("result").style.color =" red "

    }
}