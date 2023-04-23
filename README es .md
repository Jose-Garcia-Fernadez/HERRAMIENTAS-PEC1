# Modo de instalación 
## 1 Copiar Carpeta Minima
## 2 Ejecutar ip.cmd instalara todas las dependencias
## 3 Para ejecutar el programa npm run sd 
## modo debug
4 Para enviar el programa npm run sp 
## modo produccion
# Ficheros raiz
## configuración
.editorconfig -->  configuración el editor
.gitignore --> ficheros que no hay que subir a git
.nvmrc --> Versión de node
.posthtmlrc --> Configuracion de ficheros de posthtml-include
.stylelintrc.json --> Configuración de stylelint para que no de ciertos errores 
.htmlvalidate.json --> configuración de "VS Code HTML-Validate extension" para que mire los errores HTML

## js
mio.js --> para saber las coordenadas del ratón

## CMD
ip.cmd --> Fichero bat para ejecutar todas las dependencias
g.cmd --> Para instalar ghit
gs.cmd --> Para subir los ficheros
z.cmd --> Para crear una letra de disco que apunta a un directorio.

## JSON
package.json --> Configuración de el programa
package-lock.json --> Configuración del programa

## MD
README es .md --> Este fichero


# Directorios 
.parcel-cache --> Lo utiliza parcel para guardar sus ficheros temporales
node_modules --> Lo utiliza npm para guardar las dependencias
src --> Contiene los fuentes del programa
d:\4UOC\PEC1\src\
index.html --> Fichero de arranque
p1.html --> Otro fichero

d:\4UOC\PEC1\src\assets\fonts\ --> Fuentes del programa

d:\4UOC\PEC1\src\assets\images\ --> Ficheros de imagenes

d:\4UOC\PEC1\src\assets\scripts\
main.js --> Lo cargo en los html
mio.js --> Lo cargo en los html

d:\4UOC\PEC1\src\assets\styles\
_variables.scss --> Para incluir las variables
main.scss --> Para importar todos los ficheros parcilaes @import "variables"; 
d:\4UOC\PEC1\src\assets\styles\layouts\
_home.scss


# package.json
sharp para modificar las ficheros de imagen

# ORDENES CMD

## Ejecutar aplicación parcel  e.cmd <sp> " Para produccion
  ### npm run sd

## Crear git g.cmd
  ### call git config --global user.name "Jose-Garcia-Fernadez"
  ### call git config --global user.email jfuentedelarosa@gmail.com
  ### call git init

## Enviar repositorio gs.cmd <comentario>
  ### git add .
  ### git commit -m %c%
  ## La primera vez
  ### git push --set-upstream https://github.com/Jose-Garcia-Fernadez/PEC1.git master
  ### git push https://github.com/Jose-Garcia-Fernadez/PEC1.git


## Instalar todas las dependencias ip.cmd
  ### Eliminar de package.json la entradas de "devDependencies":
  ### call rmdir /s /q
  ### call npm install -g parcel-bundler
  ### call npm install --save-dev @parcel/transformer-sass autoprefixer npm-run-all parcel postcss-preset-env posthtml-include rimraf  sharp npm-run-series npm-run-all
  ### call npm install --save-dev stylelint stylelint-config-standard
  ### call npm install --save-dev stylelint stylelint-config-standard-scss
  ### call npm install --save-dev stylelint stylelint-config-standard postcss-lit
  ### call npm install --save-dev stylelint-config-prettier
  ### call npx html-validate --init



## Crear disco "Z:" que apunta a la carpeta actual z.cmd
  ### set disco=z
  ### set directorio ="%cd%"
  ### net use /delete %disco%:
  ### subst %disco%: /D
  ### %disco%:


# iconos windows
## PEC1
  ### Destino "c:\Windows\System32\cmd.exe" 
  ### Iniciar en "d:\4UOC\PEC1\"
## Visual Estudio Code
  ### Destino "C:\Users\renfe\AppData\Local\Programs\Microsoft VS Code\Code.exe"
  ### Iniciar en "d:\4UOC\PEC1\"
    #### Los dos iconos en la barra de taresas

































