const spans = document.querySelectorAll('.number');

const updateCount = (span) => {
  const value = Number(span.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      span.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    span.textContent = `${initialValue}`;
  }, 1);
};

spans.forEach((span) => {
  updateCount(span);
});
