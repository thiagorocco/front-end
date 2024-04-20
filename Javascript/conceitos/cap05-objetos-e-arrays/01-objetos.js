//Objetos em javascript são estruturas de dados que permitem agrupar propriedades e métodos relacionados
let carro = {
    marca: 'Fiat',
    modelo: 'Palio',
    ano: 2020,
    ligar:function(){ //propriedade de função, também conhecida como método
        console.log('O carro está ligado');
    }
};
//Neste exemplo, carro é um objeto com quatro propriedades


/* Acessando propriedades de objetos */
console.log(carro.marca)//por ponto
console.log(carro['marca'])//por colchetes

/* Manipulando objetos 
    Podemos adicionar, modificar e remover 
*/

//Adicionando
carro.cor = 'Azul'
console.log(carro.cor)

//modificando
carro.ano = 2023
console.log(carro.ano)

//removendo
delete carro.cor
console.log(carro.cor)//saída undefined