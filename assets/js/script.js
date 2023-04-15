$('document').ready(function () {

    $('#div-dos').html(`    <div class="container w-75">
                            <h2 class="fw-bold text-center">¡Apresúrese!</h2>
                            <p class="fs-3 mt-5">El plazo máximo para inscribirse es solo 2 días después de la siguiente fecha:</p>
                            <p class="fs-2 fw-semibold text-center mt-4">${fechaActual()}</p>
                            </div>`);

});




let fechaActual = () => {

    const fecha = new Date();
    let year = fecha.getFullYear();
    let month = fecha.getMonth() + 1;
    let day = fecha.getDay() + 9;

    if (day < 10){
        day = '0' + day;
    };
    if (month < 10){
        month = '0' + month;
    };

    return `${day}-${month}-${year}`;

};
