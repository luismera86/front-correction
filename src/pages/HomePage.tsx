import { Container, Grid, Typography } from '@mui/material'

export const HomePage = () => {
  return (
    <Container sx={{ mt: 9 }}>
      <Grid container justifyContent='center'>
        <Grid item>
          <Typography fontSize={30}>Bienvenidos al sistema de correcciones para tutores</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography fontSize={25} fontWeight={600}>Información</Typography>
          <Typography fontSize={15}>
            Esta aplicación fue desarrollada por Luis Mera, con el objetivo de facilitar las correcciones de las pre
            entregas enviadas por los alumnos y poder retribuirles a los mismos un reporte detallado de los aspectos que
            se tiene en cuenta de la evaluación y sus respectivos errores, con la posibilidad de hacer sugerencias en
            puntos de evaluación específicos.
          </Typography>
          <Typography fontSize={15}>
            - Cursos comprendidos: React JS y JavaScript, con la posibilidad de ampliar a otros cursos en el futuro.
          </Typography>
          <Typography fontSize={19} mt={2} fontWeight={600}>
            Modo de uso:
          </Typography>
          <Typography fontSize={16} mb={1}>
            <b>- Selección de curso:</b> En la barra de navegación superior se encuentran los cursos habilitados para corregir,
            una ves que seleccione el curso debe elegir el número de pre entrega a corregir.
          </Typography>
          <Typography fontSize={16} mb={1}>
            <b>- Llenado del formulario:</b> Una vez elegido el número de pre entrega se abrirá una pantalla en la que en primer lugar se debe completar con los datos de nombre del alumno, tutor, curso y comisión a la que pertenece, salvo el nombre del alumno los otros datos se almacenaran en el localstorage para no tener que volver a cargar esos datos nuevamente ya que es muy probable que se hagan correcciones seguidas del mismo curso y comisión.
          </Typography>
          <Typography fontSize={16} mb={1}>
            <b>- Completar las evaluaciones:</b>- Completar las evaluaciones: Luego del formulario se muestra la consigna general y objetivos, más abajo aparecen las evaluaciones individuales las cuales se debe seleccionar el estado de la misma, si el alumno pudo Realizar, Incompleto o No Realizado, cada una tiene un valor que automáticamente va sumando puntaje y hace el calculo del resultado final, a su derecha tenemos una caja de comentarios para hacer una devolución especifica de esa tarea, en la cual se puede felicitar al alumno por realizarla, en caso contrario detalla que fue lo que faltó o alguna sugerencia positiva para mejorar en ese aspecto.
          </Typography>
          <Typography fontSize={16} mb={1}>
            <b>- Generar informe:</b> Al final se muestra el resultado final en base a los cálculos realizados de acuerdo a lo introducido por el corrector, luego un pequeño feedback general que tiene tres variantes de acuerdo a la nota obtenida Optimo, Correcto o Bajo. En la parte inferior se encuentra un botón "Generar informe" el mismo los redirige a una nueva pantalla donde se muestra toda la información de forma ordenada para enviar al alumno.
          </Typography>
          <Typography fontSize={16} mb={1}>
            <b>- Guardar el informe y enviar:</b> Por último solo queda revisar si todos los datos son correctos y presionar el botón "Guardar" que se encuentra al final del informe lo que hace es guardar un archivo html con el nombre del alumno - curso - comisión - n° de entrega que luego puede ser enviado como archivo adjunto en la plataforma.
            </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
