import { useState } from 'react'

const ToggleChallenge = () => {
  const [val, setVal] = useState(true)

  const handleClick = () => {
    if (val === true) {
      console.log(val)
      setVal(false)
    } else {
      console.log(val)
      setVal(true)
    }
  }

  return (
    <div>
      <h2>toggle challenge</h2>
      <button onClick={() => handleClick()} className="btn">
        toggle
      </button>
      {val && <Compo1 />}
    </div>
  )
}

const Compo1 = () => {
  // return <h1>yo {val ? 'true' : 'false'}</h1>
  return <h1 className="alert alert-danger">Hello World</h1>
}

export default ToggleChallenge
