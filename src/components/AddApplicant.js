import React from 'react'

const AddApplicant = ({
  inputName,
  setInputName,
  inputLocation,
  setInputLocation,
  addApplicant,
}) => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', width: '16rem' }}>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </label>
      <label>
        Location:
        <input
          type='text'
          name='location'
          value={inputLocation}
          onChange={(e) => setInputLocation(e.target.value)}
        />
      </label>
      <input type='button' value='Add new applicant' onClick={addApplicant} />
    </form>
  )
}
export default AddApplicant
