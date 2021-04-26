function fib(){

  var a = '';
   
   var a=document.getElementById("text").value;
      var n = 0;
      var n1 = 1;
      var nn;
      var fb = "fiboncci sequence" ;
     
     
       fb += n + " , " ;
      
  for(var i=0;i<a;i++){
    console.log(n)
      
    nn=n+n1;
    n=n1;
    n1=nn;
    
    fb +=  n +" , " ,n1+ " , "  ;
     
  }
  document.getElementById("result").innerHTML = fb;
  document.getElementById("result").style.color = "blue";
  document.getElementById("result").style.backgroundColor = "white";
   
  
  }

