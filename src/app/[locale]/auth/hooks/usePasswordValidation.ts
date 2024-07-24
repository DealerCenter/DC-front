import React, { useEffect, useState } from 'react'

type Props = { password: string }

const usePasswordValidation = (password: string) => {
  const [criteria, setCriteria] = useState({
    number: false,
    uppercase: false,
    lowercase: false,
    length: false,
  })

  const validatePassword = (password: string) => {
    const number = /[0-9]/.test(password)
    const uppercase = /[A-Z]/.test(password)
    const lowercase = /[a-z]/.test(password)
    const length = password.length >= 14

    setCriteria({
      number,
      uppercase,
      lowercase,
      length,
    })
  }

  useEffect(() => {
    validatePassword(password)
  }, [password])

  return {
    number: criteria.number,
    uppercase: criteria.uppercase,
    lowercase: criteria.lowercase,
    length: criteria.length,
  }
}

export default usePasswordValidation
