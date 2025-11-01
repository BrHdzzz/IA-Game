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

async function getScores() {
    try {
        const q = query(collection(db, "scores"), orderBy("score", "desc"), limit(10))
        const qS = await getDocs(q)

        const scores = []

        qS.forEach((doc) => {
            scores.push(doc.data())
        })

        return scores
    }
    catch (err) {
        console.error("Error", err)
    }
}

export async function showScores() {
    const scores = await getScores()
    const sList = document.getElementById("scores")

    sList.innerHTML = ""

    scores.forEach(function (s) {
        const li = document.createElement("li")

        li.textContent = `${s.player}: ${s.score}`

        sList.appendChild(li)
    })
}

window.showScores = showScores

var playerName
var score

document.querySelector("#playerNameButton").addEventListener("click", function () {
    playerName = document.getElementById("playerName").value.trim();
    console.log(playerName)
})

document.querySelector("#closeAlert").addEventListener("click", function () {
    score = window.score
    console.log(score)

    saveScore(playerName, score)
})