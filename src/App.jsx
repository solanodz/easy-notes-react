
import { useEffect, useState } from 'react'
import './App.css'
import Hero from './routes/Hero'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CrearCuenta from './routes/CrearCuenta.jsx'
import Navbar from './components/Navbar.jsx'
import IniciarSesion from './routes/IniciarSesion.jsx'
import Dashboard from './routes/Dashboard.jsx'
import TodoWrapper from './components/TodoWrapper.jsx'
import EditNote from './components/EditNote.jsx'
import CreateNote from './components/CreateNote.jsx'
import Notes from './components/Notes'

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  console.log(notes)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div>

      <BrowserRouter>
        {/* <Navbar /> */}
        <NextUIProvider>
          <Routes>
            <Route exact path='/' element={<><Hero /></>} />
            <Route exact path='/crear-cuenta' element={<><CrearCuenta /></>} />
            <Route exact path='/iniciar-sesion' element={<><IniciarSesion /> </>} />
            <Route exact path='/dashboard' element={<><Dashboard /> <Navbar /></>} />
            <Route exact path='/to-do' element={<> <Navbar /><TodoWrapper /></>} />
            <Route exact path='/notes' element={<> <Navbar /> <Notes notes={notes} /></>} />
            <Route exact path='/edit-note/:id' element={<><EditNote notes={notes} setNotes={setNotes} /> <Navbar /></>} />
            <Route exact path='/create-note' element={<><CreateNote setNotes={setNotes} /> <Navbar /></>} />

          </Routes>
        </NextUIProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
