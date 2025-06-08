import { useState } from 'react'
import './App.css';
import { createBrowserRouter,Router,RouterProvider,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EditPage from './pages/EditPage';





const router = createBrowserRouter([
  {path:"/",
    element: <Home/>
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/edit",
    element: <EditPage/>
  }
]);

function App() {


  return (
    <div>
      <h1 className='main-heading'>Meme Generator</h1>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
