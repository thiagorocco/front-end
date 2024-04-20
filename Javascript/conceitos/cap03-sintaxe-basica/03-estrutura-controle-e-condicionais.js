let idade = 16;

/****  if, else if e else ****/
if(idade >= 18)
console.log("Você pode votar")
else if(idade == 17)
console.log("Você pode votar no próximo ano")
else
console.log("Você ainda não pode votar")


/****  switch ****/
let dia = 2;
switch(dia){
    case 1:
        console.log('Segunda-feira')
        break;
    case 2:
        console.log('Terça-feira')
        break;
    case 3:
        console.log('Quarta-feira')
        break;
    default:
        console.log('Dia inválido')
}

/***  Loop ****/

//for
console.log('*** FOR ***')
for(let i=0; i<5;i++)
console.log(i)

//while
console.log('*** WHILE ***')
let i=0;
while(i<5){
    console.log(i)
    i++;
}

//do ... while
console.log('*** DO ... WHILE ***')
let j=0;
do{
    console.log(j)
    j++
}while(j<5)