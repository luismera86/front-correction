import { useState } from 'react'

export const useForm = <T extends Object>(initialState: T) => {
  const [formInputState, SetFormInputState] = useState(initialState)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem(event.target.name, event.target.value)
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

