import cipher from './cipher.js';

console.log(cipher);
//Prueba de funcion de botones
document.getElementById("generar").addeventlistener("click", function () {
    alert("mensaje cifrado");
});
document.getElementById("descifrar").addeventlistener("click", function () {
    alert("mensaje descifrado");
});

