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

const audio = document.querySelector("audio")
audio.volume = 0.1

const musicControl = document.querySelector(".music-control")

musicControl.addEventListener("click",(event)=>{
    event.stopPropagation()

    event.target.src = `${event.target.src}`.includes("on.png")
    ? "./assets/icons/off.png"
    : "./assets/icons/on.png";

    `${event.target.src}`.includes("on.png") ? audio.play() : audio.pause(); 
});

const speed = 20;

function getRightPosition(){
    //Se não retornar nada da conversão retornará 2
    return parseInt(ash.style.right.split("px")) || 2;
}
function getTopPosition(){
    return parseInt(ash.style.top.split("px")) || 2;
}

function verifyLookPokemon(){
    let tp = getTopPosition()
    let rp = getRightPosition()
    console.log('TP: '+tp)
    console.log('RP:'+rp)
    if (
        getTopPosition() >= 2 &&
        getTopPosition() <= 98 &&
        getRightPosition() >= 130 &&
        getRightPosition() <= 216
    ){
        charmander.style.display = "block";
        return;
    }
}

// Evento listener(ouvinte que aguarda algo)
body.addEventListener("keydown", (event)=>{
    event.stopPropagation();
    
    switch (event.code) {
        case "ArrowLeft":
            ash.src = "assets/left.png"
            if (getRightPosition() < 770){
                //template string com crase
                ash.style.right = `${getRightPosition() + speed}px`
            }
            break;
        case "ArrowRight":
            ash.src = "assets/right.png"
            if (getRightPosition() > 2){
                //template string com crase
                ash.style.right = `${getRightPosition() - speed}px`
            }
            break;
        case "ArrowDown":
            ash.src = "assets/front.png"
            if(getTopPosition() < 625){       
                ash.style.top = `${getTopPosition() + speed}px`
            }
            break;
        case "ArrowUp":
            ash.src = "assets/back.png"
            if(getTopPosition() > 2){       
                ash.style.top = `${getTopPosition() - speed}px`
            }
            break;
        default:
            break;
    }

    verifyLookPokemon()
});



