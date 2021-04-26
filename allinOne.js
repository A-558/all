console.log("js start")
var a = '';

function oddeven(){
    a= document.getElementById("num").value;
    if (a % 2 == 0){

        console.log("this is even number")
        document.getElementById('result').value = "this is even number";



    }else {

        console.log("this is odd number")
        document.getElementById('result').value = "this is odd number";


        
    }
    return false;
}

function pol(){
    var i,p=true;
    a= document.getElementById('num').value;

    for ( i = 2;i<a ;i++)
    if (a % i == 0){
        p = false;
        break;
    }
    if(p){
        console.log("this is prime number");
        document.getElementById("res").value="this is prime number";

    }else{
        console.log("this is not a prime number");
        document.getElementById("res").value = "this is not prime number";
    }
    return false;
}

function Pl(){
				var aa, originalNumber, reverse = 0;
			
                a = document.getElementById("num").value;
				originalNumber = a;
				while(a>0)
				{
					aa = a%10;
					a = parseInt(a/10);
					reverse = reverse*10+aa;
				}
				if(reverse==originalNumber)
				{
					console.log("The number is Palindrome");
                    document.getElementById("re").value="The number is Palindrome";
					
				}
				else
				{
					console.log("Number is not palindrome");
        			  document.getElementById("re").value = "Number is not palindrome";
					  
				}
                return false;
			}
            function fib(){

                
                 
                 var a=document.getElementById("num").value;
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
                  document.getElementById("out").innerHTML = fb;
                  document.getElementById("out").style.color = "blue";
                  document.getElementById("out").style.backgroundColor = "white";
                   
                }
                
                
                 return false;
                
                }
                
