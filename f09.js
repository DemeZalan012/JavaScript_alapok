function tokeletes(n) {
  let osszeg = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      osszeg += i;
    }
  }

  return osszeg === n;
}

const perfektSzamok = [];

for (let i = 1; i <= 10000; i++) {
  if (tokeletes(i)) {
    perfektSzamok.push(i);
  }
}

console.log(perfektSzamok.join(", "));
