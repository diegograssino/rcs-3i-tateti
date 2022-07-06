// console.log("Funciona?");

// Definir quien empieza el juego (el player)
let player = "X";


// "Escuchar" el evento click OK

// Cuando haga click, agrega el player al innerHTML de ese div. OK

// Cambiar de player

document.querySelectorAll(".squares")
	.forEach(element=>{element.addEventListener("click", ()=>
		{
			if (element.innerHTML === ""){
				element.innerHTML=player;
				// (condicion) ? true : false
				player === "X" ? player = "O" : player = "X";

				// Opción clásica
				// if (player === "X") {
				// 	player = "O";
				// } else {
				// 	player = "X"
				// }
			}
		}
)})

function reset() {
	document.querySelectorAll(".squares").forEach(element=>element.innerHTML="")
}




