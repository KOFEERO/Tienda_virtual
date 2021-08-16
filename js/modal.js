// Ventana modal de productos carrito
const producto = document.querySelector(".producto");
function agregar() {
	const add = document.createElement("SPAN");
	add.textContent = "El producto se agrego correctamente";
	add.classList.add("exito");
	producto.appendChild(add);
	console.log(add);

	setTimeout(() => {
		add.remove();
	}, 800)
	
}

