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
let outputBox = document.querySelector('#outputbox')
let problemDisplay = document.querySelector('.problemdisplay')
let problemDisplayValue = document.querySelector('.problemdisplayvalue')
let functionValueContainer = document.querySelector('.functionvaluecontainer')
let functionValue;
let num1 = 0;
let num2 = 0;
let cBtnClicked = 'false'
let sum = 0
let addBtnClicked;
let subtractBtnClicked;
let multiplyBtnClicked;
let divideBtnClicked; 

outputBox.textContent += 0

ceBtn.addEventListener('click', function () {
    num2 = 0;
    functionValueContainer.textContent = '';
})

cBtn.addEventListener('click', function () {
    outputBox.textContent = 0
    outputBox.value = 0
    num1 = 0
    num2 = 0
    sum = 0
    functionValue = ''
    cBtnClicked.value = 'true'
    problemDisplay.textContent = ''
    problemDisplayValue.textContent = ''
    functionValueContainer.textContent = ''
    addBtn.style.backgroundColor = 'gray'
    subtractBtn.style.backgroundColor = 'gray'
    multiplyBtn.style.backgroundColor = 'gray'
    divideBtn.style.backgroundColor = 'gray'
})

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
    functionValueContainer.textContent = ''
})



zeroBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent += 0 
        functionValueContainer.textContent += 0
        problemDisplayValue.textContent += 0
    }
    
}) 


oneBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent = 1
        problemDisplayValue.textContent += 1
        functionValueContainer.textContent += 1
    } else {
        outputBox.textContent = 1
        problemDisplayValue.textContent = 1
        functionValueContainer.textContent = 1
    }

    if (num1 != 0) {
        num2 = 1
    } else {
        num1 = 1
    }

    if (num1 != 0 && functionValue === '') {
        num1 += 1
    } else if (num2 != 0 && functionValue != '') {
        num2 += 1
    }
    
}) 

twoBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent = 2
        problemDisplayValue.textContent += 2
        functionValueContainer.textContent += 2
    } else {
        outputBox.textContent = 2
        problemDisplayValue.textContent = 2
        functionValueContainer.textContent = 2
    }
    
    if (num1 != 0) {
        num2 = 2
    } else {
        num1 = 2
    }
    
    if (num1 != 0 && functionValue === '') {
        num1 += 2
    } else if (num2 != 0 && functionValue != '') {
        num2 += 2
    }
}) 

threeBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent = 3
        problemDisplayValue.textContent += 3
        functionValueContainer.textContent += 3
    } else {
        outputBox.textContent = 3
        problemDisplayValue.textContent = 3
        functionValueContainer.textContent = 3
    }

    if (num1 != 0) {
        num2 = 3
    } else {
        num1 = 3
    }
    
    if (num1 != 0 && functionValue === '') {
        num1 += 3
    } else if (num2 != 0 && functionValue != '') {
        num2 += 3
    }
}) 

fourBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent = 4
        problemDisplayValue.textContent += 4
        functionValueContainer.textContent += 4
    } else {
        outputBox.textContent = 4
        problemDisplayValue.textContent = 4
        functionValueContainer.textContent = 4
    }

    if (num1 != 0) {
        num2 = 4
    } else {
        num1 = 4
    }
    
    if (num1 != 0 && functionValue === '') {
        num1 += 4
    } else if (num2 != 0 && functionValue != '') {
        num2 += 4
    }
}) 

fiveBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent = 5
        problemDisplayValue.textContent += 5
        functionValueContainer.textContent += 5
    } else {
        outputBox.textContent = 5
        problemDisplayValue.textContent = 5
        functionValueContainer.textContent = 5
    }

    if (num1 != 0) {
        num2 = 5
    } else {
        num1 = 5
    }
    
    if (num1 != 0 && functionValue === '') {
        num1 += 5
    } else if (num2 != 0 && functionValue != '') {
        num2 += 5
    }
}) 

sixBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent = 6
        problemDisplayValue.textContent += 6
        functionValueContainer.textContent += 6
    } else {
        outputBox.textContent = 6
        problemDisplayValue.textContent = 6
        functionValueContainer.textContent = 6
    }

    if (num1 != 0) {
        num2 = 6
    } else {
        num1 = 6
    }
    
    if (num1 != 0 && functionValue === '') {
        num1 += 6
    } else if (num2 != 0 && functionValue != '') {
        num2 += 6
    }
}) 

sevenBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent = 7
        problemDisplayValue.textContent += 7
        functionValueContainer.textContent += 7
    } else {
        outputBox.textContent = 7
        problemDisplayValue.textContent = 7
        functionValueContainer.textContent = 7
    }

    if (num1 != 0) {
        num2 = 7
    } else {
        num1 = 7
    }
    
    if (num1 != 0 && functionValue === '') {
        num1 += 7
    } else if (num2 != 0 && functionValue != '') {
        num2 += 7
    }
}) 

eightBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent = 8
        problemDisplayValue.textContent += 8
        functionValueContainer.textContent += 8
    } else {
        outputBox.textContent = 8
        problemDisplayValue.textContent = 8
        functionValueContainer.textContent = 8
    }

    if (num1 != 0) {
        num2 = 8
    } else {
        num1 = 8
    }
    
    if (num1 != 0 && functionValue === '') {
        num1 += 8
    } else if (num2 != 0 && functionValue != '') {
        num2 += 8
    }
}) 

nineBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent = 9
        problemDisplayValue.textContent += 9
        functionValueContainer.textContent += 9
    } else {
        outputBox.textContent = 9
        problemDisplayValue.textContent = 9
        functionValueContainer.textContent = 9
    }

    if (num1 != 0) {
        num2 = 9
    } else {
        num1 = 9
    }
    
    if (num1 != 0 && functionValue === '') {
        num1 += 9
    } else if (num2 != 0 && functionValue != '') {
        num2 += 9
    }
}) 


addBtn.addEventListener('click', function () {
    addBtnClicked = 'true'
    
    if (addBtnClicked === 'true') {
        subtractBtn.style.backgroundColor = 'gray'
        multiplyBtn.style.backgroundColor = 'gray'
        divideBtn.style.backgroundColor = 'gray'
        addBtn.style.backgroundColor = 'lightgray'
    }
    if (functionValueContainer.textContent != 0) {
        functionValue = ' + '
        functionValueContainer.textContent += functionValue
        problemDisplayValue.textContent += functionValue
        outputBox.value +=functionValue
    } else if (functionValueContainer.textContent === '' || functionValueContainer.textContent === undefined ||functionValueContainer.textContent === null) {
        functionValue = ''
        functionValueContainer.textContent = functionValue
        outputBox.value +=functionValue
    } 
})

subtractBtn.addEventListener('click', function () {
    subtractBtnClicked = 'true'
    
    if (subtractBtnClicked === 'true') {
        addBtn.style.backgroundColor = 'gray'
        multiplyBtn.style.backgroundColor = 'gray'
        divideBtn.style.backgroundColor = 'gray'
        subtractBtn.style.backgroundColor = 'lightgray'
    }
    if (functionValueContainer.textContent != 0) {
        functionValue = ' - '
        functionValueContainer.textContent += functionValue
        problemDisplayValue.textContent += functionValue
        outputBox.value +=functionValue
    } else if (functionValueContainer.textContent === '' || functionValueContainer.textContent === undefined ||functionValueContainer.textContent === null) {
        functionValue = ''
        functionValueContainer.textContent += functionValue
        outputBox.value +=functionValue
    }
})

