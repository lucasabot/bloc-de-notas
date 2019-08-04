export const debounce = (func, wait, immediate) => {
  let timeout;
  return function debounced(...args) {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const findNextActive = (step, completedSteps, stepsAmount) => {
  const nextStep = step + 1;
  if (nextStep > stepsAmount) {
    return completedSteps[completedSteps.length - 1];
  }
  if (!completedSteps.find(_step => _step === nextStep)) return nextStep;

  return findNextActive(nextStep, completedSteps, stepsAmount);
};

export const getRandomArrItem = array => array[Math.floor(Math.random() * array.length)];
