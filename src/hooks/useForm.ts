import { useEffect, useState } from 'react'

export const useForm = <T extends Object>(initialState: T) => {
  const [formInputState, SetFormInputState] = useState(initialState)

  useEffect(() => { 

   }, [formInputState])
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem(event.target.name, event.target.value)
    SetFormInputState({
      ...formInputState,
      [localStorage.getItem(event.target.name)! || event.target.name]: event.target.value,
    })
  }

  return {
    ...formInputState,
    formInputState,
    handleInputChange,
  }
    }

