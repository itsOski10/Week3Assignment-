
// 1.) 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93 
//1.a) ubtract the value of the first element in the array 
//from the value in the last element of the array

console.log("___Question 1____");
let age = [3,9,23,64,2,8,28,93];
console.log("Age: " + age);


console.log("1.a) " + age[0] + " - " + age[age.length - 1] + " = " + (age[0] - age[age.length - 1]));


// 1.b) b.	Add a new age to your array and repeat the step above to ensure it is dynamic 

age.push(25);

console.log("1.b) 25 was added to age:  " + age[0] + " - " + age[age.length - 1] + " = " + (age[0] - age[age.length - 1]));


// 1.c b.	Add a new age to your array and repeat the step above to ensure it is dynamic 
 let avg = 0;
 let sum = 0;
 for(let i = 0; i < age.length;i++) {
     sum += age[i];
    
 }

 avg = sum / age.length;

 console.log("1.c) Average age is: "+avg);



 // 2.) 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’
 console.log("\n");
 console.log("___Question 2____");
    let names = ["Sam", "Tommy","Tim","Sally","Buck","Bob"];
    console.log("names: " + names);

// 2.a) a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console
let avgLenOfNames = 0;

for(let i = 0; i < names.length;i++) {
    

    avgLenOfNames += names[i].length;

    
}

avgLenOfNames = avgLenOfNames / names.length;


console.log("2.a) Average number of letters in  names: "+ avgLenOfNames);


// 2.b) b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let str = "";
for(let i = 0; i < names.length;i++){
    str +=  names[i]+ " ";

    
}

 console.log("2.b) "+str)

 // 3.) How do you access the last element of any array?
 console.log("\n");
 console.log("___Question 3____");
    console.log("You can access the last element by calling the last index of an array");
    console.log("You can use names[names.length - 1] to access the last element: Last element for names - " + names[names.length -1]);

  
 // 4.) How do you access the first element of any array?
 console.log("\n");
 console.log("___Question 4____");
 console.log("You can access the first element by calling the last index of an array");
 console.log("You can use names[0] access the first element: First element for names - " + names[0]);

 console.log("\n");
 console.log("___Question 5____");

// 5.) 5.	Create a new array called nameLengths
 let namesLengths = [];

 names.forEach(element => {
     namesLengths.push(element.length);
 });

 console.log("names: " + names);

 console.log("namesLength: " + namesLengths);



// 6.)Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
console.log("\n");
console.log("___Question 6____");
let sumNamesLen = 0;
for (let i = 0; i < namesLengths.length; i++) {
    sumNamesLen += namesLengths[i];
    
}

console.log("Sum of all elements in namesLengths: " + sumNamesLen);


 // 7.) Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
 console.log("\n");
 console.log("___Question 7____");

 function concatNum (word,n) {
     let str = '';

     for (let i = 0; i < n; i++) {
         str += word;
         
     }
     return str;
 }

 console.log("concat takes a word and number: " + concatNum("Hello", 3));

 console.log("\n");
 // 8.) Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
 console.log("___Question 8____");

    function fullName (firstName, lastName){
        return firstName + " " + lastName;
    }

    console.log("FullName: " +fullName("Oscar","Ramirez"));


//9.) 
console.log("\n");
console.log("___Question 9____");

let testCase1 = [48,30];

let testCase2 = [10,20,90];



function isGreaterHundred(arr) {
    let sum = 0

    arr.forEach(element => {
        sum += element;
        
    });

    return sum > 100;

}

console.log("Testcase One: " + testCase1 +" = " +isGreaterHundred(testCase1));
console.log("Testcase Two: " + testCase2 + " =  "+isGreaterHundred(testCase2));





//10.) Write a function that takes an array of numbers and returns the average of all the elements in the array
console.log("\n");
console.log("___Question 10____");

let avgTest = [4,6,7,8,94,3];

function average(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    return sum / arr.length;
}

console.log("Test array: " + avgTest + ": Average number in array = " + average(avgTest));


console.log("\n");

// 11.	Write a function that takes an array of numbers and returns the average of all the elements in the array
console.log("___Question 11____");

function arraycomparer(arr,arr2)  {
    if (average(arr) > average(arr2)){
        return true;
    }

    return false;
}

console.log(" test 1.) Array1 > Array2: " + arraycomparer(testCase1,testCase2));
console.log(" test 2.) Array1 > Array2: " + arraycomparer(testCase2,testCase1));

console.log("\n");
// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log("___Question 12____");

    function willBuyDrink (isHotOutside,moneyInPocket){
        if (isHotOutside == true && moneyInPocket > 10.5) {
            return true;
        }
        return false;
    }



    

    console.log("Test 1.) Hot and 10.60  = " + willBuyDrink(true,10.6));

    console.log("Test 2.) not Hot and 10.60  = " + willBuyDrink(false,10.6));

    console.log("Test 3.) Hot and 9.00  = " + willBuyDrink(true,9));

    console.log("Test 4.) not Hot and 9.00  = " + willBuyDrink(false,9));




    console.log("\n");
    console.log("___Question 13____");


    
// finction that checks if a number is even or odd
    function oddOrEven(num){
        if (num % 2 == 0) {  
            return "Even";
        }

        return "Odd"; 
    }


    console.log("3 is " + oddOrEven(3));
    console.log("10 is " + oddOrEven(10));
