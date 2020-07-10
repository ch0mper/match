import React from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import ApplicantsContainer from './components/ApplicantsContainer'

const App = () => {
  return (
    <ErrorBoundary>
      <ApplicantsContainer />
    </ErrorBoundary>
  )
}

export default App
