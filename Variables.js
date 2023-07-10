const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  
  readline.question('Enter 1 for addition or 2 for substraction', userInput => {
    console.log(`yoy have selected : ${userInput}`);
    console.log(typeof userInput)
    let a= 3  // 'let' is a keyword, a is variable name, we can change the value of variable
    let b= 6


if (userInput === "1") {

    
    addition = a+b
    console.log("sum:", addition)
}

else if (userInput ==="2") {

    substraction= b-a
    console.log("substraction:", substraction)
}
else {
    console.log("you have entered wrong option")
}
    readline.close();
  });




