# MA-challenge

Progreso del challenge para Mercantil Andina. Se trata de un formulario de tipo wizard/stepper, en el cual el usuario ingresa sus datos personales y de su vehiculo, donde luego se le sugieren coberturas disponibles. El mismo consiste en 4 pasos:
  1) Ingreso de datos personales y de contacto del usuario
  2) Ingreso de datos del vehiculo
  3) Devolución de coberturas disponibles
  4) Resumen donde se muestra los datos que ingresó el usuario. 

El progreso entregado hasta ahora NO es funcional, se trata de un mock up dinámico donde pueden visualizarse mayormente los pasos 1) y 2). De momento, se realizó únicamente una llamada a la API Mercantil Andina para obtener las marcas de los vehículos y mostrarlas en la vista. 

npm -v: 6.14.15
node -v: v14.17.6
Angular CLI:
  @angular-devkit/architect       0.1202.10
  @angular-devkit/build-angular   12.2.10
  @angular-devkit/core            12.2.10
  @angular-devkit/schematics      12.2.10
  @angular/cdk                    12.2.9
  @angular/material               12.2.9
  @schematics/angular             12.2.10
  rxjs                            6.6.7
  typescript                      4.3.5
