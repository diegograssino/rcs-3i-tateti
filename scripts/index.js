// console.log("Funciona?");

// Definir quien empieza el juego (el player)
let player = '🍔';

// "Escuchar" el evento click OK

// Cuando haga click, agrega el player al innerHTML de ese div. OK

// Cambiar de player

// Clase 2 TaTeScript

// 1) Guardar los datos de mi board, iniicializo con un array vacio

// 2) Debo resetear TAMBIEN el array board

// 3) Debo evaluar si el array cumple las condiciones para que uno de los jugadores gane

let board = [];

// Pongo un contador de jugadas para terminar si o si a las 9 jugadas

let turns = 0;

// Flag - una variable que digo si seguis jugando o ya se termino

let haveAWinner = false;

const resultMessage =
  document.getElementById('result');

document
  .querySelectorAll('.squares')
  .forEach((element, i) => {
    element.addEventListener('click', () => {
      if (element.innerHTML === '') {
        turns++;
        element.innerHTML = player;
        //Guardo la jugada en el array board
        board[i] = player;
        console.log(board);

        // Combinaciones ganadoras
        const WINNING_COMBOS = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];

        if (
          board[0] === board[1] &&
          board[0] === board[2] &&
          board[0]
        ) {
          resultMessage.innerHTML =
            'The winner is: ' + player;
          haveAWinner = true;
        }
        if (
          board[3] === board[4] &&
          board[3] === board[5] &&
          board[3]
        ) {
          resultMessage.innerHTML =
            'The winner is: ' + player;
          haveAWinner = true;
        }
        if (
          board[6] === board[7] &&
          board[6] === board[8] &&
          board[6]
        ) {
          resultMessage.innerHTML =
            'The winner is: ' + player;
          haveAWinner = true;
        }
        if (
          board[0] === board[3] &&
          board[0] === board[6] &&
          board[0]
        ) {
          resultMessage.innerHTML =
            'The winner is: ' + player;
          haveAWinner = true;
        }
        if (
          board[1] === board[4] &&
          board[1] === board[7] &&
          board[1]
        ) {
          resultMessage.innerHTML =
            'The winner is: ' + player;
          haveAWinner = true;
        }
        if (
          board[2] === board[5] &&
          board[2] === board[8] &&
          board[2]
        ) {
          resultMessage.innerHTML =
            'The winner is: ' + player;
          haveAWinner = true;
        }
        if (
          board[0] === board[4] &&
          board[0] === board[8] &&
          board[0]
        ) {
          resultMessage.innerHTML =
            'The winner is: ' + player;
          haveAWinner = true;
        }
        if (
          board[2] === board[4] &&
          board[2] === board[6] &&
          board[2]
        ) {
          resultMessage.innerHTML =
            'The winner is: ' + player;
          haveAWinner = true;
        }
        if (turns === 9 && !haveAWinner) {
          resultMessage.innerHTML = 'Tie Game!';
        }

        // (condicion) ? true : false
        player === '🍔'
          ? (player = '🍕')
          : (player = '🍔');

        // Opción clásica
        // if (player === "X") {
        // 	player = "O";
        // } else {
        // 	player = "X"
        // }
      }
    });
  });

function reset() {
  // Resetear el contenido del tablero
  document
    .querySelectorAll('.squares')
    .forEach(element => (element.innerHTML = ''));
  // Resetear el player al que deseo que comience
  player = '🍔';
  // Resetear el array board
  board = [];
  // Resetear el mensaje de resultado
  resultMessage.innerHTML = '';
  // Resetear turns
  turns = 0;
  // Resetear ganador
  haveAWinner = false;
}
