// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add_two, add, sub } from '../calculations.js';



const test = QUnit.test;

test('test add_two fucntion', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add_two(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add function', (expect) => {
    const input1 = 3;
    const input2 = 2;
    const expected = 5;

    //act
    const actual = add(input1, input2);

    expect.equal(actual, expected);
});

test('sub4,3', (expect) => {
    const input1 = 4;
    const input2 = 3;
    const expected = 1;
    const actual = sub(input1, input2);
    expect.equal(actual, expected);
    console.log('sub');
});  

