// Selecciona el elemento con el id 'boton', agregandole un evento click (genera random users)
document.querySelector("#boton").addEventListener("click", genera);

// USING FETCH

function genera() {
  // Uso de una API pública con FETCH
  fetch("https://randomuser.me/api/") // url de la API
    .then((data) => data.json()) // Devuelve una promesa, y en su estado resolve convertimos la data en formato json
    .then((data) => {
      // La data esta guardada en un array de objetos
      console.log(data.results["0"]); // Obtenemos de la data obtenida el elemento 0
      let resultado = document.querySelector("#imagen"); // Captura el elemento con el id 'imagen'
      resultado.innerHTML = ""; // El elemento comenzara en blanco, asi no se repetira y se evita que se colapsen
      let resultado1 = document.querySelector("#nombre"); // Captura el elemento con el id 'nombre'
      resultado1.innerHTML = ""; // El elemento comenzara en blanco, asi no se repetira y se evita que se colapsen
      let resultado2 = document.querySelector("#apellido"); // Captura el elemento con el id 'apellido'
      resultado2.innerHTML = ""; // El elemento comenzara en blanco, asi no se repetira y se evita que se colapsen
      const name = data.results["0"].name.first; // Captura de una propiedad en especifica del array de objetos de la API
      const lastname = data.results["0"].name.last; // Captura de una propiedad en especifica del array de objetos de la API
      const picture = data.results["0"].picture.large; // Captura de una propiedad en especifica del array de objetos de la API

      document.querySelector("#nombre").innerHTML += name; // Agregamos al elemento HTML el dato en especifico (name)
      document.querySelector("#apellido").innerHTML += lastname; // Agregamos al elemento HTML el dato en especifico (lastname)
      document.querySelector(
        "#imagen"
      ).innerHTML += `<img src="${picture} " alt="" id="imagen"> `; // Agregamos al elemento HTML el dato en especifico (picture)
    });
}

// USING AJAX (HttpRequest)

/* var xhttp = new XMLHttpRequest();
let url = "https://randomuser.me/api/";
xhttp.open("GET", url, true);
xhttp.send();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let datos = JSON.parse(this.responseText);
    console.log(datos.results["0"]);

    let nombre = datos.results["0"].name.first;
    let apellido = datos.results["0"].name.last;
    let imagen = datos.results["0"].picture.large;

    let picture = document.querySelector("#imagen");
    let name = document.querySelector("#nombre");
    let lastname = document.querySelector("#apellido");
    picture.innerHTML = `<img src="${imagen} " alt="" id="img"> `;
    name.innerHTML = ` Nombre : ${nombre}`;
    lastname.innerHTML = ` Apellido : ${apellido}`;
  }
};

let resultado = document.querySelector("#nombre");
resultado.innerHTML = "";
for (let item of datos.results) {
  console.log(item.name.first);
  resultado.innerHTML += ` Nombre: ${item.name.first}`;
}
let datos = JSON.parse(this.responseText);
console.log(datos.results);
let resultado = document.querySelector("#nombre");
resultado.innerHTML = "";
for (let item of datos.results) {
  console.log(item.name.first);
  resultado.innerHTML += ` Nombre: ${item.name.first}`;
} */
