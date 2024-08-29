import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/aboutUS' element= {<AboutUs/>}></Route>
    </Routes>
    </>
  )
}

export default App
