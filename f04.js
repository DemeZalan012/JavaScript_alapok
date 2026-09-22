const ar = 12990;
const vasarlasok = Math.floor(Math.random() * 11);
const kedvezmeny = vasarlasok >= 5 ? 0.1 : 0;
const kedvezmenyesAr = ar * (1 - kedvezmeny);

console.log(`A vevő eddig ${vasarlasok} alkalommal vásárolt.`);
console.log(`Eredeti ár: ${Math.round(ar)} Ft`);
console.log(`Kedvezményes ár: ${Math.round(kedvezmenyesAr)} Ft`);
