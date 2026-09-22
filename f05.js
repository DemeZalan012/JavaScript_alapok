const pontszam = Math.floor(Math.random() * 101);

let erdemjegy;
let megnevezes;

if (pontszam >= 0 && pontszam <= 49) {
  erdemjegy = 1;
  megnevezes = "elégtelen";
} else if (pontszam >= 50 && pontszam <= 64) {
  erdemjegy = 2;
  megnevezes = "elégséges";
} else if (pontszam >= 65 && pontszam <= 79) {
  erdemjegy = 3;
  megnevezes = "közepes";
} else if (pontszam >= 80 && pontszam <= 89) {
  erdemjegy = 4;
  megnevezes = "jó";
} else if (pontszam >= 90 && pontszam <= 100) {
  erdemjegy = 5;
  megnevezes = "jeles";
}

console.log(`${pontszam} pont → ${megnevezes} (${erdemjegy})`);