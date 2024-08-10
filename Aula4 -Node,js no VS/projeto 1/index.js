var nome = "Letícia";
//variável que servirá para armazenar o nome do usuário

let sobrenome = "Guimarães";
//variável que servirá para armazenar o sobrenome do usuário

const nomeCompleto = nome + " " + sobrenome;
/*
onstante que servirá para concatenar o nome completo
*/

console.log("Seu nome é:"+ nomeCompleto);
//printa o nome completo no terminal com o + pa

nome ="Bruna";
sobrenome="Surfistinha";

console.log(`Olá, você é ${nome} e é ${sobrenome}`);
//printa texto com concateção junto das variaveis

let numeroUm =7;
let numeroDois =9;

function somar(numeroUm, numeroDois){
return numeroUm+numeroDois;
}

console.log(somar(numeroUm,numeroDois));