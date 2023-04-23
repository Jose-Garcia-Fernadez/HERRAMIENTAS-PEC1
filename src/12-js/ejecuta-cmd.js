const { spawn } = require('node:child_process');
const replace = require("node-replace"); /* npm install node-replace --save */
const fs = require('fs');
copiar_remplazar('alcobasa','Alcobaça','011detalle-alcobasa.html');
copiar_remplazar('fatima','Fátima','012detalle-fatima.html');
copiar_remplazar('nazare','Nazaré','013detalle-nazare.html');
copiar_remplazar('obidos','Óbidos','014detalle-obidos.html');
copiar_remplazar('sintra','Sintra','015detalle-sintra.html');

function copiar_remplazar(ciudad,ciudadT,html) {
  var destino,datos_origen; // datos_origen es origen s = destino
  datos_origen = fs.readFileSync('src/12-js/d_origen/diapositiva_fotos-horizontal-nazare.js',{encoding:'utf8'});
  console.log(datos_origen);
  destino='src/12-js/d/diapositiva_fotos-horizontal--' + ciudad +'.js';
  fs.writeFileSync(destino, datos_origen); 
  replace({ regex: "nazare", replacement: ciudad, paths: [destino]});
  replace({ regex: "Nazaré", replacement: ciudadT, paths: [destino]});

  datos_origen= fs.readFileSync('src/12-js/d_origen/diapositiva_fotos-vertical-nazare.js');
  destino='src/12-js/d/diapositiva_fotos-vertical--' + ciudad +'.js';
  fs.writeFileSync(destino, datos_origen);  
  replace({ regex: "nazare", replacement: ciudad, paths: [destino]});
  replace({ regex: "Nazaré", replacement: ciudadT, paths: [destino]});

  
  datos_origen= fs.readFileSync('src/12-js/d_origen/diapositiva_fotos-nazare.js');
  destino='src/12-js/d/diapositiva_fotos--' + ciudad +'.js' 
  fs.writeFileSync(destino, datos_origen);  
  replace({ regex: "nazare", replacement: ciudad, paths: [destino]});
  replace({ regex: "Nazaré", replacement: ciudadT, paths: [destino]});

  datos_origen = fs.readFileSync('src/12-js/d_origen/diapositiva_video-nazare.js');
  destino='src/12-js/d/diapositiva_video--' + ciudad +'.js'
  fs.writeFileSync(destino, datos_origen);  
  replace({ regex: "nazare", replacement: ciudad, paths: [destino]});
  replace({ regex: "Nazaré", replacement: ciudadT, paths: [destino]});
  
  
  datos_origen = fs.readFileSync('src/0100detalle-base.html');
  destino='src/' + html;
  fs.writeFileSync(destino, datos_origen);  
  replace({ regex: "nazare", replacement: ciudad, paths: [destino]});
  replace({ regex: "Nazaré", replacement: ciudadT, paths: [destino]});
}



/*npm install node-replace -g*/
var f = new Date();
var d = normaliza(f.getFullYear()) +
  normaliza(1 + f.getMonth()) + 
  normaliza(f.getDate()) + "_" +
  normaliza(f.getHours()) + 
  normaliza(f.getMinutes())+
  normaliza(f.getSeconds())
console.log (d );

const bat = spawn('cmd.exe', ['/c', 'copia.cmd '+ d]);
bat.stdout.on('data', (data) => {console.log(data.toString());});
bat.stderr.on('data', (data) => {console.error(data.toString());});
bat.on('exit', (code) => {console.log(`Codigo de salida es: ${code}`);});
function normaliza(n){ return n < 10 ? "0" + n.toString() : "" + n.toString();}
/* Busqueda y remplazo */




 



/*
la contra barra \  --->  hay que cambiarla a \\en el js
en package.json 
"scripts": {
  
  "c": "node origen/03-js/ejecuta-cmd.js"
}
para ejecutarlo es 
npm run c
tambien lo puedo añadir a otro script
mas información
https://nodejs.org/api/child_process.html
https://learn.microsoft.com/es-es/windows-server/administration/windows-commands/xcopy
*/
/*var y=f.getFullYear();
var m=f.getMonth()+1;
var d=f.getDay();
var h=f.getHours();
var mm=f.getMinutes();
/*m>9 ? m.toString(): "0" + m.toString();
d>9 ? d.toString(): "0" + d.toString();
h>9 ? h.toString(): "0" + h.toString();
mm > 9? mm.toString(): "0" + mm.toString();
*/