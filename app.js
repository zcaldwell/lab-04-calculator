import { add, sub, times, div, mod, int, pyth, expo } from './calculations.js';

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
});

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('divbutton');
const divAnswer = document.getElementById('div-output');

divButton.addEventListener('click', () => {
    const value1 = Number(divInput1.value);
    const value2 = Number(divInput2.value);
    const result = div(value1, value2);
    divAnswer.textContent = result;
});

const modInput1 = document.getElementById('mod-input-1');
const modInput2 = document.getElementById('mod-input-2');
const modButton = document.getElementById('modbutton');
const modAnswer = document.getElementById('mod-output');

modButton.addEventListener('click', () => {
    const value1 = Number(modInput1.value);
    const value2 = Number(modInput2.value);
    const result = mod(value1, value2);
    modAnswer.textContent = result;
});

const intInput1 = document.getElementById('int-input-1');
const intInput2 = document.getElementById('int-input-2');
const intButton = document.getElementById('intbutton');
const intAnswer = document.getElementById('int-output');

intButton.addEventListener('click', () => {
    const value1 = Number(intInput1.value);
    const value2 = Number(intInput2.value);
    const result = int(value1, value2);
    intAnswer.textContent = result;
});

const pythInput1 = document.getElementById('pyth-input-1');
const pythInput2 = document.getElementById('pyth-input-2');
const pythButton = document.getElementById('pythbutton');
const pythAnswer = document.getElementById('pyth-output');

pythButton.addEventListener('click', () => {
    const value1 = Number(pythInput1.value);
    const value2 = Number(pythInput2.value);
    const result = pyth(value1, value2);
    pythAnswer.textContent = result;
});

const expoInput1 = document.getElementById('expo-input-1');
const expoInput2 = document.getElementById('expo-input-2');
const expoButton = document.getElementById('expobutton');
const expoAnswer = document.getElementById('expo-output');

expoButton.addEventListener('click', () => {
    const value1 = Number(expoInput1.value);
    const value2 = Number(expoInput2.value);
    const result = expo(value1, value2);
    expoAnswer.textContent = result;
});