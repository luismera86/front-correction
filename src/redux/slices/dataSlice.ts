import { Delivery, Student } from '@/models'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AppDispatch } from '../app'
import axios from 'axios'

const initialState: Delivery = {
  evaluationOne: {
    comment: '',
    status: '',
  },
  evaluationTow: {
    comment: '',
    status: '',
  },
  evaluationThree: {
    comment: '',
    status: '',
  },
  evaluationFour: {
    comment: '',
    status: '',
  },
  evaluationFive: {
    comment: '',
    status: '',
  },
  feedback: '',
  student: {
    commission: 0,
    course: '',
    name: '',
    tutor: '',
  },
  preDeliveryNumber: 0,
  result: '',
  isLoading: true,
}

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Delivery>) => {
      state = action.payload
      return state
    },
    setEvaluationOne: (state, action) => {
      state.evaluationOne = action.payload
      return state
    },
    setEvaluationTow: (state, action: PayloadAction<{ comment: string; status: string }>) => {
      state.evaluationTow = action.payload
      return state
    },
    setEvaluationThree: (state, action: PayloadAction<{ comment: string; status: string }>) => {
      state.evaluationThree = action.payload
      return state
    },
    setEvaluationFour: (state, action: PayloadAction<{ comment: string; status: string }>) => {
      state.evaluationFour = action.payload
      return state
    },
    setEvaluationFive: (state, action: PayloadAction<{ comment: string; status: string }>) => {
      state.evaluationFive = action.payload
      return state
    },
    setFeedback: (state, action: PayloadAction<string>) => {
      state.feedback = action.payload
      return state
    },
    setPreDeliveryNumber: (state, action: PayloadAction<number>) => {
      state.preDeliveryNumber = action.payload
      return state
    },
    setStudent: (state, action: PayloadAction<Student>) => {
      state.student = action.payload
      return state
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
      return state
    },
    setResults: (state, action: PayloadAction<string>) => {
      state.result = action.payload
      return state
    },
    
  },
})

export const {
  setData,
  setEvaluationOne,
  setEvaluationTow,
  setEvaluationThree,
  setEvaluationFour,
  setEvaluationFive,
  setFeedback,
  setPreDeliveryNumber,
  setStudent,
  setIsLoading,
  setResults
} = dataSlice.actions

export default dataSlice.reducer

// thunks

export const postData = (data: Delivery) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true))
    try {
      const resp = await axios.post('url del backed', data)
      const dataResp = await resp.data
      dispatch(setData(dataResp))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setIsLoading(false))
    }
  }
}

export const getData = (id: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true))
    try {
      const resp = await axios.get(`url backend/${id}`)
      const dataResp = await resp.data
      dispatch(setData(dataResp))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setIsLoading(false))
    }
  }
}
