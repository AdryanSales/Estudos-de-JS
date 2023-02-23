// SELETOR DE PESSOAS

let h = 0;
let m = 0;

do {
    let sexo = prompt("Qual seu sexo biológico? [M/F]");
    let idade = prompt("Qual a sua idade? ");
    let cabelo = prompt("Qual a cor do seu cabelo? \n[1] Loiro \n[2] Preto \n[3] Ruivo \n[4] Castanho");
		
    if ((sexo == "M" || 'm') && idade >= 18 && cabelo == 4) {
        h = h+1;
    } else if ((sexo == "F" || 'f') && (idade > 24 && idade < 31) && cabelo == 1) {
        m = m+1;
    } 
    resp = prompt("Terminou? [S/N]");
} while (resp == "N");

console.log("============\nRESULTADOS\n============");
console.log("Total de homens maiores de 18 e de cabelos castanhos: ", h);
console.log("Total de homens maiores de 24, com menos de 31 e loiras: ", m);