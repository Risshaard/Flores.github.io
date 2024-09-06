// Seleccionamos el audio y el contenedor de letras
var audio = document.getElementById("audio");
var lyrics = document.getElementById("lyrics");

// Datos con las letras y el tiempo en que deben aparecer
var lyricsData = [
    { text: "When life leaves you high and dry", time: 15 },
    { text: "I'll be at your door tonight", time: 18 },
    { text: "If you need help, if you need help", time: 22 },
    { text: "I'll shut down the city lights", time: 26 },
    { text: "I'll lie, cheat, I'll beg and bribe", time: 30 },
    { text: "To make you well, to make you well", time: 34 },
    { text: "When enemies are at your door", time: 38 },
    { text: "I'll carry you away from war", time: 42 },
    { text: "If you need help, if you need help", time: 46 },
    { text: "Your hope dangling by a string", time: 50 },
    { text: "I'll share in your suffering", time: 54 },
    { text: "To make you well, to make you well", time: 58 },
    { text: "Give me reason to believe", time: 62 },
    { text: "That you would do the same for me", time: 66 },
    { text: "'Cause I would do it for you", time: 70 },
    { text: "For you", time: 75 },
    { text: "Baby, I'm not moving on", time: 79 },
    { text: "I love you long after you're gone", time: 83 },
    { text: "For you", time: 87 },
    { text: "You will never sleep alone", time: 91 },
    { text: "I love you long after you're gone", time: 95 },
    { text: "And long after you're gone, gone, gone", time: 100 }
];

// Función para actualizar las letras sincronizadas
function updateLyrics() {
    var currentTime = Math.floor(audio.currentTime);  // Obtenemos el tiempo actual del audio
    console.log("Tiempo actual del audio: " + currentTime); // Verificación en la consola

    // Buscamos la línea que debe aparecer
    var currentLine = lyricsData.find(
        line => currentTime >= line.time && currentTime < line.time + 6
    );

    // Si encontramos una línea, la mostramos
    if (currentLine) {
        lyrics.innerHTML = currentLine.text;
        lyrics.style.opacity = 1;
        console.log("Mostrando línea: " + currentLine.text); // Verificación en la consola
    } else {
        lyrics.innerHTML = "";
        lyrics.style.opacity = 0;
    }
}

// Iniciar la música y las letras cuando el usuario hace clic en la página
document.body.addEventListener("click", function () {
    music.play(); // Reproducir el audio
    console.log("Reproducción iniciada"); // Verificación en la consola
    setInterval(updateLyrics, 1000);  // Iniciamos la sincronización de las letras
});