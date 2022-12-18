import { Delivery, Student } from '@/models'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AppDispatch } from '../app'
import axios from 'axios'

const initialState: Delivery = {
  commentOne: '',
  commentTow: '',
  commentThree: '',
  commentFour: '',
  commentFive: '',
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
    setCommentOne: (state, action: PayloadAction<string>) => {
      state.commentOne = action.payload
      return state
    },
    setCommentTow: (state, action: PayloadAction<string>) => {
      state.commentTow = action.payload
      return state
    },
    setCommentThree: (state, action: PayloadAction<string>) => {
      state.commentThree = action.payload
      return state
    },
    setCommentFour: (state, action: PayloadAction<string>) => {
      state.commentFour = action.payload
      return state
    },
    setCommentFive: (state, action: PayloadAction<string>) => {
      state.commentFive = action.payload
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
  },
})

export const {
  setData,
  setCommentFive,
  setCommentFour,
  setCommentOne,
  setCommentThree,
  setCommentTow,
  setFeedback,
  setPreDeliveryNumber,
  setStudent,
  setIsLoading,
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
