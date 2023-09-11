/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CrearCuenta from './routes/CrearCuenta.jsx'
import Navbar from './components/Navbar.jsx'
import CreateNote from './routes/CreateNote.jsx'
import MyNotes from './routes/MyNotes.jsx'
import Hero from './components/Hero.jsx'
import IniciarSesion from './routes/IniciarSesion.jsx'
import Dashboard from './routes/Dashboard.jsx'
import TodoWrapper from './components/TodoWrapper.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <NextUIProvider>
        <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route exact path='/crear-cuenta' element={<CrearCuenta />} />
          <Route exact path='/iniciar-sesion' element={<IniciarSesion />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/create-note' element={<CreateNote />} />
          <Route exact path='/my-notes' element={<MyNotes />} />
          <Route exact path='/to-do' element={<TodoWrapper />} />
        </Routes>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
