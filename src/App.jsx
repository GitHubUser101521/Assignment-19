import React from 'react'
import Q1 from './Q1.jsx'

export default function App() {
   const contactsObj = {
    instagram: "cherry.cnc",
    email: 'cherrylcallistacheniago@gmail.com',
    youtube: "youtube"
   }

  return (
    <div>
      <Q1 name="Cherryl Callista Cheniago" age={15} isStudent={true} hobbies={['Watch youtube content', 'Badminton', 'Code']} contacts={contactsObj}/>
    </div>
  )
}
