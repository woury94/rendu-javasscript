const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelectorAll('right')
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)

// if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
//     alert('Wow je suis en Dark mode !')   
// }

// function themeNuitJour(){
//     console.log("Hello");
    
//     const date = new Date()
//     const hour = date.getHours()

//     if(hour > 5 || hour < 20) {
        
//         document.documentElement.style.setProperty('--ecriture', '#333')
//         document.documentElement.style.setProperty('--fond', '#f1f1f1')

//     } else {
                
//         document.documentElement.style.setProperty('--ecriture', '#f1f1f1')
//         document.documentElement.style.setProperty('--fond', '#333')
//     }

// }

// themeNuitJour()

const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Go Dark"

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        btnToggle.innerHTML = "Go Light"

    }

})