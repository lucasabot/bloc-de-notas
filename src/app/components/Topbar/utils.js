/**
 * checkButtonDisabled - verifica si el segundo argumento (currentPath) coincide o esta incluido en el primer argumento (buttonPath)
 * @param {*} buttonPath - path del boton a verificar
 * @param {*} currentPath - path actual para comparar
 * @returns {bool} - true o false
 */
export const checkButtonDisabled = (buttonPath, currentPath) =>
  Array.isArray(buttonPath) ? buttonPath.includes(currentPath) : String(buttonPath) === String(currentPath);
