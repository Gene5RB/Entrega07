// Declaración de variables
var plan, capital, plazo, tasa

const planes = {

    plan,
    capital,
    plazo,
    tasa
};

const ofertaCredito = [{plan:"Plan 001", capital: 150000, plazo: "30 días", tasa:"15%"},
                    {plan:"Plan 002", capital: 300000, plazo: "180 días", tasa:"10%"},
                    {plan:"Plan 003", capital: 485000, plazo: "60 días", tasa:"23%"}]

// Recorrido de alternativas de crédito e impresión de opciones de crédito

for (let index = 0; index < ofertaCredito.length; index++) {
    const planes = ofertaCredito[index];
    console.log(Object.values(planes))
};



   /* datosMes = {
         
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
}; 

*/
