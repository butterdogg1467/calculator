document.addEventListener('DOMContentLoaded', () => {

let addBtn = document.querySelector('#add')
let subtractBtn = document.querySelector('#subtract')
let multiplyBtn = document.querySelector('#multiply')
let divideBtn = document.querySelector('#divide')

let cBtn = document.querySelector('#C')
let ceBtn = document.querySelector('#CE')
let negativeBtn = document.querySelector('#negativebutton')
let decimal = document.querySelector('#decimal')
let zeroBtn = document.querySelector('#btnzero')
let oneBtn = document.querySelector('#btnone')
let twoBtn = document.querySelector('#btntwo')
let threeBtn = document.querySelector('#btnthree')
let fourBtn = document.querySelector('#btnfour')
let fiveBtn = document.querySelector('#btnfive')
let sixBtn = document.querySelector('#btnsix')
let sevenBtn = document.querySelector('#btnseven')
let eightBtn = document.querySelector('#btneight')
let nineBtn = document.querySelector('#btnnine')
let equalsBtn = document.querySelector('#equals')
let outputBox = document.querySelector('.outputbox')
let problemDisplay = document.querySelector('.problemdisplay')
let problemDisplayValue = document.querySelector('.problemdisplayvalue')
let expressionContainer = document.querySelector('.functionvaluecontainer')
let generalButton = document.querySelectorAll('.nonclearbutton')
let buttonContainer = document.querySelector('.buttoncontainer')
let calculatorContainer = document.querySelector('.calculatorcontainer')
let numberButton = document.querySelector('.numberbutton')
let functionValue;
let num1 = 0;
let num2 = 0;
let cBtnClicked = 'false'
let sum = 0
let addBtnClicked;
let subtractBtnClicked;
let multiplyBtnClicked;
let divideBtnClicked; 
let decimalAdded = 'false'
let coolDisplay; 
let functionValueLength = 0
let isNegative = 'false'
let sumCalculated = 'false'



equalsBtn.addEventListener('dblclick', coolTheme)

negativeBtn.addEventListener('click', function (){
    alert('This function is still being worked on')
})

function negative() {
    if (outputBox.textContent != 0 && isNegative === 'false') {
        isNegative = 'true'
        outputBox.textContent = '-' + outputBox.textContent
        expressionContainer.textContent = '-' + expressionContainer.textContent
        problemDisplayValue.textContent = '-' + problemDisplayValue.textContent
        problemDisplay.textContent = '-' + problemDisplay.textContent
    }
    else if (isNegative === 'true') {
            isNegative = 'false'
            let negativeNumber = outputBox.textContent
            let revertedNum = negativeNumber.slice(1)
            outputBox.textContent = revertedNum
            problemDisplay.textContent = revertedNum
            problemDisplayValue.textContent = revertedNum
            expressionContainer.textContent = revertedNum
        
    }

    if (sum != 0 && sumCalculated === 'true'){
        problemDisplay.textContent = outputBox.textContent
    }
    
    if (functionValue === ' + ' || functionValue === ' - ' || functionValue === ' × ' || functionValue === ' ÷ ' ) {
        let currentNumber = outputBox.textContent;
        if (currentNumber !== '' && sum === '') {
            let numericCurrentNumber = parseFloat(currentNumber);
            outputBox.textContent = numericCurrentNumber;
            expressionContainer.textContent = expressionContainer.textContent.slice(0, -1) + numericCurrentNumber;
            problemDisplayValue.textContent = problemDisplayValue.textContent.slice(0, -1) + numericCurrentNumber;
            problemDisplay.textContent = problemDisplay.textContent.slice(0, -1) + outputBox.textContent;
        }
    }
    

    
}


function coolTheme(){
    if (outputBox.textContent === '1986') {
    coolDisplay = 'on'
    addBtn.classList.add('coolbutton')
    subtractBtn.classList.add('coolbutton')
    multiplyBtn.classList.add('coolbutton')
    divideBtn.classList.add('coolbutton')

    buttonContainer.classList.add('coolbuttoncontainer')
    calculatorContainer.classList.add('coolcalculatorcontainer')
    
    cBtn.classList.add('coolbutton')
    ceBtn.classList.add('coolbutton')
    negativeBtn.classList.add('coolbutton')
    decimal.classList.add('coolbutton')
    zeroBtn.classList.add('coolbutton')
    oneBtn.classList.add('coolbutton')
    twoBtn.classList.add('coolbutton')
    threeBtn.classList.add('coolbutton')
    fourBtn.classList.add('coolbutton')
    fiveBtn.classList.add('coolbutton')
    sixBtn.classList.add('coolbutton')
    sevenBtn.classList.add('coolbutton')
    eightBtn.classList.add('coolbutton')
    nineBtn.classList.add('coolbutton')
    equalsBtn.classList.add('coolbutton')
    outputBox.classList.add('cooloutputbox')
    problemDisplay.classList.add('coolproblemdisplay')
    generalButton.forEach(button => {
        button.classList.add('coolbutton'); 
    });
}
}


function addDecimal(){  
    if (outputBox.textContent != 0 && decimalAdded === 'false') {
        outputBox.textContent += '.'
        problemDisplayValue.textContent += '.'
        expressionContainer.textContent += '.'
        problemDisplay.textContent += '.'
        decimalAdded = 'true'
    }
}

decimal.addEventListener('click', addDecimal)

generalButton.forEach(button => {
    
    button.addEventListener('click', function () {
        cBtnClicked = 'false'
    })
})


outputBox.textContent = 0

ceBtn.addEventListener('click', CE)

function CE() {
    let lastNumber = outputBox.textContent
    let pDLastNumber = problemDisplay.textContent
    let pDvLastNumber = problemDisplayValue.textContent
    let eCLastNumber = expressionContainer.textContent
    let cleared = lastNumber.slice(0, -1)
    let pDCleared = pDLastNumber.slice(0, -1)
    let pDvCleared = pDvLastNumber.slice(0, -1)
    let eCCleared = eCLastNumber.slice(0, -1)
    outputBox.textContent = cleared
    problemDisplay.textContent = pDCleared
    problemDisplayValue.textContent = pDvCleared
    expressionContainer.textContent = eCCleared
}

function clear() {
    sumCalculated = 'false'
    isNegative = 'false'
    decimalAdded = 'false'
    outputBox.textContent = 0
    outputBox.value = 0
    sum = 0
    functionValue = ' '
    problemDisplay.textContent = ''
    problemDisplayValue.textContent = 0
    expressionContainer.textContent = 0
    num1 = 0;
    num2 = 0;
    addBtnClicked = 'false'
    subtractBtnClicked = 'false'
    multiplyBtnClicked = 'false'
    divideBtnClicked = 'false'
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    functionValueLength = 0
}
cBtn.addEventListener('click', clear)

window.addEventListener('beforeunload', function() {
    outputBox.textContent = 0
    outputBox.value = 0
    num1 = 0
    num2 = 0
    sum = 0
    functionValue = ''
    cBtnClicked.value = 'true'
    problemDisplay.textContent = ''
    problemDisplayValue.textContent = ''
    expressionContainer.textContent = ''
})

function zero() {
    if (outputBox.textContent != 0) {
        outputBox.textContent += 0 
        expressionContainer.textContent += 0
        problemDisplayValue.textContent += 0
        problemDisplay.textContent += 0
    }
    else if (problemDisplay.textContent != '' && sum != '') {    
        outputBox.textContent += 0 
        expressionContainer.textContent += 0
        problemDisplayValue.textContent += 0
        problemDisplay.textContent += 0
    }
    
}

zeroBtn.addEventListener('click', zero) 


oneBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    
    if (outputBox.textContent === '0') {
        outputBox.textContent = 1
        problemDisplayValue.textContent = 1
        problemDisplay.textContent = 1
        expressionContainer.textContent = 1
    } else if (outputBox.textContent != '0' ) {
        outputBox.textContent += 1
        problemDisplayValue.textContent += 1
        problemDisplay.textContent += 1
        expressionContainer.textContent += 1
    }
    
    if (functionValue === ' + ' && outputBox.textContent === '+') {
        outputBox.textContent = 1
    } 
    
}) 

twoBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    
    if (outputBox.textContent === '0') {
        outputBox.textContent = 2
        problemDisplayValue.textContent = 2
        problemDisplay.textContent = 2
        expressionContainer.textContent = 2
    } else if (outputBox.textContent != '0' ) {
        outputBox.textContent += 2
        problemDisplayValue.textContent += 2
        problemDisplay.textContent += 2
        expressionContainer.textContent += 2
    }
    
    if (functionValue === ' + ' && outputBox.textContent === '+') {
        outputBox.textContent = 2
    } 
    if (num1 != 0 && functionValue === '') {
        num1 += 2
    } else if (num2 != 0 && functionValue != '') {
        num2 += 2
    }

    if (problemDisplay.textContent != '' && sum != '' && functionValue === ' ') {    
        problemDisplay.textContent = 2
        problemDisplayValue.textContent = 2
        expressionContainer.textContent = 2
        outputBox.textContent = 2
    }
    
}) 

threeBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    
    if (outputBox.textContent === '0') {
        outputBox.textContent = 3
        problemDisplayValue.textContent = 3
        problemDisplay.textContent = 3
        expressionContainer.textContent = 3
    } else if (outputBox.textContent != '0' ) {
        outputBox.textContent += 3
        problemDisplayValue.textContent += 3
        problemDisplay.textContent += 3
        expressionContainer.textContent += 3
    }
    
    if (functionValue === ' + ' && outputBox.textContent === '+') {
        outputBox.textContent = 3
    } 
    if (num1 != 0 && functionValue === '') {
        num1 += 3
    } else if (num2 != 0 && functionValue != '') {
        num2 += 3
    }

    if (problemDisplay.textContent != '' && sum != '' && functionValue === ' ') {    
        problemDisplay.textContent = 3
        problemDisplayValue.textContent = 3
        expressionContainer.textContent = 3
        outputBox.textContent = 3
    }

   
}) 

fourBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    
    if (outputBox.textContent === '0') {
        outputBox.textContent = 4
        problemDisplayValue.textContent = 4
        problemDisplay.textContent = 4
        expressionContainer.textContent = 4
    } else if (outputBox.textContent != '0' ) {
        outputBox.textContent += 4
        problemDisplayValue.textContent += 4
        problemDisplay.textContent += 4
        expressionContainer.textContent += 4
    }
    
    if (functionValue === ' + ' && outputBox.textContent === '+') {
        outputBox.textContent = 4
    } 
if (num1 != 0 && functionValue === '') {
        num1 += 4
    } else if (num2 != 0 && functionValue != '') {
        num2 += 4
    }
    
    if (problemDisplay.textContent != '' && sum != '' && functionValue === ' ') {    
        problemDisplay.textContent = 4
        problemDisplayValue.textContent = 4
        expressionContainer.textContent = 4
        outputBox.textContent = 4
    }


    
}) 

fiveBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    
    if (outputBox.textContent === '0') {
        outputBox.textContent = 5
        problemDisplayValue.textContent = 5
        problemDisplay.textContent = 5
        expressionContainer.textContent = 5
    } else if (outputBox.textContent != '0' ) {
        outputBox.textContent += 5
        problemDisplayValue.textContent += 5
        problemDisplay.textContent += 5
        expressionContainer.textContent += 5
    }
    
    if (functionValue === ' + ' && outputBox.textContent === '+') {
        outputBox.textContent = 5
    } 
if (num1 != 0 && functionValue === '') {
        num1 += 5
    } else if (num2 != 0 && functionValue != '') {
        num2 += 5
    }

    if (problemDisplay.textContent != '' && sum != '' && functionValue === ' ') {    
        problemDisplay.textContent = 5
        problemDisplayValue.textContent = 5
        expressionContainer.textContent = 5
        outputBox.textContent = 5
    }

    
}) 

sixBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    
    if (outputBox.textContent === '0') {
        outputBox.textContent = 6
        problemDisplayValue.textContent = 6
        problemDisplay.textContent = 6
        expressionContainer.textContent = 6
    } else if (outputBox.textContent != '0' ) {
        outputBox.textContent += 6
        problemDisplayValue.textContent += 6
        problemDisplay.textContent += 6
        expressionContainer.textContent += 6
    }
    
    if (functionValue === ' + ' && outputBox.textContent === '+') {
        outputBox.textContent = 6
    } 
