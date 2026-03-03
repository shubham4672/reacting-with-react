import './App.css'
import DarkLight from './components/DarkLight'
import ThemeProvider from './context/ThemeProvider'

function App() {

  return (
    <ThemeProvider >
      <DarkLight />
    </ThemeProvider>
  )
}

export default App
