const words: string[] = [
  "COMPUTADORA",
  "AGUACATE",
  "PAPAYA",
  "VEHICULO",
  "ANIMAL",
  "VETERINARIO",
  "MESSI",
  "CELULAR",
  "RONALDO",
  "FUTBOL",
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
