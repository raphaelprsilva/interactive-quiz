const form = document.querySelector('.quiz-form');
const submitButton = document.querySelector('.btn-primary');
const finalResult = document.querySelector('.result');

const correctAnswers = ['B', 'A', 'A', 'A', 'C', 'B'];
const totalQuestions = correctAnswers.length;

const feedbackUser = document.createElement('div');

const feedbackMessageToUser = (userScoreFeedbackInfo) => {
  const { element, classAttribute, message } = userScoreFeedbackInfo;

  form.textContent = '';
  element.setAttribute('class', classAttribute);
  element.textContent = message;
  form.insertAdjacentElement('afterend', element);
};

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

  const computeUserScore = (answer, index) => {
    if (answer === correctAnswers[index]) {
      const eachCorrectAnswer = (1 / totalQuestions) * 100;
      userScore += eachCorrectAnswer;
    }
  };

  userAnswers.forEach(computeUserScore);

  const userScoreRounded = userScore.toFixed(2);
  const isScoreGreaterThan70 = userScoreRounded >= 70;
  const isScoreBetweem50and70 = userScoreRounded >= 50 && userScoreRounded < 70;

  const successScore = {
    element: feedbackUser,
    classAttribute: 'my-5 alert alert-success text-center',
    message: `Parabéns, você acertou ${userScoreRounded}% das questões! 💪🏾 🚀`,
  };

  const medianScore = {
    element: feedbackUser,
    classAttribute: 'my-5 alert alert-warning text-center',
    message: `Você acertou ${userScoreRounded}% das questões.
      Bom demais, mas dá para melhorar. 🤪`,
  };

  const badScore = {
    element: feedbackUser,
    classAttribute: 'my-5 alert alert-danger text-center',
    message: `Você acertou apenas ${userScoreRounded}% das questões! 😥`,
  };

  if (isScoreGreaterThan70) {
    feedbackMessageToUser(successScore);
    return;
  }

  if (isScoreBetweem50and70) {
    feedbackMessageToUser(medianScore);
    return;
  }

  feedbackMessageToUser(badScore);
});
