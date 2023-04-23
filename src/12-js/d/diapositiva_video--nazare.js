// Internet Explorer 10 y versiones anteriores no admiten el modo de pantalla completa./*div.addEventListener("click", () =>    { close_FullScreen();}) //function close_FullScreen() {closeFullscreen(div);}*/
// Variables globales y  carga Inicial 
import {l,tiempo_carga,escribir_tiempo} from '/src/12-js/listados.js';
import {debug} from '/src/12-js/debug.js';
// Variables globales de este fichero
var ciudad='nazare',ciudadT="Nazaré"; 
var i_listado = 0,tiempo_video;
var div=document.getElementById('div-video-'+ ciudad);
var video=document.getElementById('video-video-'+ ciudad);
var h2=document.getElementById('h2-video-'+ ciudad);
var h3=document.getElementById('h3-video-'+ ciudad);
// Asignar funciones al navegador
window.onload = ()=>{document.write(l);document.write(debug);}
window.siguiente_video_nazare=cargar_nazare_video;  
div.addEventListener("dblclick", () => { pantallaCompleta_nazare();})

// Ejecutar  CambiarAutomaticamente
CambiarAutomaticamente();


// Funciones que tienen que ser llamadas
function CambiarAutomaticamente() { 
  cargar_nazare_video(1,1);  
  setTimeout(CambiarAutomaticamente,tiempo_video*1000);
}
function cargar_nazare_video(incremento,parametro){
  var w=video.clientWidth,h=video.clientHeight;
  var listado, comentario,c;  
  c=" pequeño ";
  comentario= l.comentario_mp4.nazare_mp4; 
  listado=   l.mp4.nazare_mp4[0];  
  if (w >  600) { listado=  l.mp4.nazare_mp4[1];  c= " mediana " ; }
  if (w > 1000) { listado=  l.mp4.nazare_mp4[2];  c= " grande " ; }
  
  switch (parametro) {
    case 1:
      i_listado=i_listado+incremento;
      if (i_listado>(listado.length-1)) i_listado=0;
      if (i_listado<0) i_listado=listado.length-1;       
      video.src=listado[i_listado];            
      h2.innerHTML= "Videos de "+ ciudadT + " " + (i_listado +1) + " de " +listado.length ;//+ " carga " +  tiempo_carga + "msg";
      h3.innerHTML=comentario[i_listado] ; //+ ' ' + i_listado +  "(horizontal"  +  c + ")" + " w=" + w + " h=" + h;  
      //h2.innerHTML='Presentación de Videos de '+ ciudad + " " + tiempo_carga;
      //h3.innerHTML=comentario[i_listado] + ' ' + i_listado +  "(video " +  c + ")" +" w=" + w + " h=" + h;            
      tiempo_video=l.duracion.nazare_duracion[i_listado];
      break;
    case 2: break; // ????
  }  
}
function pantallaCompleta_nazare() {  
  var s={ navigationUI: "hide" };
  if (div.requestFullscreen)      { div.requestFullscreen(s); return;}
  if (div.webkitRequestFullscreen){ div.webkitRequestFullscreen(s);return;} //safari
  if (div.msRequestFullscreen)    { div.msRequestFullscreen(s);return;}// IE11 
}

















// ctrl + h  ---> nazare - 'otra ciudad'
/*var ciudad='nazare'; 
import {l} from '/src/12-js/listados.js';
import {debug} from '/src/12-js/debug.js';
// funciones publicas
window.onload = ()=>{document.write(l);document.write(debug);}
window.siguiente_nazare=cargar_nazare_video;  


var div=document.getElementById('div-'+ ciudad);
var img= new Image(), p= document.createElement("p"),i_listado = 0;


img.className='diapositivas-img-ciudad'; 
p.className="diapositivas-p-ciudad";
div.appendChild(p); 
div.appendChild(img);  

if (div==null) 
  console.log("div con id=div-%s no existe y la imagen de %s no se vera",ciudad,ciudad); 
console.log("style=%s",img.className);
solo();


function cargar_nazare_video(incremento,parametro){
  var w=document.documentElement.clientWidth,h=document.documentElement.clientHeight;
  var listado, comentario;
  // Dependiendo del ancho cargo un conjunto distintos de fotos y la ciudad
  comentario= w>h ? l.comentario_1.nazare_1: l.comentario_6.nazare_6;
  listado= w>h ? l.fotos.nazare_png_300_1: l.fotos.nazare_png_300_6; 
  if (w >  600) listado= w>h ? l.fotos.nazare_png_600_1: l.fotos.nazare_png_600_6;
  if (w > 1000) listado= w>h ? l.fotos.nazare_png_900_1: l.fotos.nazare_png_900_6;
 
  switch (parametro) {
    case 1:
      i_listado=i_listado+incremento;
      if (i_listado>(listado.length-1)) i_listado=0;
      if (i_listado<0) i_listado=listado.length-1; 
      img.src=listado[i_listado];
      img.alt=comentario[i_listado] + ' ' + i_listado;
      p.innerHTML=comentario[i_listado] + ' ' + i_listado;
      //console.log("Fin carga de imagen= %s con éxito de la ciudad %s ",i_listado,ciudad);
      break;
    case 2: break; // ????
  }  
}
*//*
var ciudad='nazare'; 
import {l} from '/src/12-js/listados.js';
import {debug} from '/src/12-js/debug.js';
// funciones publicas
window.onload = ()=>{document.write(l);document.write(debug);}
window.siguiente_video_nazare=cargar_video_nazare;  
var p= document.createElement("p"),i_listado = 0;

var d=document.getElementById('div-video-'+ ciudad);
var video=document.createElement('video');

p.className='diapositivas-horizontal-p-ciudad';
video.autoplay=true; video.muted=true; video.controls=true;video.loop=true;
d.appendChild(video);

solo();
function solo() { 
  var t=Math.random()*2000+3000;
  var inc=Math.floor( Math.random()*3+1);
  cargar_video_nazare(inc,1);  
  setTimeout(solo, t);
}

function cargar_video_nazare(incremento,parametro){
  var ww=video.clientWidth;
  var listado, comentario,c;
  listado=l.mp4.nazare_mp4[0]; c= " pequeña " ;
  if (ww >  600)  { listado=l.mp4.nazare_mp4[1];c= " mediana " ; }
  if (ww > 1000)  { listado=l.mp4.nazare_mp4[2];c= " grande " ;}
  switch (parametro) {
    case 1:
      i_listado=i_listado+incremento;
      if (i_listado>(listado.length-1)) i_listado=0;
      if (i_listado<0) i_listado=listado.length-1; 
      video.src=listado[i_listado];
      video.alt=comentario[i_listado] + ' ' + i_listado;
      //p.innerHTML=comentario[i_listado] + ' ' + i_listado + c;      
      break;
    case 2: break; // ????
  }    
}
*/


/*  var t=video.duration*1000; // no funciona ????
  if (t==NaN ) t=tiempo_video*1000;
  if (t<5000) t=5000;
  //alert(tiempo_video*1000);*/
