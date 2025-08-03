//Hello world
console.log("Hello World")
const cowsay =require("cowsay");
console.log(cowsay.say({text: "I am Module"}))
const abc =7;
console.log(abc)


console.log("the value of a is:" + abc)

function hello(name){
    let message = `Hello, ${name}!`;
    return message
}

const greeting = hello("Prem");
console.log(greeting);

function hello(name, age){
    let message = `Hello, ${name} of ${age}!`;
    return message
}

const greeting = hello("Prem", "20");
console.log(greeting);




// Loops:

let count = 0;
while(count<3){
    console.log(`Loop Iteration: ${count}`);
    count=count+1;
    count += 1;  //Shortcut
}
console.log("While loop is finished");



//for loop syntax:
// for(initial CSSCondition; limit Condition; increment){
//     do stuff
// }



//Array: and for loop

const fruits = ["Apple", "Mango", "Orange"];
for(let i=0; i<fruits.length; i++){
    const fruit = fruits[i];
    console.log(`Fruit at index ${i} is ${fruit}`);
}



//Conditionals

let temperature=15;

if(temperature>30){
    console.log("It's a hot day")
}
else if(temperature>20){
    console.log("It's a pleasant day")
}
else{
    console.log("It's a cold day")
}



//Calculator

function calculateArea(length, width=1){
    return length*width;
}

const rectangleArea = calculateArea(5,6);
console.log(`Area of rectangle is: ${rectangleArea}`);

const squareArea = calculateArea(8);     //Here since we are passing only one parameter hence it's taking another parameter as default value i.e., 1 hence 8*1=8
console.log(`Area of square is: ${squareArea}`);




const getSum = function(a,b) {return a+b;};

const sum = getSum(5,6);
console.log(`THE sum is: ${sum}`);



//Problem-1

let j=0;
for(let i=0; i<1000; i++){
    if(i%5==0 || i%3==0){
        j=i+j;
    }

}

console.log(`The sum of all numbers below 1000 that are divisible by 3 or 5 is: ${j}`);


// Problem-2

let a=0;
let b=1;
while(sum<40){
    let sum=a+b;
    console.log(`${sum}`);
    b=

}





//problem-3

let num= 600851475143;
let num = 13195;
let count=0;
for(let i=0; i<13195; i++){
    if(num%i==0){
        for(let j=0; j<13195; j++){
            if(i%j==0){
                count = count+1;
            }
        }
        if(count>2){
            console.log(i)
        }
    }
}




let num = 600851475143;
let factor = 2;
let lastFactor = 1;

while (num > 1) {
    if (num % factor === 0) {
        lastFactor = factor;
        num = num / factor;
        while (num % factor === 0) {
            num = num / factor;
        }
    }
    factor++;
}

console.log(`The largest prime factor is: ${lastFactor}`);



//Problem-4

let a =1;
for(let i=1; i<101; i++){
    a=a*i;
};
console.log(`${a}`);
