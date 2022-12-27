import { setData } from '@/redux/slices/dataSlice'
import { useAppSelector } from '@/redux'
import { useState } from 'react'

export const useFeedback = () => {
  const student = useAppSelector((state) => state.dataSlice)
  const studentName = useAppSelector((state) => state.dataSlice.student.name)
  const [feedback, setFeedback] = useState('')
  const feedbacks = {
    valueOptimum: `Felicitaciones ${studentName}, tu trabajo a alcanzado el nivel Optimo, esto quiere decir que cumpliste con todos o la mayoría de los requisitos de la consigna, es importante no relajarse y reforzar los conocimientos adquiridos y nunca dejar de practicar, seguí que por ese camino que vas muy bien. Saludos !!!`,
    valueCorrect: `Felicitaciones ${studentName}, tu trabajo a alcanzado el nivel Correcto, esto quiere decir que no cumpliste con la mayoría de los requisitos de la consigna, está aprobado pero es importante no relajarse y reforzar los conocimientos adquiridos y nunca dejar de practicar, seguí con ese esfuerzo que se puede llegar muy lejos. Saludos !!!`,
    valueLow: `Buenas ${studentName}, tu trabajo a alcanzado el nivel Bajo, esto quiere decir que no cumpliste con la mayoría de los requisitos de la consigna, está desaprobado pero es importante saber que se puede hacer una re entrega del trabajo para levantar la nota, reforzar los conocimientos adquiridos y nunca dejar de practicar, hay que poner un poco más de esfuerzo que se puede llegar muy lejos. Saludos !!!`,
  }
  const { valueCorrect, valueLow, valueOptimum } = feedbacks

  const calcFeedback = () => {
    if (student.result === 'Optimo') {
      setFeedback(valueOptimum)
      setData({
        ...student,
        feedback: valueOptimum,
      })
    } else if (student.result === 'Correcto') {
      setFeedback(valueCorrect)
      setData({
        ...student,
        feedback: valueCorrect,
      })
    } else if (student.result === 'Bajo') {
      setFeedback(valueLow)
      setData({
        ...student,
        feedback: valueLow,
      })
    }
  }

  return {
    feedback,
    calcFeedback,
    setFeedback
  }
}
