function evenNums (numArr1){
    for (let i of numArr1){
        if (i % 2 === 0){
            console.log(i)
        }
    }
}

function oddNums (numArr2){
    for (let i of numArr2){
        if (i % 2 === 1){
            console.log(i)
        }
    }
}

// Example arrays to test the functions
let testArray1 = [1, 2, 3, 4, 5, 6];
let testArray2 = [10, 15, 20, 25, 30];

// Call evenNums function and log the even numbers from testArray1
console.log('Even numbers in testArray1:');
evenNums(testArray1);

// Call oddNums function and log the odd numbers from testArray1
console.log('Odd numbers in testArray1:');
oddNums(testArray1);

// Call evenNums function and log the even numbers from testArray2
console.log('Even numbers in testArray2:');
evenNums(testArray2);

// Call oddNums function and log the odd numbers from testArray2
console.log('Odd numbers in testArray2:');
oddNums(testArray2);