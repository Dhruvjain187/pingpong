const p1 = {
    score: 0,
    button: document.querySelector(".p1btn"),
    display: document.querySelector("#p1display")
};

const p2 = {
    score: 0,
    button: document.querySelector(".p2btn"),
    display: document.querySelector("#p2display")
};

const reset = document.querySelector(".reset-btn");
const selectWinSCore = document.querySelector("#lvl");

let winningScore = parseInt(selectWinSCore.value);
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("green");
            opponent.display.classList.add("red");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener("click", () => {
    updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
    updateScore(p2, p1);
});

reset.addEventListener("click", func);

function func() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("red", "green");
        p.button.disabled = false;
    }
}

selectWinSCore.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    func();
})