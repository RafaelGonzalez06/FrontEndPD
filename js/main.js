// ejecuta el mensaje al cargar la pagina
// alert("Bienvenido a Mi Pagina") 

function cartel() {
    alert("Mi nombre es Rafael González. \n\nSoy de Iguazú - Misiones. \n\nEmail: rafag2023@gmail.com")
}


// barra de progreso de lectura de la pagina
let processScroll = () => {
    let docElem = document.documentElement, 
      docBody = document.body,
      scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
        scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
      scrollPercent = scrollTop / scrollBottom * 100 + '%';
    
    // console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);
    
      document.getElementById("barra_progreso").style.setProperty("--scrollAmount", scrollPercent); 
  }
  document.addEventListener('scroll', processScroll);

// termina el proceso de la barra


// Configuracion boton modo oscuro
const btnSwitch = document.querySelector('#switch');
const barraProgreso = document.querySelector('#barra_progreso');
const btnUp = document.querySelector('#boton_up');
// const cartas = document.querySelectorAll('.carta');   //en revision

    btnSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark'); //coloca una clase al body
        
        barraProgreso.classList.toggle('progreso');  //coloca una clase a la barra de progreso. Esto es para poder modificar el color en el modo oscuro
        btnUp.classList.toggle('boton_up');
        btnSwitch.classList.toggle('active');

        //en revision
        // cartas.forEach(function(){
        //     cartas.classList.toggle('carta_oscura');
        // });

    });



// Configurar el boton de volver arriba
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container')
        .classList.add('show');
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () =>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});