//Las etiquetas (creadas)
let body=document.getElementsByTagName("body")[0];
let eldiv=document.createElement("div");
let cos1=document.createElement("h1");
let cos2=document.createElement("h2");
let cos3=document.createElement("h3");
let cos4=document.createElement("h4");
let cos5=document.createElement("h5");
let cos6=document.createElement("a");
let cos7=document.createElement("a");
let cos8=document.createElement("i");
//
//clases para dar estilo en css
  cos4.classList.add("r");
  eldiv.classList.add("SD")
//textos que van en los diferentes h
cos6.innerText="Soy el más Grande";
cos2.innerText="Curso Web 2020";
cos8.innerText="Mediano";
cos4.innerText="Jelou"
cos5.innerText="Estoy medio chiquito :(";
//Atributos que estaran en las eqtiquetas
cos6.setAttribute("href","#");
cos7.setAttribute("href","#");

//Asigna a los hijos es decir coloca las etiquetas dentro de etiquetas
cos1.appendChild(cos6);
cos3.appendChild(cos7).appendChild(cos8);
eldiv.prepend(cos1,cos2,cos3,cos4,cos5);
//imprime el div que contiene todo
body.prepend(eldiv);
//ver si funciona
console.log("hola mundo, si jalo");
