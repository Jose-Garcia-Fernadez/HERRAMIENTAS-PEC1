const { spawn } = require('node:child_process');
/*var h=new Date();
var d=h.toLocaleString()+h.toLocaleTimeString();
console.log('xxx' + d);*/
const bat = spawn('cmd.exe', ['/c', 'debug-none.cmd']);

bat.stdout.on('data', (data) => {
  console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.error(data.toString());
});

bat.on('exit', (code) => {
  console.log(`Codigo de salida es: ${code}`);
});
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