import { useState } from 'react'

import Home from './pages/home'
import Header from './components/Header'
import Headern from './components/Headern'

function App() {
  const [count, setCount] = useState(0)

  return (
    < div className=' flex flex-col bg-gradient-to-t from-pink-100 to-blue-100'>
      <Header/>
      {/* <Headern/> */}
      <Home/>
    </div>
  )
}

export default App
