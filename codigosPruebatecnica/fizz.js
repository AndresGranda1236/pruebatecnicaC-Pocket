function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "FizzBuzz";
  } else if (numero % 3 === 0) {
    return "Fizz";
  } else if (numero % 5 === 0) {
    return "Buzz";
  } else {
    return numero.toString();
  }
}

const resultado1 = fizzBuzz(9);
const resultado2 = fizzBuzz(10);
const resultado3 = fizzBuzz(15);
const resultado4 = fizzBuzz(7);

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
