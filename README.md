# Weather App Test Frontend

El ejercicio pedido fue elaborado en React.js, inicializado con Create-react-app.<br />
Utilización de Typescript para mantener estructura y evitar errores durante el desarrollo. <br />
La librería de componentes utilizada fue Chakra UI.<br />
Se agrego Moment.js para manejar las fechas.

La app cuenta con un visualizador y una botonera.<br />
El visualizador muestra el nombre de la ciudad, su temperatura actual y el clima, junto a los proximos 5 días<br />
La botonera permite intercambiar entre ciudades.

La API usada fue la misma que fue dada en la consigna.<br />
Las ciudades preseleccionadas fueron elegidas con el unico sentido de tener distintos climas y distintas temperaturas.

Se asume que la ciudad actual es Ciudad de Buenos Aires.

## Uso de la app

El usuario puede ver la temperatura actual y los proximos 5 días.
El usuario puede cambiar entre 6 ciudades preseleccionadas y verlas una a la vez.

## Scripts de inicialización

`yarn install` para instalar <br />
`yarn start` para iniciar el proyecto

## Elementos que considero faltantes pero no necesarios para retrasar la entrega

~~<strong>Unit Testing:</strong> No me encontré con tiempo suficiente para hacer unit testing sobre la App. Voy a intentar agregarlo en un commit aparte.~~ Resuelto: 14/10/2020

<strong>Selección de ciudades:</strong> Permitir al usuario elegir las 5 ciudades consumiendo datos de alguna API.

<strong>Ciudad Actual:</strong> Calculo de ciudad actual por geolocalización

<strong>Error boundary:</strong> La aplicación no tiene forma de atajar un error en caso de que la API falle, intentaré agregarlo en otro commit.

<strong> Local storage: </strong> Guardar la data actual en el navegador para evitar hacer peticiones cada vez que se cambia de ciudad.
