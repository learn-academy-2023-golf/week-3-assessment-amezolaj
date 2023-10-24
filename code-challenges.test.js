// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

// describe("fibonacci", () => {
//   it("returns an array containing the Fibonacci sequence", () => {
//     expect(fibonacci(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8]);
//     expect(fibonacci(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })


const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// function fibonacci(n) {
//    if (n === 1) {
//       return [1];
//   } else if (n === 2) {
//       return [1, 1];
//   } else {
//       let fibonacciSequence = [1, 1];
//       for (let i = 2; i < n; i++) {
//           fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
//       }
//       return fibonacciSequence
//   }
// }
// psuedo code:
//created a function called fibonacci
// input; parameter n ( the length of the sequnece to generate)
// output; returns an array  usuing fibonacci sequence to the specified length
// used a conditional statment to detremine to if the number is 2 or less you will get either 1 or 1, 1
// if greater than 2  used a for loop to get the next fibonacci numbers until the fibonacci sequence reaches its length which is 6 and 10 and we get the expected output of [1, 1, 2, 3, 5, 8] and [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("object", () => {
  it("returns an array of the object's values sorted from least to greatest.", () => {
    expect(object(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
    expect(object(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

function object(obj) {
  const sortedArray = Object.values(obj).sort((a, b) => a - b);
  return sortedArray;
}


// Pseudo code:
// created a function called object
// input; obj as the parameter 
//output; returns an array with the values sorted from least to greatest
//used object.values to extract the values then used . sort to sort them in order in an array
// returns an array with the values sorted from least to great