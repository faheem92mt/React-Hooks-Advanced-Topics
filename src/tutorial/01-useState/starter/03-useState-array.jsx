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

  return (
    <>
      <div>
        {people.map((person) => {
          const { id, name } = person
          return (
            <article key={id}>
              <p>{name}</p>
              <button onClick={() => handleClick(id)}>click me</button>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default UseStateArray
