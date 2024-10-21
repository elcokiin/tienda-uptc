import './App.css';
import Bill from './Components/Bill/Bill'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router =createBrowserRouter([
  {
  path: '/',
  element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/bill',
    element: <div><Bill/></div>
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
