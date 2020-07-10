import React, { useState } from 'react'
import AddApplicant from './AddApplicant'
import Applicants from './Applicants'
import initialApplicants from '../mockData'
import Button from '@material-ui/core/Button'

const ApplicantsContainer = () => {
  const [applicants, setApplicants] = useState([initialApplicants])

  const [open, setOpen] = useState(false)
  const handleOpenDialog = () => {
    setOpen(true)
  }
  const handleCloseDialog = () => {
    setOpen(false)
  }

  const addApplicant = (
    inputName,
    inputLocation,
    inputBusinessName,
    inputRevenue,
    inputIndustry,
    inputEmployees,
    inputBusinessDescription
  ) => {
    let newId = Math.random().toString()
    let newArr = [
      ...applicants[0],
      {
        id: newId,
        content: {
          name: inputName,
          location: inputLocation,
          businessName: inputBusinessName,
          revenue: inputRevenue,
          industry: inputIndustry,
          employees: inputEmployees,
          businessDescription: inputBusinessDescription,
        },
      },
    ]
    let groups = applicants.slice(1)
    setApplicants([[...newArr], ...groups])
    handleCloseDialog()
  }

  return (
    <div style={{ background: 'papayawhip', padding: 16, minHeight: '92vh' }}>
      <div style={{ paddingBottom: 8 }}>
        <Button
          variant='contained'
          color='primary'
          style={{ marginLeft: 8, marginRight: 8, width: 164 }}
          onClick={handleOpenDialog}
        >
          add applicant
        </Button>

        <AddApplicant
          open={open}
          handleCloseDialog={handleCloseDialog}
          addApplicant={addApplicant}
        />

        <Button
          variant='contained'
          color='primary'
          style={{ width: 164 }}
          onClick={() => {
            setApplicants([...applicants, []])
          }}
        >
          Add new group
        </Button>
      </div>

      <Applicants applicants={applicants} setApplicants={setApplicants} />
    </div>
  )
}

export default ApplicantsContainer
