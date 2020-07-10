import React, { useState } from 'react'
import AddApplicant from './AddApplicant'
import Applicants from './Applicants'
import initialApplicants from '../mockData'

const ApplicantsContainer = () => {
  const [applicants, setApplicants] = useState([initialApplicants])

  const [inputName, setInputName] = useState('')
  const [inputLocation, setInputLocation] = useState('')

  const addApplicant = () => {
    let newId = Math.random().toString()
    let newArr = [
      ...applicants[0],
      { id: newId, content: { name: inputName, location: inputLocation } },
    ]
    let groups = applicants.slice(1)
    setApplicants([[...newArr], ...groups])
    setInputName('')
    setInputLocation('')
  }

  return (
    <div>
      <AddApplicant
        inputName={inputName}
        setInputName={setInputName}
        inputLocation={inputLocation}
        setInputLocation={setInputLocation}
        addApplicant={addApplicant}
      />

      <button
        type='button'
        onClick={() => {
          setApplicants([...applicants, []])
        }}
      >
        Add new group
      </button>

      <Applicants applicants={applicants} setApplicants={setApplicants} />
    </div>
  )
}

export default ApplicantsContainer
