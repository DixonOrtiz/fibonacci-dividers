const numberOfDividers = (number) => {
  let counter = 0;
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      if (number / i === i) {
        counter++;
      } else {
        counter = counter + 2;
      }
    }
  }
  return counter;
};

const fibonacci = (number) => {
  if (number === 1) {
    return [0, 1];
  } else {
    let fibonacciSerie = fibonacci(number - 1);
    fibonacciSerie.push(
      fibonacciSerie[fibonacciSerie.length - 1] +
        fibonacciSerie[fibonacciSerie.length - 2]
    );
    return fibonacciSerie;
  }
};

let counter = 1;
while (true) {
  const fibonacciSerie = fibonacci(counter);
  const lastFibonacciNumber = fibonacciSerie[fibonacciSerie.length - 1];
  const lastNumberDividers = numberOfDividers(lastFibonacciNumber);

  if (lastNumberDividers > 1000) {
    console.log(
      `The number ${lastFibonacciNumber} has ${lastNumberDividers} dividers!`
    );
    break;
  }

  counter++;
}
