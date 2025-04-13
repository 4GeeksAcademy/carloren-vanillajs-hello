import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['el gato', 'Perro Sanxe', 'Ayuso', 'Eren Jaeger', 'tu madre'];
  let action = ['se comió', 'robó', 'se cargó', 'prendió fuego a'];
  let what = ['mis deberes', 'mi ordenador', 'mi móvil', 'mi casa', 'mi corazón'];
  let when = ['hace diez siglos', 'mientras dormía', 'hace cero coma', 'mientras veía el betis', 'cuando me fui a japón'];

  let phrase = [who, action, what, when]

  let excuse = "Siento no poder ayudarte, pero ";

  for(let i=0; i<phrase.length; i++){
    if( i == phrase.length -1){
      excuse += phrase[i][Math.floor(Math.random()*phrase[i].length)] + '.'
    } else {
      excuse += phrase[i][Math.floor(Math.random()*phrase[i].length)] + ' ' 
    }
  }
  
  document.getElementById("excuse").innerHTML = excuse;

  console.log("Hello Rigo from the console!");
};