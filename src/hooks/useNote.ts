import { useEffect, useState } from 'react';

export const useNote = () => {
  const [note, setNote] = useState(0)
  const [result, setResult] = useState('')
useEffect(() => {
  calcNote()
}, [note])


  const calcNote = () => {
    if (note >= 80) {
      setResult('Optimo')
    } else if (note < 80 && note > 50) {
      setResult('Correcto')
    } else {
      setResult('Bajo')
    }
  }

  const evaluationNote = (value: number) => {
    setNote(note + value)
  }
  
  
  return {
    result,
    evaluationNote,
    note
  }
}