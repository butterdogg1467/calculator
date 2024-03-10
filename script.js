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
let expressionContainer = document.querySelector('.functionvaluecontainer')
let generalButton = document.querySelectorAll('.button')
let functionValue;
let num1 = 0;
let num2 = 0;
let cBtnClicked = 'false'
let sum = 0
let addBtnClicked;
let subtractBtnClicked;
let multiplyBtnClicked;
let divideBtnClicked; 
let nineBtnClicked = 'false'

generalButton.forEach(button => {
    
    button.addEventListener('click', function () {
    })
})

outputBox.textContent = 0

ceBtn.addEventListener('click', function () {
    expressionContainer.textContent = 0
    let currentValue = problemDisplayValue.textContent
    problemDisplayValue.textContent = currentValue.slice(0, -1)
})

cBtn.addEventListener('click', function () {
    outputBox.textContent = 0
    outputBox.value = 0
    sum = 0
    functionValue = ' '
    cBtnClicked = 'true'
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
    nineBtnClicked = 'false'
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
    expressionContainer.textContent = ''
})



zeroBtn.addEventListener('click', function () {
    if (outputBox.textContent != 0) {
        outputBox.textContent += 0 
        expressionContainer.textContent += 0
        problemDisplayValue.textContent += 0
    }
    
}) 


oneBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''

    if (outputBox.textContent != 0 ) {
        outputBox.textContent += 1
        problemDisplayValue.textContent += 1
        expressionContainer.textContent += 1
    } else {
        outputBox.textContent = 1
        problemDisplayValue.textContent = 1
        expressionContainer.textContent = 1
    }

    cBtnClicked = 'false'

    if (num1 != 0 && functionValue === '') {
        num1 += 1
    } else if (num2 != 0 && functionValue != '') {
        num2 += 1
    }
    
}) 

twoBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''

    if (outputBox.textContent != 0) {
        outputBox.textContent += 2
        problemDisplayValue.textContent += 2
        expressionContainer.textContent += 2
    } else {
        outputBox.textContent = 2
        problemDisplayValue.textContent = 2
        expressionContainer.textContent = 2
    }
    
    cBtnClicked = 'false'

    if (num1 != 0 && functionValue === '') {
        num1 += 2
    } else if (num2 != 0 && functionValue != '') {
        num2 += 2
    }
    
}) 

threeBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''

    if (outputBox.textContent != 0) {
        outputBox.textContent += 3
        problemDisplayValue.textContent += 3
        expressionContainer.textContent += 3
    } else {
        outputBox.textContent = 3
        problemDisplayValue.textContent = 3
        expressionContainer.textContent = 3
    }

    cBtnClicked = 'false'

    if (num1 != 0 && functionValue === '') {
        num1 += 3
    } else if (num2 != 0 && functionValue != '') {
        num2 += 3
    }

   
}) 

fourBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''

    if (outputBox.textContent != 0) {
        outputBox.textContent += 4
        problemDisplayValue.textContent += 4
        expressionContainer.textContent += 4
    } else {
        outputBox.textContent = 4
        problemDisplayValue.textContent = 4
        expressionContainer.textContent = 4
    }

    cBtnClicked = 'false'

    if (num1 != 0 && functionValue === '') {
        num1 += 4
    } else if (num2 != 0 && functionValue != '') {
        num2 += 4
    }

    
}) 

fiveBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''

    if (outputBox.textContent != 0) {
        outputBox.textContent += 5
        problemDisplayValue.textContent += 5
        expressionContainer.textContent += 5
    } else {
        outputBox.textContent = 5
        problemDisplayValue.textContent = 5
        expressionContainer.textContent = 5
    }

    cBtnClicked = 'false'

    if (num1 != 0 && functionValue === '') {
        num1 += 5
    } else if (num2 != 0 && functionValue != '') {
        num2 += 5
    }

    
}) 

sixBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''

    if (outputBox.textContent != 0) {
        outputBox.textContent += 6
        problemDisplayValue.textContent += 6
        expressionContainer.textContent += 6
    } else {
        outputBox.textContent = 6
        problemDisplayValue.textContent = 6
        expressionContainer.textContent = 6
    }

    cBtnClicked = 'false'

    if (num1 != 0 && functionValue === '') {
        num1 += 6
    } else if (num2 != 0 && functionValue != '') {
        num2 += 6
    }

    
}) 

sevenBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''

    if (outputBox.textContent != 0) {
        outputBox.textContent += 7
        problemDisplayValue.textContent += 7
        expressionContainer.textContent += 7
    } else {
        outputBox.textContent = 7
        problemDisplayValue.textContent = 7
        expressionContainer.textContent = 7
    }

    cBtnClicked = 'false'

    if (num1 != 0 && functionValue === '') {
        num1 += 1
    } else if (num2 != 0 && functionValue != '') {
        num2 += 1
    }

    
}) 

eightBtn.addEventListener('click', function () {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    cBtnClicked = 'false'

    if (outputBox.textContent == '0') {
        outputBox.textContent = 8
        problemDisplayValue.textContent = 8
        expressionContainer.textContent = 8

    } else if (outputBox.textContent != '0' ){
        outputBox.textContent += 8
        problemDisplayValue.textContent += 8
        expressionContainer.textContent += 8
    }

    if (functionValue === ' + '){
        if (outputBox.textContent != '0') {
            outputBox.textContent = 8
            eightBtn.addEventListener('click', function () {
                outputBox.textContent += 8
                
            })
        } 
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
    
    
}) 

document.addEventListener('keydown', function () {
    if (event.key === '1') {
        if (outputBox.textContent != 0) {
            outputBox.textContent = 1
            problemDisplayValue.textContent += 1
            expressionContainer.textContent += 1
        } else {
            outputBox.textContent = 1
            problemDisplayValue.textContent = 1
            expressionContainer.textContent = 1
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
    }
})

addBtn.addEventListener('click', function () {
    addBtnClicked = 'true'
    functionValue = ' + '
    
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
        outputBox.value += functionValue
        
    } else if (expressionContainer.textContent === '' || expressionContainer.textContent === undefined ||expressionContainer.textContent === null) {
        functionValue = ''
        expressionContainer.textContent = functionValue
        outputBox.value += functionValue
    } 
})

subtractBtn.addEventListener('click', function () {
    subtractBtnClicked = 'true'
    
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
        outputBox.value +=functionValue
    } else if (expressionContainer.textContent === '' || expressionContainer.textContent === undefined ||expressionContainer.textContent === null) {
        functionValue = ''
        expressionContainer.textContent += functionValue
        outputBox.value +=functionValue
    }
})

multiplyBtn.addEventListener('click', function () {
    multiplyBtnClicked = 'true'
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
        outputBox.value +=functionValue
    } else if (expressionContainer.textContent === '' || expressionContainer.textContent === undefined ||expressionContainer.textContent === null) {
        functionValue = ''
        expressionContainer.textContent += functionValue
        outputBox.value +=functionValue
    }
    
})

divideBtn.addEventListener('click', function () {
    divideBtnClicked = 'true'
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
        outputBox.value +=functionValue
    } else if (expressionContainer.textContent === '' || expressionContainer.textContent === undefined ||expressionContainer.textContent === null) {
        functionValue = ''       
        expressionContainer.textContent += functionValue
        outputBox.value +=functionValue
    }
})



equalsBtn.addEventListener('click', operate)

function operate() {

    problemDisplay.textContent = problemDisplayValue.textContent + '='
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
                num1 = sum
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
            num1 = sum
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
            num1 = sum
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
            num1 = sum
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