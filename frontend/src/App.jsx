import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Landingpage from './pages/Landingpage'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage />} />
    </Routes>
    </BrowserRouter>
  )


}

export default App
