import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({ name: 'Faheem' })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <>
      <h2>user challenge</h2>

      {user ? <h1>Hello There {user.name}</h1> : <h1>Please log in</h1>}

      {user ? (
        <button onClick={() => logout()} className="btn">
          logout
        </button>
      ) : (
        <button onClick={() => login()} className="btn">
          login
        </button>
      )}
    </>
  )
}

export default UserChallenge
