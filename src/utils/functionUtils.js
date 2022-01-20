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

/** handleTextStyle recibe un valor "textStyle" que debe ser italic, bold o clear
 *  y devuelve un arreglo con el resultado de agregar o retirar el estilo que recibio */
export const handleTextStyle = (textStyle, textClassNames) => {
  if (textStyle === 'clear') {
    return textClassNames;
  }
  if (textClassNames.find(item => item === textStyle)) {
    return textClassNames.filter(item => item !== textStyle);
  }
  return [...textClassNames, textStyle];
};

/** countWords recibe una cadena de texto y devuelve la cantidad de palabras que contiene */
export const countWords = text =>
  text
    .split(' ')
    .map(item =>
      // Si tiene un espacio tengo que splittearlo
      item.substring('\n') ? item.split('\n') : item
    )
    .flatMap(item => item) // subo los subArrays resultantes al mismo nivel que los strings
    .filter(item => !!item).length; // filtro los espacios residuales y devuelvo el largo de mi array

/** handleAutoId maneja la creacion automatica de ids en el browser via localstorage para evitar conflictos de ABM de Notas */
export const handleAutoId = () => {
  const lastIdCreated = parseInt(localStorage.getItem('lastId'), 10);
  const newLastId = lastIdCreated ? lastIdCreated + 1 : 1;
  localStorage.setItem('lastId', newLastId);
  return newLastId;
};
