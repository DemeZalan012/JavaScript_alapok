function szamjegyOsszeg(n) {
    let osszeg = 0;
    for (item of n.toString()) {
        osszeg += Number(item);
    }
    return osszeg;
}

console.log(`4721 → ${szamjegyOsszeg(4721)}`);
console.log(`12345 → ${szamjegyOsszeg(12345)}`);
console.log(`69 → ${szamjegyOsszeg(69)}`);