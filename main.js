var array1 = ['2', '1/0', '2/0', '4/0', '250 MCM'];
var array2 = [`5/8`];
var array3 = [`platina`];
var imagen1 = document.getElementById('img1');
imagen1.src = './imgs/Logos/PNG/Versiones logo POWERGROUND PNG-20.png';
const mapping = {
  1: array1,
  2: array1,
  3: array1,
  4: array1,
  5: array1,
  6: array1,
  7: array2,
  8: array2,
  9: array1,
  10: array1,
};
const mapping2 = {
  1: array1,
  2: array1,
  3: array1,
  4: array1,
  5: array1,
  6: array1,
  7: array1,
  8: array1,
  9: array3,
  10: array3,
};

var putArrayToSelect = (array, select) => {
  var length = select.options.length;
  for (i = length - 1; i >= 0; i--) {
    select.options[i] = null;
  }
  var option = document.createElement('option');
  option.text = 'sin seleccionar';
  option.value = '0';
  option.selected = true;
  option.disabled = true;
  select.add(option);
  for (var value in array) {
    var option = document.createElement('option');
    option.text = array[value];
    option.value = array[value];
    select.add(option);
  }
};

var unionSelection = () => {
  var imagenSeleccionada = document.getElementById('sel1').value;
  imagen1.src = `./imgs/Conexion${imagenSeleccionada}.png`;
  var principalSeleccionada = document.getElementById('sel2');
  putArrayToSelect(mapping[imagenSeleccionada], principalSeleccionada);
};
var principalSelection = () => {
  var imagenSeleccionada = document.getElementById('sel1').value;
  var principalSeleccionada = document.getElementById('sel2').value;
  var derivacion = document.getElementById('sel3');

  putArrayToSelect(
    createSecondaryArray(imagenSeleccionada, principalSeleccionada),
    derivacion
  );
};
var createSecondaryArray = (valorConexion, valorPrincipal) => {
  var array = [];
  for (var i = 0; i < resultados.length; i++) {
    if (
      resultados[i].Conexion.toString() === valorConexion.toString() &&
      resultados[i].Principal.toString() === valorPrincipal.toString()
    ) {
      array.push(resultados[i].Derivacion);
    }
  }
  return array;
};

var calcular = () => {
  var imagenSeleccionada = document.getElementById('sel1').value;
  var principalSeleccionada = document.getElementById('sel2').value;
  var derivacionSeleccionada = document.getElementById('sel3').value;
  for (var i = 0; i < resultados.length; i++) {
    if (
      resultados[i].Conexion.toString() === imagenSeleccionada.toString() &&
      resultados[i].Principal.toString() === principalSeleccionada.toString() &&
      resultados[i].Derivacion.toString() === derivacionSeleccionada.toString()
    ) {
      console.log(resultados[i].Referencia);
      console.log(resultados[i].Carga);
      document.getElementById(
        'resultsText'
      ).innerHTML = `El valor de referencia es ${resultados[i].Referencia} y la carga de soldadura es ${resultados[i].Carga} gr`;
      break;
    }
  }
};

