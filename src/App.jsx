import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'

import LoginSignupModal from './pages/AuthModal'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
     </Routes>
      
    </>
  )
}

export default App
