import { useEffect, useState } from 'react'

import { setData } from '@/redux/slices/dataSlice'
import { useAppSelector } from '@/redux'

export const useFeedback = () => {
  const student = useAppSelector((state) => state.dataSlice)
  const [feedback, setFeedback] = useState('')
  const feedbacks = {
    valueOptimum: `Felicitaciones, tu trabajo a alcanzado el nivel Optimo, esto quiere decir que cumpliste con todos o la mayoría de los requisitos de la consigna, es importante no relajarse y reforzar los conocimientos adquiridos y nunca dejar de practicar, seguí que por ese camino que vas muy bien. Saludos !!!`,
    valueCorrect: `Felicitaciones, tu trabajo a alcanzado el nivel Correcto, esto quiere decir que no cumpliste con la mayoría de los requisitos de la consigna, está aprobado pero es importante no relajarse y reforzar los conocimientos adquiridos y nunca dejar de practicar, seguí con ese esfuerzo que se puede llegar muy lejos. Saludos !!!`,
    valueLow: `Tu trabajo a alcanzado el nivel Bajo, esto quiere decir que no cumpliste con la mayoría de los requisitos de la consigna, está desaprobado pero es importante saber que se puede hacer una re entrega del trabajo para levantar la nota, también hay que reforzar los conocimientos adquiridos y nunca dejar de practicar, hay que poner un poco más de esfuerzo que se puede llegar muy lejos. Saludos !!!`,
  }

  useEffect(() => {
    calcFeedback()
  }, [])

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
    setFeedback,
  }
}
