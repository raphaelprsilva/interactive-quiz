const form = document.querySelector('.quiz-form');

const correctAnswers = ['B', 'A', 'A', 'A', 'C', 'B'];
const totalQuestions = correctAnswers.length;


form.addEventListener('submit', (event) => {
  event.preventDefault();

  let userScore = 0;
  const userAnswers = [
    form.firstQuestion.value,
    form.secondQuestion.value,
    form.thirdQuestion.value,
    form.fourthQuestion.value,
    form.fifthQuestion.value,
    form.sixthQuestion.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      const eachCorrectAnswer = Math.round((1 / totalQuestions) * 100);
      userScore += eachCorrectAnswer;
    }
  })

  console.log(userScore);
});