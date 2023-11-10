const iterativeFactorial = num => {
  let factorial = 1n;
  while (num != 1) factorial *= BigInt(num--);
  return factorial;
}