var resultados = [
  {
    Conexion: 1,
    Principal: 2,
    Derivacion: 2,
    Referencia: 'PGSS 203',
    Carga: 65,
  },
  {
    Conexion: 1,
    Principal: '1/0',
    Derivacion: '1/0',
    Referencia: 'PGSS 205',
    Carga: 90,
  },
  {
    Conexion: 1,
    Principal: '2/0',
    Derivacion: '2/0',
    Referencia: 'PGSS 206',
    Carga: 90,
  },
  {
    Conexion: 1,
    Principal: '4/0',
    Derivacion: '4/0',
    Referencia: 'PGSS 208',
    Carga: 115,
  },
  {
    Conexion: 1,
    Principal: '250 MCM',
    Derivacion: '250 MCM',
    Referencia: 'PGSS 209',
    Carga: 115,
  },
  {
    Conexion: 2,
    Principal: 2,
    Derivacion: 2,
    Referencia: 'PGSV 1253',
    Carga: 65,
  },
  {
    Conexion: 2,
    Principal: '1/0',
    Derivacion: '1/0',
    Referencia: 'PGSV 1255',
    Carga: 65,
  },
  {
    Conexion: 2,
    Principal: '2/0',
    Derivacion: '2/0',
    Referencia: 'PGSV 1256',
    Carga: 90,
  },
  {
    Conexion: 2,
    Principal: '4/0',
    Derivacion: '4/0',
    Referencia: 'PGSV 1258',
    Carga: 90,
  },
  {
    Conexion: 2,
    Principal: '250 MCM',
    Derivacion: '250 MCM',
    Referencia: 'PGSV 1259',
    Carga: 115,
  },
  {
    Conexion: 3,
    Principal: 2,
    Derivacion: 2,
    Referencia: 'PGTAS 223',
    Carga: 65,
  },
  {
    Conexion: 3,
    Principal: '1/0',
    Derivacion: '1/0',
    Referencia: 'PGTAS 228',
    Carga: 90,
  },
  {
    Conexion: 3,
    Principal: '1/0',
    Derivacion: 2,
    Referencia: 'PGTAS 230',
    Carga: 65,
  },
  {
    Conexion: 3,
    Principal: '2/0',
    Derivacion: '2/0',
    Referencia: 'PGTAS 232',
    Carga: 90,
  },
  {
    Conexion: 3,
    Principal: '2/0',
    Derivacion: '1/0',
    Referencia: 'PGTAS 233',
    Carga: 90,
  },
  {
    Conexion: 3,
    Principal: '2/0',
    Derivacion: 2,
    Referencia: 'PGTAS 235',
    Carga: 65,
  },
  {
    Conexion: 3,
    Principal: '2/0',
    Derivacion: '4/0',
    Referencia: 'PGTAS 5476',
    Carga: 90,
  },
  {
    Conexion: 3,
    Principal: '4/0',
    Derivacion: '4/0',
    Referencia: 'PGTAS 241',
    Carga: 150,
  },
  {
    Conexion: 3,
    Principal: '4/0',
    Derivacion: '2/0',
    Referencia: 'PGTAS 243',
    Carga: 90,
  },
  {
    Conexion: 3,
    Principal: '4/0',
    Derivacion: '1/0',
    Referencia: 'PGTAS 244',
    Carga: 90,
  },
  {
    Conexion: 3,
    Principal: '4/0',
    Derivacion: 2,
    Referencia: 'PGTAS 246',
    Carga: 90,
  },
  {
    Conexion: 3,
    Principal: '250 MCM',
    Derivacion: '250 MCM',
    Referencia: 'PGTAS 247',
    Carga: 150,
  },
  {
    Conexion: 3,
    Principal: '250 MCM',
    Derivacion: '4/0',
    Referencia: 'PGTAS 248',
    Carga: 150,
  },
  {
    Conexion: 3,
    Principal: '250 MCM',
    Derivacion: '2/0',
    Referencia: 'PGTAS 250',
    Carga: 90,
  },
  {
    Conexion: 3,
    Principal: '250 MCM',
    Derivacion: '1/0',
    Referencia: 'PGTAS 251',
    Carga: 90,
  },
  {
    Conexion: 3,
    Principal: '250 MCM',
    Derivacion: 2,
    Referencia: 'PGTAS 253',
    Carga: 90,
  },
  {
    Conexion: 4,
    Principal: 2,
    Derivacion: 2,
    Referencia: 'PGPTS 1313',
    Carga: 65,
  },
  {
    Conexion: 4,
    Principal: '1/0',
    Derivacion: '1/0',
    Referencia: 'PGPTS 1318',
    Carga: 90,
  },
  {
    Conexion: 4,
    Principal: '1/0',
    Derivacion: 2,
    Referencia: 'PGPTS 1320',
    Carga: 90,
  },
  {
    Conexion: 4,
    Principal: '2/0',
    Derivacion: '2/0',
    Referencia: 'PGPTS 1322',
    Carga: 115,
  },
  {
    Conexion: 4,
    Principal: '2/0',
    Derivacion: '1/0',
    Referencia: 'PGPTS 1323',
    Carga: 115,
  },
  {
    Conexion: 4,
    Principal: '2/0',
    Derivacion: 2,
    Referencia: 'PGPTS 1325',
    Carga: 90,
  },
  {
    Conexion: 4,
    Principal: '4/0',
    Derivacion: '4/0',
    Referencia: 'PGPTS 1331',
    Carga: 200,
  },
  {
    Conexion: 4,
    Principal: '4/0',
    Derivacion: '2/0',
    Referencia: 'PGPTS 1333',
    Carga: 150,
  },
  {
    Conexion: 4,
    Principal: '4/0',
    Derivacion: '1/0',
    Referencia: 'PGPTS 1334',
    Carga: 150,
  },
  {
    Conexion: 4,
    Principal: '4/0',
    Derivacion: 2,
    Referencia: 'PGPTS 1336',
    Carga: 150,
  },
  {
    Conexion: 4,
    Principal: '250 MCM',
    Derivacion: '250 MCM',
    Referencia: 'PGPTS 1337',
    Carga: 250,
  },
  {
    Conexion: 4,
    Principal: '250 MCM',
    Derivacion: '4/0',
    Referencia: 'PGPTS 1338',
    Carga: 200,
  },
  {
    Conexion: 4,
    Principal: '250 MCM',
    Derivacion: '2/0',
    Referencia: 'PGPTS 1340',
    Carga: 150,
  },
  {
    Conexion: 4,
    Principal: '250 MCM',
    Derivacion: '1/0',
    Referencia: 'PGPTS 1341',
    Carga: 150,
  },
  {
    Conexion: 4,
    Principal: '250 MCM',
    Derivacion: 2,
    Referencia: 'PGPTS 1343',
    Carga: 150,
  },
  {
    Conexion: 5,
    Principal: 2,
    Derivacion: 2,
    Referencia: 'PGXAS 425',
    Carga: 65,
  },
  {
    Conexion: 5,
    Principal: '1/0',
    Derivacion: '1/0',
    Referencia: 'PGXAS 430',
    Carga: 90,
  },
  {
    Conexion: 5,
    Principal: '1/0',
    Derivacion: 2,
    Referencia: 'PGXAS 432',
    Carga: 65,
  },
  {
    Conexion: 5,
    Principal: '2/0',
    Derivacion: '2/0',
    Referencia: 'PGXAS 434',
    Carga: 90,
  },
  {
    Conexion: 5,
    Principal: '2/0',
    Derivacion: '1/0',
    Referencia: 'PGXAS 435',
    Carga: 90,
  },
  {
    Conexion: 5,
    Principal: '2/0',
    Derivacion: 2,
    Referencia: 'PGXAS 437',
    Carga: 65,
  },
  {
    Conexion: 5,
    Principal: '4/0',
    Derivacion: '4/0',
    Referencia: 'PGXAS 443',
    Carga: 90,
  },
  {
    Conexion: 5,
    Principal: '4/0',
    Derivacion: '2/0',
    Referencia: 'PGXAS 445',
    Carga: 90,
  },
  {
    Conexion: 5,
    Principal: '4/0',
    Derivacion: '1/0',
    Referencia: 'PGXAS 446',
    Carga: 150,
  },
  {
    Conexion: 5,
    Principal: '4/0',
    Derivacion: 2,
    Referencia: 'PGXAS 448',
    Carga: 90,
  },
  {
    Conexion: 5,
    Principal: '250 MCM',
    Derivacion: '250 MCM',
    Referencia: 'PGXAS 449',
    Carga: 90,
  },
  {
    Conexion: 5,
    Principal: '250 MCM',
    Derivacion: '4/0',
    Referencia: 'PGXAS 450',
    Carga: 90,
  },
  {
    Conexion: 5,
    Principal: '250 MCM',
    Derivacion: '2/0',
    Referencia: 'PGXAS 452',
    Carga: 90,
  },
  {
    Conexion: 5,
    Principal: '250 MCM',
    Derivacion: '1/0',
    Referencia: 'PGXAS 453',
    Carga: 150,
  },
  {
    Conexion: 5,
    Principal: '250 MCM',
    Derivacion: 2,
    Referencia: 'PGXAS 455',
    Carga: 150,
  },
  {
    Conexion: 6,
    Principal: 2,
    Derivacion: 2,
    Referencia: 'PGXBL 2689',
    Carga: 90,
  },
  {
    Conexion: 6,
    Principal: '1/0',
    Derivacion: '1/0',
    Referencia: 'PGXBL 2694',
    Carga: 150,
  },
  {
    Conexion: 6,
    Principal: '1/0',
    Derivacion: 2,
    Referencia: 'PGXBL 2696',
    Carga: 115,
  },
  {
    Conexion: 6,
    Principal: '2/0',
    Derivacion: '2/0',
    Referencia: 'PGXBL 2698',
    Carga: 200,
  },
  {
    Conexion: 6,
    Principal: '2/0',
    Derivacion: '1/0',
    Referencia: 'PGXBL 2699',
    Carga: 200,
  },
  {
    Conexion: 6,
    Principal: '2/0',
    Derivacion: 2,
    Referencia: 'PGXBL 2701',
    Carga: 150,
  },
  {
    Conexion: 6,
    Principal: '4/0',
    Derivacion: '4/0',
    Referencia: 'PGXBL 2707',
    Carga: 250,
  },
  {
    Conexion: 6,
    Principal: '4/0',
    Derivacion: '2/0',
    Referencia: 'PGXBL 2709',
    Carga: 200,
  },
  {
    Conexion: 6,
    Principal: '4/0',
    Derivacion: '1/0',
    Referencia: 'PGXBL 2710',
    Carga: 200,
  },
  {
    Conexion: 6,
    Principal: '4/0',
    Derivacion: 2,
    Referencia: 'PGXBL 2712',
    Carga: 150,
  },
  {
    Conexion: 6,
    Principal: '250 MCM',
    Derivacion: '250 MCM',
    Referencia: 'PGXBL 2713',
    Carga: '2-150',
  },
  {
    Conexion: 6,
    Principal: '250 MCM',
    Derivacion: '4/0',
    Referencia: 'PGXBL 2714',
    Carga: '2-150',
  },
  {
    Conexion: 6,
    Principal: '250 MCM',
    Derivacion: '2/0',
    Referencia: 'PGXBL 2716',
    Carga: 250,
  },
  {
    Conexion: 6,
    Principal: '250 MCM',
    Derivacion: '1/0',
    Referencia: 'PGXBL 2717',
    Carga: 250,
  },
  {
    Conexion: 6,
    Principal: '250 MCM',
    Derivacion: 2,
    Referencia: 'PGXBL 2719',
    Carga: 150,
  },
  {
    Conexion: 7,
    Principal: '5/8',
    Derivacion: 2,
    Referencia: 'PGGRS 503',
    Carga: 90,
  },
  {
    Conexion: 7,
    Principal: '5/8',
    Derivacion: '1/0',
    Referencia: 'PGGRS 505',
    Carga: 90,
  },
  {
    Conexion: 7,
    Principal: '5/8',
    Derivacion: '2/0',
    Referencia: 'PGGRS 506',
    Carga: 90,
  },
  {
    Conexion: 7,
    Principal: '5/8',
    Derivacion: '4/0',
    Referencia: 'PGGRS 508',
    Carga: 90,
  },
  {
    Conexion: 7,
    Principal: '5/8',
    Derivacion: '250 MCM',
    Referencia: 'PGGRS 509',
    Carga: 115,
  },
  {
    Conexion: 8,
    Principal: '5/8 ',
    Derivacion: 2,
    Referencia: 'PGGTS 545',
    Carga: 90,
  },
  {
    Conexion: 8,
    Principal: '5/8',
    Derivacion: '1/0',
    Referencia: 'PGGTS 547',
    Carga: 90,
  },
  {
    Conexion: 8,
    Principal: '5/8',
    Derivacion: '2/0',
    Referencia: 'PGGTS 548',
    Carga: 115,
  },
  {
    Conexion: 8,
    Principal: '5/8',
    Derivacion: '4/0',
    Referencia: 'PGGTS 550',
    Carga: 115,
  },
  {
    Conexion: 8,
    Principal: '5/8',
    Derivacion: '250 MCM',
    Referencia: 'PGGTS 551',
    Carga: 150,
  },
  {
    Conexion: 9,
    Principal: 2,
    Derivacion: 'PLATINA',
    Referencia: 'PGHA 630',
    Carga: 65,
  },
  {
    Conexion: 9,
    Principal: '1/0',
    Derivacion: 'PLATINA',
    Referencia: 'PGHA 7146',
    Carga: 90,
  },
  {
    Conexion: 9,
    Principal: '2/0',
    Derivacion: 'PLATINA',
    Referencia: 'PGHA 7075',
    Carga: 90,
  },
  {
    Conexion: 9,
    Principal: '4/0',
    Derivacion: 'PLATINA',
    Referencia: 'PGHA 6114',
    Carga: 115,
  },
  {
    Conexion: 9,
    Principal: '250 MCM',
    Derivacion: 'PLATINA',
    Referencia: 'PGHA 2200',
    Carga: 115,
  },
  {
    Conexion: 10,
    Principal: 2,
    Derivacion: 'PLATINA',
    Referencia: 'PGVV 1218',
    Carga: 115,
  },
  {
    Conexion: 10,
    Principal: '1/0',
    Derivacion: 'PLATINA',
    Referencia: 'PGVV 1220',
    Carga: 200,
  },
  {
    Conexion: 10,
    Principal: '2/0',
    Derivacion: 'PLATINA',
    Referencia: 'PGVV 1221',
    Carga: 200,
  },
  {
    Conexion: 10,
    Principal: '4/0',
    Derivacion: 'PLATINA',
    Referencia: 'PGVV 1223',
    Carga: 250,
  },
  {
    Conexion: 10,
    Principal: '250 MCM',
    Derivacion: 'PLATINA',
    Referencia: 'PGVV 1224',
    Carga: 250,
  },
];
