const suma = document.getElementById("suma"); /* Llamdo del boton */
const resta = document.getElementById("resta"); /* Llamdo del boton */
const multiplicacion = document.getElementById("multiplicacion"); /* Llamdo del boton */
const division = document.getElementById("division"); /* Llamdo del boton */




suma.addEventListener("click", () => {



    let num1 = parseFloat(document.getElementById("num1").value); /* trea y almacena el valor del input */
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        swal("Error!", "Debes ingresar un número!", "error");
        console.log(num1)
    } else {

        let respuesta = document.getElementById("respuesta");

        let resultado = (num1 + num2);

        respuesta.innerHTML = "<i>" + resultado + "</i>";

        console.log(suma.id);
    }
});

resta.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value); /* trea y almacena el valor del input */
    let num2 = parseFloat(document.getElementById("num2").value);


    if (isNaN(num1) || isNaN(num2)) {
        swal("Error!", "Debes ingresar un número!", "error");
        console.log(num1)
    } else {

        let respuesta = document.getElementById("respuesta");

        let resultado = (num1 - num2);

        respuesta.innerHTML = "<i>" + resultado + "</i>";

        console.log(suma.id);
    }
});

multiplicacion.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value); /* trea y almacena el valor del input */
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        swal("Error!", "Debes ingresar un número!", "error");
        console.log(num1)
    } else {

        let respuesta = document.getElementById("respuesta");

        let resultado = (num1 * num2);

        respuesta.innerHTML = "<i>" + resultado + "</i>";

        console.log(suma.id);
    }
});

division.addEventListener("click", () => {
    let num1 = parseFloat(document.getElementById("num1").value); /* trea y almacena el valor del input */
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        swal("Error!", "Debes ingresar un número!", "error");
        console.log(num1)
    } else {

        let respuesta = document.getElementById("respuesta");

        let resultado = (num1 / num2);

        respuesta.innerHTML = "<i>" + resultado + "</i>";

        console.log(suma.id);
    }
});