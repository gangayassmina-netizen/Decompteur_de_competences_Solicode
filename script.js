let codes = ["C1", "C3","C5", "C3","C5","C1", "C3","C5",];
let count = 0;
let code = "C1";

for (let i = 0; i < codes.length; i++) {
  if (codes [i] ===code) {
    count++;
  }
    
}

console.log(code + " se repit " + count + "fois " );

console.log(`${code} se repi ${count} fois` );