// Escopo Global

let cor = 'vermelho'

function mostraCor(){
    console.log(cor)
}

mostraCor()

// Escopo local
function mostraCarro(){
    let carro = 'Ferrari'
    console.log(carro)
}

mostraCarro()
mostraCarro(carro)// Tentar acessar a variável carro fora da função resultará em um erro

// Variáveis let e const de bloco
function testarLet(){
    if(true){
        let x = 5; // x tem escopo de bloco
    }
    console.log(x)//Erro: x is not defined, porque é acessível apenas dentro do bloco if
}