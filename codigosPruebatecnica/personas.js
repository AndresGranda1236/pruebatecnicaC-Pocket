function filtrarMayoresDeEdad(personas) {
  const mayoresDeEdad = personas.filter((persona) => persona.edad >= 18);

  mayoresDeEdad.sort((a, b) => a.nombre.localeCompare(b.nombre));

  return mayoresDeEdad;
}

const listaPersonas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 20 },
  { nombre: "Carlos", edad: 16 },
  { nombre: "Ana", edad: 22 },
];

const personasMayoresDeEdad = filtrarMayoresDeEdad(listaPersonas);
console.log(
  "Personas mayores de edad ordenadas alfabéticamente:",
  personasMayoresDeEdad
);
