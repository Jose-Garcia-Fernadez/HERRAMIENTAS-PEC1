window.onload = function () {
 // document.onmousemove = mostrarPosicionPuntero;		
  document.onclick=mostrarPosicionPuntero;
//copiarportapapeles;  
} 
function mostrarPosicionPuntero(e) {
    let s=window.location.href;
    let ss='w=' + document.documentElement.clientWidth + " " +((document.all)? event.x : e.pageX) + ' ' + document.documentElement.clientWidth + "  " +
    ((document.all)? event.y : e.pageY) +  ' '+ document.documentElement.clientHeight;     
    if (s.indexOf("localhost")>=0) 
      { document.title =ss;} // Modo local 
    else {
      document.getElementById("debug").innerHTML=ss; // Modo web al la hora de entregar practica $debug =none y no se vera 
    }
  }
  
function copiarportapapeles(e){
  var str=((document.all)? event.x : e.pageX) + '\n' + ((document.all)? event.y : e.pageY);    
      const el = document.createElement('textarea');el.value = str;document.body.appendChild(el);el.select();document.execCommand('copy');document.body.removeChild(el);
      
    
    }    


/*
train.onclick = function() {
  let start = Date.now();
  let timer = setInterval(function() {
    let timePassed = Date.now() - start;
    train.style.left = timePassed / 5 + 'px';
    if (timePassed > 2000) clearInterval(timer);}, 20);
  }
https://javascript.info/animation  
https://webcode.tools/es/generadores/css/keyframe-animation
<video autoplay controls loop height="219" width="390">
	<source src="/media/video.mp4" type="video/mp4">
</video>
background: #fff url(/img/ottawa.jpg) center center/cover no-repeat;

https://www.uperfectmonitor.com/es/account/register

jgarciafernandez8@uoc.edu
Jgfpas0.
FSD20
  */