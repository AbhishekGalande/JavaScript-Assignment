function accepetName(){
    prompt("Enter Your Name")
    console.log("Hello <<User>>")
}
function even_odd(){
   num =  prompt("Enter any number")
    if(num%2==0){
        console.log("Number is even")
    }else{
        console.log("Number is Odd")
    }
}
function primeNo(){
   num =  prompt("Enter any number")
   let i = 2
   let count = 0
   while(i<=num)
   {
     if(num%i==0){
       count++ 
     }
     i++
   }
   if(count==1)
     {
       console.log("Number is prime")
     }
   else
     {
       console.log("Number is not prime")
     }
}
function Table(){
    num =  prompt("Enter any number")
    let i = 1
    while(i<=10)
	{
	    console.log(num * i)
		i++
	}
}