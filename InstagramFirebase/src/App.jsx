import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import Login from './components/login/Login'

function App() {
  const [count, setCount] = useState(0)
  const user = false;
  return (
    <>
    {
      user?(
      <div className="w-[90vw] h-[90vh] bg-[#fff] rounded-sm backdrop-blur-sm flex p-1">
        <List />
        <Chat />
        <Detail />
      </div>

      ):(
        <Login />
      )
    }
    </>
  )
}

export default App
