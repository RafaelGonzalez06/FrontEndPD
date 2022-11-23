// ejecuta el mensaje al cargar la pagina
// alert("Bienvenido a Mi Pagina") 

function cartel() {
    alert("Mi nombre es Rafael González. Soy de Iguazú - Misiones")
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