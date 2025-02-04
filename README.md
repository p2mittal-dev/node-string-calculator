# String Calculator With TDD
String calculator implementation using TDD(Test-Driven Development) in NodeJs.

## Features

- Perform calculations (addition, multiplication) on numbers provided in a string format.
- Support for custom delimiters (commas, new lines, *, +, etc.).
- Automatically detect and apply operations based on the delimiter.
- Handle negative numbers by throwing an exception listing all negatives.
- Support for an unknown amount of numbers.
- Modular and extendable design for easy addition of new features.

## Setup

1. **Clone the repository:**

   git clone https://github.com/p2mittal-dev/node-string-calculator.git
   cd node-string-calculator

1. **Install dependencies:**

    npm install

1. **Start the project:**

    npm start

1. **Run the tests:**

    npm test

## TDD Approach

This project was developed following the Test-Driven Development (TDD) approach:

1. **Red**: Write a test that fails.
2. **Green**: Write the minimum amount of code required to pass the test.
3. **Refactor**: Refactor the code while ensuring that all tests still pass.

## Example Test Cases

- **Empty string**: `""` should return `0`.
- **Single number**: `"1"` should return `1`.
- **Two numbers**: `"1,2"` should return `3`.
- **Multiple numbers**: `"1,2,3,4"` should return `10`.
- **New lines between numbers**: `"1\n2,3"` should return `6`.
- **Custom delimiter**: `"//;\n1;2"` should return `3`.
- **Negative numbers**: `"1,-2,3,-4"` should throw an error with message `"Negative numbers not allowed: -2, -4"`.
- **Multiply numbers**: `"//\*\n1*2*4"` should return `8`.
