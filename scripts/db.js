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

var playerName

const scoreDiv = document.getElementById("r");

const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
            const scoreText = scoreDiv.textContent.trim();
            if (scoreText) {
                const score = scoreText;
                console.log("Score detectado:", score);
                
                if (playerName) {
                    saveScore(playerName, score);
                }

                observer.disconnect();
            }
        }
    }
});

observer.observe(scoreDiv, { childList: true, subtree: true });