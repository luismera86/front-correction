import { Container, Paper, TextField } from '@mui/material'

export interface FeedbackInterface {}

const Feedback: React.FC<FeedbackInterface> = () => {
  return (
    <Container>
      <Paper>
        <TextField label='Feedback' multiline rows={10} defaultValue='' fullWidth />
      </Paper>
    </Container>
  )
}

export default Feedback
