
import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CrearCuenta from './routes/CrearCuenta.jsx'
import Navbar from './components/Navbar.jsx'
import IniciarSesion from './routes/IniciarSesion.jsx'
import Dashboard from './routes/Dashboard.jsx'
import TodoWrapper from './components/TodoWrapper.jsx'
import EditNote from './components/EditNote.jsx'
import CreateNote from './components/CreateNote.jsx'
import NoteWrapper from './components/NoteWrapper'

function App() {

  const [notes, setNotes] = useState([])
  console.log(notes)

  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <NextUIProvider>
          <Routes>
            <Route exact path='/' element={<Hero />} />
            <Route exact path='/crear-cuenta' element={<CrearCuenta />} />
            <Route exact path='/iniciar-sesion' element={<IniciarSesion />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/to-do' element={<TodoWrapper />} />
            <Route exact path='/notes' element={<NoteWrapper notes={notes} />} />
            <Route exact path='/edit-note/' element={<EditNote />} />
            <Route exact path='/create-note' element={<CreateNote setNotes={setNotes} />} />

          </Routes>
        </NextUIProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
