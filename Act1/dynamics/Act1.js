//introduce los numeros deseados desde la pagina
var gama= prompt("Piso de gama");
var elevA=prompt("Piso del Elevador A");
var elevB=prompt("Piso del Elevador B");
//resta los valores
var r1 = elevA - gama;
var r2 = elevB - gama;

console.log(r1);
console.log(r2);
//conversión de los valores a obsolutos en el caso de que sean negativos
if(r1<0)
{
  var abs1=Math.abs(r1);
  var r1 = abs1;
}
if(r2<0)
{
  var abs2=Math.abs(r2);
  var r2= abs2;
}

console.log(abs1);
console.log(abs2);
//según sea el caso determina cual es el elevador mas cercano
if(r1 < r2)
  {
    alert("EL elevador A esta mas cercano");
  }
if(r2 < r1)
  {
    alert("El elevador B esta mas cercano");
  }
  if(r1==r2)
  {
    alert("Ambos elevadores estan en la misma distancia Gama");
  }



  /*if (gama<=elevA) {
    for (var i = gama; i < elevA; i++) {
      console.log("tenemos posicion alta A");
    }
  }
  if(gama>=elevA) {
    for (var i = gama; i >= elevA; i--) {
        console.log("tenemos posicion baja A");
    }
    var bajaA = gama;
  }

  if (gama<=elevB) {
    for (var i = gama; i < elevB; i++) {
      console.log("tenemos posicion alta B");
    }
    var altaB = gama;
  }
  if(gama>=elevB) {
    for (var i = gama; i >= elevB; i--) {
        console.log("tenemos posicion baja B");
    }
    var bajaB = gama;
  }*/
