/*
== --- igual --- quando um valor é igual ao outro, exemplo a == b.
=== --- identico --- quando o valor e o tipo da variável são iguais.
!= --- diferente --- quando um valor é diferente ao outro.
!== --- não idêntico --- quando o valor e o tipo da variável são diferentes.
< --- menor que --- quando o valor de uma é menor que a da outra.
<= --- menor ou igual --- quando o valor de uma é menor ou igual ao valor da outra.
> --- maior que --- quando o valor de uma é maior que a da outra.
>= --- maior ou igual --- quando o valor de uma é maior ou igual ao valor da outra.



&& --- e --- quando uma expressão e a outra são verdadeiras, retorna true, 
caso uma delas sejam falsas, retorna false.
|| --- ou --- quando uma expressão ou a outra são verdadeiras, retorna true, para 
retornar false, ambas tem de ser expressões falsas.
! --- negação --- quando uma expressão é verdadeira, e usa a negação, a expressão
se torna falsa, exemplo (!(a < b)), se a for menor que b, a expressão seria 
verdadeira, mas como tem a negação, ela se torna falsa.

*/

// const a = 5;
// const b = 5;
// const c = 3; //tipagem de number
// const d = "3"; // tipagem de string
// const e = 4;
// const f = 6;
// console.log(a==b);
// console.log(c===d);
// console.log(c!==d);
// console.log(e <= f);
// console.log(e >= f);

// const z = 2;
// const x = 2;

// console.log(z === x && z < x);

// console.log(z === x && z <= x);

// console.log(z > x && z === x);

// console.log(z > x && z < x);

const w = 4;
const y = 4;

console.log(w === y || w < y);
// V OU V = V
console.log(w === y || w <= y);
// V OU F = V
console.log(w > y || w === y);
// F OU V = V
console.log(w > y || w < y);
// F OU F = F 

console.log( !(w === y)) //false
console.log( w === y) // true