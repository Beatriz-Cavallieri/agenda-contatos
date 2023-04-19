import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import CreateContact from './pages/CreateContact'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreateContact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
