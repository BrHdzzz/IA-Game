var hr
var main

window.addEventListener("DOMContentLoaded", function () {
    hr = document.getElementById("hr")

    main = document.getElementById("main")

    loadPage(document.getElementById("welcome"))
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
    }, 10)
}

function showPage (idOld, idNew) {
    const idO = document.getElementById(idOld)
    const idN = document.getElementById(idNew)

    idO.style.display = "none"

    loadPage(idN)
}

function showAlert (msg, color) {
    const alert = document.getElementById("alert")
    const message = document.getElementById("message")

    message.style.color = color
    message.innerHTML = msg

    if (alert.classList.contains("fade-out")) alert.classList.remove("fade-out")
    
    alert.classList.add("fade-in")
    alert.style.display = "flex"
}

function play () {
    const playerName = document.getElementById("playerName").value.trim()

    if (!playerName) {
        showAlert("Ingrese su nombre.", "#ff0000")
    }
    else {
        showPage("register", "game")
    }
}

function closeAlert () {
    const alert = document.getElementById("alert")

    if (alert.classList.contains("fade-in")) alert.classList.remove("fade-in")
        
    alert.classList.add("fade-out")

    alert.addEventListener("animationend", function a () {
        alert.style.display = "none"

        alert.removeEventListener("animationend", a)
    })
}

const word = [
    "Inteligencia Artificial (IA)",
    "Machine Learning (ML)",
    "Deep Learning (DL)",
    "Red Neuronal Artificial",
    "Prueba de Turing",
    "Big Data",
    "Inteligencia Artificial Estrecha (IAE)",
    "Inteligencia Artificial General (IAG)",
    "Superinteligencia Artificial (SIA)",
    "Ada Lovelace"
]

const sentence = [
    "Sistema capaz de realizar tareas que requieren razonamiento, percepción y decisión, imitando funciones cognitivas humanas.",
    "Subconjunto de la IA que permite a las máquinas aprender de los datos sin necesidad de reglas explícitas.",
    "Rama del ML que usa redes neuronales con múltiples capas para aprender representaciones jerárquicas y complejas.",
    "Conjunto de nodos organizados en capas conectadas, que ajustan pesos y activaciones para procesar información.",
    "Evaluación ideada por Alan Turing para determinar si una máquina puede exhibir comportamiento inteligente similar al humano.",
    "Conjunto masivo de datos que impulsa el desarrollo del aprendizaje automático y los modelos de IA moderna.",
    "Tipo de IA enfocada en realizar tareas específicas, como reconocimiento facial o traducción automática.",
    "Tipo de IA que busca igualar el razonamiento humano y realizar cualquier tarea intelectual que un humano pueda hacer.",
    "Nivel hipotético de IA que superaría la inteligencia y capacidad humana en todos los aspectos cognitivos.",
    "Considerada la primera programadora, propuso que una máquina podía manipular símbolos y crear patrones más allá de simples cálculos numéricos."
]

const ansList = []

for (let i = 0; i < word.length; i++) {
    ansList.push(word[i] + sentence[i])
}

const options = document.getElementById("options")
const word_random = word.sort((a, b) => Math.random() - 0.5)
const sentence_random = sentence.sort((a, b) => Math.random() - 0.5)

for (let i = 0; i < word_random.length; i++) {
    options.innerHTML += "<div class = 'option'> <div class = 'col'> <input type = 'text' autocomplete = 'off' class = 'ans' id = 'ans" + i + "'> <p style = 'text-align: left;'>" + word_random[i] + "</p> </div> <div> <p style = 'text-align: right; display: flex; align-items: center;'>" + (i + 1) + ". " + sentence_random[i] + "</p> </div> </div>"
}

function finish () {
    const answers = []
    const ansPlayer = []
    var score = 0

    for (let i = 0; i < word_random.length; i++) {
        const indexAns = document.getElementById(`ans${i}`).value.trim()

        if (!indexAns) {
            showAlert("Complete todos los campos correctamente.", "#ff0000")

            break
        }
        else {
            answers.push(sentence_random[parseInt(indexAns) - 1])

            if ((i + 1) === word_random.length) {
                for (let x = 0; x < word_random.length; x++) {
                    ansPlayer.push(word_random[x] + answers[x])

                    for (let j = 0; j < ansList.length; j++) {
                        if (ansPlayer[x] === ansList[j]) {
                            score++
                        }
                    }
                }

                showAlert("Puntuación: " + score + "/10", "#fff")

                window.score = score
            }
        }
    }
}