# UOC Boilerplate
UOC Boilerplate es una plantilla de inicio para los cursos de HTML y CSS Tools de la [Master`s Program in Multimedia Applications](https://estudis.uoc.edu/ca/masters-universitaris/aplicacions-multimedia/presentacio) y el [Programa de Maestría en Aplicaciones Web y Desarrollo de Sitios Web](https://estudis.uoc.edu/ca/masters-universitaris/desenvolupament-llocs-aplicacions-web/presentacio) en la [Universitat Oberta de Catalunya] (https://www.uoc.edu). 
Su objetivo es proporcionar un paquete de inicio de desarrollo web frontend básico y moderno basado en Parcel e incluyendo un compilador Sass, un transpilador ES6, minifiers, un transformador de imágenes y herramientas de desarrollo.
Esta es la versión 3.x de UOC Boilerplate, disponible desde el semestre 2020-2 de la UOC.
## Requirements

[Node.js](http://nodejs.org/) >= 14.15.x

## Getting started Comienzo
Clone este repositorio con `git clone`, o descargue un archivo .zip usando el botón verde superior derecho.
Usando la Terminal, navegue a la carpeta del proyecto y ejecute `npm install`.

## Features Funciones

- Uses [Parcel v2](https://parceljs.org) module bundler.
- NPM scripts para un rápido desarrollo y compilación de producción (consulte Comandos a continuación).

### Stylesheets Hojas de estilo

- [Sass/SCSS](https://sass-lang.com) to CSS compilation.
- 
- Minificación y optimización de archivos CSS en compilaciones de producción con [`cssnano`](https://github.com/cssnano/cssnano) (`@parcel/optimizer-cssnano`).
- 
- [PostCSS](https://postcss.org/) features:
  - Transpile modern CSS with [`postcss-preset-env`](https://preset-env.cssdb.org/features).
  - Automatically add CSS prefix to unsupported properties with [`autoprefixer`](https://autoprefixer.github.io/).

### HTML

- Minificación y optimización de archivos CSS en compilaciones de producción [`htmlnano`](https://github.com/posthtml/htmlnano) (`@parcel/optimizer-htmlnano`).
- 
- [PostHTML](https://github.com/posthtml/posthtml) features:
  - Incluir archivos HTML parciales con [`posthtml-include`](https://github.com/posthtml/posthtml-include).

### Scripts

- Permitir la modernidad JavaScript (ES201x/ES8/ES7/ES6…) que se transpila automáticamente a ES5 y se minialimenta en las compilaciones de producción, con [Babel](https://babeljs.io/).

### Images

- Transformación de imagen con [`@parcel/transformer-image`](https://parceljs.org/recipes/image/) (based on [`sharp`](https://sharp.pixelplumbing.com/)).

### Development
- Lanzamiento del servidor de desarrollo y recarga en vivo de los cambios de archivos.
- Informes de errores amigables.
- 
## How to use this boilerplate Cómo usar este repetitivo

El contenido reside dentro de la carpeta `src/`. Si no desea cambiar la configuración o no está seguro de lo que está haciendo, no edite archivos fuera de la carpeta `src/`.

Ejecute siempre los siguientes comandos durante la etapa de desarrollo y para las compilaciones de producción. Tenga en cuenta que se espera que todos los proyectos creados con esta plantilla se compilen utilizando `npm run build` antes de ser publicados.

### Commands

| Command         | Description                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`   | Ejecuta un servidor web local para el desarrollo y abre el explorador para mostrarlo. Compila automáticamente estilos y scripts cada vez que se cambia un archivo en `src/`, y recarga en vivo el navegador. Esto es lo que _must estar run_ en la etapa de desarrollo.                                                                                                                     |
| `npm run build` | Compila, minimiza y optimiza los archivos de la carpeta assets. Los archivos compilados y optimizados generados se encuentran en la carpeta `dist/`. Esto es lo que _must run_ antes de publicar el proyecto. Este es también el comando de compilación que ejecutarán los servicios de implementación externos como Netlify. Los archivos publicables se encuentran en la carpeta `dist/`. |

| `npm run clean` | Elimina la carpeta `/dist` actual y las carpetas de caché.                                                                                                                                                                                                                                                      |
| `npm run test`  | Muestra un mensaje de éxito si todo funciona como se esperaba.                                                                                                                                                                                                                                  |

## Need help? / Want to help out?

Siéntase libre de crear un [new issue](https://github.com/uoc-advanced-html-css/uoc-boilerplate/issues/new/) o escríbeme a jorditarrida@uoc.edu.

¿Está utilizando este Boilerplate para sus proyectos o con fines educativos? ¡Me encantaría saberlo!
