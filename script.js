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

cBtn.addEventListener('click', function () {
    outputBox.textContent = ''
})

ceBtn.addEventListener('click', function() {
    
})

zeroBtn.addEventListener('click', function () {
    outputBox.textContent += 0 
}) 

oneBtn.addEventListener('click', function () {
    outputBox.textContent += 1
}) 

twoBtn.addEventListener('click', function () {
    outputBox.textContent += 2
}) 

threeBtn.addEventListener('click', function () {
    outputBox.textContent += 3
}) 

fourBtn.addEventListener('click', function () {
    outputBox.textContent += 4
}) 

fiveBtn.addEventListener('click', function () {
    outputBox.textContent += 6
}) 

sixBtn.addEventListener('click', function () {
    outputBox.textContent += 6
}) 

sevenBtn.addEventListener('click', function () {
    outputBox.textContent += 7
}) 

eightBtn.addEventListener('click', function () {
    outputBox.textContent += 8
}) 

nineBtn.addEventListener('click', function () {
    outputBox.textContent += 9
}) 

addBtn.addEventListener('click', function add(num1, num2) {
    num1 = +prompt('num1?')
    num2 = +prompt('num2?')
    let result = num1 + num2
    alert(result)
    return result
})

subtractBtn.addEventListener('click', function subtract(num1, num2) {
    num1 = +prompt('num1?')
    num2 = +prompt('num2?')
    let result = num1 - num2
    alert(result)
    return result
})

multiplyBtn.addEventListener('click', function multiply(num1, num2){
    num1 = +prompt('num1?')
    num2 = +prompt('num2?')
    let result = num1 * num2
    alert(result)
    return result
})

divideBtn.addEventListener('click', function divide(num1, num2) {
    num1 = +prompt('num1?')
    num2 = +prompt('num2?')
    let result = num1/num2
    alert(result)
    return result
})




})