import { useState } from 'react'
import './App.css'

function App() {
  const [Color, setColor] = useState("black");

  return (
    <div className='flex w-full h-screen align-middle justify-center' style={{ backgroundColor: Color}}>
      <div className='flex flex-wrap rounded-full justify-between w-4/5 px-3 fixed bottom-12 text-white bg-slate-600 shadow-lg'>
        <button className='px-4 rounded-full my-2 bg-red-400' onClick={() => setColor("red")}>Red</button>
        <button className='px-4 rounded-full my-2 bg-violet-400' onClick={() => setColor("violet")}>Indigo</button>
        <button className='px-4 rounded-full my-2 bg-yellow-400' onClick={() => setColor("yellow")}>Yellow</button>
        <button className='px-4 rounded-full my-2' style={{backgroundColor: Color}} onClick={() => setColor("green")}>Green</button>
        <button
          className='px-4 rounded-full my-2'
          style={{ backgroundColor: Color }}
          onClick={() => setColor("pink")}
        >Pink</button>
      </div>
    </div>
  )
}

export default App