if (num1 != 0 && functionValue === '') {
        num1 += 6
    } else if (num2 != 0 && functionValue != '') {
        num2 += 6
    }

    if (problemDisplay.textContent != '' && sum != '' && functionValue === ' ') {    
        problemDisplay.textContent = 6
        problemDisplayValue.textContent = 6
        expressionContainer.textContent = 6
        outputBox.textContent = 6
    }

    
}) 

sevenBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    
    if (outputBox.textContent === '0') {
        outputBox.textContent = 7
        problemDisplayValue.textContent = 7
        problemDisplay.textContent = 7
        expressionContainer.textContent = 7
    } else if (outputBox.textContent != '0' ) {
        outputBox.textContent += 7
        problemDisplayValue.textContent += 7
        problemDisplay.textContent += 7
        expressionContainer.textContent += 7
    }
    
    if (functionValue === ' + ' && outputBox.textContent === '+') {
        outputBox.textContent = 7
    } 
if (num1 != 0 && functionValue === '') {
        num1 += 7
    } else if (num2 != 0 && functionValue != '') {
        num2 += 7
    }

    if (problemDisplay.textContent != '' && sum != '' && functionValue === ' ') {    
        problemDisplay.textContent = 7
        problemDisplayValue.textContent = 7
        expressionContainer.textContent = 7
        outputBox.textContent = 7
    }

    
}) 

eightBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    
    if (outputBox.textContent === '0') {
        outputBox.textContent = 8
        problemDisplayValue.textContent = 8
        problemDisplay.textContent = 8
        expressionContainer.textContent = 8
    } else if (outputBox.textContent != '0' ) {
        outputBox.textContent += 8
        problemDisplayValue.textContent += 8
        problemDisplay.textContent += 8
        expressionContainer.textContent += 8
    }
    
    if (functionValue === ' + ' && outputBox.textContent === '+') {
        outputBox.textContent = 8
    } 
if (num1 != 0 && functionValue === '') {
        num1 += 8
    } else if (num2 != 0 && functionValue != '') {
        num2 += 8
    }

    if (problemDisplay.textContent != '' && sum != '' && functionValue === ' ') {    
        problemDisplay.textContent = 8
        problemDisplayValue.textContent = 8
        expressionContainer.textContent = 8
        outputBox.textContent = 8
    }
    
}) 
nineBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    
    if (outputBox.textContent === '0') {
        outputBox.textContent = 9
        problemDisplayValue.textContent = 9
        problemDisplay.textContent = 9
        expressionContainer.textContent = 9
    } else if (outputBox.textContent != '0' ) {
        outputBox.textContent += 9
        problemDisplayValue.textContent += 9
        problemDisplay.textContent += 9
        expressionContainer.textContent += 9
    }
    
    if (functionValue === ' + ' && outputBox.textContent === '+') {
        outputBox.textContent = 9
    } 
if (num1 != 0 && functionValue === '') {
        num1 += 9
    } else if (num2 != 0 && functionValue != '') {
        num2 += 9
    }

    if (problemDisplay.textContent != '' && sum != '' && functionValue === ' ') {    
        problemDisplay.textContent = 9
        problemDisplayValue.textContent = 9
        expressionContainer.textContent = 9
        outputBox.textContent = 9
    }
}) 

