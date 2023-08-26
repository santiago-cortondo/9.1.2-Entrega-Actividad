// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

const ordenado = strangeArray.filter(element => typeof element === "string").sort((a, b) => {
  const lowerA = a.toLowerCase();
  const lowerB = b.toLowerCase();

  if (lowerA < lowerB) {
    return -1;
  }
  if (lowerA > lowerB) {
    return 1;
  }
  return 0;
});

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  ordenado.forEach((element) => {
    
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);

  });
}

document.addEventListener("DOMContentLoaded", (e) => {
    showList(strangeArray);
});

/*
// Filtrar y ordenar los elementos de tipo string alfabéticamente
const filteredStrings = strangeArray.filter(element => typeof element === "string").sort();
*/