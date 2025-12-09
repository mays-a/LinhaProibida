const questions = [
    {
        question: "O que é pesca excessiva ?",
        answers: [
            { id: 1, text: "Quando os peixes são pescados apenas em rios.", correct: false},
            { id: 2, text: "Quando se pesca mais do que o oceano pode repor.", correct: true},
            { id: 3, text: "Quando os peixes são pescados corretamente.", correct: false},
            { id: 4, text: "Construção de hidroelétricas na região Norte.", correct: false},
        ],
    },

      {
        question: "Qual o principal objetivo “Acabar com a sobrepesca”, da Oceana Brasil?",
        answers: [
            { id: 1, text: "Aumentar o consumo de peixes no país.", correct: false},
            { id: 2, text: "Reduzir o esforço de pesca e garantir estoques sustentáveis. ", correct: true},
            { id: 3, text: "Criar áreas exclusivas para pesca industrial.", correct: false},
        ],
    },
    {
        question: "Segundo a Oceana, a sobrepesca ameaça o meio ambiente e a segurança alimentar porque:",
        answers: [
            { id: 1, text: "Aumenta a quantidade de algas marinhas benéficas.", correct: false},
            { id: 2, text: "Reduzir o esforço de pesca e garantir estoques sustentáveis.", correct: true},
            { id: 3, text: "Promove a regeneração natural dos oceanos.", correct: false},
            { id: 4, text: "Melhora a economia costeira a longo prazo.", correct: false},
        ],
    },
    {
        question: "A operação da Justiça Federal sobre uma organização criminosa de pesca ilegal mencionada no G1  ocorreu em qual Estado?",
        answers: [
            { id: 1, text: "Pará.", correct: false},
            { id: 2, text: "Amazonas.", correct: true},
            { id: 3, text: "Maranhão.", correct: false},
        ],
    },
    {
        question: "O acordo global que o Brasil discute aderir para combater a pesca ilegal é conhecido como:",
        answers: [
            { id: 1, text: "Acordo de Paris.", correct: false},
            { id: 2, text: "Tratado de Mar del Plata .", correct: true},
            { id: 3, text: "Acordo da FAO sobre Port State Measures.", correct: false},
            { id: 4, text: "Convenção de Kyoto.", correct: false},
        ],
    },
    {
        question: "De acordo com a Oceana, qual porcentagem das espécies avaliadas no Brasil estavam sobrepescadas?",
        answers: [
            { id: 1, text: "10%.", correct: false},
            { id: 2, text: "25%.", correct: true},
            { id: 3, text: "50%.", correct: false},
            { id: 4, text: "65%.", correct: false},
           
        ],
    },
    {
        question: "No caso investigado no Amazonas, quem é “Colômbia”, citado na reportagem do G1?",
        answers: [
            { id: 1, text: "Um dos líderes de uma quadrilha de pesca ilegal.", correct: false},
            { id: 2, text: "Um policial federal infiltrado.", correct: true},
            { id: 3, text: "Um pesquisador ambiental.", correct: false},
            { id: 4, text: "Um representante do Fundo Amazônia.", correct: false},
        ],
    },
    {
        question: "O Fundo da Amazonia atua em quais eixos principais?  ",
        answers: [
            { id: 1, text: "Monitoramento e controle, manejo florestal sustentável e atividades produtivas sustentáveis.", correct: false},
            { id: 2, text: "Indústria, mineração e comércio exterior.", correct: true},
            { id: 3, text: "Turismo, infraestrutura e esportes.", correct: false},
            { id: 4, text: "Transporte, urbanização e habitação.", correct: false},
        ],
    },
    {
        question: "O Brasil adotou cotas de captura pela primeira vez em 2018 para a pesca de qual espécie e em qual estado?",
        answers: [
            { id: 1, text: "Sardinha - Santa Catarina.", correct: false},
            { id: 2, text: "Corvina - Rio Grande do Sul.", correct: true},
            { id: 3, text: "Lagosta - Ceará.", correct: false},
            { id: 4, text: "Tainha - Santa Catarina.", correct: false},
        ],
    },
    {
        question: "O Fundo Amazônia financia projetos voltados para:",
        answers: [
            { id: 1, text: "Produção de energia nuclear.", correct: false},
            { id: 2, text: "Conservação e uso sustentável da Amazônia.", correct: true},
            { id: 3, text: "Expansão agrícola e pecuária na Amazônia.", correct: false},
            { id: 3, text: "Construção de hidroelétricas na região Norte.", correct: false},
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // desabilita todos os botões após escolher
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Reiniciar";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