document.addEventListener('keydown', function () {
    if(event.key === '.') {
        addDecimal()
    }
    if (outputBox.textContent != '0' && event.key === '0') {
        outputBox.textContent += 0 
        expressionContainer.textContent += 0
        problemDisplayValue.textContent += 0
        problemDisplay.textContent += 0
    }
    if (event.key === '1') {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    
    if (outputBox.textContent === '0') {
        outputBox.textContent = 1
        problemDisplayValue.textContent = 1
        problemDisplay.textContent = 1
        expressionContainer.textContent = 1
    } else if (outputBox.textContent != '0' ) {
        outputBox.textContent += 1
        problemDisplayValue.textContent += 1
        problemDisplay.textContent += 1
        expressionContainer.textContent += 1
    }
    
    if (functionValue === ' + ' && outputBox.textContent === '+') {
        outputBox.textContent = 1
    } 
} 

if (event.key === '2') {
    addBtn.style.backgroundColor = ''
subtractBtn.style.backgroundColor = ''
multiplyBtn.style.backgroundColor = ''
divideBtn.style.backgroundColor = ''

if (outputBox.textContent === '0') {
    outputBox.textContent = 2
    problemDisplayValue.textContent = 2
    problemDisplay.textContent = 2
    expressionContainer.textContent = 2
} else if (outputBox.textContent != '0' ) {
    outputBox.textContent += 2
    problemDisplayValue.textContent += 2
    problemDisplay.textContent += 2
    expressionContainer.textContent += 2
}

if (functionValue === ' + ' && outputBox.textContent === '+') {
    outputBox.textContent = 2
} 
}

if (event.key === '3') {
    addBtn.style.backgroundColor = ''
subtractBtn.style.backgroundColor = ''
multiplyBtn.style.backgroundColor = ''
divideBtn.style.backgroundColor = ''

if (outputBox.textContent === '0') {
    outputBox.textContent = 3
    problemDisplayValue.textContent = 3
    problemDisplay.textContent = 3
    expressionContainer.textContent = 3
} else if (outputBox.textContent != '0' ) {
    outputBox.textContent += 3
    problemDisplayValue.textContent += 3
    problemDisplay.textContent += 3
    expressionContainer.textContent += 3
}

if (functionValue === ' + ' && outputBox.textContent === '+') {
    outputBox.textContent = 3
} 
}

if (event.key === '4') {
    addBtn.style.backgroundColor = ''
subtractBtn.style.backgroundColor = ''
multiplyBtn.style.backgroundColor = ''
divideBtn.style.backgroundColor = ''

if (outputBox.textContent === '0') {
    outputBox.textContent = 4
    problemDisplayValue.textContent = 4
    problemDisplay.textContent = 4
    expressionContainer.textContent = 4
} else if (outputBox.textContent != '0' ) {
    outputBox.textContent += 4
    problemDisplayValue.textContent += 4
    problemDisplay.textContent += 4
    expressionContainer.textContent += 4
}

if (functionValue === ' + ' && outputBox.textContent === '+') {
    outputBox.textContent = 4
} 
}

if (event.key === '5') {
    addBtn.style.backgroundColor = ''
subtractBtn.style.backgroundColor = ''
multiplyBtn.style.backgroundColor = ''
divideBtn.style.backgroundColor = ''

if (outputBox.textContent === '0') {
    outputBox.textContent = 5
    problemDisplayValue.textContent = 5
    problemDisplay.textContent = 5
    expressionContainer.textContent = 5
} else if (outputBox.textContent != '0' ) {
    outputBox.textContent += 5
    problemDisplayValue.textContent += 5
    problemDisplay.textContent += 5
    expressionContainer.textContent += 5
}

if (functionValue === ' + ' && outputBox.textContent === '+') {
    outputBox.textContent = 5
} 
}

if (event.key === '6') {
    addBtn.style.backgroundColor = ''
subtractBtn.style.backgroundColor = ''
multiplyBtn.style.backgroundColor = ''
divideBtn.style.backgroundColor = ''

if (outputBox.textContent === '0') {
    outputBox.textContent = 6
    problemDisplayValue.textContent = 6
    problemDisplay.textContent = 6
    expressionContainer.textContent = 6
} else if (outputBox.textContent != '0' ) {
    outputBox.textContent += 6
    problemDisplayValue.textContent += 6
    problemDisplay.textContent += 6
    expressionContainer.textContent += 6
}

if (functionValue === ' + ' && outputBox.textContent === '+') {
    outputBox.textContent = 6
} 
}

if (event.key === '7') {
    addBtn.style.backgroundColor = ''
subtractBtn.style.backgroundColor = ''
multiplyBtn.style.backgroundColor = ''
divideBtn.style.backgroundColor = ''

if (outputBox.textContent === '0') {
    outputBox.textContent = 7
    problemDisplayValue.textContent = 7
    problemDisplay.textContent = 7
    expressionContainer.textContent = 7
} else if (outputBox.textContent != '0' ) {
    outputBox.textContent += 7
    problemDisplayValue.textContent += 7
    problemDisplay.textContent += 7
    expressionContainer.textContent += 7
}

if (functionValue === ' + ' && outputBox.textContent === '+') {
    outputBox.textContent = 7
} 
}

if (event.key === '8') {
    addBtn.style.backgroundColor = ''
subtractBtn.style.backgroundColor = ''
multiplyBtn.style.backgroundColor = ''
divideBtn.style.backgroundColor = ''

if (outputBox.textContent === '0') {
    outputBox.textContent = 8
    problemDisplayValue.textContent = 8
    problemDisplay.textContent = 8
    expressionContainer.textContent = 8
} else if (outputBox.textContent != '0' ) {
    outputBox.textContent += 8
    problemDisplayValue.textContent += 8
    problemDisplay.textContent += 8
    expressionContainer.textContent += 8
}

if (functionValue === ' + ' && outputBox.textContent === '+') {
    outputBox.textContent = 8
} 
}

if (event.key === '9') {
    addBtn.style.backgroundColor = ''
subtractBtn.style.backgroundColor = ''
multiplyBtn.style.backgroundColor = ''
divideBtn.style.backgroundColor = ''

if (outputBox.textContent === '0') {
    outputBox.textContent = 9
    problemDisplayValue.textContent = 9
    problemDisplay.textContent = 9
    expressionContainer.textContent = 9
} else if (outputBox.textContent != '0' ) {
    outputBox.textContent += 9
    problemDisplayValue.textContent += 9
    problemDisplay.textContent += 9
    expressionContainer.textContent += 9
}

if (functionValue === ' + ' && outputBox.textContent === '+') {
    outputBox.textContent = 9
} 
}
if (event.keyCode === 13) {
    operate()
}
if (event.key === '+') {
    event.preventDefault()
    addition()
}

if (event.key === '-') {
    event.preventDefault()
    subtraction()
}

if (event.key === '*' || event.key === 'x') {
    event.preventDefault()
    multiplication()
}

if (event.key === '/') {
    event.preventDefault()
    division()
}
if (event.key === 'c' || event.key === 'C') {
    clear()
}

if (event.keyCode === 13 && outputBox.textContent === '1986') {
    coolTheme();
}

if (event.keyCode === 8)
    CE()
})

