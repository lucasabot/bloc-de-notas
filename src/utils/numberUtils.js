export const withLimits = (number, bottomLimit, upperLimit) =>
  number < bottomLimit ? bottomLimit : number > upperLimit ? upperLimit : number;

export const between = (number, min, max) => number >= min && number <= max;
