let currentQuestion = 0;
let rightAnswers = 0;
showQuestion();


document.querySelectorAll('.answer').forEach((answer) => {
    answer.addEventListener('click', checkResult);
})

document.querySelector('.restart').addEventListener('click',restartQuiz)

function checkResult(clickedAnswer){
    let answerNum = clickedAnswer.target.getAttribute('data-item');
    let rightAnswer = questions[currentQuestion].answer;

    if(answerNum == rightAnswer){
        rightAnswers++;
    }
    console.log(rightAnswers);
    currentQuestion++;
    if(currentQuestion === 10){
        document.querySelector('.answer-space').style.display = "none";
        document.querySelector('.question').style.display = "none";
        document.querySelector('.result').style.display = "flex" ;
        showResult();
        attPorcentageBar();
    }else{
        showQuestion();
        attPorcentageBar();
    }   

}


function showQuestion() {
    let questName = document.querySelector('.question');
    questName.innerHTML = questions[currentQuestion].question;

    let answers = document.querySelectorAll('.answer-name');

    answers.forEach((answer, index) => {

        answer.innerHTML = questions[currentQuestion].options[index];
    });
}


function attPorcentageBar(){
    let porcentageBar = document.querySelector('.porcentage');

    porcentageBar.style.width = `${currentQuestion*10}%`;
}


function showResult(){

    let resultTitle = document.querySelector('.result-title')
    let resultPorcentage = document.querySelector('.result-hits')
    let resultHits = document.querySelector('.result-hits-description')

    if(rightAnswers >=8){
        resultTitle.innerHTML = "Parabéns!"
        resultPorcentage.innerHTML = `Acertou ${rightAnswers*10}%`
        resultHits.innerHTML = `Você respondeu 10 questões e acertou ${rightAnswers}`

    }else if(rightAnswers >=5 && rightAnswers <=7){
        resultTitle.innerHTML = "Bom!"
        resultPorcentage.innerHTML = `Acertou ${rightAnswers*10}%`
        resultHits.innerHTML = `Você respondeu 10 questões e acertou ${rightAnswers}`

    }else if(rightAnswers <= 4){
        resultTitle.innerHTML = "Exercite mais!"
        resultPorcentage.innerHTML = `Acertou ${rightAnswers*10}%`
        resultHits.innerHTML = `Você respondeu 10 questões e acertou ${rightAnswers}`
    }
}


function restartQuiz(){
    document.querySelector('.answer-space').style.display = "grid";
    document.querySelector('.question').style.display = "block";
    document.querySelector('.result').style.display = "none" ;

    currentQuestion = 0;
    rightAnswers = 0;
    attPorcentageBar()
    showQuestion();

}
