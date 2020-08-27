const inputName = document.getElementById("inputName")
const inputApellido = document.getElementById("inputApellido")

const nombreMensaje = document.getElementById("nombreMensaje")

console.log(nombreMensaje);

function validarFormulario(event) {
    event.preventDefault()
    if (inputName.value == "") {
        swal("Error!", "You clicked the button!", "error");
        inputName.classList.add('alert');
        nombreMensaje.innerText = 'Llene el campo por favor';

        inputName.placeholder = 'Ej.Pepito Perez';

    }


    if (inputApellido.value == "") {
        inputApellido.classList.add('alert');
        nombreMensaje.innerText = 'Llene el campo por favor';

        inputName.placeholder = 'Ej.Pepito Perez';

    }

    if (inputName.value != "" && inputApellido.value != "") {
        swal("Good job!", "You clicked the button!", "success");
        setTimeout(() => {
            window.location = "./calculadora.html"
        }, 2000);

    }

}