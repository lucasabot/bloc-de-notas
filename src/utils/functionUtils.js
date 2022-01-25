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

export const handleTextStyle = (textStyle, textClassNames) => {
  if (textStyle === 'clear') {
    return textClassNames;
  }
  if (textClassNames.find(item => item === textStyle)) {
    return textClassNames.filter(item => item !== textStyle);
  }
  return [...textClassNames, textStyle];
};

export const countWords = text =>
  text
    .split(' ')
    .map(item => (item.substring('\n') ? item.split('\n') : item))
    .flatMap(item => item)
    .filter(item => !!item).length;

export const handleAutoId = () => {
  const lastIdCreated = parseInt(localStorage.getItem('lastId'), 10);
  const newLastId = lastIdCreated ? lastIdCreated + 1 : 1;
  localStorage.setItem('lastId', newLastId);
  return newLastId;
};
