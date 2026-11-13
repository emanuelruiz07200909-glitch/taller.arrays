const baseDeDatos = [
    { nombre: "Ana Martinez", curso: "Programación Web", edad: 22 },
    { nombre: "Luis Fernando", curso: "Diseño Gráfico", edad: 25 },
    { nombre: "carlos gomez", curso: "Marketing Digital", edad: 20 },
    { nombre: "María José", curso: "Bases de Datos", edad: 28 }
];

function buscarPersona() {
    let textoBusqueda = document.getElementById("inputNombre").value.trim().toLowerCase();
    
    let cajaResultado = document.getElementById("cajaResultado");
    let datosEncontrados = document.getElementById("datosEncontrados");
    let mensajeError = document.getElementById("mensajeError");

    // Mostrar la caja principal
    cajaResultado.style.display = "block";

    let encontrado = baseDeDatos.find(persona => 
        persona.nombre.toLowerCase().includes(textoBusqueda)
    );
    
    if (encontrado && textoBusqueda !== "") {
        // Ocultar error y mostrar datos
        mensajeError.style.display = "none";
        datosEncontrados.style.display = "block";

        // Aquí es donde usamos los nuevos ID que mencionaste
        document.getElementById("textoNombre").textContent = encontrado.nombre;
        document.getElementById("textoCurso").textContent = encontrado.curso;
        document.getElementById("textoEdad").textContent = encontrado.edad + " años";
    } else {
        // Ocultar datos y mostrar error
        datosEncontrados.style.display = "none";
        mensajeError.style.display = "block";
    }
    if (textoBusqueda === "") {
        tablaResultados.style.display = "none"; 
        mensajeError.textContent = "Por favor, ingresa un nombre para buscar."; 
        mensajeError.style.display = "block"; 
        return;}
}