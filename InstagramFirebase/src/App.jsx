import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-[90vw] h-[90vh] bg-[#fff] rounded-sm backdrop-blur-sm border-2 border-red-300 flex">
        <List />
        <Chat />
        <Detail />
      </div>
    </>
  )
}

export default App
