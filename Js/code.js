function calculo() {
    let total_cuenta = document.getElementById('total').value;
    let servicio = document.getElementById('servicio').value;
    let personas = document.getElementById('personas').value;
    let res = (servicio * total_cuenta) / personas;
    if (isNaN(res)) {
        alert('Introduce datos validos');
    } else if (personas == '' || personas == 0) {
        alert('Introduce datos validos');
    } else {
        console.log('total: ' + total_cuenta + ' servicio: ' + servicio + ' personas: ' + personas)
        console.log(res);
        document.getElementById("res").innerHTML = "<p>Total a pagar</p><h3>" + res + " euros por persona</h3>";

    }
}

function limpiarFormulario() {
    document.getElementById('total').value = '';
    document.getElementById('personas').value = '';
    document.getElementById('res').innerHTML = '';
}