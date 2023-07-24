/*
 rock rock
 paper paper
 scissors scissors
 rock paper
 rock scissors
 paper rock
 paper scissors
 scissors rock
 scissors paper
*/

// const winConditions = {
//   rockRock: "tie",
//   paperPaper: "tie",
//   scissorsScissors: "tie",
//   rockPaper: "p1",
//   rockScissors: "p0",
//   paperRock: "p0",
//   paperScissors: "p1",
//   scissorsRock: "p1",
//   scissorsPaper: "p0",
// }

let activeObjects = []

const determineWin = function (p0object, p1object) {
  let winner
  if (p0object !== p1object) {
    if (p0object === "rock" && p1object === "paper") {
      winner = "p1"
      return winner
    }

    if (p0object === "rock" && p1object === "scissors") {
      winner = "p0"
      return winner
    }

    if (p0object === "paper" && p1object === "rock") {
      winner = "p0"
      return winner
    }

    if (p0object === "paper" && p1object === "scissors") {
      winner = "p1"
      return winner
    }

    if (p0object === "scissors" && p1object === "rock") {
      winner = "p1"
      return winner
    }

    if (p0object === "scissors" && p1object === "paper") {
      winner = "p0"
      return winner
    }
  }
}

// selecting
const rock = {
  p0: document.querySelector(".p0rock"),
  p1: document.querySelector(".p1rock"),
  all: document.querySelectorAll(".rock"),
}

const paper = {
  p0: document.querySelector(".p0paper"),
  p1: document.querySelector(".p1paper"),
  all: document.querySelectorAll(".paper"),
}

const scissors = {
  p0: document.querySelector(".p0scissors"),
  p1: document.querySelector(".p1scissors"),
  all: document.querySelectorAll(".scissors"),
}

const score = {
  p0: Number(document.querySelector(".score-player0").textContent),
  p1: Number(document.querySelector(".score-player1").textContent),
}

const shootBtn = document.querySelector(".shoot")
const resetBtn = document.querySelector(".reset")

const resetBasic = function () {
  scissors.p0.classList.remove("win")
  paper.p0.classList.remove("win")
  rock.p0.classList.remove("win")

  scissors.p1.classList.remove("win")
  paper.p1.classList.remove("win")
  rock.p1.classList.remove("win")
}

const resetAll = function () {
  document.querySelector(".score-player0").textContent = 0
  document.querySelector(".score-player1").textContent = 0

  score.p0 = 0
  score.p1 = 0

  scissors.p0.classList.remove("clicked")
  paper.p0.classList.remove("clicked")
  rock.p0.classList.remove("clicked")

  scissors.p1.classList.remove("clicked")
  paper.p1.classList.remove("clicked")
  rock.p1.classList.remove("clicked")

  resetBasic()
}

const settings = {
  settingsBtn: document.querySelector(".settings"),
  window: document.querySelector(".modal"),
  overlay: document.querySelector(".overlay"),
  closeBtn: document.querySelector(".close-modal"),
  lightBtn: document.querySelector(".light"),
}

// clicking
// messy but works

for (let i = 0; i < rock.all.length; i++) {
  rock.all[i].addEventListener("click", () => {
    activeObjects[i] = "rock"

    console.log(`player ${i}'s object is ${activeObjects[i]}`)
    console.log(activeObjects)

    paper.all[i].classList.remove("clicked")
    scissors.all[i].classList.remove("clicked")
    rock.all[i].classList.add("clicked")

    resetBasic()
  })
}

//

for (let i = 0; i < scissors.all.length; i++) {
  scissors.all[i].addEventListener("click", () => {
    activeObjects[i] = "scissors"

    console.log(`player ${i}'s object is ${activeObjects[i]}`)
    console.log(activeObjects)

    paper.all[i].classList.remove("clicked")
    rock.all[i].classList.remove("clicked")
    scissors.all[i].classList.add("clicked")

    resetBasic()
  })
}

//

for (let i = 0; i < scissors.all.length; i++) {
  paper.all[i].addEventListener("click", () => {
    activeObjects[i] = "paper"

    console.log(`player ${i}'s object is ${activeObjects[i]}`)
    console.log(activeObjects)

    scissors.all[i].classList.remove("clicked")
    rock.all[i].classList.remove("clicked")
    paper.all[i].classList.add("clicked")

    resetBasic()
  })
}

// Shoot

shootBtn.addEventListener("click", () => {
  if (determineWin(...activeObjects) === "p1") {
    console.log(determineWin(...activeObjects))
    eval(activeObjects[1]).p1.classList.add("win")

    score.p1 += 1
    document.querySelector(".score-player1").textContent = score.p1
  }

  if (determineWin(...activeObjects) === "p0") {
    console.log(determineWin(...activeObjects))
    eval(activeObjects[0]).p0.classList.add("win")

    score.p0 += 1
    document.querySelector(".score-player0").textContent = score.p0
  }
})

resetBtn.addEventListener("click", () => {
  resetAll()
})

// settings

settings.settingsBtn.addEventListener("click", () => {
  settings.window.classList.toggle("hidden")
  settings.overlay.classList.toggle("hidden")
})

settings.closeBtn.addEventListener("click", () => {
  settings.window.classList.add("hidden")
  settings.overlay.classList.add("hidden")
})

settings.lightBtn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("lightMode")
  document.querySelector("html").classList.toggle("lightMode")
  settings.lightBtn.textContent === "Light Mode"
    ? (settings.lightBtn.textContent = "Dark Mode")
    : (settings.lightBtn.textContent = "Light Mode")
})
