// for(inicializador; condição; incremento;) {
// 	//bloco de execução
// for = para
// }
/*
inicializador - é a variável que vai dar início ao laço, é possivel passar um
valor para ela, exemplo: for( a = 0; condição; incremento; )

condição - é o que deve ser verdadeiro para que o laço continue se repetindo,
exemplo: for( a = 0; a < 5; incremento; )

incremento - é o que acontece com a variável a cada vez que laço se inicia 
e se repete, exemplo: for( a = 0; a < 5; i++ ), nesse caso a cada vez, a variável
i terá um incremento de 1 no valor, ela começa em 0, depois 1, depois 2,etc...
*/

// for(let i = 0; i < 5; i++){
//     console.log(i)
//     // + = concatenar
// }

// while(condição){
// 	//bloco de execução
// while = enquanto
// }
/*
No caso do while, enquanto essa condição for satisfeita, o laço irá se repetir,
exemplo: 
i = 10 
while(i < 12) { 
i++ 
}
O laço irá se repetir até o i ser 12, então irá se repetir apenas uma vez.
*/
// let j = 5;
// while(j < 13){
//     j++;
//     console.log(j);
// }

// let a = 10;
// let b = 15;

// while(a < b){
//     console.log('incrementado a variavel a ' + a);
//     a++; //vai incrementar a variavel com um +1, entao se é 10 a proxima vai ser 11
// }

// do{
// 	//bloco de execução
// do = faça
// }while(condição)

/*
Nesse caso, a única diferença pro while, é que o teste se a condição é 
verdadeira só é feita no final.
*/

var c = 1;

do{
    console.log('entrou no do ' + c);
    c++;
}while(c <= 8)