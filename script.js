document.addEventListener('DOMContentLoaded', () => {

let addBtn = document.querySelector('#add')
let subtractBtn = document.querySelector('#subtract')
let multiplyBtn = document.querySelector('#multiply')
let divideBtn = document.querySelector('#divide')

let cBtn = document.querySelector('#C')
let ceBtn = document.querySelector('#CE')
let negativeBtn = document.querySelector('#negativebutton')
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
let addFunctionValue = addBtn.value
let subtractFunctionValue = subtractBtn.value
let multiplyFunctionValue = multiplyBtn.value
let divideFunctionValue = divideBtn.value
let functionValue;

outputBox.textContent += 0 

cBtn.addEventListener('click', function () {
    outputBox.textContent = 0
})

ceBtn.addEventListener('click', function() {
    
})

zeroBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent += 0 
    }
}) 

oneBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent += 1
    } else {
        outputBox.textContent = 1
    }
    
}) 

twoBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent += 2
    } else {
        outputBox.textContent = 2    
    }
    
}) 

threeBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent += 3
    } else {
        outputBox.textContent = 3
    }
}) 

fourBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent += 4
    } else {
        outputBox.textContent = 4
    }
}) 

fiveBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent += 5
    } else {
        outputBox.textContent = 5
    }
}) 

sixBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent += 6
    } else {
        outputBox.textContent = 6
    }
}) 

sevenBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent += 7
    } else {
        outputBox.textContent = 7
    }
}) 

eightBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent += 8
    } else {
        outputBox.textContent = 8
    }
}) 

nineBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent += 9
    } else {
        outputBox.textContent = 9
    }
}) 


addBtn.addEventListener('click', function () {
    if (outputBox.textContent > 0) {
        addBtn.value = '+'
        outputBox.textContent += addBtn.value
    } else if (outputBox.textContent === '' || outputBox.textContent === undefined || outputBox.textContent < 0 || outputBox.textContent === null) {
        addBtn.value = ''
        outputBox.textContent = addBtn.value
    }
})

subtractBtn.addEventListener('click', function () {
    if (outputBox.textContent > 0) {
        subtractBtn.value = '-'
        outputBox.textContent += subtractBtn.value
    } else if (outputBox.textContent === '' || outputBox.textContent === undefined || outputBox.textContent < 0 || outputBox.textContent === null) {
        subtractBtn.value = ''
        outputBox.textContent += subtractBtn.value
    }
})

multiplyBtn.addEventListener('click', function () {
    if (outputBox.textContent > 0) {
        multiplyBtn.value = '×'
        outputBox.textContent += multiplyBtn.value
    } else if (outputBox.textContent === '' || outputBox.textContent === undefined || outputBox.textContent < 0 || outputBox.textContent === null) {
        multiplyBtn.value = ''
        outputBox.textContent += multiplyBtn.value
    }
    
})

divideBtn.addEventListener('click', function () {
    if (outputBox.textContent > 0) {
        divideBtn.value = '÷'       
        outputBox.textContent += divideBtn.value 
    } else if (outputBox.textContent === '' || outputBox.textContent === undefined || outputBox.textContent < 0 || outputBox.textContent === null) {
        divideBtn.value = ''       
        outputBox.textContent += divideBtn.value
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