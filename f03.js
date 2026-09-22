const veletlenSzam = Math.floor(Math.random() * 100) + 1;
const paros = veletlenSzam % 2 === 0;

console.log(`A véletlen szám: ${veletlenSzam}`);
console.log(`Páros: ${paros ? "páros" : "páratlan"}`);
console.log(`Nagyobb mint 50: ${veletlenSzam > 50}`);