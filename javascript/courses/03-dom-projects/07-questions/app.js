const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', function () {
    questions.forEach(function (currentQuestion) {
      if (question !== currentQuestion) {
        currentQuestion.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});
