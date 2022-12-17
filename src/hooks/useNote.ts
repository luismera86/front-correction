import { useEffect, useState } from 'react'

export const useNote = () => {
  const [noteOne, setNoteOne] = useState(0)
  const [noteTow, setNoteTow] = useState(0)
  const [noteThree, setNoteThree] = useState(0)
  const [noteFour, setNoteFour] = useState(0)
  const [noteFive, setNoteFive] = useState(0)
  const [result, setResult] = useState('')
  useEffect(() => {
    calcNote()
  }, [noteOne, noteTow, noteThree, noteFour, noteFive])

  // Realiza el cálculo del resultado de la entrega en base al puntaje obtenido
  const calcNote = () => {
    const notes = noteOne + noteTow + noteThree + noteFour + noteFive
    if (notes >= 80) {
      setResult('Optimo')
    } else if (notes > 50 && notes < 80) {
      setResult('Correcto')
    } else if (notes <= 50) {
      setResult('Bajo')
    }
  }

  // Setea el valor por cada evaluación 
  const evaluationNoteOne = (value: number) => {
    setNoteOne(value)
  }
  const evaluationNoteTow = (value: number) => {
    setNoteTow(value)
  }
  const evaluationNoteThree = (value: number) => {
    setNoteThree(value)
  }
  const evaluationNoteFour = (value: number) => {
    setNoteFour(value)
  }
  const evaluationNoteFive = (value: number) => {
    setNoteFive(value)
  }

  return {
    result,
    evaluationNoteOne,
    evaluationNoteTow,
    evaluationNoteThree,
    evaluationNoteFour,
    evaluationNoteFive,
  }
}
