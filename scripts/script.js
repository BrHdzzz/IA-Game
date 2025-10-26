// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCs8QUfI3ZoaNwcBtSld-GdUIbfyToMbzg",
    authDomain: "ia-game-e33cb.firebaseapp.com",
    projectId: "ia-game-e33cb",
    storageBucket: "ia-game-e33cb.firebasestorage.app",
    messagingSenderId: "209623893057",
    appId: "1:209623893057:web:806ce7f3d083e8689472c0",
    measurementId: "G-0VS8XQR5LH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getFirestore, collection, addDoc, query, orderBy, limit, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
const db = getFirestore(app);

async function saveScore(playerName, score) {
    try {
        await addDoc (collection (db, "scores"), {
            player: playerName,
            score: score
        })

        console.log("Score saved.")
    }
    catch (err) {
        console.error("Score unsaved. ", err)
    }
}

var hr
var main
var rightOpt
var leftOpt

window.addEventListener("DOMContentLoaded", function () {
    hr = document.getElementById("hr")

    main = document.getElementById("main")

    rightOpt = document.getElementById("right")

    leftOpt = document.getElementById("left")

    loadPage(document.getElementById("game"))
})

function loadPage (obj) {
    hr.style.display = "block"
    hr.style.width = "0%"

    main.style.display = "none"

    obj.style.display = "none"
    
    let i = 0

    const progress = setInterval (function() {
        i++

        hr.style.width = i + "%"

        if (hr.style.width == "100%") {
            clearInterval(progress)

            hr.style.display = "none"

            obj.style.display = "block"

            main.style.display = "flex"
        }
    }, 0)
}

function showPage (idOld, idNew) {
    const idO = document.getElementById(idOld)
    const idN = document.getElementById(idNew)

    idO.style.display = "none"

    loadPage(idN)
}

document.querySelector("#next").addEventListener("click", function () {
    showPage("welcome", "register")
})

var playerName

document.querySelector("#play").addEventListener("click", function () {
    playerName = document.getElementById("playerName").value.trim()

    if (!playerName) {
        alert("Ingrese un nombre.")
    }
    else {
        showPage("register", "game")
    }
})
const n = []

for (let a = 0; a <= 10; a++) {
    let random

    do {
        random = Math.floor(Math.random() * 10)
    }
    while (n.includes(random))

    n.push(random)
}

const n2 = []

for (let b = 0; b <= 10; b++) {
    let random

    do {
        random = Math.floor(Math.random() * 10)
    }
    while (n2.includes(random))

    n2.push(random)
}

const left = [
    [ "Inteligencia Artificial (IA)", n[0] ],
    [ "Machine Learning (ML)", n[1] ],
    [ "Deep Learning (DL)", n[2] ],
    [ "Red Neuronal Artificial", n[3] ],
    [ "Prueba de Turing", n[4] ],
    [ "Big Data", n[5] ],
    [ "Inteligencia Artificial Estrecha (IAE)", n[6] ],
    [ "Inteligencia Artificial General (IAG)", n[7] ],
    [ "Superinteligencia Artificial (SIA)", n[8] ],
    [ "Ada Lovelace", n[9] ]
]

const right = [
    [ "Sistema capaz de realizar tareas que requieren razonamiento, percepción y decisión, imitando funciones cognitivas humanas.", n[0], n2[0] ],
    [ "Subconjunto de la IA que permite a las máquinas aprender de los datos sin necesidad de reglas explícitas.", n[1], n2[1] ],
    [ "Rama del ML que usa redes neuronales con múltiples capas para aprender representaciones jerárquicas y complejas.", n[2], n2[2] ],
    [ "Conjunto de nodos organizados en capas conectadas, que ajustan pesos y activaciones para procesar información.", n[3], n2[3] ],
    [ "Evaluación ideada por Alan Turing para determinar si una máquina puede exhibir comportamiento inteligente similar al humano.", n[4], n2[4] ],
    [ "Conjunto masivo de datos que impulsa el desarrollo del aprendizaje automático y los modelos de IA moderna.", n[5], n2[5] ],
    [ "Tipo de IA enfocada en realizar tareas específicas, como reconocimiento facial o traducción automática.", n[6], n2[6] ],
    [ "Tipo de IA que busca igualar el razonamiento humano y realizar cualquier tarea intelectual que un humano pueda hacer.", n[7], n2[7] ],
    [ "Nivel hipotético de IA que superaría la inteligencia y capacidad humana en todos los aspectos cognitivos.", n[8], n2[8] ],
    [ "Considerada la primera programadora, propuso que una máquina podía manipular símbolos y crear patrones más allá de simples cálculos numéricos.", n[9], n2[9] ]
]

leftOpt.innerHTML = "<ul>"

for (let i = 0; i <= left; i++) {
    leftOpt.innerHTML += "<li>" + left[i] + "</li>"
}

leftOpt.innerHTML = "</ul>"
