function calFact(num) {
  if (num === 0) { return 1; }
  else { return num * calFact(num - 1); }
}

var result = calFact(100);
console.log(result.toLocaleString());

