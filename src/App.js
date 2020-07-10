import React from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import ApplicantsContainer from './components/ApplicantsContainer'

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <ApplicantsContainer />
    </ErrorBoundary>
  )
}

export default App
