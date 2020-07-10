import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const AddApplicant = () => {
  const applicants = useContext(ThemeContext)

  return (
    <div>
      <div>applicants</div>
      <form>
        <input />
        <button
          onClick={
            () => console.log('clicked')
            // add applicant to context
          }
        >
          add
        </button>
      </form>
      {applicants.map((applicant) => (
        <div key={applicant.name} style={{ border: '1px solid black' }}>
          {applicant.name}
        </div>
      ))}
    </div>
  )
}

export default AddApplicant
