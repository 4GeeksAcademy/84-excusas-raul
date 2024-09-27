let sujeto = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
let verbo = ["comió", "orinó", "aplastó", "rompió"];
let cosa = ["mis deberes", "mi teléfono", "el coche"];
let cuando = [
  "antes de la clase",
  "cuando estaba durmiendo",
  "mientras hacía ejercicio",
  "durante mi almuerzo",
  "mientras estaba rezando"
];

function seleccionResultado() {
  const fraseSujeto = sujeto[Math.floor(Math.random() * sujeto.length)];
  console.log("Sujeto seleccionado: " + fraseSujeto); // Verifica el sujeto

  const fraseVerbo = verbo[Math.floor(Math.random() * verbo.length)];
  console.log("Verbo seleccionado: " + fraseVerbo); // Verifica el verbo

  const fraseCosa = cosa[Math.floor(Math.random() * cosa.length)];
  console.log("Cosa seleccionada: " + fraseCosa); // Verifica la cosa

  const fraseCuando = cuando[Math.floor(Math.random() * cuando.length)];
  console.log("Cuando seleccionado: " + fraseCuando); // Verifica el momento

  const excusaGenerada = `${fraseSujeto} ${fraseVerbo} ${fraseCosa} ${fraseCuando}.`;
  console.log("Excusa generada: " + excusaGenerada); // Verifica la excusa completa

  document.getElementById("excusa").textContent = excusaGenerada;
}

window.onload = seleccionResultado;
