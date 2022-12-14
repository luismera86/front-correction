import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

import { ThemePalette } from '@/models'

type ThemeProps = {
  children: JSX.Element
}

export const ThemeConfig = ({ children }: ThemeProps) => {
  const theme = createTheme({
    palette: {
      // Asignamos los colores de la paleta
      mode: 'dark',
      background: {
        default: ThemePalette.BG,
        paper: ThemePalette.BG_PAPER,
      },
      primary: {
        main: ThemePalette.PRIMARY,
      },
    },
    components: {
      // Llamamos a los componentes que deseamos modificar
      MuiButton: {
        defaultProps: {
          style: {
            // Cambiamos el estilo por defecto de los botones
            textTransform: 'none',
          },
        },
      },
    },
    typography: {
      // Cambiamos el estilo de la fuente
      fontFamily: 'Helvetica',
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
