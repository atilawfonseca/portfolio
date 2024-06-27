
import Header from './components/Header/header'
import MenuAside from './components/Aside/MenuAside'

import './App.css'
import { useState } from 'react'

function App() {

  const [stadoAside, getStadoAside] = useState(false);

  return (
    <div>
      <Header/>
      <MenuAside />
    </div>
  )
}

export default App
