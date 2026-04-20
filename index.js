// --- Блок 1: Математические операции (из math.js) ---

function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function Multiply(a, b) {
    return a * b;
}

function divison(a, b) {
    // Добавлена проверка на деление на ноль
    if (b === 0) {
        return "Ошибка: деление на ноль";
    }
    return a / b;
}

// --- Блок 2: Логика калькулятора (из calculator.js) ---

const OPERATION = {
    sum: '+',
    substract: '-',
    Multiply: '*',
    divison: '/'
};

function calculate({ a, b, operation }) {
    let result = null;
    switch (operation) {
        case OPERATION.sum:
            result = sum(a, b);
            break;

        case OPERATION.substract:
            result = substract(a, b);
            break;

        case OPERATION.Multiply:
            result = Multiply(a, b);
            break;

        case OPERATION.divison:
            result = divison(a, b);
            break;
    }
    return result;
}

// --- Блок 3: Работа с интерфейсом (из index.js) ---

const inputANode = document.querySelector('.js-input-a');
const inputBNode = document.querySelector('.js-input-b');
const selectOperationNode = document.querySelector('.js-select-operation');
const btnResultNode = document.querySelector('.js-btn-result');
const outputNode = document.querySelector('.js-output');

btnResultNode.addEventListener('click', function () {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectOperationNode.value;
    
    const result = calculate({
        a,
        b,
        operation
    });

    // Вывод результата в консоль (как было originally)
    console.log(result);
    
    // Дополнительно: вывод результата на страницу (чтобы калькулятор был полезен)
    if (outputNode) {
        outputNode.textContent = result;
    }
});