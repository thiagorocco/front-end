function cumprimentar(callback){
    console.log('Olá');
    callback();
}

function dizerNome(){
    console.log('Thiago')
}

cumprimentar(dizerNome)