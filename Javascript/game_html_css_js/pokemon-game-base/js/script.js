// . classes
// # ids
// nome do elemento
// div h1 => elemento dentro de outro elemento
// querySelector => seleciona apenas um elemento (o primeiro que ele encontrar)
// querySelectorAll => seleciona todos os elementos e coloca dentro de um array
const body = document.querySelector("body")
const game = document.querySelector(".game")
const count = document.querySelector("h1")

const reset = document.querySelector("#reset")

const ash = document.querySelector("#ash")

const charmander = document.querySelector("#charmander")
const pikachu = document.querySelector("#pikachu")
const zubat = document.querySelector("#zubat")

const speed = 20;

function getRightPosition(){
    //Se não retornar nada da conversão retornará 2
    return parseInt(ash.style.right.split("px")) || 2;
}
function getTopPosition(){
    return parseInt(ash.style.top.split("px")) || 2;
}


// Evento listener(ouvinte que aguarda algo)
body.addEventListener("keydown", (event)=>{
    event.stopPropagation();
    
    switch (event.code) {
        case "ArrowLeft":
            if (getRightPosition() < 770){
                //template string com crase
                ash.style.right = `${getRightPosition() + speed}px`
                ash.src = "assets/left.png"
            }
            break;
        case "ArrowRight":
            if (getRightPosition() > 2){
                //template string com crase
                ash.style.right = `${getRightPosition() - speed}px`
                ash.src = "assets/right.png"
            }
            break;
        case "ArrowDown":
            ash.src = "assets/front.png"
            if(getTopPosition() < 625){       
                ash.style.top = `${getTopPosition() + speed}px`
            }
            break;
        case "ArrowUp":
            if(getTopPosition() > 2){       
                ash.style.top = `${getTopPosition() - speed}px`
                ash.src = "assets/back.png"
            }
            break;
        default:
            break;
    }
});


