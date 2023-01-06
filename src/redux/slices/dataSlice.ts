import { Delivery, Evaluation, Student } from '@/models'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AppDispatch } from '../app'
import axios from 'axios'

const initialState: Delivery = {
  id: '',
  evaluations: [],
  feedback: '',
  student: {
    commission: 0,
    course: '',
    name: '',
    tutor: '',
  },
  preDeliveryNumber: 0,
  result: 'Bajo',
  isLoading: true,
}

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    getDataSlice: (state) => {
      return state
    },
    setData: (state, action: PayloadAction<Delivery>) => {
      state = action.payload
      return state
    },
    setEvaluations: (state, action: PayloadAction<Evaluation>) => {
      const index = state.evaluations.findIndex(e => e.number === action.payload.number)
      console.log(index)
      if (index === -1) {
        state.evaluations = [...state.evaluations, action.payload]
      }
      state.evaluations[index] = action.payload
      return state
    },
    setFeedbackSlice: (state, action: PayloadAction<string>) => {
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
  getDataSlice,
  setData,
  setEvaluations,
  setFeedbackSlice,
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
      const resp = await axios.post('http://localhost:8080/api/delivery/', data)
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
      const resp = await axios.get(`http://localhost:8080/api/delivery/${id}`)
      const dataResp = await resp.data
      dispatch(setData(dataResp))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setIsLoading(false))
    }
  }
}
