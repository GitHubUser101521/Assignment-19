import React from 'react'

export default function Q2({ explaination, func }) {
  const productArr = ['chicken', 'bread', 'water'];

  return (
    <div>
      <p>{explaination}</p>
      {productArr.map((product, index) => (
        <button key={index} onClick={() => func(product)}>{product}</button>
      ))}

      <br /><hr />
    </div>
  )
}
