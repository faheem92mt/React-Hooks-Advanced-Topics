import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url)
        if (!resp.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }
        const data = await resp.json()
        setUser(data)
        console.log(data)
      } catch (error) {
        setIsError(true)
        console.log(error)
      }
      setIsLoading(false)
    }
    fetchUser()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>There was an error...</h2>
  }

  const { avatar_url, name, company, bio } = user

  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData
