/*
Os parâmetros são opcionais, fica a recomendacão de
deixar a função realizar apenas uma tarefa, deixando assim ela mais fácil de 
compreender, o nome deve ser o mais  claro possivel para que a função serve
*/

// Estrutura da função

// function nomeFuncao(parâmetro, parametro2, e etc){
//     // bloco de execução
// }

// nomeFuncao(passar um paramentro que é um numero, uma string)
// nomeFuncao(parametro, parametro2)
// function incentivoAula(){
//     alert('voce chegou ao js')
// }

// incentivoAula();

function incentivoAula(nome = 'fabio'){
    alert('voce chegou ao js ' + nome + ' continue assim')
}

incentivoAula();



function somarNumeros(numero1, numero2){
    console.log(numero1 + numero2);
    
}

somarNumeros(1, 2);


function somarNumeros2(numero1, numero2){
    return numero1 + numero2;
}

let resultado = somarNumeros2(1, 2);

console.log(resultado);

resultado = somarNumeros2(resultado, 10);

console.log(resultado);

