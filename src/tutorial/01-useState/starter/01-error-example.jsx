const ErrorExample = () => {
  let x = 0
  const countLabel = document.getElementById('countLabel')
  const btnfnc = () => {
    x++
    // countLabel.textContent = x
    console.log(x)
  }

  return (
    <>
      <h2>useState error example</h2>
      <label id="countLabel">{x}</label>
      <button className="btn" onClick={btnfnc}>
        Click
      </button>
    </>
  )
}

export default ErrorExample