function addition () {
    addBtnClicked = 'true'
    functionValue = ' + '
    decimalAdded = 'false'
    functionValueLength += 1

    if(outputBox.textContent != '' || problemDisplay.textContent != '' || expressionContainer.textContent != '' || problemDisplayValue.textContent != '') {
        operateForFunctions()
        outputBox.textContent = sum
    }

    
    if (addBtnClicked === 'true') {
        subtractBtn.style.backgroundColor = ''
        multiplyBtn.style.backgroundColor = ''
        divideBtn.style.backgroundColor = ''
        addBtn.style.backgroundColor = 'lightgray'
    }


    if (expressionContainer.textContent != 0) {
        functionValue = ' + '
        expressionContainer.textContent += functionValue
        problemDisplayValue.textContent += functionValue
        problemDisplay.textContent += functionValue
        outputBox.textContent = ''
        outputBox.value += functionValue
        
    } else if (expressionContainer.textContent === '' || expressionContainer.textContent === undefined ||expressionContainer.textContent === null) {
        functionValue = ''
        expressionContainer.textContent = functionValue
        outputBox.value += functionValue
    } 
    if (sum != 0) {
        problemDisplay.textContent = sum + ' + '
    }
}

function subtraction() {
    subtractBtnClicked = 'true'
    decimalAdded = 'false'
    functionValueLength += 1

    if(outputBox.textContent != '' || problemDisplay.textContent != '' || expressionContainer.textContent != '' || problemDisplayValue.textContent != '') {
        operateForFunctions()
        outputBox.textContent = sum
    }

    
    if (subtractBtnClicked === 'true') {
        addBtn.style.backgroundColor = ''
        multiplyBtn.style.backgroundColor = ''
        divideBtn.style.backgroundColor = ''
        subtractBtn.style.backgroundColor = 'lightgray'
    }
    if (expressionContainer.textContent != 0) {
        functionValue = ' - '
        expressionContainer.textContent += functionValue
        problemDisplayValue.textContent += functionValue
        problemDisplay.textContent += functionValue
        outputBox.textContent = ''
        outputBox.value +=functionValue
    } else if (expressionContainer.textContent === '' || expressionContainer.textContent === undefined ||expressionContainer.textContent === null) {
        functionValue = ''
        expressionContainer.textContent += functionValue
        outputBox.value +=functionValue
    }
    if (sum != 0) {
        problemDisplay.textContent = sum + ' - '
    }
}

