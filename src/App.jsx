import React from 'react'
import Q1 from './Q1.jsx'
import Q2 from './Q2.jsx'
import Q3 from './Q3.jsx'
import Q4 from './Q4.jsx'
import Q5 from './Q5.jsx'

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

   const products = [
    { name: 'Makanan', price: 5 },
    { name: 'Popok', price: 76 },
    { name: 'Vacuum', price: 100 }
  ];

  const productStock = [
    { name: 'Product A', inStock: true },
    { name: 'Product B', inStock: false },
    { name: 'Product C', inStock: true }
  ];

  return (
    <div>
      <Q1 name="Cherryl Callista Cheniago" age={15} isStudent={true} hobbies={['Watch youtube content', 'Badminton', 'Code']} contacts={contactsObj}/>

      <Q2 explaination={explainProp} func={myFunc}/>

      <Q3 {...handleClickObj}/>

      <Q4 products={products}/>

      <Q5 products={productStock}/>
    </div>
  )
}
