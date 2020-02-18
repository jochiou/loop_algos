// Take your previous solutions and write them using the other kind of loop.  
// I.E.  If you wrote both of your algorithms using for loops, now write them out with while loops


// YOUR CODE HERE

var num = 1;

while(num <= 30){
	if(num % 3 == 0 && num %5 == 0){
                console.log("FizzBuzz");
        }else if(num % 3 == 0){
                console.log("Fizz");
        }else if(num % 5 == 0){
                console.log("Buzz");
        }else{
                console.log(num);
        }
	num++;
}
