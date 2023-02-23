let cor = prompt('Status do farol: ');

/* 
    EXEMPLO DE IF & ELSE IF
*/ 

if (cor === 'verde') {
    console.log("Siga!");
} else if (cor === 'amarelo') {
    console.log("Atenção!");
} else if (cor === 'vermelho') {
    console.log("PARE!");
}


/* 
    EXEMPLO DE SWITCH CASE
*/ 

switch (cor) {
    case 'verde':
        console.log("Siga!");
        break;  

    case 'amarelo':
        console.log("Atenção!");
        break;

    case 'vermelho':
        console.log("Pare!");
        break;
}