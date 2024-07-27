import { useState } from 'react'

const UseStateGotcha = () => {
  const [num, setNum] = useState(0)

  const handleClick = () => {
    // setNum(num + 1)
    setNum((currentState) => {
      let newState = currentState + 1
      return newState
    })
    console.log(num)
  }

  return (
    <>
      <h2>useState "gotcha"</h2>
      <p>{num}</p>
      <button className="btn" type="button" onClick={handleClick}>
        inc
      </button>
    </>
  )
}

export default UseStateGotcha
