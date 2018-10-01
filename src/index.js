module.exports = function getZerosCount(number, base) {
  let z;
  let result = number;
  
  for (let i = 2; i <= base; i++) {
    if (base % i === 0) {
      let quantityA = 0;
      while (base % i === 0) {
        quantityA++;
        base /= i;
      }
      let quantityB = 0;
      let n = number;
      while (n / i > 0) {
        quantityB += Math.floor(n / i);
        n /= i;
      }
      z =  Math.floor(quantityB / quantityA); 
      result = Math.min(result, z);
    }
  }
  return result;
}