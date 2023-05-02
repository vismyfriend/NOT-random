const askMe = document.querySelector(".ask")
const check = document.querySelector(".check")
const next = document.querySelector(".next")
const card = document.querySelector(".card")
const cardValue = document.querySelector(".card__value")
const cardHint = document.querySelector(".card__hint")
const manual1 = document.querySelector(".manual-1")
const manual2 = document.querySelector(".manual-2")
const manual3 = document.querySelector(".manual-3")
const hint = document.querySelector(".notebook__hint")
let value = null
let questionNumber = 0
let answerNumber = 0


let shuffledQuestions = null

let shuffledAnswers = null


function shuffleDecks() {
    shuffledQuestions = questions.sort(function () {
        return Math.random() - 0.5;
    });
    shuffledAnswers = answers.sort(function () {
        return Math.random() - 0.5;
    });
    questionNumber= 0
    answerNumber = 0
    askMe.classList.remove("finish")
    askMe.disabled = false
    next.classList.remove("finish")
    next.disabled = false
    card.classList.remove("open")
    card.style.border = 'none';

}

function getAnswers() {
    if (answerNumber < shuffledAnswers.length) {


        card.classList.remove("open")
        value = shuffledAnswers[answerNumber]

        cardHint.classList.remove("show")
        // ищет объект в массиве и сравнивает с id
        setTimeout(function () { card.classList.add("open") }, 0);
        card.style.border = "solid 4px rgb(235, 70, 70)";
        cardValue.textContent = value.eng
        cardHint.textContent = value.ru
        answerNumber++
    } else {
        askMe.classList.add("finish")
        // foo.setAttribute('disabled', 'disabled')
        askMe.disabled = true
    }

}

function showQuestionsManual() {

}
function showCheckManual() {
}




// глагол на первом месте
function getquestions() {
    if (questionNumber < shuffledQuestions.length) {
        card.classList.remove("open")

        setTimeout(function () { card.classList.add("open") }, 0);
        value = shuffledQuestions[questionNumber]
        cardHint.classList.remove("show")
        // обновляет blur на каждой новой карточке
        cardValue.textContent = value.eng
        cardHint.textContent = value.ru
        card.style.border = "solid 4px rgb(5, 184, 5)";
        questionNumber++
    } else {
        next.classList.add("finish")
        // foo.setAttribute('disabled', 'disabled')
        next.disabled = true
    }
}


shuffleDecks ()
// сразу перемешивание при входе 

cardHint.addEventListener("click", () => {
    cardHint.classList.toggle("show")
})

askMe.addEventListener("click", getAnswers)
check.addEventListener("click", shuffleDecks)
next.addEventListener("click", getquestions)
card.addEventListener("click", () => {
    card.classList.contains("open") ? null : getquestions()
})