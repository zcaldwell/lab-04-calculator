// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { add_two, add, sub, times, div, mod, pyth, expo } from '../calculations.js';



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

test('sub', (expect) => {
    const input1 = 4;
    const input2 = 3;
    const expected = 1;
    const actual = sub(input1, input2);
    expect.equal(actual, expected);
});  

test('times', (expect) => {
    const input1 = 3;
    const input2 = 5;
    const expected = 15;
    const actual = times(input1, input2);
    expect.equal(actual, expected);
});

test('div', (expect) => {
    const input1 = 6;
    const input2 = 3;
    const expected = 2;
    const actual = div(input1, input2);
    expect.equal(actual, expected);
})

test('mod', (expect) => {
    const input1 = 12;
    const input2 = 5;
    const expected = 2;
    const actual = mod(input1, input2);
    expect.equal(actual, expected);
});

test('int', (expect) => {
    const input1 = 12;
    const input2 = 5;
    const expected = 2;
    const actual = mod(input1, input2);
    expect.equal(actual, expected);
});

test('pyth', (expect) => {
    const input1 = 4;
    const input2 = 3;
    const expected = 5;
    const actual = pyth(input1, input2);
    expect.equal(actual, expected);
});

test('expo', (expect) => {
    const input1 = 8;
    const input2 = 2;
    const expected = 64;
    const actual = expo(input1, input2);
    expect.equal(actual, expected);
})
