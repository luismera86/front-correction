import { Container, Grid } from '@mui/material'

export const RSloganOne = () => {
  return (
    <Container>
      <Grid container>
        <Grid item>
          <h3>Consigna</h3>
          <p>
            - Crea una carpeta dentro de src llamada components que contenga la implementación del componente NavBar
            dentro del archivo NavBar.js. Su funcionalidad es la de renderizar una barra de menú (Navbar).
          </p>
          <p>
            - Crea un componente CartWidget.js con un ícono, y ubícalo en el navbar. Agrega algunos estilos con
            bootstrap/materialize u otro.
          </p>
          <p>
            - Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del
            contenedor con el styling integrado.
          </p>
          <p>Objetivos</p>
          <p>- Crear el menú e-commerce de tu proyecto.</p>
          <p>- Crear la landing de tu proyecto.</p>
        </Grid>
      </Grid>
    </Container>
  )
}
