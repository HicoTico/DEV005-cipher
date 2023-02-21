import cipher from './cipher.js';

//off etiqueta section
document.getElementById('getPass').style.display = 'none';
document.getElementById('getOffPass').style.display = 'none';

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
  const resultado = cipher.encode(texto, parseInt(offset))
  alert('! E X C E L E N T E ! \n ...ya tienes tu CyPHER Pass \n' + resultado);
});

document.getElementById('datoUsuariooff').addEventListener('keyup', function () {
  this.value = this.value.toUpperCase();
});

document.getElementById('descifrar').addEventListener('click', function () {
  const offset = document.getElementById('rangoOff').value;
  const texto = document.getElementById('datoUsuariooff').value;
  const resultado = cipher.decode(texto, parseInt(offset))
  //console.log ('resultado decode ' + resultado)
  alert('! E X C E L E N T E !\n ' + resultado);
});

document.getElementById('otroCypher').addEventListener('click', function () {
  history.go();
});

document.getElementById('otroCypher2').addEventListener('click', function () {
  history.go();
});


