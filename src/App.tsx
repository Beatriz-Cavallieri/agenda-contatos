import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {

  return (
    <BrowserRouter>
      <h1>Contatos</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
