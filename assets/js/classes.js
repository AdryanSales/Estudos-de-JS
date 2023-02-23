class celular {
    constructor(){
        this.cor = "prata";
    }

    ligar(){
        console.log("Uma ligação");
        return "ligando..."
    };  
}

let objeto = new celular(); // instanciação da classe

console.log(objeto.cor);
console.log(objeto.ligar()); 