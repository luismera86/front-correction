import { Evaluation, Result } from "@/components"

import { RLayout } from "../layout"
import { RSloganOne } from "./RSloganOne"
import { rDeliveryOne } from "../data"
import { setPreDeliveryNumber } from "@/redux/slices/dataSlice"
import { useAppDispatch } from "@/redux"
import { useEffect } from "react"
import { useNote } from "@/hooks"

export const RPreDeliveryOne = () => {
  const dispatch = useAppDispatch()
  const { result, evaluationNoteOne, evaluationNoteTow, evaluationNoteThree, evaluationNoteFour } = useNote()

  useEffect(() => {
    dispatch(setPreDeliveryNumber(1))
  }, [])
  const {evaluationOne, evaluationTow, evaluationThree, evaluationFour} = rDeliveryOne
  return (
    <RLayout>
      <RSloganOne />
      <Evaluation
          evaluationNumber={1}
          title={evaluationOne.title}
          evaluation={evaluationOne.evaluation}
          evaluations={4}
          evaluationValue={evaluationNoteOne}
        />
        <Evaluation
          evaluationNumber={2}
          title={evaluationTow.title}
          evaluation={evaluationTow.evaluation}
          evaluations={4}
          evaluationValue={evaluationNoteTow}
        />
        <Evaluation
          evaluationNumber={3}
          title={evaluationThree.title}
          evaluation={evaluationThree.evaluation}
          evaluations={4}
          evaluationValue={evaluationNoteThree}
      />
        <Evaluation
          evaluationNumber={4}
          title={evaluationFour.title}
          evaluation={evaluationFour.evaluation}
          evaluations={4}
          evaluationValue={evaluationNoteFour}
      />
        <Result result={result} />
      
  </RLayout>
  )
}
