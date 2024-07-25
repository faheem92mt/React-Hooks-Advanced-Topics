import { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState('fhm'))

  // const value = useState('hello')[0]
  // const func = useState('hello')[1]

  // console.log(value)
  // console.log(func)

  // a stateful variable & a setter function
  const [count, setCount] = useState(0)

  const handleClick = () => {
    // the setter function changes the value of the stateful variable
    setCount(count + 1)
    console.log(count)
  }

  return (
    <>
      <h2>useState basics</h2>
      <h4>You clicked {count} times</h4>
      <button onClick={handleClick} type="button" className="btn">
        Click me
      </button>
    </>
  )
}

export default UseStateBasics
