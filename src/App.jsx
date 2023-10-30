import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useContentful from './hooks/useContentful'

function App() {
  const { getGuitars } = useContentful()
  const [guitars, setGuitars] = useState(null)

  useEffect(() => {
    getGuitars().then((data) => {
      setGuitars(data)
      console.log(data);
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      {!guitars ? <p>Loading...</p> : guitars.map((guitar) => {
        return (
          <div className="card">
            <img src={guitar.img} alt={guitar.brand} />
            <div className="card-body">
              <h5 className="card-title">{guitar.brand}</h5>
              <p className="card-text">{guitar.description}</p>
            </div>
          </div>
        )
      })}
     
    </>
  )
}

export default App
