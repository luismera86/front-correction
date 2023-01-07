import { Button, Container } from '@mui/material'

import { saveAs } from 'file-saver'
import { useAppSelector } from '@/redux'

export const ReportSaveButton = () => {
  const dataSlice = useAppSelector((state) => state.dataSlice)

  const onHandleSaveHtml = () => {
    const html = document.documentElement.outerHTML
    const css = document.documentElement.style
    console.log(html)
    console.log(css)
    const blob = new Blob([`<style>${css}</style>${html}`], { type: 'text/html/' })
    saveAs(
      blob,
      `${dataSlice.student.name} - ${dataSlice.student.course} - ${dataSlice.student.commission} - ${dataSlice.preDeliveryNumber}.html`
    )
  }
  return (
    <Container sx={{ p: 4, textAlign: 'center' }}>
      <Button onClick={onHandleSaveHtml} variant='contained'>
        Guardar
      </Button>
    </Container>
  )
}
