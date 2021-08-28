// Menú principal
const openMenu = document.querySelector('.menu-principal__open');
const closeMenu = document.querySelector('.menu-principal__close');
const menu = document.querySelector('.menu');
const cantidadAdd = document.querySelector('.mas');
const cantidadRemove = document.querySelector('.menos');
const cantidadProducto = document.querySelector('.cantidadP');

// Para aumentar la cantidad de producto en el carrito
cantidadAdd.addEventListener('click', function(){
	if(cantidadProducto.value >= 50) {
		console.log("No puedes ingresar mas de 50 cantidad");
	}
	else {
		cantidadProducto.value++;
	}
});

cantidadRemove.addEventListener('click', function(){
	if(cantidadProducto.value <= 0) {
		console.log("No puedes ingresar cantidad menos a 0");
	}
	else {
		cantidadProducto.value--;
	}
});


openMenu.addEventListener('click', function() {
	menu.classList.add("menu__open");
});
closeMenu.addEventListener('click', function(){
	menu.classList.remove("menu__open");
});

// Submenú

const subMenu = document.querySelector('.submenu');
const openSubmenu = document.querySelector('.item-submenu');

openSubmenu.addEventListener('click', function(){
	subMenu.classList.toggle("submenu__open");
});
// Registro de usuarios
const openUser = document.querySelector('.carrito__usuario');
const formulario = document.querySelector('.funciones-registro ');
// const tituloUser = document.querySelector('.usuario__titulo');

openUser.addEventListener('click', function () {
	formulario.classList.toggle("display-user");
});

// Arreglos para las imagenes

let imagenes=new Array("img/mercado1.png", "img/mercado2.png","img/mercado3.png","img/mercado4.png");
let posicion = 0;
let img = document.querySelector('.img');
img.style.backgroundImage='url('+imagenes[posicion]+')';

function atras(){
	if(posicion == 0){
		posicion=3;
	} else{
		posicion--;
	}
	img.style.backgroundImage='url('+imagenes[posicion]+')';
}	

function siguiente(){
	if(posicion == 3){
		posicion=0;
	} else{
		posicion++;
	}
	img.style.backgroundImage='url('+imagenes[posicion]+')';
}	

setInterval(function(){
	siguiente();
}, 9000);

