# Bienvenidos al sistema de correcciones para tutores

## Información

Esta aplicación fue desarrollada por Luis Mera, con el objetivo de facilitar las correcciones de las pre entregas enviadas por los alumnos y poder retribuirles a los mismos un reporte detallado de los aspectos que se tiene en cuenta de la evaluación y sus respectivos errores, con la posibilidad de hacer sugerencias en puntos de evaluación específicos.

- Cursos comprendidos: React JS y JavaScript, con la posibilidad de ampliar a otros cursos en el futuro.

## Modo de uso

- Selección de curso: En la barra de navegación superior se encuentran los cursos habilitados para corregir, una ves que seleccione el curso debe elegir el número de pre entrega a corregir.

- Llenado del formulario: Una vez elegido el número de pre entrega se abrirá una pantalla en la que en primer lugar se debe completar con los datos de nombre del alumno, tutor, curso y comisión a la que pertenece, salvo el nombre del alumno los otros datos se almacenaran en el localstorage para no tener que volver a cargar esos datos nuevamente ya que es muy probable que se hagan correcciones seguidas del mismo curso y comisión.

- Completar las evaluaciones:- Completar las evaluaciones: Luego del formulario se muestra la consigna general y objetivos, más abajo aparecen las evaluaciones individuales las cuales se debe seleccionar el estado de la misma, si el alumno pudo Realizar, Incompleto o No Realizado, cada una tiene un valor que automáticamente va sumando puntaje y hace el calculo del resultado final, a su derecha tenemos una caja de comentarios para hacer una devolución especifica de esa tarea, en la cual se puede felicitar al alumno por realizarla, en caso contrario detalla que fue lo que faltó o alguna sugerencia positiva para mejorar en ese aspecto.

- Generar informe: Al final se muestra el resultado final en base a los cálculos realizados de acuerdo a lo introducido por el corrector, luego un pequeño feedback general que tiene tres variantes de acuerdo a la nota obtenida Optimo, Correcto o Bajo. En la parte inferior se encuentra un botón "Generar informe" el mismo los redirige a una nueva pantalla donde se muestra toda la información de forma ordenada para enviar al alumno.

- Copiar el informe y enviar Por último solo queda revisar si todos los datos son correctos y presionar el botón "Copiar" que se encuentra al final del informe lo que hace es copiar todos los datos del informe como texto plano en el porta papeles y puedes pegar el reporte en la caja de comentarios de la plataforma para enviar al alumno, solo se debe recordar borrar los textos copiar y corregir otra entrega que se encuentran al final.

## Herramientas utilizadas

- React
- Typescript
- Redux
- Material UI
