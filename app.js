const form = document.querySelector('.quiz-form');
const submitButton = document.querySelector('.btn-primary');
const finalResult = document.querySelector('.result');

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

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      const eachCorrectAnswer = (1 / totalQuestions) * 100;
      userScore += eachCorrectAnswer;
    }
  });

  scrollTo(0, 0);
  finalResult.classList.remove('d-none');

  let counter = 0;

  const timer = setInterval(() => {
    if (counter === Math.round(userScore)) {
      clearInterval(timer);
    }

    finalResult.querySelector('span').textContent = `${counter}%`;
    counter++;
  }, 100);
});
