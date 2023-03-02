/* 
    Vamos testar seus conhecimentos de tipos
primitivos no JS! (se ficar com dúvida revise a
aula de tipos primitivos)

Objetivo: Crie uma condição que verifica se um
boleto está pago ou não e apresenta uma mensagem
em cada caso. Para atingir esse resultado leia com
atenção as regras abaixo:

1 - Crie uma variável boletoPago e inicialize ela com
false, ou seja, o boleto não está pago.
2 - Seu código deve ter uma condição (if) verificando
se a variável boletoPago é true ou false;
3 - Se o boleto estiver pago apresente uma mensagem
dizendo "O boleto está pago";
4 - Se o boleto não estiver pago apresente uma
mensagem dizendo "O boleto não está pago";

*/

let boletoPago = false;

if(boletoPago === true){
    console.log("Boleto está pago");
    alert("Boleto está pago");
} else{
    console.log("Boleno não está pago");
    alert("Boleto não está pago");
}

console.log(boletoPago);