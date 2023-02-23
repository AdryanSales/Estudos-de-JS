let N = prompt("-------------\nCONTADOR\n-------------\n[1] De 1 a 10   \n[2] De 10 a 1   \n[3] SAIR           ");

switch (N) {
    case '1':
        for (let cre = 1; cre<11; cre++) {
            console.log(cre);
        }
        break;

    case '2':
        for (let dec = 10; dec>0; dec--) {
            console.log(dec);
        }
        break;

    default:
        console.log("Saindo...");
        break;
}