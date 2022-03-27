// Si se cambia el ancho de la pagina se acomoda el mapa en el centro
window.onresize = resizeMap;
window.onload = resizeMap;

// Para ocultar cada capa del mapa se crean dos eventos, uno para los municipios y el otro para la zona urbana
muni = document.querySelector("#interactive #muni");
urb = document.querySelector("#interactive #urb");
muni.onclick = toggleMunicipios;
urb.onclick = toggleUrb;

function resizeMap() {
	// Se calcula el viewport y luego se mueve el mapa al centro de la pantalla
	var vw = window.innerWidth / 100;
	var map = document.querySelector("#interactiveMap");
	map.setAttribute("transform", "translate(" + (50 * vw - 220) + "," + 0 + ")");
}

function toggleImgLoc(name) {
	// Cuando se da clic en una localidad aparece la imagen y su nombre
	var x = document.querySelector("#interactive figure");
	x.style.display = "inline";

	document.querySelector("#interactive figure img").src = "images/sitios/"+name + ".jpg";
	document.querySelector("#interactive figure figcaption").innerHTML = name;
	console.log(name);
}

// Si el formulario esta marcado se muestra la capa de lo contrarios se oculta
function toggleMunicipios() {
	var checkBox = document.querySelector("#interactive #muni");
	var m = document.querySelector("#interactiveMap #Municipios");
	var n = document.querySelector("#interactiveMap #Nombres");

	if (checkBox.checked == true) {
		m.style.display = "inline";
		n.style.display = "inline";
	} else {
		m.style.display = "none";
		n.style.display = "none";
	}
}

function toggleUrb() {
	var checkBox = document.querySelector("#interactive #urb");
	var x = document.querySelector("#interactiveMap #areaUrbana");

	if (checkBox.checked == true) {
		x.style.display = "inline";
	} else {
		x.style.display = "none";
	}
}
