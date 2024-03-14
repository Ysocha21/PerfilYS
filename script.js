//turnos de paginas donde da click en siguiente(>) o anterior (<)

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el,index) =>{
    el.onclick = () =>{
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(() =>{
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() =>{
                pageTurn.style.zIndex = 20 + index;
            }, 500)

        }

    }
})

//contacto con el boton del click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn= document.querySelector('.btn.Contactame');

contactMeBtn.onclick = () => {
    pages.forEach((page,index) => {
        setTimeout (()=> {
            page.classList.add('turn');

            setTimeout(()=> {
                page.style.zIndex = 20+ index;
            }, 500)
        }, (index +1) * 200 + 100)
    })
}

//crear la función de índice inverso
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}

//volver al perfil dando un click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(()=> {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(()=> {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index +1)*200 + 100)
    })
}

//abriendo la animacion
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//abriendo la animacion(con cover right animation)

setTimeout(()=>{
    coverRight.classList.add('turn');
},2100)

setTimeout(()=>{
    coverRight.style.zIndex = -1;
},2800)

//abriendo la animacion(animación de página izquierda o página de perfil)

setTimeout(()=>{
    pageLeft.style.zIndex = 20;
},3200)



//abriendo la animacion(con all page right animation)
pages.forEach((_, index) => {
    setTimeout(()=> {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(()=> {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index +1)*200 + 2100)
})