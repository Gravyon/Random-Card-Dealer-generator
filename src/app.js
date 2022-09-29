/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palos = ["♦", "♥", "♠", "♣"];
let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

window.onload = function() {
  //write your code here
  generateCard();
  document.getElementById("boton").onclick = generateCard;
  timerCard();
};
//Generate random card
function generateCard() {
  let paloRandom = Math.floor(Math.random() * palos.length);
  let numeroRandom = Math.floor(Math.random() * numeros.length);
  let paloGenerado = palos[paloRandom];
  let numeroGenerado = numeros[numeroRandom];

  document.getElementById("paloUno").innerHTML = paloGenerado;
  document.getElementById("paloDos").innerHTML = paloGenerado;
  document.getElementById("numero").innerHTML = numeroGenerado;

  if (paloGenerado === "♥") {
    document.getElementById("paloUno").classList.add("text-danger");
    document.getElementById("paloDos").classList.add("text-danger");
  } else {
    document.getElementById("paloUno").classList.remove("text-danger");
    document.getElementById("paloDos").classList.remove("text-danger");
  }
}
//Timer
function timerCard() {
  generateCard();

  setTimeout(timerCard, 10000);
}

let changeWidth = document.getElementById("cardWidthID");
let changeHeight = document.getElementById("cardHeightID");
let carta = document.getElementById("cartas");

changeWidth.addEventListener("change", function() {
  carta.style.width = changeWidth.value + "px";
});

changeHeight.addEventListener("change", function() {
  carta.style.height = changeHeight.value + "px";
});
