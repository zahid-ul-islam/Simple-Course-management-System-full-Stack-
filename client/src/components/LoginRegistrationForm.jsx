
import React, { useState } from 'react'
import { LoginForm } from './LoginForm'
import { Dialog } from '@mui/material'
import { RegistrationForm } from './RegistrationForm'

export const LoginRegistrationForm = ({open, handleClose}) => {
  const [formType, setFormType] = useState('login')
  return (
    <Dialog open={open} onClose={handleClose}>
        {formType==='login'?(<LoginForm setFormType={setFormType} />) : (<RegistrationForm setFormType={setFormType} />)  }
    </Dialog>
  )
}
