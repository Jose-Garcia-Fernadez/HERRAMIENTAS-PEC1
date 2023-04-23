// Internet Explorer 10 y versiones anteriores no admiten el modo de pantalla completa./*div.addEventListener("click", () =>    { close_FullScreen();}) //function close_FullScreen() {closeFullscreen(div);}*/
// Variables globales y  carga Inicial 
import {l} from '/src/12-js/listados.js';
import {debug} from '/src/12-js/debug.js';
import { excludeList } from 'node-replace/bin/shared-options';
// Variables globales de este fichero
var ciudad='sintra'; 
var i_listado = 0;
var div=document.getElementById('div-fot-'+ ciudad);
var img=document.getElementById('img-fot-'+ ciudad);
var h2=document.getElementById('h2-fot-'+ ciudad);
var h3=document.getElementById('h3-fot-'+ ciudad);
// Asignar funciones al navegador
if (div==null) alert ('div Null');if (img==null) alert ('img Null');if (h2==null) alert ('h2 Null');if (h3==null) alert ('h3 Null');

window.onload = ()=>{document.write(l);document.write(debug);}
window.siguiente_sintra=cargar_sintra;  
div.addEventListener("dblclick", () => { pantallaCompleta_sintra();})

// Ejecutar  CambiarAutomaticamente
CambiarAutomaticamente();

// Funciones que tienen que ser llamadas
function CambiarAutomaticamente() { 
  var t=Math.random()*2000+3000;
  var inc=Math.floor( Math.random()*3+1);
  cargar_sintra(inc,1);  
  setTimeout(CambiarAutomaticamente, t);
}
function cargar_sintra(incremento,parametro){
  var w=img.clientWidth,h=img.clientHeight;
  var listado, comentario,c,hv;
  c=" pequeño ";
  if (h>w) {
    hv=' vertical ';
    comentario= l.comentario_6.sintra_6; 
    listado=    l.fotos.sintra_png_300_6;  
    if (h >  600) { listado=  l.fotos.sintra_png_600_6;  c= " mediana " ; }
    if (h > 1000) { listado=  l.fotos.sintra_png_900_6;  c= " grande " ;  }
  }else {
    hv=' horizontal ';
    comentario= l.comentario_1.sintra_1; 
    listado=   l.fotos.sintra_png_300_1;  
    if (w >  600) { listado=  l.fotos.sintra_png_600_1;  c= " mediana " ; }
    if (w > 1000) { listado=  l.fotos.sintra_png_900_1;  c= " grande " ;  }    
  }
  
  switch (parametro) {
    case 1:
      i_listado=i_listado+incremento;
      if (i_listado>(listado.length-1)) i_listado=0;
      if (i_listado<0) i_listado=listado.length-1;       
      img.src=listado[i_listado];      
      img.alt= comentario[i_listado] + ' ' + i_listado;
      h2.innerHTML='Presentación de Fotos de '+ ciudad;
      h3.innerHTML=comentario[i_listado] + ' ' + i_listado +  "(" + hv + c + ")" +" w=" + w + "h=" + h;            
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
  cargar_sintra(inc,1);  
  setTimeout(CambiarAutomaticamente, t);
}

function cargar_sintra(incremento,parametro){
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
