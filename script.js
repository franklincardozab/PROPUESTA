const videoText = document.getElementById("videoText");
const finalMessage = document.getElementById("finalMessage");
const backgroundMusic = document.getElementById("backgroundMusic");

let index = 0;
let replayMode = false;
let timeoutId;

const messages = [
  "Hola Sofía... 😳",
  "No sabía cómo decírtelo...",
  "Pero necesitaba hacerlo...",
  "Desde que te vi por primera vez, me gustaste...",
  "Tu sonrisa todavía logra ponerme nervioso...",
  "Y bueno...",
  "Nunca es tarde para hacer las cosas bien...",
  "Así que aquí estoy...",
  "Expresándome con lo que sé hacer y siendo único para ti y nadie más...",
  "Ambos sabemos que no es fácil esto, que pasamos por muchas cosas...",
  "Pero siempre estuviste ahí para mí...",
  "Y yo quiero estar ahí para ti...",
  "Te admiro por ser tan fuerte y valiente...",
  "Y por siempre apoyarme...",
  "Eres una persona increíble...",
  "Y quiero que sepas que siempre estaré aquí para ti...",
  "Porque eres la persona más especial para mí...",
  "Y quiero compartir mi vida contigo...",
  "Lo que sí me pregunto a veces es...",
  "¿Puede el amor durar para siempre?",
  "¿Puede un amor tan grande como el nuestro resistir la prueba del tiempo?",
  "¿Puede un amor tan puro y sincero ser eterno?",
  "Yo creo que sí...",
  "El amor real no es solo un sentimiento...",
  "Es una decisión, un compromiso...",
  "Una promesa de estar juntos en las buenas y en las malas...",
  "Es una decisión de cuidar",
  "Apoyar y respaldar a alguien",
  "A pesar de los altibajos",
  "Es estar ahí en los peores momentos",
  "Y en los mejores momentos...",
  "El amor es comprender y perdonar...",
  "No disminuye con el tiempo...",
  "En cambio...",
  "Crece...",
  "Es más profundo...",
  "Y evoluciona...",
  "Es un vínculo que se fortalece con cada experiencia compartida...",
  "El amor es un esfuerzo constante por mostrar bondad y cariño...",
  "Ofrecer apoyo y estar presente en todo momento...",
  "Es una elección de priorizar a alguien...",
  "Valorar su felicidad tanto como la tuya...",
  "El verdadero amor es desinteresado...",
  "Es paciente y no flaquea...",
  "Incluso cuando las circunstancias cambian...",
  "El amor en su forma más verdadera...",
  "Es eterno...",
  "Por eso quiero preguntarte...",
  "Sofía...",
  "¿Quieres ser mi novia? ❤️",
  "Con mucho cariño, Franklin.",
];

function showNextMessage() {
  if (index < messages.length) {
    videoText.innerHTML = `<p>${messages[index]}</p>`;
    index++;
    timeoutId = setTimeout(showNextMessage, 11000);
  } else {
    videoText.style.display = "none";
    finalMessage.innerHTML = `
      <p>Sofía... ¿quieres ser mi novia? ❤️<br><span style="font-size: 0.6em;">– Franklin</span></p>
      <button id="yesBtn">Sí ❤️</button>
      <button id="replayBtn">Volver a leer</button>
    `;
    finalMessage.style.display = "block";

    document.getElementById("yesBtn").addEventListener("click", () => {
      alert("¡Sabía que dirías que sí, Amor! 💖 Con mucho cariño, Franklin.");
      createConfetti();
    });

    document.getElementById("replayBtn").addEventListener("click", () => {
      index = 0;
      finalMessage.style.display = "none";
      videoText.style.display = "block";
      showNextMessage();
    });
  }
}

function iniciarExperiencia() {
  document.querySelector(".start-button").style.display = "none";
  backgroundMusic.play();
  showNextMessage();
  generateHearts();
}

function generateHearts() {
  const container = document.querySelector('.heart-container');
  for (let i = 0; i < 100; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.setProperty('--random-x', Math.random());
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${5 + Math.random() * 5}s`;
    heart.style.opacity = `${0.5 + Math.random() * 0.5}`;
    container.appendChild(heart);
  }
}

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.textContent = '💖';
    confetti.style.position = 'fixed';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${Math.random() * 100}%`;
    confetti.style.fontSize = '1.5em';
    confetti.style.zIndex = 1000;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}
window.onload = () => {
  showNextMessage();
  generateHearts();

  const music = document.getElementById("backgroundMusic");
  music.loop = true;

  const musicBtn = document.createElement("button");
  musicBtn.innerText = "Haz clic aquí para activar la música 🎵";
  musicBtn.style.position = "fixed";
  musicBtn.style.top = "10px";
  musicBtn.style.left = "50%";
  musicBtn.style.transform = "translateX(-50%)";
  musicBtn.style.padding = "10px 20px";
  musicBtn.style.background = "#ff4d6d";
  musicBtn.style.color = "#fff";
  musicBtn.style.border = "none";
  musicBtn.style.borderRadius = "12px";
  musicBtn.style.cursor = "pointer";
  musicBtn.style.zIndex = "1000";
  musicBtn.style.boxShadow = "0 0 10px #ff4d6d";

  document.body.appendChild(musicBtn);

  musicBtn.addEventListener("click", () => {
    music.play().then(() => {
      musicBtn.remove();
    }).catch((e) => {
      console.error("Error al reproducir música:", e);
    });
  });
};
