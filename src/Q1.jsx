import React from 'react'

function Q1({ name, age, isStudent, hobbies, contacts }) {
  return (
    <div>
      <h2>Get to know me!</h2>

      <p>Hello, my name is {name}. I am {age} years old {isStudent ? "and I am a student" : ''}.</p>
      <p>My hobbies are:</p>
      <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
    </ul>

      <h3>Contact me</h3>
      <p>Email: {contacts.email}</p>
      <p>Instagram: {contacts.instagram}</p>
      <p>Youtube: {contacts.youtube}</p>

      <br /><hr />
    </div>
  )
}

export default Q1