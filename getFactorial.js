 /* Problem: Make a function that will take an array as a parameter and a single integer n.
Each element in the array will be divided by n. Get each element factorial
number in the array. Find out the largest number. */



function getFactorial(number) {
  // if the number < 0, ignore
  if (number < 0) 
        return -1;
    
  // if number = 0, return 1 
  else if (number == 0) 
      return 1;
    
  // Otherwise
    else {

        return (number * getFactorial(number - 1));
    }
}

function solutionOfProblem(inputArr, inputNum){
  let factorialArr = [];
  if(inputArr.length > 0){
    for(let i = 0; i < inputArr.length; i++){
      factorialArr.push(getFactorial(inputArr[i]/inputNum));
    }
    
console.log(Math.max(...factorialArr))
    }
}

solutionOfProblem([1,4,7,16], 4)