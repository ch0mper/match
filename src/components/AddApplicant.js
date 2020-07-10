import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'

const AddApplicant = ({ open, handleCloseDialog, addApplicant }) => {
  const [inputName, setInputName] = useState('')
  const [inputLocation, setInputLocation] = useState('')
  const [inputBusinessName, setInputBusinessName] = useState('')
  const [inputRevenue, setInputRevenue] = useState('')
  const [inputIndustry, setInputIndustry] = useState('')
  const [inputEmployees, setInputEmployees] = useState('')
  const [inputBusinessDescription, setInputBusinessDescription] = useState('')

  const clearApplicantFormInputs = () => {
    setInputName('')
    setInputLocation('')
    setInputBusinessName('')
    setInputRevenue('')
    setInputIndustry('')
    setInputEmployees('')
    setInputBusinessDescription('')
  }

  const handleClose = () => {
    clearApplicantFormInputs()
    handleCloseDialog()
  }

  const clearInputsAndAddApplicant = () => {
    addApplicant(
      inputName,
      inputLocation,
      inputBusinessName,
      inputRevenue,
      inputIndustry,
      inputEmployees,
      inputBusinessDescription
    )
    clearApplicantFormInputs()
  }

  const addApplicantFormFields = [
    { id: 'name', label: 'Name', value: inputName, setValue: setInputName },
    {
      id: 'location',
      label: 'Location',
      value: inputLocation,
      setValue: setInputLocation,
    },
    {
      id: 'businessName',
      label: 'Business Name',
      value: inputBusinessName,
      setValue: setInputBusinessName,
    },
    {
      id: 'revenue',
      label: 'Revenue',
      value: inputRevenue,
      setValue: setInputRevenue,
    },
    {
      id: 'industry',
      label: 'Industry',
      value: inputIndustry,
      setValue: setInputIndustry,
    },
    {
      id: 'employees',
      label: 'No. of Employees',
      value: inputEmployees,
      setValue: setInputEmployees,
    },
    {
      id: 'businessDescription',
      label: 'Business Description',
      value: inputBusinessDescription,
      setValue: setInputBusinessDescription,
    },
  ]

  return (
    <Dialog open={open} onClose={handleClose}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 8,
          width: '24rem',
        }}
      >
        {addApplicantFormFields.map((field) => (
          <TextField
            key={field.id}
            id={field.id}
            label={field.label}
            variant='filled'
            margin='dense'
            autoComplete='off'
            value={field.value}
            onChange={(e) => field.setValue(e.target.value)}
          />
        ))}

        <DialogActions>
          <Button
            variant='contained'
            color='primary'
            onClick={clearInputsAndAddApplicant}
          >
            Add
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
export default AddApplicant
