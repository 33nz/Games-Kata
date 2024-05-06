import { useState } from 'react'

import FunWithNumbers from './FunWithNumbers'
import NeglectThePumpkins from './NeglectThePumpkins'
import ListShenanigans from './ListShenanigans'
import PixelParty from './PixelParty'
import Select from './Select'

function App() {
  const [activeKata, setActiveKata] = useState('select')

  const handleClick = (kata: string) => {
    setActiveKata(kata)
  }

  return (
    <>
      <header>
        <h1>React Kata</h1>
        <nav>
          <p>Choose a kata to display</p>
          <button onClick={() => handleClick('funWithNumbers')}>
            Fun with Numbers
          </button>
          <button onClick={() => handleClick('pixelParty')}>Pixel Party</button>
          <button onClick={() => handleClick('listShenanigans')}>
            List Shenanigans
          </button>
          <button onClick={() => handleClick('neglectThePumpkins')}>
            Neglect the Pumpkins
          </button>
        </nav>
      </header>
      <main>
        {activeKata === 'select' && <Select />}
        {activeKata === 'funWithNumbers' && <FunWithNumbers />}
        {activeKata === 'pixelParty' && <PixelParty />}
        {activeKata === 'listShenanigans' && <ListShenanigans />}
        {activeKata === 'neglectThePumpkins' && <NeglectThePumpkins />}
      </main>
    </>
  )
}

export default App
