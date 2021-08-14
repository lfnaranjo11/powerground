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
  option.selected = 'selected';
  option.disabled = true;
  select.add(option);
  for (var value in array) {
    var option = document.createElement('option');
    option.text = array[value];
    option.value = array[value];
    select.add(option);
  }
};
var clearSelect = (select) => {
  var length = select.options.length;
  for (i = length - 1; i >= 0; i--) {
    select.options[i] = null;
  }
};

/*union*/
var unionSelection = () => {
  var imagenSeleccionada = document.getElementById('sel1').value;
  imagen1.src = `./imgs/Conexion${imagenSeleccionada}.png`;
  var principalSeleccionada = document.getElementById('sel2');
  var secondarySelect = document.getElementById('sel3');
  clearSelect(secondarySelect);
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
var toStore = () => {
  var imagenSeleccionada = document.getElementById('sel1').value;
  var principalSeleccionada = document.getElementById('sel2').value;
  var derivacionSeleccionada = document.getElementById('sel3').value;
  var imagen2= document.getElementById('img2');

  for (var i = 0; i < resultados.length; i++) {
    if (
      resultados[i].Conexion.toString() === imagenSeleccionada.toString() &&
      resultados[i].Principal.toString() === principalSeleccionada.toString() &&
      resultados[i].Derivacion.toString() === derivacionSeleccionada.toString()
    ) {
      imagen2.src = `./imgs/Molde.png`;
      top.location.href = resultados[i].link;
    } else {
      //location.href = 'http://www.powerground.com.co/';
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
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-horizontal-cable-cable-pgss-203',
  },
  {
    Conexion: 1,
    Principal: '1/0',
    Derivacion: '1/0',
    Referencia: 'PGSS 205',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-horizontal-cable-cable-pgss-205',
  },
  {
    Conexion: 1,
    Principal: '2/0',
    Derivacion: '2/0',
    Referencia: 'PGSS 206',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-horizontal-cable-cable-pgss-206',
  },
  {
    Conexion: 1,
    Principal: '4/0',
    Derivacion: '4/0',
    Referencia: 'PGSS 208',
    Carga: 115,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-horizontal-cable-cable-pgss-208',
  },
  {
    Conexion: 1,
    Principal: '250 MCM',
    Derivacion: '250 MCM',
    Referencia: 'PGSS 209',
    Carga: 115,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-horizontal-cable-cable-pgss-209',
  },
  {
    Conexion: 2,
    Principal: 2,
    Derivacion: 2,
    Referencia: 'PGSV 1253',
    Carga: 65,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-vertical-cable-cable-pgsv-1253',
  },
  {
    Conexion: 2,
    Principal: '1/0',
    Derivacion: '1/0',
    Referencia: 'PGSV 1255',
    Carga: 65,
    link:
      'https://www.powerground.com.co/product-page/pgsv-1255-molde-para-union-vertical-cable-cable',
  },
  {
    Conexion: 2,
    Principal: '2/0',
    Derivacion: '2/0',
    Referencia: 'PGSV 1256',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgsv-1256-molde-para-union-vertical-cable-cable',
  },
  {
    Conexion: 2,
    Principal: '4/0',
    Derivacion: '4/0',
    Referencia: 'PGSV 1258',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgsv-1258-molde-para-union-vertical-cable-cable',
  },
  {
    Conexion: 2,
    Principal: '250 MCM',
    Derivacion: '250 MCM',
    Referencia: 'PGSV 1259',
    Carga: 115,
    link:
      'https://www.powerground.com.co/product-page/pgsv-1259-molde-para-union-vertical-cable-cable',
  },
  {
    Conexion: 3,
    Principal: 2,
    Derivacion: 2,
    Referencia: 'PGTAS 223',
    Carga: 65,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-223',
  },
  {
    Conexion: 3,
    Principal: '1/0',
    Derivacion: '1/0',
    Referencia: 'PGTAS 228',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-228',
  },
  {
    Conexion: 3,
    Principal: '1/0',
    Derivacion: 2,
    Referencia: 'PGTAS 230',
    Carga: 65,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-230',
  },
  {
    Conexion: 3,
    Principal: '2/0',
    Derivacion: '2/0',
    Referencia: 'PGTAS 232',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-232',
  },
  {
    Conexion: 3,
    Principal: '2/0',
    Derivacion: '1/0',
    Referencia: 'PGTAS 233',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-233',
  },
  {
    Conexion: 3,
    Principal: '2/0',
    Derivacion: 2,
    Referencia: 'PGTAS 235',
    Carga: 65,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-235',
  },
  {
    Conexion: 3,
    Principal: '2/0',
    Derivacion: '4/0',
    Referencia: 'PGTAS 5476',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-5476',
  },
  {
    Conexion: 3,
    Principal: '4/0',
    Derivacion: '4/0',
    Referencia: 'PGTAS 241',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-241',
  },
  {
    Conexion: 3,
    Principal: '4/0',
    Derivacion: '2/0',
    Referencia: 'PGTAS 243',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-243',
  },
  {
    Conexion: 3,
    Principal: '4/0',
    Derivacion: '1/0',
    Referencia: 'PGTAS 244',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-244',
  },
  {
    Conexion: 3,
    Principal: '4/0',
    Derivacion: 2,
    Referencia: 'PGTAS 246',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-246',
  },
  {
    Conexion: 3,
    Principal: '250 MCM',
    Derivacion: '250 MCM',
    Referencia: 'PGTAS 247',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-247',
  },
  {
    Conexion: 3,
    Principal: '250 MCM',
    Derivacion: '4/0',
    Referencia: 'PGTAS 248',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-248',
  },
  {
    Conexion: 3,
    Principal: '250 MCM',
    Derivacion: '2/0',
    Referencia: 'PGTAS 250',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-250',
  },
  {
    Conexion: 3,
    Principal: '250 MCM',
    Derivacion: '1/0',
    Referencia: 'PGTAS 251',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-251',
  },
  {
    Conexion: 3,
    Principal: '250 MCM',
    Derivacion: 2,
    Referencia: 'PGTAS 253',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-en-t-horizontal-pgtas-253',
  },
  {
    Conexion: 4,
    Principal: 2,
    Derivacion: 2,
    Referencia: 'PGPTS 1313',
    Carga: 65,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1313-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '1/0',
    Derivacion: '1/0',
    Referencia: 'PGPTS 1318',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1318-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '1/0',
    Derivacion: 2,
    Referencia: 'PGPTS 1320',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1320-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '2/0',
    Derivacion: '2/0',
    Referencia: 'PGPTS 1322',
    Carga: 115,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1322-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '2/0',
    Derivacion: '1/0',
    Referencia: 'PGPTS 1323',
    Carga: 115,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1323-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '2/0',
    Derivacion: 2,
    Referencia: 'PGPTS 1325',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1325-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '4/0',
    Derivacion: '4/0',
    Referencia: 'PGPTS 1331',
    Carga: 200,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1331-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '4/0',
    Derivacion: '2/0',
    Referencia: 'PGPTS 1333',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1333-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '4/0',
    Derivacion: '1/0',
    Referencia: 'PGPTS 1334',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1334-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '4/0',
    Derivacion: 2,
    Referencia: 'PGPTS 1336',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1336-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '250 MCM',
    Derivacion: '250 MCM',
    Referencia: 'PGPTS 1337',
    Carga: 250,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1337-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '250 MCM',
    Derivacion: '4/0',
    Referencia: 'PGPTS 1338',
    Carga: 200,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1338-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '250 MCM',
    Derivacion: '2/0',
    Referencia: 'PGPTS 1340',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1340-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '250 MCM',
    Derivacion: '1/0',
    Referencia: 'PGPTS 1341',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1341molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 4,
    Principal: '250 MCM',
    Derivacion: 2,
    Referencia: 'PGPTS 1343',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/pgpts-1343-molde-para-union-horizontal-paralelo-cable-cable',
  },
  {
    Conexion: 5,
    Principal: 2,
    Derivacion: 2,
    Referencia: 'PGXAS 425',
    Carga: 65,
    link:
      'https://www.powerground.com.co/product-page/pgxas-425-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '1/0',
    Derivacion: '1/0',
    Referencia: 'PGXAS 430',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgxas-430-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '1/0',
    Derivacion: 2,
    Referencia: 'PGXAS 432',
    Carga: 65,
    link:
      'https://www.powerground.com.co/product-page/pgxas-432-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '2/0',
    Derivacion: '2/0',
    Referencia: 'PGXAS 434',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgxas-434-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '2/0',
    Derivacion: '1/0',
    Referencia: 'PGXAS 435',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgxas-435-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '2/0',
    Derivacion: 2,
    Referencia: 'PGXAS 437',
    Carga: 65,
    link:
      'https://www.powerground.com.co/product-page/pgxas-437-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '4/0',
    Derivacion: '4/0',
    Referencia: 'PGXAS 443',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgxas-443-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '4/0',
    Derivacion: '2/0',
    Referencia: 'PGXAS 445',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgxas-445-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '4/0',
    Derivacion: '1/0',
    Referencia: 'PGXAS 446',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/pgxas-446-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '4/0',
    Derivacion: 2,
    Referencia: 'PGXAS 448',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgxas-448-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '250 MCM',
    Derivacion: '250 MCM',
    Referencia: 'PGXAS 449',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgxas-449-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '250 MCM',
    Derivacion: '4/0',
    Referencia: 'PGXAS 450',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgxas-450-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '250 MCM',
    Derivacion: '2/0',
    Referencia: 'PGXAS 452',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgxas-452-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '250 MCM',
    Derivacion: '1/0',
    Referencia: 'PGXAS 453',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/pgxas-453-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 5,
    Principal: '250 MCM',
    Derivacion: 2,
    Referencia: 'PGXAS 455',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/pgxas-455-molde-para-union-en-x-horizontal-cables-cortados',
  },
  {
    Conexion: 6,
    Principal: 2,
    Derivacion: 2,
    Referencia: 'PGXBL 2689',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2689-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '1/0',
    Derivacion: '1/0',
    Referencia: 'PGXBL 2694',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2694-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '1/0',
    Derivacion: 2,
    Referencia: 'PGXBL 2696',
    Carga: 115,
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2696-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '2/0',
    Derivacion: '2/0',
    Referencia: 'PGXBL 2698',
    Carga: 200,
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2698-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '2/0',
    Derivacion: '1/0',
    Referencia: 'PGXBL 2699',
    Carga: 200,
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2699-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '2/0',
    Derivacion: 2,
    Referencia: 'PGXBL 2701',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2701-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '4/0',
    Derivacion: '4/0',
    Referencia: 'PGXBL 2707',
    Carga: 250,
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2707-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '4/0',
    Derivacion: '2/0',
    Referencia: 'PGXBL 2709',
    Carga: 200,
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2709-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '4/0',
    Derivacion: '1/0',
    Referencia: 'PGXBL 2710',
    Carga: 200,
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2710-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '4/0',
    Derivacion: 2,
    Referencia: 'PGXBL 2712',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2712-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '250 MCM',
    Derivacion: '250 MCM',
    Referencia: 'PGXBL 2713',
    Carga: '2-150',
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2713-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '250 MCM',
    Derivacion: '4/0',
    Referencia: 'PGXBL 2714',
    Carga: '2-150',
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2714-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '250 MCM',
    Derivacion: '2/0',
    Referencia: 'PGXBL 2716',
    Carga: 250,
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2716-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '250 MCM',
    Derivacion: '1/0',
    Referencia: 'PGXBL 2717',
    Carga: 250,
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2717-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 6,
    Principal: '250 MCM',
    Derivacion: 2,
    Referencia: 'PGXBL 2719',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/pgxbl-2719-molde-para-union-en-x-horizontal-pasante-cable-cable',
  },
  {
    Conexion: 7,
    Principal: '5/8',
    Derivacion: 2,
    Referencia: 'PGGRS 503',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pggrs-503-molde-para-union-varilla-terminal-cable-terminal',
  },
  {
    Conexion: 7,
    Principal: '5/8',
    Derivacion: '1/0',
    Referencia: 'PGGRS 505',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pggrs-505-molde-para-union-varilla-terminal-cable-terminal',
  },
  {
    Conexion: 7,
    Principal: '5/8',
    Derivacion: '2/0',
    Referencia: 'PGGRS 506',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pggrs-506-molde-para-union-varilla-terminal-cable-terminal',
  },
  {
    Conexion: 7,
    Principal: '5/8',
    Derivacion: '4/0',
    Referencia: 'PGGRS 508',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pggrs-508-molde-para-union-varilla-terminal-cable-terminal',
  },
  {
    Conexion: 7,
    Principal: '5/8',
    Derivacion: '250 MCM',
    Referencia: 'PGGRS 509',
    Carga: 115,
    link:
      'https://www.powerground.com.co/product-page/pggrs-509-molde-para-union-varilla-terminal-cable-terminal',
  },
  {
    Conexion: 8,
    Principal: '5/8 ',
    Derivacion: 2,
    Referencia: 'PGGTS 545',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-cable-varilla-pggts-545',
  },
  {
    Conexion: 8,
    Principal: '5/8',
    Derivacion: '1/0',
    Referencia: 'PGGTS 547',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-cable-varilla-pggts-547',
  },
  {
    Conexion: 8,
    Principal: '5/8',
    Derivacion: '2/0',
    Referencia: 'PGGTS 548',
    Carga: 115,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-cable-varilla-pggts-548',
  },
  {
    Conexion: 8,
    Principal: '5/8',
    Derivacion: '4/0',
    Referencia: 'PGGTS 550',
    Carga: 115,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-cable-varilla-pggts-550',
  },
  {
    Conexion: 8,
    Principal: '5/8',
    Derivacion: '250 MCM',
    Referencia: 'PGGTS 551',
    Carga: 150,
    link:
      'https://www.powerground.com.co/product-page/molde-para-union-cable-varilla-pggts-551',
  },
  {
    Conexion: 9,
    Principal: 2,
    Derivacion: 'PLATINA',
    Referencia: 'PGHA 630',
    Carga: 65,
    link:
      'https://www.powerground.com.co/product-page/pgha-630-molde-para-union-cable-terminal-horizontal-a-platina',
  },
  {
    Conexion: 9,
    Principal: '1/0',
    Derivacion: 'PLATINA',
    Referencia: 'PGHA 7146',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgha-7146-molde-para-union-cable-terminal-horizontal-a-platina',
  },
  {
    Conexion: 9,
    Principal: '2/0',
    Derivacion: 'PLATINA',
    Referencia: 'PGHA 7075',
    Carga: 90,
    link:
      'https://www.powerground.com.co/product-page/pgha-7075-molde-para-union-cable-terminal-horizontal-a-platina',
  },
  {
    Conexion: 9,
    Principal: '4/0',
    Derivacion: 'PLATINA',
    Referencia: 'PGHA 6114',
    Carga: 115,
    link:
      'https://www.powerground.com.co/product-page/pgha-6114-molde-para-union-cable-terminal-horizontal-a-platina',
  },
  {
    Conexion: 9,
    Principal: '250 MCM',
    Derivacion: 'PLATINA',
    Referencia: 'PGHA 2200',
    Carga: 115,
    link:
      'https://www.powerground.com.co/product-page/pgha-2200-molde-para-union-cable-terminal-horizontal-a-platina',
  },
  {
    Conexion: 10,
    Principal: 2,
    Derivacion: 'PLATINA',
    Referencia: 'PGVV 1218',
    Carga: 115,
    link:
      'https://www.powerground.com.co/product-page/pgvv-1218-molde-para-union-cable-pasante-a-platina-vertical',
  },
  {
    Conexion: 10,
    Principal: '1/0',
    Derivacion: 'PLATINA',
    Referencia: 'PGVV 1220',
    Carga: 200,
    link:
      'https://www.powerground.com.co/product-page/pgvv-1220-molde-para-union-cable-pasante-a-platina-vertical',
  },
  {
    Conexion: 10,
    Principal: '2/0',
    Derivacion: 'PLATINA',
    Referencia: 'PGVV 1221',
    Carga: 200,
    link:
      'https://www.powerground.com.co/product-page/pgvv-1221-molde-para-union-cable-pasante-a-platina-vertical',
  },
  {
    Conexion: 10,
    Principal: '4/0',
    Derivacion: 'PLATINA',
    Referencia: 'PGVV 1223',
    Carga: 250,
    link:
      'https://www.powerground.com.co/product-page/pgvv-1223-molde-para-union-cable-pasante-a-platina-vertical',
  },
  {
    Conexion: 10,
    Principal: '250 MCM',
    Derivacion: 'PLATINA',
    Referencia: 'PGVV 1224',
    Carga: 250,
    link:
      'https://www.powerground.com.co/product-page/pgvv-1224-molde-para-union-cable-pasante-a-platina-vertical',
  },
];
