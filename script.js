
(function(){
  document.getElementById("transicion").addEventListener("click", iniciarTransicion);
  document.getElementById("transicion").addEventListener('transitionend', alFinalizarTransicion);
  document.getElementById("animacion").addEventListener("click", iniciarAnimacion);
  document.getElementById("animacion").addEventListener('animationend', alFinalizarAnimacion);

})()
//
function iniciarTransicion(e){
  if (e.target.classList.contains("elemento"))
    e.target.classList.add('ocultar'); // Provoca la transición
}
function alFinalizarTransicion(e){
  if (e.propertyName === "width" )
    e.target.parentNode.removeChild(e.target);
   
}

function iniciarAnimacion(e){
  if (e.target.classList.contains("elemento"))
    e.target.classList.add('animar'); // Provoca la animación
}
function alFinalizarAnimacion(e){
  e.target.parentNode.removeChild(e.target);
}

//

 