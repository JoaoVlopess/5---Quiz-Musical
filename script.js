let currentQuestion = 0;
let rightAnswers = 0
showQuestion()


document.querySelectorAll('.answer').forEach((answer) => {
    answer.addEventListener('click', checkResult)
})

function checkResult(clickedAnswer){
    let answerNum = clickedAnswer.target.getAttribute('data-item')
    let rightAnswer = questions[currentQuestion].answer

    if(answerNum == rightAnswer){
        rightAnswers++
    }
    console.log(rightAnswers)
    currentQuestion++
    showQuestion()
    attPorcentageBar()
}

function showQuestion() {
    let questName = document.querySelector('.question')
    questName.innerHTML = questions[currentQuestion].question;

    let answers = document.querySelectorAll('.answer-name');

    answers.forEach((answer, index) => {

        answer.innerHTML = questions[currentQuestion].options[index]
    });
}

function attPorcentageBar(){
    let porcentageBar = document.querySelector('.porcentage')

    porcentageBar.style.width = `${currentQuestion*10}%`
}



