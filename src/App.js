import React from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import AddApplicant from './components/AddApplicant'

const applicants = [
  { name: 'name1', location: 'Houston, TX' },
  { name: 'name2', location: 'Houston, TX' },
]

export const ThemeContext = React.createContext(applicants)

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={applicants}>
        <AddApplicant />
      </ThemeContext.Provider>
    </ErrorBoundary>
  )
}

export default App
