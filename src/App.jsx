import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import { UserDashboard } from './components/UserComponents/UserDashboard'
import AdminDashboard from './components/AdminComponents/Admindashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<UserDashboard />}></Route>
                <Route path='/admin' element={<AdminDashboard />}></Route>

     </Routes>
      
    </>
  )
}

export default App
