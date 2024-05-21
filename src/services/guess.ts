export const guessAge = (name: string) =>
  fetch(`https://api.agify.io/?name=${name}`);
export const guessGender = (name: string) =>
  fetch(`https://api.genderize.io/?name=${name}`);
export const GuessNationality = (name: string) =>
  fetch(`https://api.nationalize.io/?name=${name}`);
