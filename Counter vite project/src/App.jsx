import { useState } from 'react'

import './App.css'

function App() {
  
  let [count, setCount] = useState(0)
  const addcounter=()=>{
    if(count<5)
    setCount(count=count+1)
  }
  const removecounter=()=>{
    if(count>0){

      setCount(count-1)
    }
  }
  return (
    <>
      <button onClick={addcounter}>Add count{count}</button>
      <button onClick={removecounter}>Remove count</button>
    </>
  )
}

export default App
