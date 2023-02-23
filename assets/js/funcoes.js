/* ---------------- FUNÇÕES COMUNS ---------------- */

// function calc(v1, v2, op){
//     return eval(`${v1} ${op} ${v2}`); // retorna o valor resultante de acordo com os valores que serão atribuidos
// }
 
// let total = calc(9,2,'*'); // chamando a função, atrubuindo valor aos parâmetros e armazenando na variável
 
// console.log(`Resultado: ${total}`);


/* ---------------- ARROW FUNCIONS ---------------- */

let calc = (v1, v2, op) => {return eval(`${v1} ${op} ${v2}`);}

let total = calc(9,2,'*');

console.log(`Resultado: ${total}`);


/* ---------------- FUNÇÕES ANÔNIMAS ---------------- */

// let calc = (v1, v2, op) => {return eval(`${v1} ${op} ${v2}`);}

// let total = calc(9,2,'*');

// console.log(`Resultado: ${total}`);