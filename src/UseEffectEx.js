import React, { useEffect, useState } from 'react';

function UseEffectEx({ url }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [items, setItems] = useState([])

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    // setItems(CustomApi.getList(url))
  }, [url])

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    return () => {
      window.removeEventListener('resize', updateWindowWidth)
    }
  }, [])

  return (
    <>
      <div>Window Width: {windowWidth}</div>
      {items.map(item => {
        return <div key={item}>{item}</div>
      })}
    </>
  )
}

export default UseEffectEx