import { Evaluation, Result } from "@/components"

import { RLayout } from "../layout"
import { RSloganTow } from "./RSloganTow"
import { rDeliveryTow } from "../data"
import { setPreDeliveryNumber } from "@/redux/slices/dataSlice"
import { useAppDispatch } from "@/redux"
import { useEffect } from "react"
import { useNote } from "@/hooks"

export const RPreDeliveryTow = () => {
  const dispatch = useAppDispatch()
  const { result, evaluationNoteOne, evaluationNoteTow, evaluationNoteThree, evaluationNoteFour, evaluationNoteFive } = useNote()

  useEffect(() => {
    dispatch(setPreDeliveryNumber(2))
  }, [])
  const {evaluationOne, evaluationTow, evaluationThree, evaluationFour, evaluationFive} = rDeliveryTow
  return (
    <RLayout>
      <RSloganTow />
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
      
  </RLayout>
  )
}
