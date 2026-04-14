const OPERATION = {
    sum: '+',
    substract: '-',
    Multiply: '*',
    divison: '/'
};

function calculate({a, b, operation}){
    let result = null;

    switch(operation){
        case OPERATION.sum:
        result = sum(a,b)
        break;

        case OPERATION.substract:
        result = substract(a,b)
        break;

        case OPERATION.Multiply:
        result = Multiply(a,b)
        break;

        case OPERATION.divison:
        result = divison(a,b)
        break;
    }
    return result;

}