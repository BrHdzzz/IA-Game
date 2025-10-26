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

function play () {
    const playerName = document.getElementById("playerName").value.trim()
    const alert = document.getElementById("alert")
    const message = document.getElementById("message")

    if (!playerName) {
        message.style.color = "#ff0000"
        message.innerHTML = "Ingrese su nombre"

        if (alert.classList.contains("fade-out")) alert.classList.remove("fade-out")
        
        alert.classList.add("fade-in")
        alert.style.display = "flex"
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

const options = document.getElementById("options")

//const words = document.getElementById("word")
//const sentences = document.getElementById("sentence")

for (let i = 0; i < word.length; i++) {
    options.innerHTML += "<div class = 'option'> <div> <p style = 'text-align: left;'>" + word[i] + "</p> </div> <div> <p style = 'text-align: right;'>" + sentence[i] + "</p> </div> </div>"
}

/* window.addEventListener("DOMContentLoaded", function () {
    const lO = document.getElementById("left")
    const rO = document.getElementById("right")

    const n = []

    for (let a = 0; a <= 9; a++) {
        let random

        do {
            random = Math.floor(Math.random() * 10)
        }
        while (n.includes(random))

        n.push(random)
    }

    const n2 = []

    for (let b = 0; b <= 9; b++) {
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
        [ "<div><input class = 'ans' type = 'text' id = 'ans0'></div><div>Sistema capaz de realizar tareas que requieren razonamiento, percepción y decisión, imitando funciones cognitivas humanas.</div>", n[0], n2[0] ],
        [ "<div><input class = 'ans' type = 'text' id = 'ans1'></div><div>Subconjunto de la IA que permite a las máquinas aprender de los datos sin necesidad de reglas explícitas.</div>", n[1], n2[1] ],
        [ "<div><input class = 'ans' type = 'text' id = 'ans2'></div><div>Rama del ML que usa redes neuronales con múltiples capas para aprender representaciones jerárquicas y complejas.</div>", n[2], n2[2] ],
        [ "<div><input class = 'ans' type = 'text' id = 'ans3'></div><div>Conjunto de nodos organizados en capas conectadas, que ajustan pesos y activaciones para procesar información.</div>", n[3], n2[3] ],
        [ "<div><input class = 'ans' type = 'text' id = 'ans4'></div><div>Evaluación ideada por Alan Turing para determinar si una máquina puede exhibir comportamiento inteligente similar al humano.</div>", n[4], n2[4] ],
        [ "<div><input class = 'ans' type = 'text' id = 'ans5'></div><div>Conjunto masivo de datos que impulsa el desarrollo del aprendizaje automático y los modelos de IA moderna.</div>", n[5], n2[5] ],
        [ "<div><input class = 'ans' type = 'text' id = 'ans6'></div><div>Tipo de IA enfocada en realizar tareas específicas, como reconocimiento facial o traducción automática.</div>", n[6], n2[6] ],
        [ "<div><input class = 'ans' type = 'text' id = 'ans7'></div><div>Tipo de IA que busca igualar el razonamiento humano y realizar cualquier tarea intelectual que un humano pueda hacer.</div>", n[7], n2[7] ],
        [ "<div><input class = 'ans' type = 'text' id = 'ans8'></div><div>Nivel hipotético de IA que superaría la inteligencia y capacidad humana en todos los aspectos cognitivos.</div>", n[8], n2[8] ],
        [ "<div><input class = 'ans' type = 'text' id = 'ans9'></div><div>Considerada la primera programadora, propuso que una máquina podía manipular símbolos y crear patrones más allá de simples cálculos numéricos.</div>", n[9], n2[9] ]
    ]

    const ansL = new Array(10)

    for (let i = 0; i < left.length; i++) {
        ansL[left[i][1]] = left [i][0]
    }

    for (let i = 0; i < ansL.length; i++) {
        lO.innerHTML += "<li> <div> <input class = 'ans' type = 'text' autocomplete = 'off' id = ''>" + ansL[i] + "</div> </li>"
    }

    const ansR = new Array(10);

    for (let i = 0; i < right.length; i++) {
        ansR[right[i][2]] = right[i][0]
    }

    for (let i = 0; i < ansR.length; i++) {
        rO.innerHTML += "<li style = 'display: flex;'>" + ansR[i] + "</li>"
    }

    window.score = 0

    document.querySelector("#finish").addEventListener("click", function () {
        var score = 0
        const r = document.getElementById("r")

        for (let i = 0; i <= 9; i++) {
            const input = document.getElementById(`ans${i}`)

            if (!input) continue

            const correctI = right[i][2]

            if (parseInt(input.value.trim()) === correctI) {
                score++;
            }
        }

        r.innerHTML = "Puntuación: " +  score + "/10"
    })
}) */