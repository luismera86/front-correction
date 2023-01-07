import { Button, Container } from '@mui/material'

import { saveAs } from 'file-saver'
import { useAppSelector } from '@/redux'

export const ReportSaveButton = () => {
  const dataSlice = useAppSelector((state) => state.dataSlice)

  const onHandleSaveHtml = () => {
    const html = document.getElementsByTagName('html')[0].outerHTML
    const css = document.getElementsByTagName('style')[0].innerHTML
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
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
