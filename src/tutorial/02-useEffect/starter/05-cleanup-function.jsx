import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [val, setVal] = useState(true)

  const handleClick = () => {
    if (val) {
      // console.log(val)
      setVal(false)
    } else {
      // console.log(val)
      setVal(true)
    }
  }

  return (
    <>
      <h2>cleanup function</h2>
      <button onClick={() => handleClick()} className="btn">
        Toggle
      </button>
      {val && <SecondComponent></SecondComponent>}
    </>
  )
}

const SecondComponent = () => {
  useEffect(() => {
    // console.log('Hmm, this is something')
    // const intID = setInterval(() => {
    //   console.log('hello from interval')
    // }, 1000)
    // // does not stop, keeps going
    // // every time we render component new interval gets created
    // return () => clearInterval(intID)
  }, [])

  return <h1>Hello</h1>
}

export default CleanupFunction
