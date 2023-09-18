const topBar = document.querySelector('.topbar');

// Cambiar opacidad con Scroll
window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		topBar.classList.add('transparent');
	} else {
		topBar.classList.remove('transparent');
	}
});


// Fijar altura Topbar
let topbarHeight = topBar.offsetHeight;
const mainContent = document.querySelector('.main-content');
mainContent.style.paddingTop = `${topbarHeight + 20}px`;



//Boton Play
const containerConcentracion = document.querySelectorAll(
	'.card-concentracion'
);
const containerSpotifyPlaylists = document.querySelectorAll(
	'.card-spotify-playlists'
);

const createButton = card => {
	const button = document.createElement('button');
	button.innerHTML = '<i class="fa-solid fa-play"></i>';

	card.appendChild(button);

	button.style.display = 'none';
	button.classList.add('btn-play');

	card.addEventListener('mouseover', () => {
		button.style.display = 'block';
	});

	card.addEventListener('mouseout', () => {
		button.style.display = 'none';
	});
};

containerConcentracion.forEach(card => {
	createButton(card);
});

containerSpotifyPlaylists.forEach(card => {
	createButton(card);
});



//Alert Reproduciendo Playlist
var divs = document.querySelectorAll(".card-concentracion");
divs.forEach(function(div) {
    div.addEventListener("click", function() {
        alert("Estas reproduciendo esta Playlist");
    });
});

var divs = document.querySelectorAll(".container-card-spotify-playlists");
divs.forEach(function(div) {
    div.addEventListener("click", function() {
        alert("Estas reproduciendo esta Playlist");
    });
});


// Api Spotify
const client_id = '39bef1ea9c544ef3bf7210a8eb54b0df';
const redirect_uri = 'http://127.0.0.1:5500/Programacion%20web/Spotify/index.html';

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
// Redirigir al usuario a la página de inicio de sesión de Spotify
window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=user-library-read&response_type=token`;
});

// Después de que el usuario haya iniciado sesión y Spotify lo redireccione de nuevo a tu sitio web
const handleRedirect = () => {
const accessToken = getAccessTokenFromURL();

if (accessToken) {
// Ahora puedes usar el accessToken para hacer llamadas a la API de Spotify
console.log('Token de acceso:', accessToken);
}
};

// Función para extraer el token de acceso de la URL después de la redirección
const getAccessTokenFromURL = () => {
const urlParams = new URLSearchParams(window.location.hash.substr(1));
return urlParams.get('access_token');
};

 // Llamar a la función de manejo de redireccionamiento al cargar la página
handleRedirect();









