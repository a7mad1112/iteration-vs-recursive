const iterativeFactorial = num => {
  let factorial = 1n;
  while (num != 1) factorial *= BigInt(num--);
  return factorial;
}

const recursiveFactorial = num => num === BigInt(1) ? BigInt(1) : num * recursiveFactorial(num - BigInt(1));