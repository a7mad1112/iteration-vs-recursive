const iterativeFactorial = num => {
  let factorial = 1n;
  while (num != 1) factorial *= BigInt(num--);
  return factorial;
}

const recursiveFactorial = num => num === BigInt(1) ? BigInt(1) : num * recursiveFactorial(num - BigInt(1));

const start = Date.now();
recursiveFactorial(BigInt(10000))
const end = Date.now();
const timeInSeconds = (end - start) / 1000;
console.log(`Excution time is: ${timeInSeconds}`);