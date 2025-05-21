import { useState } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'


function App() {
 
  // Estado para tema dark-light
  const [darkMode, setDarkMode] = useState(false)

  return (
    
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Header darkMode={darkMode} serDarkMode={setDarkMode}/>
      <main>
        <Hero />
        {}
      </main>
    </div> 
     

  )
}

export default App
