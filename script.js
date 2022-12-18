'use strict';

//Selectors
const fromElmnt = document.querySelector('.from');
const toElmnt = document.querySelector('.to');
const fromTextAreaElmnt = document.querySelector('.fromTextArea');
const toTextAreaElmnt = document.querySelector('.toTextArea');
const convertBtn = document.querySelector('.convert');
const swapBtn = document.querySelector('.swap');

//Function to change the Number from Binary base the given base.
const fromBinary = (toNumberBase, number) => {
    switch(toNumberBase){
        case 'decimal':
            return parseInt(number,2).toString(10);

        case 'octal':
            return parseInt(number,2).toString(8);

        case 'hexadecimal':
            return parseInt(number,2).toString(6);

        default:
            return number;
    }
}; 

//Function to change the Number from HexaDecimal base the given base.
const fromHexadecimal = (toNumberBase, number) => {
    switch(toNumberBase){
        case 'decimal':
            return parseInt(number,6).toString(10);

        case 'octal':
            return parseInt(number,6).toString(8);

        case 'binary':
            return parseInt(number,6).toString(2);
            
        default:
            return number;
    }
}; 

//Function to change the Number from Octal base the given base.
const fromOctal = (toNumberBase, number) => {
    switch(toNumberBase){
        case 'decimal':
            return parseInt(number,8).toString(10);

        case 'binary':
            return parseInt(number,8).toString(2);

        case 'hexadecimal':
            return parseInt(number,8).toString(6);
            
        default:
            return number;
    }
}; 

//Function to change the Number from Decimal base the given base.
const fromDecimal = (toNumberBase, number) => {
    switch(toNumberBase){
        case 'binary':
            return parseInt(number,10).toString(2);

        case 'octal':
            return parseInt(number,10).toString(8);

        case 'hexadecimal':
            return parseInt(number,10).toString(6);
            
        default:
            return number;
    }
}; 

// Creating a Conver function to perform those conversions.
const convert = () => {

    let fromNumberBase = fromElmnt.value;
    let toNumberBase = toElmnt.value;
    let number = fromTextAreaElmnt.value;
    
    if(fromNumberBase === 'binary'){

        let convertedValue = fromBinary(toNumberBase, number);
        toTextAreaElmnt.innerHTML = `${convertedValue}`;

    }else if(fromNumberBase === 'hexadecimal'){

        let convertedValue = fromHexadecimal(toNumberBase, number);
        toTextAreaElmnt.innerHTML = `${convertedValue}`;

    }else if(fromNumberBase === 'octal'){

        let convertedValue = fromOctal(toNumberBase, number);
        toTextAreaElmnt.innerHTML = `${convertedValue}`;

    }else if(fromNumberBase === 'decimal'){

        let convertedValue = fromDecimal(toNumberBase, number);
        toTextAreaElmnt.innerHTML = `${convertedValue}`;

    }
};

const swap = () => {

    let fromNumberBase = parseInt(fromElmnt.value);
    let toNumberBase = parseInt(toElmnt.value);
    let temp;
    temp = fromNumberBase;
    fromNumberBase = toNumberBase;
    toNumberBase = temp;
    fromElmnt.value = fromNumberBase;
    toElmnt.value = toNumberBase;
    
};
// Adding event listeners on Convert and Swap Buttons.
convertBtn.addEventListener('click', convert);

swapBtn.addEventListener('click', swap);