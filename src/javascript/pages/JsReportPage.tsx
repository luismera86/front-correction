import { Container, Paper, Typography } from '@mui/material'
import { ReportCopyButton, ReportData, ReportEvaluation, ReportFeedback } from '@/components'
import { SloganOne, SloganThree, SloganTow } from '../components'

import { ThemePalette } from '@/models'
import { useAppSelector } from '@/redux'
import { useRef } from 'react'

export const JsReportPage = () => {
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
        {dataSlice.preDeliveryNumber === 1 ? (
          <SloganOne />
        ) : dataSlice.preDeliveryNumber === 2 ? (
          <SloganTow />
        ) : (
          <SloganThree />
        )}
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
