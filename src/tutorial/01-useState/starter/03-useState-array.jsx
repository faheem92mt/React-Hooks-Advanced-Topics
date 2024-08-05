import { data } from '../../../data'
import { useState } from 'react'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const handleClick = (id) => {
    let newPeople = people.filter((person) => {
      return person.id !== id
    })
    setPeople(newPeople)
  }
  //git
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <p>{name}</p>
            <button onClick={() => handleClick(id)}>clear</button>
            <br />
            <br />
          </div>
        )
      })}
      <button
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        clear all
      </button>
    </div>
  )
}

export default UseStateArray
