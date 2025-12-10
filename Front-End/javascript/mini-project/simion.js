let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "grey"];

let started = false;

let level = 0;
let highScore = 0; // ⭐ NEW PART — highest score store karega

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
    }
    levelUp();
})

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    // ⭐ GAME KE DARMAYAN HIGHEST SCORE UPDATE
    if (level > highScore) {
        highScore = level;
    }
    document.getElementById("highscore").innerText = `Highest Score : ${highScore}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function cheakAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {

        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }

    } else {
        // ⭐ NEW PART — update highest score
        if (level > highScore) {
            highScore = level;
        }

        document.getElementById("highscore").innerText =
            `Highest Score : ${highScore}`;

        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> press any key to start `;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);

        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    cheakAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
}
