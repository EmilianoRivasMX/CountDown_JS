var index = 0;
var unamOn = document.getElementById('switch');

unamOn.addEventListener('click', () => {

    if (unamOn.checked == true) {
        document.getElementById('titulo').innerHTML = 'Regreso a clases UNAM 2020';

        particulasUNAM();
        borrarIPN();
        cuentaUNAM();
    }
    else
        if (unamOn.checked == false) {
            if (index <= 2) {
                document.getElementById('titulo').innerHTML = 'Regreso a clases IPN 2020';

                borrarUNAM();
                porDefecto();

                index++;
            }
            else {
                location.reload(true);
                index = 0;
            }
        }
        else
            alert('Hubo un error con el programa');
})            
