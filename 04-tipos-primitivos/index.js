/*
		String - basta colocar o valor entre aspas simples (''), é um tipo de texto
		Number - basta digitar o número no lugar do valor
		Boolean - funciona com true/false (verdadeiro/falso)
		Null - esse não define um valor pra variável, significa que ela não armazena nada
		Undefined - É quando o tipo da variável não é definido
*/

let nome = 'fabio' //uma string com a variavel nome armazenando 'fabio'
console.log(nome)
let numero = 123 // uma variavel number que so recebe numeros
console.log(numero)
let usuarioVerificado = true // variavel booleana que recebera um true para mostrar que é verdadeira
if(usuarioVerificado){
    console.log("usuario Verificado")
} else{
    console.log("usuario nao é Verificado")
}


let usuario = null // variavel que nao armazenará nada

console.log(usuario)

let telefone = undefined // variavel nao é definido

console.log(telefone)