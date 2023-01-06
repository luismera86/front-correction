import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import { Evaluation, Feedback, Form, Result } from '@/components'
import { postData, setPreDeliveryNumber } from '@/redux/slices/dataSlice'
import { useAppDispatch, useAppSelector } from '@/redux'

import { JsLayout } from '../layout'
import { SloganThree } from './SloganThree'
import { jsDeliveryThree } from '../data'
import { useEffect } from 'react'
import { useNote } from '@/hooks'

export const JsPreDeliveryThree = () => {
  const dispatch = useAppDispatch()
  const report = useAppSelector((state) => state.dataSlice)

  const { result, evaluationNoteOne, evaluationNoteTow, evaluationNoteThree, evaluationNoteFour, evaluationNoteFive } =
    useNote()

  const { evaluationOne, evaluationTow, evaluationThree, evaluationFour, evaluationFive } = jsDeliveryThree

  useEffect(() => {
    dispatch(setPreDeliveryNumber(3))
  }, [])

  const onHandleSendData = () => {
    localStorage.setItem('studentName', '')
    dispatch(postData(report))
  }

  return (
    <JsLayout>
      <SloganThree />
        <Evaluation
          evaluationNumber={1}
          title={evaluationOne.title}
          evaluation={evaluationOne.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteOne}
        />
        <Evaluation
          evaluationNumber={2}
          title={evaluationTow.title}
          evaluation={evaluationTow.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteTow}
        />
        <Evaluation
          evaluationNumber={3}
          title={evaluationThree.title}
          evaluation={evaluationThree.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteThree}
        />
        <Evaluation
          evaluationNumber={4}
          title={evaluationFour.title}
          evaluation={evaluationFour.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteFour}
        />
        <Evaluation
          evaluationNumber={5}
          title={evaluationFive.title}
          evaluation={evaluationFive.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteFive}
      />
      <Result result={result} />
    </JsLayout>
   
  )
}