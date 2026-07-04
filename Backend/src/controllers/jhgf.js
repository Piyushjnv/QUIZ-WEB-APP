function secureRandomRange(min, max) {
  const zeroBasedMax = 999999 - 100000 + 1;
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  
  // Use remainder (%) to fit the huge number into our range
  return (array[0] % zeroBasedMax) + 100000;
  return (array)
}

console.log(secureRandomRange(1, 10)); // A highly secure number between 1 and 10