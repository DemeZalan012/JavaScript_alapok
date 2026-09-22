const dobasok = [];
let hatosDb = 0;
let osszeg = 0;

for (let i = 0; i < 20; i++) {
  const dobas = Math.floor(Math.random() * 6) + 1;
  dobasok.push(dobas);
  osszeg += dobas;

  if (dobas === 6) {
    hatosDb++;
  }
}

console.log(dobasok.join(" "));
console.log(`Hatosok száma: ${hatosDb}`);
console.log(`Dobások összege: ${osszeg}`);