const numeros = [1, 2, 3, 4, 5];
// a função map é um exemplo de função de alta ordem, 
//pois aceita como argumento uma função e aplica essa função a cada elemento do array retornando um novo array com os resultados 
const quadrados = numeros.map(function(n){
    return n*n;
})
console.log(quadrados);