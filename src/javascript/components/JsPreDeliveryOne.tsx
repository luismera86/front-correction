import { Evaluation, Result } from '@/components'

import { JsLayout } from '../layout'
import { SloganOne } from './SloganOne'
import { jsDeliveryOne } from '../data'
import { setPreDeliveryNumber } from '@/redux/slices/dataSlice'
import { useAppDispatch } from '@/redux'
import { useEffect } from 'react'
import { useNote } from '@/hooks'

export const JsPreDeliveryOne = () => {
  const dispatch = useAppDispatch()
  const { result, evaluationNoteOne, evaluationNoteTow, evaluationNoteThree } = useNote()

  useEffect(() => {
    dispatch(setPreDeliveryNumber(1))
  }, [])



  return (
    <JsLayout>
      <SloganOne />
      <Evaluation
          evaluationNumber={1}
          title={jsDeliveryOne.evaluationOne.title}
          evaluation={jsDeliveryOne.evaluationOne.evaluation}
          evaluations={3}
          evaluationValue={evaluationNoteOne}
        />
        <Evaluation
          evaluationNumber={2}
          title={jsDeliveryOne.evaluationTow.title}
          evaluation={jsDeliveryOne.evaluationTow.evaluation}
          evaluations={3}
          evaluationValue={evaluationNoteTow}
        />
        <Evaluation
          evaluationNumber={3}
          title={jsDeliveryOne.evaluationThree.title}
          evaluation={jsDeliveryOne.evaluationThree.evaluation}
          evaluations={3}
          evaluationValue={evaluationNoteThree}
      />
        <Result result={result} />
      
  </JsLayout>
  )
}
