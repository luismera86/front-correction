import { Container, Paper, Typography } from '@mui/material'
import { RSloganOne, RSloganTow } from '../components'
import { ReportCopyButton, ReportData, ReportEvaluation, ReportFeedback } from '@/components'

import { ThemePalette } from '@/models'
import { useAppSelector } from '@/redux'
import { useRef } from 'react'

export const RReportPage = () => {
  const dataSlice = useAppSelector((state) => state.dataSlice)

  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <Container ref={containerRef} sx={{ mt: 9 }}>
      <Paper>
        <Container sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant='h4' fontWeight={700} color={ThemePalette.PRIMARY}>
            INFORME DE PRE ENTREGA
          </Typography>
        </Container>
        {/* Datos del formulario y resultado  */}
        <ReportData />
        {/* Consigna */}
        {dataSlice.preDeliveryNumber === 1 ? <RSloganOne /> : <RSloganTow />}
        {/* Evaluaciones individuales con el estado y comentarios */}
        <ReportEvaluation />
        {/* Feedback */}
        <ReportFeedback />
        {/* Botón para copiar texto del reporte*/}
        <ReportCopyButton containerRef={containerRef} />
      </Paper>
    </Container>
  )
}
