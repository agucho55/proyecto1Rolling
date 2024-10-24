/*
En el siguiente proyecto pondremos a prueba los conceptos vistos en clases.
El ejercicio siguiente se debe resolver con los conceptos vistos en clases, 
deben subir en esta tarea el link de github y el link del proyecto deployado en el servidor que prefieran 
por ej. Netlify. Por lo tanto la información final que se solicita se debe mostrar en el documento 
html no en consola.

Enunciado: Simulación de una encuesta de satisfacción

Descripción: Imagina que trabajas en un restaurante y se realizó una encuesta de satisfacción con los 
clientes. Las respuestas de la encuesta se registran como números enteros entre 1 y 10, donde:

1 significa "muy insatisfecho"
10 significa "muy satisfecho"
Las respuestas ya estan cargadas en el siguiente array, respuestas:
[8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10]

Debes procesar las respuestas de la encuesta para obtener las siguientes métricas:

El promedio de satisfacción.
Cuántos clientes dieron una calificación mayor o igual a 7 (considerados satisfechos).
Cuántos clientes dieron una calificación menor o igual a 4 (considerados insatisfechos).
El porcentaje de clientes que están satisfechos e insatisfechos.
La calificación que se repitió más veces (moda).
*/

encuesta_satisfaccion = [8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10];

let contadordecalificaciones = Array(10).fill(0); 

for (let i = 0; i < encuesta_satisfaccion.length; i++) {
    const calificacion = encuesta_satisfaccion[i];
    contadordecalificaciones[calificacion - 1] += 1; 
}

let masRepes = 0;
let calificacionMasRepetida = 0;

for (let i = 0; i < contadordecalificaciones.length; i++) {
    if (contadordecalificaciones[i] > masRepes) {
        masRepes = contadordecalificaciones[i];
        calificacionMasRepetida = i + 1; //no olvidarme de
    }
}


function satisfechos() 
{
    const satisfechos = encuesta_satisfaccion.filter(num => num >= 7);
    return satisfechos.length;
}

function insatisfechos() 
{
    const insatisfechos = encuesta_satisfaccion.filter(num => num <= 4);
    return insatisfechos.length;
}

var totalAPromediar = satisfechos() + insatisfechos();


function promedioSat()
{
    console.log(totalAPromediar);
    const promedioSat = (satisfechos() * 100) / totalAPromediar;
    return promedioSat;
}



function promedioInsat()
{
    promedioInsat = (insatisfechos() * 100) / totalAPromediar;
    return promedioInsat;
}


let valor_switch = parseInt(prompt(`El formulario se ha completado exitosamente. \n 1. Ver cantidad de clientes satisfechos \n 2. Ver cantidad de clientes insatisfechos \n 3. Porcentaje de satisfacción \n 4. calificación que más se repitió `));

switch(valor_switch)
{
case 1: (valor_switch == 1)

    alert(`${satisfechos()} clientes indicaron estar satisfechos`);
    break;

case 2: (valor_switch == 2)

    alert(`${insatisfechos()} clientes indicaron estar insatisfechos`);
    break;

case 3: (valor_switch == 3)

    alert(`El promedio de clientes satisfechos es del ${promedioSat()}% \nEl promedio de clientes insatisfechos es del ${promedioInsat()}%`);
    break;

case 4: (valor_switch == 4)

    alert("La calificación que más se repitió es: " + calificacionMasRepetida + ", " + masRepes + " veces.");


}