function multiplication() {
    multiplyBtnClicked = 'true'
    decimalAdded = 'false'
    functionValueLength += 1

    if(outputBox.textContent != '' || problemDisplay.textContent != '' || expressionContainer.textContent != '' || problemDisplayValue.textContent != '') {
        operateForFunctions()
        outputBox.textContent = sum
    }

    if (multiplyBtnClicked === 'true') {
        addBtn.style.backgroundColor = ''
        subtractBtn.style.backgroundColor = ''
        divideBtn.style.backgroundColor = ''
        multiplyBtn.style.backgroundColor = 'lightgray'
    }
    if (expressionContainer.textContent != 0) {
        functionValue = ' × '
        expressionContainer.textContent +=functionValue
        problemDisplayValue.textContent += functionValue
        problemDisplay.textContent += functionValue
        outputBox.textContent = ''
        outputBox.value +=functionValue
    } else if (expressionContainer.textContent === '' || expressionContainer.textContent === undefined ||expressionContainer.textContent === null) {
        functionValue = ''
        expressionContainer.textContent += functionValue
        outputBox.value +=functionValue
    }
    if (sum != 0) {
        problemDisplay.textContent = sum + ' × '
    }
    
}

function division() {
    divideBtnClicked = 'true'
    decimalAdded = 'false'
    functionValueLength += 1

    if(outputBox.textContent != '' || problemDisplay.textContent != '' || expressionContainer.textContent != '' || problemDisplayValue.textContent != '') {
        operateForFunctions()
        outputBox.textContent = sum
    }

    if (divideBtnClicked === 'true') {
        addBtn.style.backgroundColor = ''
        subtractBtn.style.backgroundColor = ''
        multiplyBtn.style.backgroundColor = ''
        divideBtn.style.backgroundColor = 'lightgray'
    }
    if (expressionContainer.textContent != 0) {
        functionValue = ' ÷ '
        expressionContainer.textContent += functionValue
        problemDisplayValue.textContent += functionValue
        problemDisplay.textContent += functionValue
        outputBox.textContent = ''
        outputBox.value += functionValue
    } else if (expressionContainer.textContent === '' || expressionContainer.textContent === undefined ||expressionContainer.textContent === null) {
        functionValue = ''       
        expressionContainer.textContent += functionValue
        outputBox.value +=functionValue
    }
    if (sum != 0) {
        problemDisplay.textContent = sum + ' ÷ '
    }
}
addBtn.addEventListener('click', addition)

subtractBtn.addEventListener('click', subtraction)

multiplyBtn.addEventListener('click', multiplication)

divideBtn.addEventListener('click', division)



equalsBtn.addEventListener('click', operate) 


