import { useState } from 'react'

// evaluations recibe la cantidad de evaluaciones que se realizan para poder calcular el puntaje que vale cada una
// value recibe el valor del select, si es Realizado, Incompleto o No Realizado

export const useCalcPoints = () => {
  const [points, setPoints] = useState(0)

  const clacPoints = (evaluations: number, value: string) => {
    if (evaluations === 3) {
      calcThreeEvaluations(value)
    } else if (evaluations === 4) {
      calcFourEvaluations(value)
    } else if (evaluations === 5) {
      calcFiveEvaluations(value)
    }
  }

  const calcThreeEvaluations = (value: string) => {
    if (value === 'Realizado') {
      setPoints(33)
    } else if (value === 'Incompleto') {
      setPoints(15)
    } else {
      setPoints(0)
    }
  }

  const calcFourEvaluations = (value: string) => {
    if (value === 'Realizado') {
      setPoints(25)
    } else if (value === 'Incompleto') {
      setPoints(12)
    } else {
      setPoints(0)
    }
  }

  const calcFiveEvaluations = (value: string) => {
    if (value === 'Realizado') {
      setPoints(20)
    } else if (value === 'Incompleto') {
      setPoints(10)
    } else {
      setPoints(0)
    }
  }

  return {
    points,
    clacPoints,
  }
}
