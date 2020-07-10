import React from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
// import AddApplicant from './components/AddApplicant'
import ApplicantsDnd from './components/dnd'

const applicants = [
  { id: '1', content: {name: 'name1', location: 'Houston, TX'} },
  { id: '2', content: {name: 'name2', location: 'New York, NY'} },
  { id: '3', content: {name: 'name3', location: 'New York, NY'} },
]

export const ThemeContext = React.createContext(applicants)

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={applicants}>
        {/* <AddApplicant /> */}
        <ApplicantsDnd />
      </ThemeContext.Provider>
    </ErrorBoundary>
  )
}

export default App
