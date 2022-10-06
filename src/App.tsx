import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const height = 50;

  return (
    <>
      <div className="App" style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
        width: '100vw',
        paddingBottom: height
      }}>
        <div style={{ backgroundColor: 'yellow', flex: 1 }}>
          <input />
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
        </div>
        <div style={{ backgroundColor: 'orange', flex: 1 }}>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some text</p>
          <p>This is some tex 312 t</p>
          <p>This is some text 32 312</p>
          <p>This is some text 2 2 2 2</p>
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          backgroundColor: 'red',
          height,
        }}
      ></div>
    </>
  )
}

export default App
