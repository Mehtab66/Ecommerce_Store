import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import { UserDashboard } from './components/UserComponents/UserDashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<UserDashboard />}></Route>
     </Routes>
      
    </>
  )
}

export default App
