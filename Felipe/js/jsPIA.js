
document.write("Hola a todos");
document.write("<marquee>Grupo 52</marquee>");
document.title = "Titulo desde js";

console.log("Mensaje enviado a la consola");
console.warn("soy un mensaje tipo warning");
console.error("soy un mensaje de error");
console.info("soy un mensaje tipo info");

alert("Hola bienvenido a mi sitio");

prompt("Cuantos años tienes?");

/* Variables */
let grupo;
let semestre=5;
let pedidoFinalizado = true; 
let estado = "Nuevo Leon";

grupo = "Grupo 52";
semestre = 6; 
document.write(`Radico en ${estado} y curso el ${semestre} semestre y mi grupo es ${grupo}`);

document.write(`<article> 
                    <h2>Titulo del articulo </h2> 
                    <p>Texto del parrafo</p> 
                </article>`);

const PORCENTAJE_COMISION = 0.1;

/*  Acceder a un elemento de la pagina web para realizarle un cambio */
const titulo = document.getElementById("titulo");

titulo.innerHTML = "Javascript";
titulo.style.color = "tomato";
titulo.style.border = "3px solid black";
titulo.style.borderRadius = "5px";

/* escribir codigo que pregunta al usuario un titulo
que desee colocar en el h1 con id titulo */

const tituloNuevo = document.getElementById("titulo");
let texto = prompt("Que quieres ver en el titulo");
tituloNuevo.innerHTML = texto;