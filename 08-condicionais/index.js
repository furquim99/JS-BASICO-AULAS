/*
O if é uma condicional de "se", exemplo, se a condição for satisfeita, 
faça isso.
*/

// if(condição) {
// 	//bloco de execução
// }

/*
Tem o else também, ele trabalha como um senão, 
"se a condição for satisfeita, faça isso , senão, faça aquilo"
*/


// if(condição) {
// 	//bloco de execução
// }else{
// 	//bloco de execução
// }

/*
Tem o else if, que trabalha como um senão se, 
"se a condição for satisfeita, faça isso , 
senão se outra condição for satisfeita, faça aquilo"
*/


// if(condição) {
// 	//bloco de execução
// }else if(condição){
// 	//bloco de execução
// }

//Na pratica

// let filmes = 'homem aranha';

// if(filmes === 'vingadores'){
//     console.log('é o filme dos vingadores');
// }else if(filmes === 'batman'){
//     console.log('é o filme do batman');
// }else{
//     console.log('é o filme do homem aranha');
// }
// console.log("voce selecionou esse filme");

// switch(parâmetro){
// 	case valor1:
// 		//bloco de declaração
// 		break
// 	case valor2:
// 		//bloco de declaração
// 		break
// 	case valor3:
// 		//bloco de declaração
// 		break
// 	case valor4:
// 		//bloco de declaração
// 		break
// 	default:
// 		//bloco de declaração
// }

/*
A estrutura do switch se baseia em casos para um parâmetro,
esse parâmetro pode ser uma variável, então se for uma variável i,
quando o valor dela for valor1, irá cair no primeiro caso, e será executado
o bloco de declaração do caso.
*/

// let nomefilmes = 'viva a vida é uma festa'

// switch(nomefilmes){
//     case 'pinoquio':
//         console.log("é o filme do pinoquio");
//         break;
//     case 'gato de botas':
//         console.log("é o filme do gato de botas");
//         break;
//     case 'shrek':
//         console.log("é o filme do shrek");
//         break;
//     case 'soul':
//         console.log("é o filme soul");
//         break;
//     default:
//         console.log("é outro filme");
// }

// O default é para quando nenhum caso se encaixar no parâmetro.

/*
Podemos fazer mais de um caso ter o mesmo bloco de declaração, ou
seja com inteiros
*/

let avaliacao = 1;

switch(avaliacao){
    case 1:
    case 2:
        console.log('filme ruim');
        break;
    case 3:
    case 4:
        console.log('filme mediano');
        break;
    case 5:
        console.log('filme bom');
        break;
    default:
        console.log('nota invalida');
        break;
}

