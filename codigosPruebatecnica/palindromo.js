function esPalindromo(cadena) {
  cadena = cadena.toLowerCase().replace(/\s/g, "");

  return cadena === cadena.split("").reverse().join("");
}

const cadenaEjemplo = "Anita lava la tina";
const resultado = esPalindromo(cadenaEjemplo);

console.log(`¿La cadena '${cadenaEjemplo}' es un palíndromo? ${resultado}`);
