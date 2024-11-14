import React from 'react'
import Q1 from './Q1.jsx'
import Q2 from './Q2.jsx'

export default function App() {
   const contactsObj = {
    instagram: "cherry.cnc",
    email: 'cherrylcallistacheniago@gmail.com',
    youtube: "youtube"
   }

   const explainProp = 'In React, functions can be passed as props from parent components to child components. This allows for dynamic behavior and communication between components.'

   const myFunc = (productName) => {
    alert(`You bought ${productName}`);
   } 

  return (
    <div>
      <Q1 name="Cherryl Callista Cheniago" age={15} isStudent={true} hobbies={['Watch youtube content', 'Badminton', 'Code']} contacts={contactsObj}/>

      <Q2 explaination={explainProp} func={myFunc}/>
    </div>
  )
}
