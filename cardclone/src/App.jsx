import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'


function App() {
  
  return (
    <>
    
     <div className='ham'>
     <Card image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnj77hHItr8yVRuLbm6M_aakc87iWdB5Y-Tg&s'} title={'honda civic'}
      description={'best module in honda history and easy,smooth to drive and provid best experience for driver'} time={' 13 hours ago'}
      location={'bahadorab karachi, pakistan'}/>


<Card image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RScWI4AnKCpyzC_BfjEE1ob19lzDU4YY8A&s'} title={'toyota crolla'}
      description={'best module in toyota history and easy,smooth to drive and provid best experience for driver'} time={' 14 hours ago'}
      location={'gulshan karachi, pakistan'}/>
    
     </div>
   

    </>
  )
}

export default App
