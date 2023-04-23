const { spawn } = require('node:child_process');
const replace = require("node-replace"); /* npm install node-replace --save */
const textos = require("./cambia-variable.js");
const ruta="z:/destino/";
//ruta=process.env.npm_config_ruta || ruta; // npm run cambia-lorem-por-buenos-en-destino --ruta=c:/4UOC/PEC1/destino/
//https://reflect.run/articles/sending-command-line-arguments-to-an-npm-script/
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
