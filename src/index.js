import cipher from './cipher.js';

console.log(cipher);

document.getElementById("getOffPass").style.display = "none";

//document.getElementById("ingreseAqui").addEventListener("click", function () style.display("getOffPass");});
//datos placeholder
//var datoImportante = document.getElementById("datoUsuario").value;
//var dato1 = datoImportante.charCodeAt(2);
//console.log (dato1);

//listener de botones
document.getElementById("generar").addEventListener("click", function () 
{alert("mensaje cifrado");
document.getElementById("getOffPass").style.display = "block";
document.getElementById("getPass").style.display = "none";
});

document.getElementById("descifrar").addEventListener("click", function () 
{alert("mensaje descifrado");
});

document.getElementById("otroCypher").addEventListener("click", function () 
{history.go();
});


