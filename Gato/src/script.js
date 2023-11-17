/* DECLARAMOS LAS VARIABLES*/

let isPlayerOne = true; // Variable para saber si es el turno del jugador 1 o 2
let cells = document.getElementsByClassName("cell"); // Variable para obtener todas las celdas del tablero
var ingame = true; // Variable para saber si el juego esta en curso o termino

for (let index = 0; index < cells.length; index++) { // Recorremos todas las celdas
   cells[index].addEventListener("click", userMove); // Añadimos el evento click a cada celda
}






function userMove(e) { // Función que se ejecuta al hacer click en una celda

   let cellValue = e.target.innerHTML; // Obtenemos el valor de la celda

   if (!cellValue.length && ingame == true) { // Si la celda no tiene valor y que el juego este en curso

      e.target.innerHTML = isPlayerOne ? "X" : "O"; // Asignamos el valor de la celda en función del turno
      
      e.target.classList.add(isPlayerOne ? "player-one-shadow" : "player-two-shadow"); 
      // Añadimos la clase para resaltar la celda
      
      isPlayerOne = !isPlayerOne; // Cambiamos el turno 

      checkLine(0, 1, 2);
      checkLine(3, 4, 5);
      checkLine(6, 7, 8);
      checkLine(0, 3, 6);
      checkLine(1, 4, 7);
      checkLine(2, 5, 8);
      checkLine(0, 4, 8);
      checkLine(6, 4, 2);
      /* Comprobamos cada posible jugada ganadora para veriicar si el juego sigue o continua*/
   }
}





function checkLine(c1, c2, c3) { // Función para comprobar si hay una línea ganadora
   if ( 
      cells[c1].innerHTML.length &&  // Comprobamos que las celdas no estén vacías
      cells[c1].innerHTML == cells[c2].innerHTML && // Comprobamos tengan el mismo jugador X O
      cells[c2].innerHTML == cells[c3].innerHTML  // Comprobamos tengan el mismo jugador X O
) {
      showWinner(cells[c1].innerHTML); // Mostramos el ganador
   }
}





function showWinner(player) {

   if (player == "X") // Comprobamos si el ganador es el jugador 1
   {
      document.querySelector("#results").innerHTML = "El jugador rojo (X) es el ganador!!!";   // Mostramos el ganador
   }

   if (player == "O") // Comprobamos si el ganador es el jugador 2
   {
      document.querySelector("#results").innerHTML = "El jugador azul (O) es el ganador!!!";   // Mostramos el ganador
   }

   ingame = false; // Indicamos que el juego termino
}