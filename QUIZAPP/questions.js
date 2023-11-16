const myQue = [
  {
    question: "Which of the following is not a type of Constructor in C++?",
    a: "Default constructor",
    b: "Parameterized constructor",
    c: "Copy constructor",
    d: " Friend constructor",
    ans: "ans4",
  },
  {
    question: "What is virtual inheritance in C++?",
    a: " C++ technique to enhance multiple inheritance",
    b: "C++ technique to ensure that a private member of the base class can be accessed somehow",
    c: "C++ technique to avoid multiple inheritances of classes",
    d: "C++ technique to avoid multiple copies of the base class into children/derived class",
    ans: "ans4",
  },
  {
    question: "What is the size of wchar_t in C++?",
    a: "Based on the number of bits in the system",
    b: "2 or 4",
    c: "4",
    d: "2",
    ans: "ans1",
  },
  {
    question: " Which is more effective while calling the C++ functions?",
    a: "call by object",
    b: "call by pointer",
    c: "call by value",
    d: "call by reference",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".selectedAnswer");
const showScore = document.querySelector("#showScore");
let score = 0;

let questionCount = 0;
const loadQuestion = () => {
  // console.log(myQue[0].question);

  const questionList = myQue[questionCount];
  question.innerHTML = questionList.question;

  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadQuestion();

const getCheckedAnswer = () => {
  let answer;
  answers.forEach((elementSelected) => {
    if (elementSelected.checked) {
      answer = elementSelected.id;
    }
  });
  return answer;
};

const deSelectAll = () => {
  answers.forEach((selected) => {
    selected.checked = false;
  });
};
submit.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();
  // console.log(checkedAnswer);

  if (checkedAnswer === myQue[questionCount].ans) {
    score++;
  }

  deSelectAll();

  questionCount++;
  if (questionCount < myQue.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
        <h3>You Scored ${score}/${myQue.length} 👌</h3>
        <button class="btn" onclick = "location.reload()"> Play Again </button>
        `;
    showScore.classList.remove("scoreArea");
  }
});
