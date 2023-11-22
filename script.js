document.getElementById("num1").textContent = 0
document.getElementById("num2").textContent = 0

function homeTeam() {
    let newScore = document.getElementById("num1").textContent
    newScore ++
    document.getElementById("num1").innerText = newScore
}

function awayTeam() {
    let newScore = document.getElementById("num2").textContent
    newScore ++
    document.getElementById("num2").innerText = newScore
}

