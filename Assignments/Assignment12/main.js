function submit(){
    alert("This is what you have as your phone number: ' " + output.textContent + "' I hope you have it right")
}

function reset() {
    outputInt=0;
    output.textContent = outputInt
    alert('You had to start over? Rookie')
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

function minus1() {
    if (outputInt > 0){
    rn = randomNumber(1,10000);
    alert("you subtracted by " + rn)
    outputInt -= rn;
    output.textContent = outputInt;}
    if (outputInt < 0) {
        alert("You went below 0, now you have to start over");
        outputInt = 0;
        output.textContent = outputInt
    }
}

function minus2() {
    if (outputInt > 0){
    rn = randomNumber(10001,10000000);
    alert("you subtracted by " + rn)
    outputInt -= rn;
    output.textContent = outputInt;}
    if (outputInt < 0) {
        alert("You went below 0, now you have to start over");
        outputInt = 0;
        output.textContent = outputInt
    }
}

function minus3() {
    if (outputInt > 0){
    rn = randomNumber(10000001,9999999999);
    alert("you subtracted by " + rn)
    outputInt -= rn;
    output.textContent = outputInt;}
    if (outputInt < 0) {
        alert("You went below 0, now you have to start over");
        outputInt = 0;
        output.textContent = outputInt
    }
}

function plus1 () {
    if (outputInt <9999999999){
    rn = randomNumber(1,10000);
    alert("you added " + rn)
    outputInt += rn;
    output.textContent = outputInt}
    if (outputInt > 9999999999) {
        alert("That is too many digits for a phone number... start over");
        outputInt = 0;
        output.textContent = outputInt
    }
}
function plus2 () {
    if (outputInt <9999999999){
    rn = randomNumber(10001,10000000);
    alert("you added " + rn);
    outputInt += rn;
    output.textContent = outputInt}
    if (outputInt > 9999999999) {
        alert("That is too many digits for a phone number... start over");
        outputInt = 0;
        output.textContent = outputInt
    }
}

function plus3 () {
    if (outputInt <9999999999){
    rn = randomNumber(10000001,9999999999);
    alert("you added " + rn);
    outputInt += rn;
    output.textContent = outputInt}
    if (outputInt > 9999999999) {
        alert("That is too many digits for a phone number... start over");
        outputInt = 0;
        output.textContent = outputInt
    }
}

function multiply1 () {
    if (outputInt <9999999999){
    rn = randomNumber(2,50);
    alert('You multiplied by ' + rn)
    outputInt *= rn;
    output.textContent = outputInt}
    if (outputInt > 9999999999) {
        alert("That is too many digits for a phone number... start over");
        outputInt = 0;
        output.textContent = outputInt
    }
}

function multiply2 () {
    if (outputInt <9999999999){
    rn = randomNumber(51,500);
    alert('You multiplied by ' + rn)
    outputInt *= rn;
    output.textContent = outputInt}
    if (outputInt > 9999999999) {
        alert("That is too many digits for a phone number... start over");
        outputInt = 0;
        output.textContent = outputInt
    }
}

function multiply3 () {
    if (outputInt <9999999999){
    rn = randomNumber(501,5000);
    alert('You multiplied by ' + rn)
    outputInt *= rn;
    output.textContent = outputInt}
    if (outputInt > 9999999999) {
        alert("That is too many digits for a phone number... start over");
        outputInt = 0;
        output.textContent = outputInt
    }
}

function divide1 () {
    if (outputInt >0){
    rn = randomNumber(2,50);
    outputInt /= rn;
    outputInt = Math.round(outputInt);
    output.textContent = outputInt}
    alert('You divided by ' + rn)
}

function divide2 () {
    if (outputInt >0){
    rn = randomNumber(51,500);
    outputInt /= rn;
    outputInt = Math.round(outputInt);
    output.textContent = outputInt}
    alert('You divided by ' + rn)
}

function divide3 () {
    if (outputInt >0){
    rn = randomNumber(501,5000);
    outputInt /= rn;
    outputInt = Math.round(outputInt);
    output.textContent = outputInt}
    alert ('You divided by ' + rn)
}

function pow () {
    if (outputInt <9999999999){
    rn = randomNumber(2,5)
    rpn = Math.pow(outputInt,randomNumber(2,5));
    alert('You raised your number to the ' + rn + ' power')
    outputInt = rpn;
    output.textContent = outputInt}
    if (outputInt > 9999999999) {
        alert("That is too many digits for a phone number... start over");
        outputInt = 0;
        output.textContent = outputInt
    }
}


const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const plus1Button = document.querySelector('.plus1-button').addEventListener('click',plus1);
const plus2Button = document.querySelector('.plus2-button').addEventListener('click',plus2);
const plus3Button = document.querySelector('.plus3-button').addEventListener('click',plus3);

const minus1Button = document.querySelector('.minus1-button').addEventListener('click',minus1);
const minus2Button = document.querySelector('.minus2-button').addEventListener('click',minus2);
const minus3Button = document.querySelector('.minus3-button').addEventListener('click',minus3);

const multiply1Button = document.querySelector('.multiply1-button').addEventListener('click',multiply1);
const multiply2Button = document.querySelector('.multiply2-button').addEventListener('click',multiply2);
const multiply3Button = document.querySelector('.multiply3-button').addEventListener('click',multiply3);

const divide1Button = document.querySelector('.divide1-button').addEventListener('click',divide1);
const divide2Button = document.querySelector('.divide2-button').addEventListener('click',divide2);
const divide3Button = document.querySelector('.divide3-button').addEventListener('click',divide3);

const powButton = document.querySelector('.pow-button').addEventListener('click',pow);

const resetButton = document.querySelector('.reset-button').addEventListener('click',reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click',submit);

