import { useState } from 'react'

export const useForm = <T extends Object>(initialState: T) => {
  const [formInputState, SetFormInputState] = useState(initialState)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetFormInputState({
      ...formInputState,
      [event.target.name]: event.target.value,
    })
  }

  return {
    ...formInputState,
    formInputState,
    handleInputChange,
  }
    }

