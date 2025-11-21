const questions = [
    { q: "What is the capital of India?", a: ["Delhi", "Mumbai", "Kolkata", "Chennai"], correct: 0 },
    { q: "Which river is longest?", a: ["Ganga", "Yamuna", "Nile", "Amazon"], correct: 2 },
    { q: "Fastest animal?", a: ["Cheetah", "Tiger", "Deer", "Lion"], correct: 0 },
    { q: "Largest planet?", a: ["Earth", "Mars", "Jupiter", "Venus"], correct: 2 },
    { q: "2+2 = ?", a: ["3", "4", "5", "22"], correct: 1 },
    { q: "National bird of India?", a: ["Sparrow", "Eagle", "Peacock", "Parrot"], correct: 2 },
    { q: "HTML full form?", a: ["Hyper Text Markup Language", "High Text Make Language", "Hyper Transfer Mail", "None"], correct: 0 },
    { q: "Which is OS?", a: ["Chrome", "Android", "Google", "YouTube"], correct: 1 },
    { q: "Sun rises from?", a: ["East", "West", "North", "South"], correct: 0 },
    { q: "Largest ocean?", a: ["Atlantic", "Indian", "Pacific", "Arctic"], correct: 2 },
    { q: "Who invented bulb?", a: ["Newton", "Einstein", "Edison", "Tesla"], correct: 2 },
    { q: "Which is programming language?", a: ["Python", "Tiger", "Monkey", "Car"], correct: 0 },
    { q: "National game of India?", a: ["Cricket", "Hockey", "Football", "Kabaddi"], correct: 1 },
    { q: "Largest continent?", a: ["Africa", "Asia", "Europe", "Australia"], correct: 1 },
    { q: "Taj Mahal is located in?", a: ["Delhi", "Mumbai", "Agra", "Jaipur"], correct: 2 },
    { q: "Which is not a fruit?", a: ["Apple", "Banana", "Potato", "Mango"], correct: 2 },
    { q: "Facebook founder?", a: ["Jobs", "Zuckerberg", "Gates", "Tesla"], correct: 1 },
    { q: "Water chemical formula?", a: ["CO2", "H2O", "O2", "NACL"], correct: 1 },
    { q: "Planet known as Red Planet?", a: ["Mars", "Earth", "Saturn", "Jupiter"], correct: 0 },
    { q: "How many days in a week?", a: ["5", "6", "7", "8"], correct: 2 }
];

let index = 0;
let score = 0;

const startScreen = document.getElementById("startScreen");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const questionText = document.getElementById("question");
const answersDiv = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function startQuiz() {
    startScreen.classList.add("hidden");
    quizBox.classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    nextBtn.classList.add("hidden");
    questionText.innerText = questions[index].q;
    answersDiv.innerHTML = "";

    questions[index].a.forEach((option, i) => {
        const btn = document.createElement("div");
        btn.className = "answer";
        btn.innerText = option;
        btn.onclick = () => selectAnswer(btn, i);
        answersDiv.appendChild(btn);
    });
}

function selectAnswer(selected, i) {
    const correctIndex = questions[index].correct;

    [...answersDiv.children].forEach(btn => btn.style.pointerEvents = "none");

    if (i === correctIndex) {
        selected.classList.add("correct");
        score++;
    } else {
        selected.classList.add("wrong");
        answersDiv.children[correctIndex].classList.add("correct");
    }

    nextBtn.classList.remove("hidden");
}

function nextQuestion() {
    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    document.getElementById("score").innerText = `${score}/${questions.length}`;
}

function restartQuiz() {
    index = 0;
    score = 0;
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    loadQuestion();
}
