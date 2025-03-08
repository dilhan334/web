// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "es mi regalo virtual, te llegara uno en persona", time: 1 },
  { text: "tego un mensaje que decirte, asi que espera", time: 5 },
  { text: "espero y te guste, te amo", time: 9 },
  { text: "desde el momento que te vi", time: 15 },
  { text: "me di cuenta que", time: 18 },
  { text: " me enamore de ti", time: 27 },
  { text: "tus hermosos ojos", time: 32 },
  { text: "tu cabello tan hemoso", time: 33 },
  { text: "tu figura tan bella", time: 41 },
  { text: "le dio un vuelco a mi corazon", time: 47 },
  { text: "tambien hizo que me quedara sin aliento", time: 54 },
  { text: "todo fue muy rapido", time: 59 },
  { text: "desde el primer dia", time: 67 },
  { text: "hasta el dia que me pediste el numero", time: 72 },
  { text: "cuando paseamos por el parque", time: 78 },
  { text: "cuando tuvimos nuestra primera cita", time: 83 },
  { text: "y las que siguieron", time: 91 },
  { text: "me di cuenta que...", time: 97 },
  { text: "en ningun momento te he dejado de amar", time: 104 },
  { text: "no hay tiempo en el que no dejo de pensar en ti", time: 108 },
  { text: "desde el amanecer", time: 144 },
  { text: "hasta el anochecer", time: 148 },
  { text: "desde que me levanto", time: 153 },
  { text: "hasta dormir", time: 158 },
  { text: "entraste en mi mente", time: 164 },
  { text: "y desde alli", time: 169 },
  { text: "no has salido", time: 176 },
  { text: "no importa lo que pase", time: 183 },
  { text: "no te dejare de amar", time: 188 },
  { text: "I love you.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);