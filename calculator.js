// calculator.js - 고급 계산기

// 변수 선언 (var, let, const 모두 사용)
const operators = ["+", "-", "*", "/", "√", "**"]; // const 사용
let currentInput = ""; // let 사용
var history = []; // var 사용
let firstNumber = null;
let operator = null;
let waitingForOperand = false;

// DOM 요소 참조
const display = document.getElementById('display');
const result = document.getElementById('result');
const historyList = document.getElementById('history-list');

// TODO: appendNumber 함수 구현
function appendNumber(number) {
    // TODO: 입력된 number가 유효한 숫자("0"~"9")인지 확인
    if (!/^[0-9]$/.test(number)) {
        showError("유효한 숫자를 입력하세요.");
        return;
    }
    
    // TODO: 유효하면 currentInput에 숫자 추가, display 요소 업데이트
    if (waitingForOperand) {
        currentInput = number;
        waitingForOperand = false;
    } else {
        currentInput = currentInput === "0" ? number : currentInput + number;
    }
    
    updateDisplay();
}

// TODO: setOperator 함수 구현
function setOperator(op) {
    // TODO: op가 유효한 연산자인지 확인
    if (!operators.includes(op)) {
        showError("유효하지 않은 연산자입니다.");
        return;
    }
    
    // TODO: currentInput이 비어 있으면 에러 메시지
    if (currentInput === "" && firstNumber === null) {
        showError("숫자를 먼저 입력하세요.");
        return;
    }
    
    // 특수 연산자 처리 (제곱근, 제곱)
    if (op === "√" || op === "**") {
        handleSpecialOperator(op);
        return;
    }
    
    // TODO: firstNumber를 Number(currentInput)로 저장, 유효성 확인
    if (firstNumber === null) {
        firstNumber = Number(currentInput);
        if (isNaN(firstNumber)) {
            showError("유효하지 않은 숫자입니다.");
            return;
        }
    } else if (operator && !waitingForOperand) {
        calculate();
        firstNumber = Number(display.textContent);
    }
    
    // TODO: 연산자 저장 후 currentInput 초기화, 디스플레이를 "0"으로 설정
    operator = op;
    waitingForOperand = true;
    currentInput = "";
}

// TODO: calculate 함수 구현
function calculate() {
    // TODO: firstNumber, operator, currentInput 존재 여부 확인
    if (firstNumber === null || operator === null || currentInput === "") {
        showError("계산을 완료할 수 없습니다.");
        return;
    }
    
    // TODO: secondNumber를 Number(currentInput)로 변환, 유효성 확인
    const secondNumber = Number(currentInput);
    if (isNaN(secondNumber)) {
        showError("유효하지 않은 숫자입니다.");
        return;
    }
    
    // TODO: 나눗셈에서 secondNumber가 0인지 확인
    if (operator === "/" && secondNumber === 0) {
        showError("0으로 나눌 수 없습니다.");
        return;
    }
    
    // TODO: switch 문으로 사칙연산 수행
    let calcResult;
    switch (operator) {
        case "+":
            calcResult = firstNumber + secondNumber;
            break;
        case "-":
            calcResult = firstNumber - secondNumber;
            break;
        case "*":
            calcResult = firstNumber * secondNumber;
            break;
        case "/":
            calcResult = firstNumber / secondNumber;
            break;
        default:
            showError("알 수 없는 연산자입니다.");
            return;
    }
    
    // TODO: 결과를 result 요소와 디스플레이에 출력
    display.textContent = calcResult;
    result.textContent = `결과: ${calcResult}`;
    
    // TODO: 계산 기록을 history 배열에 객체로 저장
    const historyItem = {
        firstNumber: firstNumber,
        operator: operator,
        secondNumber: secondNumber,
        result: calcResult
    };
    history.push(historyItem);
    
    // 콘솔에 JSON 형식으로 출력
    console.log(JSON.stringify(history, null, 2));
    
    // 화면에 기록 표시
    displayHistory();
    
    // 변수 초기화
    firstNumber = null;
    operator = null;
    currentInput = "";
    waitingForOperand = true;
}

// 디스플레이 업데이트 함수
function updateDisplay() {
    display.textContent = currentInput || "0";
}

// 에러 표시 함수
function showError(message) {
    result.textContent = `에러: ${message}`;
    result.classList.add('error');
    setTimeout(() => {
        result.classList.remove('error');
    }, 3000);
}

// 계산기 초기화 함수
function clearCalculator() {
    currentInput = "";
    firstNumber = null;
    operator = null;
    waitingForOperand = false;
    display.textContent = "0";
    result.textContent = "결과: 0";
}

// 백스페이스 함수 (추가 기능)
const backspace = () => {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }
};

// 소수점 입력 함수 (추가 기능)
var appendDecimal = function() {
    if (waitingForOperand) {
        currentInput = "0.";
        waitingForOperand = false;
    } else if (currentInput.indexOf('.') === -1) {
        currentInput += '.';
    }
    updateDisplay();
};

// 특수 연산자 처리 함수 (추가 기능)
function handleSpecialOperator(op) {
    if (currentInput === "") {
        showError("숫자를 먼저 입력하세요.");
        return;
    }
    
    const number = Number(currentInput);
    if (isNaN(number)) {
        showError("유효하지 않은 숫자입니다.");
        return;
    }
    
    let calcResult;
    if (op === "√") {
        if (number < 0) {
            showError("음수의 제곱근은 계산할 수 없습니다.");
            return;
        }
        calcResult = Math.sqrt(number);
    } else if (op === "**") {
        calcResult = number * number;
    }
    
    // 기록 저장
    const historyItem = {
        firstNumber: number,
        operator: op,
        secondNumber: op === "√" ? null : number,
        result: calcResult
    };
    history.push(historyItem);
    
    display.textContent = calcResult;
    result.textContent = `결과: ${calcResult}`;
    currentInput = "";
    waitingForOperand = true;
    
    console.log(JSON.stringify(history, null, 2));
    displayHistory();
}

// 계산 기록 표시 함수
function displayHistory() {
    historyList.innerHTML = "";
    
    // for 루프로 history 배열 순회
    for (let i = 0; i < history.length; i++) {
        const item = history[i];
        const historyElement = document.createElement('div');
        historyElement.className = 'history-item';
        
        let displayText;
        if (item.operator === "√") {
            displayText = `√${item.firstNumber} = ${item.result}`;
        } else if (item.operator === "**") {
            displayText = `${item.firstNumber}² = ${item.result}`;
        } else {
            displayText = `${item.firstNumber} ${item.operator} ${item.secondNumber} = ${item.result}`;
        }
        
        historyElement.textContent = displayText;
        historyList.appendChild(historyElement);
    }
}

// 키보드 입력 지원 (추가 기능)
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (/^[0-9]$/.test(key)) {
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        setOperator(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearCalculator();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === '.') {
        appendDecimal();
    }
});

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    clearCalculator();
    console.log("계산기가 로드되었습니다!");
});