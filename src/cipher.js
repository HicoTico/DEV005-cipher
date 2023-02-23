const cipher = {
  encode: function (texto, offset) {
    if (typeof texto !== 'string' || typeof offset !== 'number') {
      throw new TypeError('Argumentos son Invalidos');
    }

    //Definir variable para obtener mensajeEncode.
    let mensajeEncode = '';

    //Definir condiciones para texto ingresado y crear ciclo
    for (let i = 0; i < texto.length; i++) {

      const codAscii = texto.charCodeAt(i);
      const codOffset = parseFloat(codAscii) + parseFloat(offset);


      // Condicionales para el Algoritmo de enCode
      const letraMayusculabtw = codOffset >= 65 && codOffset <= 90;
      const letraMayusculafwd = codOffset >= 90;

      if (letraMayusculabtw) {
        const algoritmodeCifradobtw = codOffset;
        const letraCifradabtw = String.fromCharCode(algoritmodeCifradobtw);
        mensajeEncode += letraCifradabtw;
      } else if (letraMayusculafwd) {
        const algoritmoCifradofwd = ((codOffset - 65) % 26) + 65;
        const letraCifradafwd = String.fromCharCode(algoritmoCifradofwd);
        mensajeEncode += letraCifradafwd;
      } else {
        mensajeEncode += texto[i];
      }
    }
    return mensajeEncode;
  },

  decode: function (texto, offset) {
    if (typeof texto !== 'string' || typeof offset !== 'number') {
      throw new TypeError('Argumentos son Invalidos');
    }
    //Definir variable para obtener mensajeEncode.
    let mensajeDecode = '';

    //Definir condiciones para texto ingresado y crear ciclo
    for (let i = 0; i < texto.length; i++) {

      const codAscii = texto.charCodeAt(i);
      const codOffset = parseFloat(codAscii) - parseFloat(offset);


      // Condicionales para el Algoritmo de enCode
      const letraDesmayusculabtw = codOffset >= 65 && codOffset <= 90;
      const letraDesmayusculafwd = codOffset <= 65;

      if (letraDesmayusculabtw) {
        const algoritmoDescifradobtw = codOffset;
        const letraDescifradabtw = String.fromCharCode(algoritmoDescifradobtw);
        mensajeDecode += letraDescifradabtw;
      } else if (letraDesmayusculafwd) {
        const algoritmoDescifradofwd = ((codOffset + 65) % 26) + 65;
        const letraDescifradafwd = String.fromCharCode(algoritmoDescifradofwd);
        mensajeDecode += letraDescifradafwd;
      } else {
        mensajeDecode += texto[i];
      }
    }
    return mensajeDecode;
  }

}

export default cipher;