// Declaración de variables

var flujoCaja = [];
var meses = ["Enero", "Febrero","Marzo","Abril","Mayo",
            "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var mes, ingreso, egreso, ingresosTotales, egresosTotales, resultado;

// Mensaje de bienvenida

alert("¿Desea cargar el flujo de caja de su último año?");

// Solicitud de datos

for (let i = 0; i < meses.length; i++) {

    mes = meses[i]
    ingreso = Number(prompt ("Monto total de ingreso de " + meses[i]));
    egreso = Number(prompt("Monto total de egreso de " + meses[i]));

    datosMes = {
         
        mes,
        ingreso, 
        egreso
    }

//Registro de datos

        flujoCaja[flujoCaja.length] = datosMes;
    };

//Cálculo

ingresosTotales = 0;
 for (let index = 0; index < meses.length; index++) {
    const datosMes = flujoCaja[index];
    ingresosTotales+=datosMes.ingreso;    
};

egresosTotales = 0;
 for (let index = 0; index < meses.length; index++) {
    const datosMes = flujoCaja[index];
    egresosTotales+=datosMes.egreso;    
};

resultado = ingresosTotales - egresosTotales;

// Presentación de resultado

if (resultado < 0) {
    
    alert("Su empresa generó una pérdida de " + resultado + " en el año evaluado, por ende lo vemos como una PyME de confiabilidad baja")    
} else {
    alert("Su empresa generó una ganancia de " + resultado + " en el año evaluado, por ende lo vemos como una PyME de confiabilidad alta")
}

console.log(flujoCaja);
console.log(ingresosTotales);
console.log(egresosTotales);









