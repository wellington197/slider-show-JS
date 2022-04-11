
//Selecionar tamanho dos slides itens
let totalSlides=document.querySelectorAll('.slider--item').length;

let currentSlide=0;

//qual slide ele vai iniciar.
document.querySelector('.slider--width').style.width=
    `calc(100vw*${totalSlides})`;

//selecionar a altura
document.querySelector('.slider--controls').style.height=
    `${document.querySelector('.slider').clientHeight}px`;



//Ao clicar no botão voltar
function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide=totalSlides-1;
    }
    updateMargin();
}

//Ao clicar no botão próximo
function goNext(){
    currentSlide++;
    if(currentSlide>(totalSlides-1)){
        currentSlide=0;    }
    updateMargin();
}


function updateMargin(){
    let ItemWidth=document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * ItemWidth);
    document.querySelector('.slider--width').style.marginLeft =
     `-${newMargin}px`;
}


setInterval(goNext,8000);