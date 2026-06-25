function sum (a,b){
    return a+b ;
}
function sub (a,b){
    return a-b ;
}
function multy (a,b){
    return a*b ;
}
function divison (a,b){
    if(b===0){
        return "Ошибка деление на ноль";
    }
    return a/b ;
}

const OPERATION = {
    sum: '+',
    sub: '-',
    multy: '*',
    divison: '/'
};
function calculator ({a,b, operation}){
    let result = null;
    switch (operation) {
        case OPERATION.sum:
            result= sum(a,b);
            
            break;
     case OPERATION.sub:
            result= sub(a,b);
            
            break;
     case OPERATION.multy:
            result= multy(a,b);
            
            break;
     case OPERATION.divison:
            result= divison(a,b);
            
            break;
    

        
    }
return result;

}

const inputANode = document.querySelector (".js-input-a");
const inputBNode = document.querySelector (".js-input-b");
const selectorOperationNode = document.querySelector (".js-select-operation");
const btnResultNode = document.querySelector(".js-btn-reuslt");
const outputNode = document.querySelector(".js-output");

btnResultNode.addEventListener('click', function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectorOperationNode.value;

    const result = calculator({
        a,
        b,
        operation
    });
    

    if (outputNode){
        outputNode.textContent = result
    };
});
