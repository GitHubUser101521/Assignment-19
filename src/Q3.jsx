import React, {useState} from 'react'

export default function Q3({ explanation, one, two, three }) {
  return (
    <div>
        <p>{explanation}</p>
      <p>I have 3 friends: {one}, {two}, {three}</p>

      <br /><hr />
    </div>
  )
}
