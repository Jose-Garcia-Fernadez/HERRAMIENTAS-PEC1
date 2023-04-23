const { spawn } = require('node:child_process');
const replace = require("node-replace"); /* npm install node-replace --save */
const textos = require("./cambia-variable.js");
const ruta="/src/";

remplazar_textos_loren_por_buenos(textos());
function remplazar_textos_loren_por_buenos(textos){
  for (var i=0;i<textos.length;i=i+3) {
    replace({ regex: textos[i+1], replacement: textos[i+2], paths: [ruta + textos[i]]});
  }
}
//remplazar_textos_buenos_por_lorem(textos()); 
function remplazar_textos_buenos_por_lorem(textos){
  for (var i=0;i<textos.length;i=i+3) {
    replace({ regex: textos[i+2], replacement: textos[i+1], paths: [ruta + textos[i]]});
  }
}