multiplyBtn.addEventListener('click', function () {
    multiplyBtnClicked = 'true'
    if (multiplyBtnClicked === 'true') {
        addBtn.style.backgroundColor = 'gray'
        subtractBtn.style.backgroundColor = 'gray'
        divideBtn.style.backgroundColor = 'gray'
        multiplyBtn.style.backgroundColor = 'lightgray'
    }
    if (functionValueContainer.textContent != 0) {
        functionValue = ' × '
        functionValueContainer.textContent +=functionValue
        problemDisplayValue.textContent += functionValue
        outputBox.value +=functionValue
    } else if (functionValueContainer.textContent === '' || functionValueContainer.textContent === undefined ||functionValueContainer.textContent === null) {
        functionValue = ''
        functionValueContainer.textContent += functionValue
        outputBox.value +=functionValue
    }
    
})

divideBtn.addEventListener('click', function () {
    divideBtnClicked = 'true'
    if (divideBtnClicked === 'true') {
        addBtn.style.backgroundColor = 'gray'
        subtractBtn.style.backgroundColor = 'gray'
        multiplyBtn.style.backgroundColor = 'gray'
        divideBtn.style.backgroundColor = 'lightgray'
    }
    if (functionValueContainer.textContent != 0) {
        functionValue = ' ÷ '
        functionValueContainer.textContent += functionValue
        problemDisplayValue.textContent += functionValue
        outputBox.value +=functionValue
    } else if (functionValueContainer.textContent === '' || functionValueContainer.textContent === undefined ||functionValueContainer.textContent === null) {
        functionValue = ''       
        functionValueContainer.textContent += functionValue
        outputBox.value +=functionValue
    }
})



equalsBtn.addEventListener('click', function operate() {
    problemDisplay.textContent = problemDisplayValue.textContent + '='
    addBtn.style.backgroundColor = 'gray'
    subtractBtn.style.backgroundColor = 'gray'
    multiplyBtn.style.backgroundColor = 'gray'
    divideBtn.style.backgroundColor = 'gray'
    
    if (functionValue === ' + ') {
        let strProb = functionValueContainer.textContent
        let splitProb = strProb.split(' + ')
        sum = 0
        let numberz = splitProb.map((num => Number(num)))
        sum = numberz.reduce((accumulator, currentValue) => accumulator + currentValue)
        outputBox.textContent = sum
        functionValueContainer.textContent = sum
            if (cBtnClicked === 'false') {
                num1 = sum
            } 
            if (sum % 1 !== 0) {
                sum = sum.toFixed(1)
            }
    } else if (functionValue === ' - ') {
    let strProb = functionValueContainer.textContent
    let splitProb = strProb.split('-')
    sum = 0
    let numberz = splitProb.map((num => Number(num)))
    sum = numberz.reduce((accumulator, currentValue) => accumulator - currentValue)
    outputBox.textContent = sum
    functionValueContainer.textContent = sum
        if (cBtnClicked === 'false') {
            num1 = sum
        } 
        if (sum % 1 !== 0) {
            sum = sum.toFixed(1)
        }
    } else if (functionValue === ' × ') {
    let strProb = functionValueContainer.textContent
    let splitProb = strProb.split('×')
    sum = 0
    let numberz = splitProb.map((num => Number(num)))
    sum = numberz.reduce((accumulator, currentValue) => accumulator * currentValue)
    outputBox.textContent = sum
    functionValueContainer.textContent = sum
        if (cBtnClicked === 'false') {
            num1 = sum
        } 
        if (sum % 1 !== 0) {
            sum = sum.toFixed(1)
        }
    } else if (functionValue === ' ÷ ') {
    let strProb = functionValueContainer.textContent
    let splitProb = strProb.split('÷')
    sum = 0
    let numberz = splitProb.map((num => Number(num)))
    sum = numberz.reduce((accumulator, currentValue) => accumulator / currentValue)
    if (sum % 1 !== 0) {
        sum = sum.toFixed(1)
    }
    outputBox.textContent = sum
    functionValueContainer.textContent = sum
        if (cBtnClicked === 'false') {
            num1 = sum
        } 
        
    }
})



})


// addBtn.addEventListener('click', function add(num1, num2) {
//     num1 = +prompt('num1?')
//     num2 = +prompt('num2?')
//     let result = num1 + num2
//     alert(result)
//     return result
// })