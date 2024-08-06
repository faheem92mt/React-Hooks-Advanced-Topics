import { useState } from 'react'

const CodeExample = () => {
  const [value, setValue] = useState(0)

  const sayHello = () => {
    console.log('Hello')
  }
  //git
  // the sayHello() function gets executed everytime setValue() is invoked
  // this happense because this function will get executed in each re-render

  // which can potentially cause an infinite loop if this function will have
  // an invocation of setValue() inside it
  sayHello()

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  )
}
export default CodeExample
