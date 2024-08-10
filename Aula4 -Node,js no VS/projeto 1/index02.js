//instalar a biblioteca "readline-sync" para que o usário digite algo no termine e o programa leia a linha sincronicamente
//npm install readline-sync

const readline =require("readline-sync");

let numOne= readline.questionFloat("Digite um número 1:\n");
let numTwo= readline.questionFloat("Digite um número 2:\n");

let operacao = readline.question("Digite uma das seguintes operações: + para somar, - para subtrair, * para multiplicar e / para divisão\n");

while(operacao !=='+' && operacao !=='-' && operacao!=='*' && operacao!=='/' ){
    operacao = readline.question("OPERAÇÃO INVÁLIDA\n Digite uma das seguintes operações: + para somar, - para subtrair, * para multiplicar e / para divisão\n");
}

let result=0;

switch(operacao){
    case "+":
        result=numOne+numTwo;
        break;
    case "-":
        result=numOne-numTwo;
        break;
    case "*":
        result=numOne*numTwo;
        break;
    case "/":
        result=numOne/numTwo;
        break;
    default:
        console.log("Operação inválida");
        break;
}

result= parseFloat(result.toFixed(2));

console.log(`Resultado = ${result}`);
