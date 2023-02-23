import cipher from './cipher.js';

//off etiqueta section
document.getElementById('getPass').style.display = 'none';
document.getElementById('getOffPass').style.display = 'none';
document.getElementById('p2').style.visibility = 'hidden';
document.getElementById('p3').style.visibility = 'hidden';

//listener botones header inicio
document.getElementById('goGenerar').addEventListener('click', function () {
  document.getElementById('getPass').style.display = 'block';
  document.getElementById('inicio').style.display = 'none';
})

document.getElementById('goDescifrar').addEventListener('click', function () {
  document.getElementById('getOffPass').style.display = 'block';
  document.getElementById('inicio').style.display = 'none';
})


//listener de botones section y recoleccion de datos
document.getElementById('datoUsuario').addEventListener('keyup', function () {
  this.value = this.value.toUpperCase();
});

document.getElementById('get').addEventListener('click', function () {
  const offset = document.getElementById('rango').value;
  const texto = document.getElementById('datoUsuario').value;
  const resultado = cipher.encode(parseInt(offset),texto)
  document.getElementById('gotPass').value = resultado;
  document.getElementById('p2').style.visibility = 'visible';
});

document.getElementById('datoUsuariooff').addEventListener('keyup', function () {
  this.value = this.value.toUpperCase();
});

document.getElementById('descifrar').addEventListener('click', function () {
  document.getElementById('p3').style.display = 'block';
  const offset = document.getElementById('rangoOff').value;
  const texto = document.getElementById('datoUsuariooff').value;
  const resultado = cipher.decode(parseInt(offset),texto)
  document.getElementById('gotOffpass').value = resultado;
  document.getElementById('p3').style.visibility = 'visible';
});

document.getElementById('otroCypher').addEventListener('click', function () {
  history.go();
});

document.getElementById('otroCypher2').addEventListener('click', function () {
  history.go();
});


