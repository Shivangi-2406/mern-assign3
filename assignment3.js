//q1.Write a JavaScript function that takes an array of strings and returns a new array with each string capitalized.

const words =['cat','dog','rat'];// creating an array of strings
function capital(words){// writing the name with capital 
    return words.map(str => str.charAt(0).toUpperCase()+str.slice(1))//returning the value after using map method
}
console.log(capital(words));//displaying the output

//q2. Create a function that returns the second largest element in an array.
const numbers = [1,2,10,9,8,4,12];// declaring an array

function largestNum(arr) {// writing the function
    if (arr.length < 2) {// comparing the length of array is less than 2
        return "Invalid Input";//if the condition will be true the following message will be displayed
    }
    arr.sort((a, b) => a - b);//sorting the array in ascending order
    return "The second largest element is " + arr[arr.length - 2];//it will return the second last element of the array
}
console.log(largestNum(numbers));//function calling

//q3.Write a JavaScript function that takes an array of objects and a key, and returns an array of values corresponding to that key.
const abc=[  //declaring array of objects
    {
        name:'mango',
        prce:100,
    },
    {
        name:'cherry',
        price:150,
    },
    {
        name:'apple',
        price:80,
    }
]
function arrobj(abc,name){ // writing a function
    return abc.map(obj =>obj[name]);    //creates a new array with the help of map method
}
const e = arrobj(abc,'name') // stores the returned array in variable
console.log(e);// printing the array

//q4.Calculate the factorial of every element in an array and store it in a new array.
const arr = [1,2,3,4,5];// declaring an array
const b = calculate(arr);// stores the returned array in variable
function calculate(array) {// writing a function
    let result = [];// declaring an empty array

    for (let i = 0; i < array.length; i++) {// using for loop to iterate array
        let factorial = 1;// declaring factorial as 1
        for (let j = 1; j <= array[i]; j++) {// using for loop to iterate array
            factorial *= j;
        }
        result.push(factorial);//appending the elements to end of an array
    }

    return result;// returning the result
}


console.log(b);// printing the result
// //q5. Create a function to find the intersection of two arrays.
const array1 = [3,4,5,6];// creating  array1
const array2 = [5,6,7,8];//creating array2
function intersection(arr1, arr2) {//craeting a function
    return arr1.filter(value => arr2.includes(value));//returning the value
  }
  
  console.log(intersection(array1, array2));// printing the intersected values