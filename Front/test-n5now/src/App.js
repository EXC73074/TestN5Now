import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import Permission from './Pages/Permission/Permission.jsx'
import List from './Pages/List/List.jsx'
import Home from './Pages/Home/Home.jsx'
export default function App(){
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/' element = {<Home/>} />
                <Route path='/permission' element = {<Permission/>} />
                <Route path='/list' element = {<List/>} />
            </Routes>         
        </Router>
    )
}