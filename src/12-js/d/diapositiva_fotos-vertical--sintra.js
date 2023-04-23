// Internet Explorer 10 y versiones anteriores no admiten el modo de pantalla completa./*div.addEventListener("click", () =>    { close_FullScreen();}) //function close_FullScreen() {closeFullscreen(div);}*/
// Variables globales y  carga Inicial 
import {l} from '/src/12-js/listados.js';
import {debug} from '/src/12-js/debug.js';
// Variables globales de este fichero
var ciudad='sintra',ciudadT="Sintra"; 

var i_listado = 0;
var div=document.getElementById('div-ver-'+ ciudad);
var img=document.getElementById('img-ver-'+ ciudad);
var h2=document.getElementById('h2-ver-'+ ciudad);
var h3=document.getElementById('h3-ver-'+ ciudad);
// Asignar funciones al navegador
window.onload = ()=>{document.write(l);document.write(debug);}
window.siguiente_vertical_sintra=cargar_sintra_v;  
div.addEventListener("dblclick", () => { pantallaCompleta_sintra();})

// Ejecutar  CambiarAutomaticamente
CambiarAutomaticamente();

// Funciones que tienen que ser llamadas
function CambiarAutomaticamente() { 
  var t=Math.random()*2000+3000;
  var inc=Math.floor( Math.random()*3+1);
  cargar_sintra_v(inc,1);  
  setTimeout(CambiarAutomaticamente, t);
}
function cargar_sintra_v(incremento,parametro){
  var w=img.clientWidth;
  var listado, comentario,c;  
  c=" pequeño ";
  comentario= l.comentario_6.sintra_6; 
  listado=   l.fotos.sintra_png_300_6;  
  if (w >  600) { listado=  l.fotos.sintra_png_600_6;  c= " mediana " ; }
  if (w > 1000) { listado=  l.fotos.sintra_png_900_6;  c= " grande " ; }
  
  switch (parametro) {
    case 1:
      i_listado=i_listado+incremento;
      if (i_listado>(listado.length-1)) i_listado=0;
      if (i_listado<0) i_listado=listado.length-1;       
      img.src=listado[i_listado];      
      img.alt= comentario[i_listado] + ' ' + i_listado;
      h2.innerHTML= "Fotos de "+ ciudadT + " " + (i_listado +1) + " de " +listado.length ;//+ " carga " +  tiempo_carga + "msg";
      h3.innerHTML=comentario[i_listado] ; //+ ' ' + i_listado +  "(horizontal"  +  c + ")" + " w=" + w + " h=" + h;  
      //h3.innerHTML=comentario[i_listado] + ' ' + i_listado +  "(vertical " +  c + ")";      
      //h2.innerHTML='Presentación de Fotos de '+ ciudad;
      break;
    case 2: break; // ????
  }  
}
function pantallaCompleta_sintra() {  
  var s={ navigationUI: "hide" };
  if (div.requestFullscreen)      { div.requestFullscreen(s); return;}
  if (div.webkitRequestFullscreen){ div.webkitRequestFullscreen(s);return;} //safari
  if (div.msRequestFullscreen)    { div.msRequestFullscreen(s);return;}// IE11 
}



































/*var div=document.getElementById('div-'+ ciudad);
var img= new Image();
var p= document.createElement("p")
var h2= document.createElement("h2")
img.className='diapositivas-horizontal-img-ciudad'; 
h3.className='diapositivas-horizontal-p-ciudad';
h2.className='diapositivas-horizontal-h2-ciudad';
div.appendChild(img);  
div.appendChild(h2);
div.appendChild(p); */






/*if (div==null)   console.log("div con id=div-%s no existe y la imagen de %s no se vera",ciudad,ciudad); */



/* Funciones */
/*
function CambiarAutomaticamente() { 
  var t=Math.random()*2000+3000;
  var inc=Math.floor( Math.random()*3+1);
  cargar_sintra_v(inc,1);  
  setTimeout(CambiarAutomaticamente, t);
}

function cargar_sintra_v(incremento,parametro){
  var w=img.clientWidth;
  var listado, comentario,c;  
  c=" pequeño ";
  comentario= l.comentario_6.sintra_6; 
  listado=   l.fotos.sintra_png_300_6;  
  if (w >  600) { listado=  l.fotos.sintra_png_600_6;  c= " mediana " ; }
  if (w > 1000) { listado=  l.fotos.sintra_png_900_6;  c= " grande " ; }
  
  switch (parametro) {
    case 1:
      i_listado=i_listado+incremento;
      if (i_listado>(listado.length-1)) i_listado=0;
      if (i_listado<0) i_listado=listado.length-1;       
      img.src=listado[i_listado];      
      img.alt= comentario[i_listado] + ' ' + i_listado;
      h3.innerHTML=comentario[i_listado] + ' ' + i_listado + " horizontal " +  c + ") Dobleclick para Pantalla completa ";      
      h2.innerHTML='hola';
      break;
    case 2: break; // ????
  }  
}
function pantallaCompleta() {  
  var s={ navigationUI: "hide" };
  if (div.requestFullscreen) {    
    div.requestFullscreen(s);
  } else {
      if (div.webkitRequestFullscreen) { // safari
          div.webkitRequestFullscreen(s);
      } else {
          if (div.msRequestFullscreen) { // IE11 
            div.msRequestFullscreen(s);
          }
    }
  }  
}
/*
function getFullscreenElement(div) {
  if (
    document.fullscreenElement || //* Standard syntax 
    document.webkitFullscreenElement || //* Safari and Opera syntax 
    document.msFullscreenElement || /* IE11 syntax 
    div.mozFullscreenElement
  ) 
  { return true;}
  return false;
  

function open_FullScreen()  {
  //var s=getFullscreenElement(div);
  //console.log(s);
  //if (s===undefined)  {console.log("abrir");}
  //else        {console.log("cerrar");closeFullscreen(div);}
  pantallaCompleta(div);
}
function closeFullscreen(div) {  
    
  if (div.exitFullscreen) {    
    div.exitFullscreen();
  } else {
      if (div.webkitexitFullscreen) { // safari
          div.webkitexitFullscreen();
      } else {
          if (div.msexitFullscreen) { // IE11 
            div.msexitFullscreen();
          }
    }
  }
  // Internet Explorer 10 y versiones anteriores no admiten el modo de pantalla completa.
}






















/*
document.getElementById("button").addEventListener("click", () => {
toggleFullscreen()});
*/
//https://www.delftstack.com/es/howto/javascript/fullscreen-in-javascript/
// https://webdesign.tutsplus.com/es/tutorials/how-to-build-a-full-screen-responsive-page-with-flexbox--cms-32086
//function toggleFullscreen() { return pantallaCompleta(div).catch(console.log);}



//function Open_Full_Screen() { pantallaCompleta(div).catch(console.log);}
//function Close_Full_Screen(){closeFullscreen(div).catch(console.log);}
