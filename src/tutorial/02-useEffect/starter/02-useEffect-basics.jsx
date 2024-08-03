import { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  const sayHello = () => {
    console.log('hello there')
  }

  // this function will be invoked on each re-render
  // in our example, when the "value" changes
  sayHello()

  // since we used '[]' as the second parameter
  // it wont be invoked on re-render
  useEffect(() => {
    console.log('Hello from useEffect')
  }, [])

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  )
}
export default UseEffectBasics
