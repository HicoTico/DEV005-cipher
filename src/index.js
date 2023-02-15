import cipher from './cipher.js';

console.log(cipher);

//off etiqueta section
document.getElementById("getPass").style.display = "none";
document.getElementById("getOffPass").style.display = "none";

//listener de botones header inicio
document.getElementById("goGenerar").addEventListener("click", function () {
    document.getElementById("getPass").style.display = "block";
    document.getElementById("inicio").style.display = "none";
})

document.getElementById("goDescifrar").addEventListener("click", function () {
    document.getElementById("getOffPass").style.display = "block";
    document.getElementById("inicio").style.display = "none";
})

//listener de botones section
document.getElementById("generar").addEventListener("click", function () {
    alert("! E X C E L E N T E !,\n...ya tienes tu CyPHER Pass");
});
document.getElementById("descifrar").addEventListener("click", function () {
    alert("! E X C E L E N T E !");
});

document.getElementById("otroCypher").addEventListener("click", function () {
    history.go();
});
document.getElementById("otroCypher2").addEventListener("click", function () {
    history.go();
});

