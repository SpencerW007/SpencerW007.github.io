function submit(){
    alert("This is what you have as your phone number: ' " + output.textContent + "' I will be reaching out to you shortly. Thank you.")
}

function reset() {
    outputInt=0;
    output.textContent = outputInt
plus1total = 1
plus2total = 1
plus3total = 1
minus1total = 1
minus2total = 1
minus3total = 1
multiply1total = 1
multiply2total = 1
multiply3total = 1
divide1total = 1
divide2total = 1
divide3total = 1
powtotal = 1
    alert('Try entering it again. If this sysyem is annoying to use let me know by leaving your phone number and I will try to fix it.')

}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }


let plus1total = 1
let plus2total = 1
let plus3total = 1
let minus1total = 1
let minus2total = 1
let minus3total = 1
let multiply1total = 1
let multiply2total = 1
let multiply3total = 1
let divide1total = 1
let divide2total = 1
let divide3total = 1
let powtotal = 1


const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);


function plus1count () {
    if (plus1total == 1) {
        if (outputInt <9999999999){
            rn = randomNumber(1,10000);
            alert("you added " + rn)
            outputInt += rn;
            output.textContent = outputInt
        }
            if (outputInt > 9999999999) {
                alert("That is too many digits for a phone number... start over");
                outputInt = 0;
                output.textContent = outputInt
            }
        plus1total -= 1;
    } else {
        alert("You have already used that button");
    }
}

function plus2count () {
    if (plus2total == 1) {
        if (outputInt <9999999999) {
            rn = randomNumber(10001,10000000);
            alert("you added " + rn);
            outputInt += rn;
            output.textContent = outputInt
        }
            if (outputInt > 9999999999) {
                alert("That is too many digits for a phone number... start over");
                outputInt = 0;
                output.textContent = outputInt
            }
        plus2total -= 1;
    } else {
        alert("You have already used that button");
    }
}
    
function plus3count () {
    if (plus3total == 1) {
        if (outputInt <9999999999) {
            rn = randomNumber(10000001,9999999999);
            alert("you added " + rn);
            outputInt += rn;
            output.textContent = outputInt
        }
            if (outputInt > 9999999999) {
                alert("That is too many digits for a phone number... start over");
                outputInt = 0;
                output.textContent = outputInt
            }
        plus3total -= 1;
    } else {
        alert("You have already used that button");
    }
}
        
function minus1count () {
    if (minus1total == 1) {
        if (outputInt > 0){
            rn = randomNumber(1,10000);
            alert("you subtracted by " + rn)
            outputInt -= rn;
            output.textContent = outputInt;
        }
            if (outputInt < 0) {
                alert("You went below 0, now you have to start over");
            outputInt = 0;
            output.textContent = outputInt
            }
        minus1total -= 1;
    } else {
        alert("You have already used that button");
    }
}  

function minus2count () {
    if (minus2total == 1) {
        if (outputInt > 0) {
            rn = randomNumber(10001,10000000);
            alert("you subtracted by " + rn)
            outputInt -= rn;
            output.textContent = outputInt;
        }
            if (outputInt < 0) {
                alert("You went below 0, now you have to start over");
                outputInt = 0;
                output.textContent = outputInt
            }
            minus2total -= 1;
        } else {
            alert("You have already used that button");
    }
}       

function minus3count () {
    if (minus3total == 1) {
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
        minus3total -= 1;
    } else {
        alert("You have already used that button");
    }
}       
                            
function multiply1count () {
    if (multiply1total == 1) {
        if (outputInt <9999999999) {
            rn = randomNumber(2,50);
            alert('You multiplied by ' + rn)
            outputInt *= rn;
            output.textContent = outputInt
        }
            if (outputInt > 9999999999) {
                alert("That is too many digits for a phone number... start over");
                outputInt = 0;
                output.textContent = outputInt
            }
        multiply1total -= 1;
    } else {
        alert("You have already used that button");
    }
}       

function multiply2count () {
    if (multiply2total == 1) {
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
        multiply2total -= 1;
    } else {
        alert("You have already used that button");
    }
}

function multiply3count () {
    if (multiply3total == 1) {
        if (outputInt <9999999999){
            rn = randomNumber(501,5000);
            alert('You multiplied by ' + rn)
            outputInt *= rn;
            output.textContent = outputInt}
            if (outputInt > 9999999999) {
                alert("That is too many digits for a phone number... start over");
                outputInt = 0;
                output.textContent = outputInt
        multiply3total -= 1;
    } else {
        alert("You have already used that button");
    }
}}

function divide1count () {
    if (divide1total == 1) {
        if (outputInt >0){
            rn = randomNumber(2,50);
            outputInt /= rn;
            outputInt = Math.round(outputInt);
            output.textContent = outputInt}
            alert('You divided by ' + rn)
        divide1total -= 1;
    } else {
        alert("You have already used that button");
    }
}

function divide2count () {
    if (divide2total == 1) {
        if (outputInt >0){
            rn = randomNumber(51,500);
            outputInt /= rn;
            outputInt = Math.round(outputInt);
            output.textContent = outputInt}
            alert('You divided by ' + rn)
        divide2total -= 1;
    } else {
        alert("You have already used that button");
    }
}

function divide3count () {
    if (divide3total == 1) {
        if (outputInt >0){
            rn = randomNumber(501,5000);
            outputInt /= rn;
            outputInt = Math.round(outputInt);
            output.textContent = outputInt}
            alert ('You divided by ' + rn)
        divide3total -= 1;
    } else {
        alert("You have already used that button");
    }
}

function powcount () {
    if (powtotal == 1) {
        if (outputInt <9999999999){
            rn = randomNumber(2,5)
            rpn = Math.pow(outputInt,randomNumber(2,5));
            alert('You raised your number to the ' + rn + ' power')
            outputInt = rpn;
            output.textContent = outputInt
        }
            if (outputInt > 9999999999) {
                alert("That is too many digits for a phone number... start over");
                outputInt = 0;
                output.textContent = outputInt
            }
        powtotal -= 1;
    } else {
        alert("You have already used that button");
    }
}


const plus1Button = document.querySelector('.plus1-button').addEventListener('click',plus1count);
const plus2Button = document.querySelector('.plus2-button').addEventListener('click',plus2count);
const plus3Button = document.querySelector('.plus3-button').addEventListener('click',plus3count);


const minus1Button = document.querySelector('.minus1-button').addEventListener('click',minus1count);
const minus2Button = document.querySelector('.minus2-button').addEventListener('click',minus2count);
const minus3Button = document.querySelector('.minus3-button').addEventListener('click',minus3count);

const multiply1Button = document.querySelector('.multiply1-button').addEventListener('click',multiply1count);
const multiply2Button = document.querySelector('.multiply2-button').addEventListener('click',multiply2count);
const multiply3Button = document.querySelector('.multiply3-button').addEventListener('click',multiply3count);

const divide1Button = document.querySelector('.divide1-button').addEventListener('click',divide1count);
const divide2Button = document.querySelector('.divide2-button').addEventListener('click',divide2count);
const divide3Button = document.querySelector('.divide3-button').addEventListener('click',divide3count);

const powButton = document.querySelector('.pow-button').addEventListener('click',powcount);

const resetButton = document.querySelector('.reset-button').addEventListener('click',reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click',submit);
