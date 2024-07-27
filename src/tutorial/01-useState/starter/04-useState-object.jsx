import { useState } from 'react'

const someObject = {
  name: 'peter',
  age: 24,
  hobby: 'enjoys: read books',
}

const UseStateObject = () => {
  const [people, setPeople] = useState(someObject)

  const handleClick = () => {
    setPeople({ name: 'john', age: 26, hobby: 'enjoys: screaming at computer' })
  }

  return (
    <>
      <h2>useState object example</h2>
      <div>
        <p>{people.name}</p>
        <p>{people.age}</p>
        <p>{people.hobby}</p>
      </div>
      <button onClick={handleClick} className="btn">
        show john
      </button>
    </>
  )
}

export default UseStateObject
