import React, { useState } from 'react'
import AddApplicant from './AddApplicant'
import Applicants from './Applicants'
import initialApplicants from '../mockData'
import Button from '@material-ui/core/Button'

const ApplicantsContainer = () => {
  const [applicants, setApplicants] = useState([initialApplicants])
  console.log(applicants)

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

  const sortApplicants = (sortType) => {
    let newArr = applicants[0].sort((a, b) => {
      if (a.content[sortType] < b.content[sortType]) return -1
      if (a.content[sortType] > b.content[sortType]) return 1
      return 0
    })

    let groups = applicants.slice(1)
    setApplicants([[...newArr], ...groups])
  }

  const buttonStyle = {
    margin: 8,
    marginTop: 0,
    width: 172,
  }

  return (
    <div style={{ background: 'papayawhip', padding: 16, minHeight: '92vh' }}>
      <div style={{ paddingBottom: 8 }}>
        <Button
          variant='contained'
          color='primary'
          style={buttonStyle}
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
          style={buttonStyle}
          onClick={() => {
            setApplicants([...applicants, []])
          }}
        >
          Add new group
        </Button>
      </div>

      {['name', 'revenue'].map((sortType) => (
        <Button
          variant='outlined'
          color='primary'
          style={buttonStyle}
          onClick={() => sortApplicants(sortType)}
        >
          sort by {sortType}
        </Button>
      ))}

      <Applicants applicants={applicants} setApplicants={setApplicants} />
    </div>
  )
}

export default ApplicantsContainer
