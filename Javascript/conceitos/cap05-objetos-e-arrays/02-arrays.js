/* Arrays ou listas são criados usando colchetes */
let numeros = [1,2,3,4,5];
let nomes = ['Ana','Beatriz','Carlos'];
let misto = [1,'dois',true,[3,4],{nome:"João",idade: 30}];

//Acessando elementos
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);

//Alterando elementos
let frutas = ['maçã','uva','melancia'];
console.log(frutas);
frutas[0] = 'banana';
console.log(frutas);

/* Métodos comuns em arrays: 
    push() - adiciona um novo elemento ao final do array 
    pop() - remove o último elemento do array
    shift() - remove o primeiro elemento do array
    unshift() - adiciona um novo elemento ao inicio do array
    splice() - adiciona ou remove elementos de um array em uma posição específica
    slice() - cria um novo array a partir de uma parte do array existente
    join() - une todos os elementos do array em uma única string
*/

frutas.push('Abacate');
console.log(frutas); // ['banana', 'uva', 'melancia', 'Abacate']

frutas.pop();
console.log(frutas); // ['banana', 'uva', 'melancia'] - excluiu o último, Abacate

frutas.shift();
console.log(frutas); // ['uva', 'melancia'] - excluiu o 1º , banana

frutas.unshift('manga');
console.log(frutas); // ['manga', 'uva', 'melancia'] - incluíu manga como 1º elemento

frutas.splice(1,0,'kiwi');
console.log(frutas); // ['manga', 'kiwi', 'uva', 'melancia'] - incluíu kiwi como 2º elemento

let frutasTropicais = frutas.slice(0,2);
console.log(frutasTropicais); // ['manga', 'kiwi'] - pegou a partir da posição 0 apenas 2 elementos

let frutasString = frutas.join(" | ");
console.log(frutasString); // manga,kiwi,uva,melancia - transformou o array frutas em uma string com o delimitador " | " 

/* Métodos para Manipulaçao e Acesso
    concat() retorna um novo array que é junção do array original mais o novo
    
*/
let frutas1 = ['maçã','banana'];
let frutas2 = ['abacaxi','pera']

