import React from 'react'
import Navigation from './componant/NavigationTemplate/Navigation'
import { ThemeContextProvider } from './ThemeContext'
import Main from './Main/Main'
import "./App.css";

const App = () => {
  return (
    <ThemeContextProvider>
      <div className='App'>
      <Navigation/>
      <Main/>

    </div>
    </ThemeContextProvider>
    
  )
}

export default App


