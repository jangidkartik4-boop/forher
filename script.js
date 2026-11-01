
/* FLOATING BUTTERFLIES */

const bg = document.getElementById("floatingBg");

for (let i = 0; i < 9; i++) {
    const butterfly = document.createElement("div");

    butterfly.className = "butterfly";
    butterfly.textContent = "🦋";

    butterfly.style.left = Math.random() * 95 + "%";
    butterfly.style.top = Math.random() * 90 + "%";
    butterfly.style.animationDelay = Math.random() * 8 + "s";

    bg.appendChild(butterfly);
}


/* MOOD MESSAGES */

function showMood(mood) {

    const messages = {

        tired:
        "Jab daddyy ki bat nhi manogi aur healthy nhi khaogii na toh ye toh hona hi tha na bhondii kahikiii hehehe 🧸",

        sad:
        "Awww dontt be sad myy jaanuuu i am here naa A bigg hugggyyy for my cutu babyyyy abb sad nhi hoo samjhiiii💗",

        cranky:
        "Achaa daddyyy ki pitii karnee ka man horaa kyaa naughty gurll ka haann 😤",

        happy:
        "Dont be angryyy jaanuuuu chaloooo abb happii happii ho jaoo achii bacchii ki tarahh haan Daddyy se kisses milegi phir hehehee. 👀"

    };

    document.getElementById("moodMessage").textContent =
        messages[mood];
}


/* LOVE LETTER */

function openLetter() {

    const letter = document.getElementById("letterContent");

    letter.classList.toggle("show");

}


/* CARE PACKAGE */

function careMessage(choice) {

    const messageBox = document.getElementById("careMessage");

    const messages = {
        Me: "AWWWW SOOO CUTE OF YOUUU NAUGHTYYYY 😭💗 Your favourite person is always here for youuu!",

        chocolate: "Motuuu kahikiii HEHEHEHE 🍫 Jyada nhi khana prrr samjhii naughtyyy😤",

        flowers: "You deserve everyyy flower in this world, jannuuuu 💐🌷",

        rest: "YESSSS AS YOU SHOULD SAMJHIII NAAAA BHONDII 🧸💗 Now relax and take care of yourself!"
    };

    messageBox.innerText = messages[choice];
    messageBox.style.display = "block";
}


/* CATCH THE HEARTS GAME */

let score = 0;
let gameInterval;

function startGame() {

    clearInterval(gameInterval);

    score = 0;

    document.getElementById("score").textContent = score;

    const area = document.getElementById("gameArea");

    area.innerHTML = "";

    gameInterval = setInterval(() => {

        const heart = document.createElement("button");

        heart.className = "game-heart";
        heart.textContent = "💗";

        heart.style.left = Math.random() * 85 + "%";
        heart.style.top = Math.random() * 75 + "%";

        heart.onclick = function() {

            score++;

            document.getElementById("score").textContent = score;

            heart.remove();

        };

        area.appendChild(heart);

        setTimeout(() => heart.remove(), 1500);

    }, 600);

    setTimeout(() => {

        clearInterval(gameInterval);

        area.innerHTML = `
            <div style="padding-top:90px">
                You caught ${score} hearts! 💗
                <br><br>
                Sending them all back to you!
            </div>
        `;

    }, 15000);

}


/* SECRET MESSAGE */

function unlockSecret() {

    const value = document
        .getElementById("secretInput")
        .value
        .trim()
        .toLowerCase();

    const output = document.getElementById("secretMessage");

    if (value === "ashfiya ali") {

        output.innerHTML = `
            CUTUUUUUUU KAHIKIII! 💗
            <br><br>
            Bhondiii, here's your reminder:
            You are perfecttt,and enough for me 
            so never think like that ! I just wanna say 
            YOU ARE PERFECTTTTTT💝!!
            <br><br>
            I hope this tiny website made you smile.
            🌷🦋
        `;

    } else {

        output.textContent =
            "uhmm andd..... Try again! ♡";

    }

}


/* ICE CREAM */

function chooseIceCream(flavour) {

    const messages = {
        Chocolate: "Uhmmmm Goodd choicee naughtyy gurll daddyy Also love this but on you 👀🤤🍫",
        Strawberry: "A strawberry treat for the sweetest girl! 🍓",
        Vanilla: "Areeyyy yee kisse pasandd hai bhondiii app bhii naaaa😤!",
        Butterscotch: "Soft, sweet and lovely — just like your boobiess heheh👀💗!"
    };

    document.getElementById("icecreamMessage").innerText =
        messages[flavour] + " You deserve a little happiness today! 💕";
}


/* BACKGROUND MUSIC + VOICE NOTE */

const backgroundMusic = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");

const voiceNote = document.getElementById("voiceNote");
const voiceButton = document.getElementById("voiceButton");

let musicShouldResume = false;


// BACKGROUND MUSIC BUTTON

musicBtn.addEventListener("click", async function () {

    if (!backgroundMusic.paused) {

        backgroundMusic.pause();
        musicBtn.innerText = "♫ Play Music";

        return;
    }

    // Don't play music over the voice note
    if (!voiceNote.paused) return;

    try {

        await backgroundMusic.play();

        musicBtn.innerText = "♫ Pause Music";

    } catch (error) {

        console.log("Music error:", error);

    }

});


// VOICE NOTE BUTTON

voiceButton.addEventListener("click", async function () {

    if (voiceNote.paused) {

        // Remember whether music was playing
        musicShouldResume = !backgroundMusic.paused;

        // Pause background music
        backgroundMusic.pause();

        musicBtn.innerText = "♫ Play Music";

        try {

            await voiceNote.play();

            voiceButton.innerText = "⏸ Pause";

        } catch (error) {

            console.log("Voice note error:", error);

            // Restore music if voice note fails
            if (musicShouldResume) {
                resumeBackgroundMusic();
            }

            musicShouldResume = false;

        }

    } else {

        voiceNote.pause();

        voiceButton.innerText = "▶ Play";

        if (musicShouldResume) {
            resumeBackgroundMusic();
        }

        musicShouldResume = false;

    }

});


// AUTOMATICALLY RESUME MUSIC WHEN VOICE NOTE FINISHES

voiceNote.addEventListener("ended", function () {

    voiceButton.innerText = "▶ Play";

    if (musicShouldResume) {
        resumeBackgroundMusic();
    }

    musicShouldResume = false;

});


// RESUME BACKGROUND MUSIC

async function resumeBackgroundMusic() {

    try {

        await backgroundMusic.play();

        musicBtn.innerText = "♫ Pause Music";

    } catch (error) {

        console.log("Music could not resume:", error);

        musicBtn.innerText = "♫ Play Music";

    }

}
