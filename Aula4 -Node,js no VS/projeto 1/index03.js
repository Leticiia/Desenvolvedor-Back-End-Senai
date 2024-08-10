const readline = require('readline-sync');

const somar = require('./somar.js');
const subtrair = require('./subtrair.js');
const dividir = require('./dividir.js');
const multiplicar = require('./multiplicar.js');

let continuar;

do {
    let numOne = readline.questionFloat("Digite um número 1:\n");
    let numTwo = readline.questionFloat("Digite um número 2:\n");

    let operacao = readline.question("Digite uma das seguintes operações: + para somar, - para subtrair, * para multiplicar e / para divisão\n");

    while (operacao !== '+' && operacao !== '-' && operacao !== '*' && operacao !== '/') {
        operacao = readline.question("OPERAÇÃO INVÁLIDA\n Digite uma das seguintes operações: + para somar, - para subtrair, * para multiplicar e / para divisão\n");
    }

    let result = 0;

    switch (operacao) {
        case "+":
            result = somar(numOne, numTwo);
            break;
        case "-":
            result = subtrair(numOne, numTwo);
            break;
        case "*":
            result = multiplicar(numOne, numTwo);
            break;
        case "/":
            result = dividir(numOne, numTwo);
            break;
        default:
            console.log("Operação inválida");
            break;
    }

    console.log(`Resultado = ${result}`);

    let respostaUser =readline.question("Para continuar digite algo");

    if(respostaUser == ''){
        continuar=false;
    }else{
        continuar=true;
    }


} while (continuar);

