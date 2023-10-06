let startbtn=document.querySelector('.startbtn');
let proceedbtn=document.querySelector('.proceedbtn');
let inBox=document.querySelector('.instructions');
let startBox=document.querySelector('.start');
let QuesContainer=document.querySelector('.question-container');
let questionHead=document.querySelector('.question');
let AnswerBox=document.querySelector('.answer-btn');
let AnswerHtml=document.querySelectorAll('.answers')
let Nextbtn=document.querySelector('.nextbtn');
let ScoreBox=document.querySelector('.score');
let playagain=document.querySelector('.PlayAgain');
let EndQuiz=document.querySelector('.EndQuiz');
let EndPage=document.querySelector('.bye');
let playagain2=document.querySelector('.PlayAgain2');

let currentQuestionIndex=0;
let score=0;

startbtn.addEventListener('click', startQuiz);
proceedbtn.addEventListener('click', Proceed);
Nextbtn.addEventListener('click', nextquest);
playagain.addEventListener('click', PlayAgain);
playagain2.addEventListener('click', PlayAgain2);
EndQuiz.addEventListener('click', Bye)

function startQuiz(){
    startBox.classList.add('hide');
    inBox.classList.remove('hide');
}

function Proceed(){
    inBox.classList.add('hide');
QuesContainer.classList.remove('hide');
QuizBegins();
}

function QuizBegins(){
    score=0;
    currentQuestionIndex=0;
    // Nextbtn.innerHTML="Next";
    displayQuestion();
}

function displayQuestion(){
    reset();
    let currentQuestion= Questions[currentQuestionIndex];
    let questionNum=currentQuestionIndex+1;
    questionHead.innerHTML= questionNum + '. ' + currentQuestion.Question;

    currentQuestion.Answers.forEach(ans=>{
        const button=document.createElement("button");
        button.innerHTML=ans.text;
        button.classList.add('btn');
        button.classList.add('answers');
        AnswerBox.appendChild(button);
        // if(ans.correct){
            button.dataset.correct=ans.correct;
            
        // }
        console.log(button.dataset);
        button.addEventListener('click', selectAnswer);
    })
}
// The target property returns the element where the event occured.
function selectAnswer(event){
    const Selected=event.target;
    const isCorrect= Selected.dataset.correct==="true";
    if(isCorrect){
        Selected.classList.add("correct");
        score++;
    }else{
        Selected.classList.add("incorrect");
    }

    Array.from(AnswerBox.children).forEach(element=>{
        if(element.dataset.correct==="true"){
            element.classList.add("correct");
        }
        element.disabled=true;
    })
    Nextbtn.style.display="block";
}



function nextquest(){
    if((currentQuestionIndex)<(Questions.length-1)){
        currentQuestionIndex++;
        displayQuestion();
    }
    else{
        displayScore();
    }
}

function displayScore(){
    QuesContainer.classList.add('hide');
    ScoreBox.classList.remove('hide');
    document.querySelector('.scoretag').innerHTML='your score is ' + score + '/' + Questions.length ;

}

function PlayAgain(){
    ScoreBox.classList.add('hide');
    QuesContainer.classList.remove('hide');
 QuizBegins();
}

function PlayAgain2(){
    EndPage.classList.add('hide');
    QuesContainer.classList.remove('hide');
    QuizBegins();
}

function Bye(){
    ScoreBox.classList.add('hide');
    EndPage.classList.remove('hide');

}

function reset(){
    Nextbtn.style.display="none";
    while(AnswerBox.firstChild){
        AnswerBox.removeChild(AnswerBox.firstChild);
        console.log(score);
    }
}
const Questions=[
    {
        Question:'What is the name of the weak zone of the earth’s crust?',
        Answers:[
            {text: "Seismic", correct: true},
            {text: "Cosmic", correct: false},
            {text: "Formic", correct: false},
            {text: "Anaemic", correct: false}
        ]
    },
    {
        Question:'What is the pH value of the human body?',
        Answers:[
            {text: "9.2 to 9.8", correct: false},
            {text: "7.0 to 7.8", correct: true},
            {text: "6.1 to 6.3", correct: false},
            {text: "5.4 to 5.6", correct: false}
        ]
    },
    {
        Question:'The world’s nation 5G mobile network was launched by which country?',
        Answers:[
            {text: "Japan", correct: false},
            {text: "Asia", correct: false},
            {text: "South korea", correct: true},
            {text: "Malaysia", correct: false}
        ]
    },
    {
        Question:'There are approximately one million of these animals living in Australia',
        Answers:[
            {text: "Zebras", correct: false},
            {text: "Great white sharks", correct: false},
            {text: "Tasmanian Tigers", correct: false},
            {text: "Camels", correct: true}
        ]
    },
    {
        Question:' In what year did Apple start selling the first iPhones?',
        Answers:[
            {text: "2000", correct: false},
            {text: "2004", correct: false},
            {text: "1998", correct: false},
            {text: "2007", correct: true}
        ]
    }
]