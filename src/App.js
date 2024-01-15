import { BrowserRouter, Routes, Route, NavLink, Router  } from 'react-router-dom'
import Home from './view/Home'
import About from './view/About'
import ToDo from './view/todoList'
import Echarts from './view/echarts-warp'
import './App.css';
function App() {

  return <>
    <div style={{marginBottom: '30px'}}>
    <NavLink to='/home' activeclassname="active">Home</NavLink>
      <NavLink to='/about' activeclassname="active">About</NavLink>
      <NavLink to='/todo' activeclassname="active">ToDo</NavLink>
      <NavLink to='/echarts' activeclassname="active">Echarts</NavLink>
    </div>
    <Routes>
      <Route path="/" element={<div>路由演练</div>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path='/todo' element={<ToDo></ToDo>}></Route>
      <Route path='/echarts' element={<Echarts></Echarts>}></Route>
    </Routes>
</>
}

export default App;
