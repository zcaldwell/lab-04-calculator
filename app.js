import { add, sub, times } from './calculations.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('addbutton');
const addAnswer = document.getElementById('add-output');


addButton.addEventListener('click', ()=> {
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);
    addAnswer.textContent = result;
});

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('subbutton');
const subAnswer = document.getElementById('sub-output');

subButton.addEventListener('click', () => {
    const value1 = Number(subInput1.value);
    const value2 = Number(subInput2.value);
    const result = sub(value1, value2);
    subAnswer.textContent = result;
});

const timesInput1 = document.getElementById('times-input-1');
const timesInput2 = document.getElementById('times-input-2');
const timesButton = document.getElementById('timesbutton');
const timesAnswer = document.getElementById('times-output');

timesButton.addEventListener('click', () => {
    const value1 = Number(timesInput1.value);
    const value2 = Number(timesInput2.value);
    const result = times(value1, value2);
    timesAnswer.textContent = result;
})