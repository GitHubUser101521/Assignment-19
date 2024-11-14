import React from 'react'
import Q1 from './Q1.jsx'
import Q2 from './Q2.jsx'
import Q3 from './Q3.jsx'

export default function App() {
   const contactsObj = {
    instagram: "cherry.cnc",
    email: 'cherrylcallistacheniago@gmail.com',
    youtube: "youtube"
   }

   const explainProp = 'In React, functions can be passed as props from parent components to child components. This allows for dynamic behavior and communication between components.'

   const explainSpread = `What is the function of the spread operator (...) in the context of props in React? Give an example of its use.`

   const myFunc = (productName) => {
    alert(`You bought ${productName}`);
   } 

   const handleClickObj = {
    explanation: explainSpread,
    one: 'nama1',
    two: 'nama2',
    three: 'nama3'
   }

  return (
    <div>
      <Q1 name="Cherryl Callista Cheniago" age={15} isStudent={true} hobbies={['Watch youtube content', 'Badminton', 'Code']} contacts={contactsObj}/>

      <Q2 explaination={explainProp} func={myFunc}/>

      <Q3 {...handleClickObj}/>
    </div>
  )
}
