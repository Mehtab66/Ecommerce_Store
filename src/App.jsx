import { Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}></Route>
     </Routes>
      
    </>
  )
}

export default App
