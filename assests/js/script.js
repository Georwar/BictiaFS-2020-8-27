const inputName = document.getElementById("inputName");
const inputApellido = document.getElementById("inputApellido");
const inputCorreo = document.getElementById("inputCorreo");
const inputPassword = document.getElementById("inputPassword");
const inputCelular = document.getElementById("inputCelular");





function validarFormulario(event) {
    event.preventDefault()
    if (inputName.value == "") {
        swal("Error!", "You clicked the button!", "error");
        inputName.classList.add('alert');

        inputName.placeholder = 'Ej.Pepito, Juan, Rosario , etc';

    }


    if (inputApellido.value == "") {
        swal("Error!", "You clicked the button!", "error");
        inputApellido.classList.add('alert');

        inputApellido.placeholder = 'Ej. Perez, Fontecha , Rincon , Etc';

    }

    if (inputCorreo.value == "") {
        swal("Error!", "You clicked the button!", "error");
        inputCorreo.classList.add('alert');


        inputCorreo.placeholder = 'Ej.pepito.perez@dominio.com';

    }
    if (inputPassword.value == "") {
        swal("Error!", "You clicked the button!", "error");
        inputPassword.classList.add('alert');


        inputPassword.placeholder = 'Ej.P3p1t0123*';

    }
    if (inputCelular.value == "") {
        swal("Error!", "You clicked the button!", "error");
        inputCelular.classList.add('alert');


        inputCelular.placeholder = 'Ej.301xxxxxx';

    }

    if (inputName.value != "" && inputApellido.value != "" && inputCorreo.value != "" && inputPassword.value != "" && inputCelular.value != "") {
        swal("Good job!", "You clicked the button!", "success");
        setTimeout(() => {
            window.location = "./calculadora.html"
        }, 2000);

    }

}