function operate() {

    problemDisplay.textContent = problemDisplayValue.textContent + ' ='
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    sumCalculated = 'true'


    
    if (functionValue === ' + ') {
        let strProb = expressionContainer.textContent
        let splitProb = strProb.split(' + ')
        sum = 0
        let numberz = splitProb.map((num => Number(num)))
        sum = numberz.reduce((accumulator, currentValue) => accumulator + currentValue)
        outputBox.textContent = sum
        expressionContainer.textContent = 'sum'
            if (cBtnClicked === 'false') {
                expressionContainer.textContent = sum
                outputBox.textContent = sum
                problemDisplayValue.textContent = sum
            } 
            if (sum % 1 !== 0) {
                sum = sum.toFixed(1)
            }
    } else if (functionValue === ' - ') {
    let strProb = expressionContainer.textContent
    let splitProb = strProb.split('-')
    sum = 0
    let numberz = splitProb.map((num => Number(num)))
    sum = numberz.reduce((accumulator, currentValue) => accumulator - currentValue)
    outputBox.textContent = sum
    expressionContainer.textContent = sum
        if (cBtnClicked === 'false') {
            expressionContainer.textContent = sum
            outputBox.textContent = sum
            problemDisplayValue.textContent = sum
        } 
        if (sum % 1 !== 0) {
            sum = sum.toFixed(1)
        }
    } else if (functionValue === ' × ') {
    let strProb = expressionContainer.textContent
    let splitProb = strProb.split('×')
    sum = 0
    let numberz = splitProb.map((num => Number(num)))
    sum = numberz.reduce((accumulator, currentValue) => accumulator * currentValue)
    outputBox.textContent = sum
    expressionContainer.textContent = sum
        if (cBtnClicked === 'false') {
            expressionContainer.textContent = sum
            outputBox.textContent = sum
            problemDisplayValue.textContent = sum
        } 
        if (sum % 1 !== 0) {
            sum = sum.toFixed(1)
        }
    } else if (functionValue === ' ÷ ') {
    let strProb = expressionContainer.textContent
    let splitProb = strProb.split('÷')
    sum = 0
    let numberz = splitProb.map((num => Number(num)))
    sum = numberz.reduce((accumulator, currentValue) => accumulator / currentValue)
    if (sum % 1 !== 0) {
        sum = sum.toFixed(1)
    }
    outputBox.textContent = sum
    expressionContainer.textContent = sum
        if (cBtnClicked === 'false') {
            expressionContainer.textContent = sum
            outputBox.textContent = sum
            problemDisplayValue.textContent = sum
        } 
        
    }
}

function operateForFunctions() {

    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''

    
    if (functionValue === ' + ') {
        let strProb = expressionContainer.textContent
        let splitProb = strProb.split(' + ')
        sum = 0
        let numberz = splitProb.map((num => Number(num)))
        sum = numberz.reduce((accumulator, currentValue) => accumulator + currentValue)
        outputBox.textContent = sum
        expressionContainer.textContent = 'sum'
            if (cBtnClicked === 'false') {
                expressionContainer.textContent = sum
                outputBox.textContent = sum
                problemDisplayValue.textContent = sum
            } 
            if (sum % 1 !== 0) {
                sum = sum.toFixed(1)
            }
    } else if (functionValue === ' - ') {
    let strProb = expressionContainer.textContent
    let splitProb = strProb.split('-')
    sum = 0
    let numberz = splitProb.map((num => Number(num)))
    sum = numberz.reduce((accumulator, currentValue) => accumulator - currentValue)
    outputBox.textContent = sum
    expressionContainer.textContent = sum
        if (cBtnClicked === 'false') {
            expressionContainer.textContent = sum
            outputBox.textContent = sum
            problemDisplayValue.textContent = sum
        } 
        if (sum % 1 !== 0) {
            sum = sum.toFixed(1)
        }
    } else if (functionValue === ' × ') {
    let strProb = expressionContainer.textContent
    let splitProb = strProb.split('×')
    sum = 0
    let numberz = splitProb.map((num => Number(num)))
    sum = numberz.reduce((accumulator, currentValue) => accumulator * currentValue)
    outputBox.textContent = sum
    expressionContainer.textContent = sum
        if (cBtnClicked === 'false') {
            expressionContainer.textContent = sum
            outputBox.textContent = sum
            problemDisplayValue.textContent = sum
        } 
        if (sum % 1 !== 0) {
            sum = sum.toFixed(1)
        }
    } else if (functionValue === ' ÷ ') {
    let strProb = expressionContainer.textContent
    let splitProb = strProb.split('÷')
    sum = 0
    let numberz = splitProb.map((num => Number(num)))
    sum = numberz.reduce((accumulator, currentValue) => accumulator / currentValue)
    if (sum % 1 !== 0) {
        sum = sum.toFixed(1)
    }
    outputBox.textContent = sum
    expressionContainer.textContent = sum
        if (cBtnClicked === 'false') {
            expressionContainer.textContent = sum
            outputBox.textContent = sum
            problemDisplayValue.textContent = sum
        } 
        
    }
}

})


// addBtn.addEventListener('click', function add(num1, num2) {
//     num1 = +prompt('num1?')
//     num2 = +prompt('num2?')
//     let result = num1 + num2
//     alert(result)
//     return result
// })