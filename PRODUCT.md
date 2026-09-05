# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Personas curiosas y estudiantes que quieren encontrar un país rápido y ver sus datos básicos (nombre, bandera, capital, población, región).

## Product Purpose

Country App deja consultar el dataset de REST Countries y entender un país en contexto: no solo devolver un resultado, sino poder recorrer una región y comparar países sin perderse.

El éxito es que alguien elija una región y compare países (bandera, capital, población, geografía) sin perder el hilo.

## Positioning

Un explorador de países en español cuya unidad de comprensión es la región: la comparación entre vecinos es el camino, no una tabla suelta tras una búsqueda.

## Operating Context

SPA Angular en el navegador, sesiones cortas. Hoy existen tres entradas (capital, nombre, región) y una ficha por código. Se usa con teclado y ratón; la consulta vive en la URL.

## Capabilities and Constraints

- La fuente de datos es REST Countries v5. No inventar cifras, nombres oficiales, banderas ni pertenencias que la API no entregue.
- Datos disponibles hoy: nombre, código, bandera, capital(es), población, región, subregión.
- La navegación, el copy y los estados (vacío, carga, error, sin resultados) pueden cambiar si mejoran la tarea.
- Idioma actual de la interfaz: español. No hay i18n.
- Routing con hash. Cliente únicamente; no hay cuentas ni persistencia.

## Brand Commitments

Nombre del producto: Country App. No hay logo, paleta ni tipografía comprometidos.

## Evidence on Hand

Datos reales de REST Countries. No hay testimonios, casos de clientes ni métricas. No fabricar prueba social.

Pantallas actuales: home de arranque, búsqueda por capital, por país, por región, ficha de país, vacío y no encontrado.

## Product Principles

- La región es el marco de comparación; la búsqueda es un atajo hacia ese marco.
- Un resultado tiene que ser escaneable: bandera, nombre, capital y población se leen de un vistazo.
- Los estados vacíos, de carga y de error son parte del producto, no un afterthought.
- Solo afirmar lo que la API puede demostrar.
