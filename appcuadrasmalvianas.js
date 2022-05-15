/*SELECCION DE TRANSPORTE REMIS/TAXI/COLECTIVO , Y DAR EL IMPORTE DEL RECORRIDO SEGUN TIPO*/ 

/*Guardado de consultas en arrays*/
const preciosConsultados=[];
const preciosConsultadosKm= []; 



/*Funcion para calcular el importe mediante del input*/
const precioConsulta=()=> {
    if(document.getElementById("preciosPorCuadras").value===""||0||!Number){
        document.getElementById("outputTextApp").innerHTML = `<p>Por favor ingrese la distancia en cuadras.</p>`;
    }else{
        let inputconsultaViaHtml = parseInt(document.getElementById("preciosPorCuadras").value);
        let precioPorCuadra = (((1 / 1.6) * 10) * inputconsultaViaHtml) + 150;
        document.getElementById("outputTextApp").innerHTML = `<p>El importe por ${inputconsultaViaHtml} cuadras es de ${precioPorCuadra}.</p>`;
        preciosConsultados.push(precioPorCuadra);
    }
} 

const precioPorKm = () => {
    if(document.getElementById("preciosPorKm").value===0||""||!Number){
        document.getElementById("outputTextAppKm").innerHTML = `<p>Por favor ingrese la distancia en km.</p>`;    
    }else{ 
        let precioConsultaViaHtmlKm = parseInt(document.getElementById("preciosPorKm").value);
        let kmIngresadasPorUsuario = precioConsultaViaHtmlKm*62.5+150;
        document.getElementById("outputTextAppKm").innerHTML = `<p>El importe por ${precioConsultaViaHtmlKm} km es de ${kmIngresadasPorUsuario}.</p>`;
        preciosConsultadosKm.push(kmIngresadasPorUsuario);
    }
} 



/*Contabilizar consultas de los inputs*/
const verCantidadDeingresos =  () =>{
    console.log(preciosConsultados.length);
    console.log(preciosConsultadosKm.length);
}
setInterval(verCantidadDeingresos, 500000);


/*Local y session Storage*/
localStorage.setItem("preciosCuadras",JSON.stringify(preciosConsultados)); 
let localStorageTextCuadras = localStorage.getItem("preciosCuadras");
let objLocalStorageCuadras = JSON.parse(localStorageTextCuadras);

localStorage.setItem("preciosKm",JSON.stringify(preciosConsultadosKm)); 
let localStorageTextKm = localStorage.getItem("preciosKm");
let objLocalStorageKm = JSON.parse(localStorageTextKm); 



/*remis*/
/*el calculo importe-minimo/cuadras*/
/*promedias los importes que tengo de remises para aplicar en la funcion, optimizar la funcionalidad del remis , la cual esta inflada, no optimizada de la mejor manera*/ 
/*optimizar urgente codigo caca*/
//const calculadorImporteRemis = () => {
//    let importeMinimo = 110;
//    let importePorXcuadras = parseInt(prompt("cuadras aca"));
//    let cuadrasPorXImporte = parseInt(prompt("importe por cuadras"));
//    let totalRemios = (importePorXcuadras-importeMinimo)/cuadrasPorXImporte;
//    console.log(`el importe por ${cuadrasPorXImporte} es de ${totalRemios}.`) 
//} 
//calculadorImporteRemis;
/*hacer con cada cuenta, sacar promedio para aplicar y aplicarlo mediante input onchange html-java*/

/*promedio*/

//let imp = (1740-110)/326;
//let imp0 = (1740-110)/325;
//let imp1 = (1750-110)/328;
//let imp2 = (1750-110)/327;
//let imp3 = (150-110)/7;
//let imp4 = (740-110)/125;
//let imp5 = (610-110)/100; 
//let promedio = (imp+imp0+imp1+imp2+imp3+imp4+imp5)/7;
//console.log(promedio) 
let impRemisMin = 110;
let impPromedioRemPorCuad = 5.112137264221144



/*realizar para remises  - cuadras= 325/326 = 1740  --  327/328 = 1750$  ; importeMinimo= 110 dividir cantidad de cuadras por el importe - minimo remicoop /// paso car tarifa (ver si concuerda con los calculos de remicoop / ///   7 cuadras = 150$ / 100 = 610$  125 cuadras = 740*/
/*hacer el calculador del mapa*/
/*hacer responsive design en CSS*/
/*correguir HTML bajar cantidad de divs alpedo*/
/*ver el if, para eliminar el NaN cuando ingresan letras*/
/*Correguir localstorage*/
/*subdividir las funciones, arrays, etc en difentes carpetas*/
/*ver evento onchange="precioPorKm(event)" y su registro en la consola para ver si funciona like prof */
/*renviar datos desde el mapa interactivo (distancia) para automaticamente sacar el importe en los input, o no(?) ver si quedaruia mejor que solo aparezca la distancia y el usuario la utilice , o que sea automatizado cual ia*/
