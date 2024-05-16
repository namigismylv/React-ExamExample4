import { } from 'react'
import './App.css'
import MainContext from './Context/Context'
import ROUTES from './Routes/routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const routes=createBrowserRouter(ROUTES)
  
  const contextData={}
  return (
    <MainContext.Provider  value={contextData} >
    <RouterProvider router={routes}/>

    </MainContext.Provider>
  )
}

export default App
