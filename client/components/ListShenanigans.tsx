import { useState } from 'react'

function ListShenanigans() {
  const [lists, setLists] = useState({
    left: [
      'Apple',
      'DVD Player',
      'Mysterious Smell',
      'Pompom Hat',
      'Praying Mantis',
      'Skeletor',
    ],
    right: [
      'Caltrops',
      'Chad Maywether Jr.',
      'Comedy Bang! Bang!',
      'Freshly Cut Grass',
      'Stop Sign',
    ],
  })

  // We can use any kind of state variable we like
  // const [leftList, setLeftList] = useState([
  //   'Apple',
  //   'DVD Player',
  //   'Mysterious Smell',
  //   'Pompom Hat',
  //   'Praying Mantis',
  //   'Skeletor',
  // ])
  // const [rightList, setRightList] = useState([
  //   'Caltrops',
  //   'Chad Maywether Jr.',
  //   'Comedy Bang! Bang!',
  //   'Freshly Cut Grass',
  //   'Stop Sign',
  // ])

  const handleClick = (item: string, direction: string) => {
    // Two ways to set the state directly, or with a callback
    setLists({ left: [...lists.left], right: [...lists.right] })
    setLists((oldLists) => {
      return { left: [...oldLists.left], right: [...oldLists.right] }
    })

    // move left to right with arrays
    if (direction === 'right') {
      // setLists((prevLists) => {
      //   const newLeft = prevLists.left.filter((i) => i !== item)
      //   const newRight = [...prevLists.right, item].sort()
      //   return { left: newLeft, right: newRight }
      // })
      const leftCopy = [...lists.left]
      const rightCopy = [...lists.right]
      rightCopy.push(item)
      leftCopy.splice(lists.left.indexOf(item), 1)
      setLists({ left: leftCopy, right: rightCopy.sort() })
    }
    // move right to left (callback style)
    else if (direction === 'left') {
      setLists((prevLists) => {
        const newRight = prevLists.right.filter((i) => i !== item)
        const newLeft = [...prevLists.left, item].sort()
        return { left: newLeft, right: newRight }
      })
    }
  }

  return (
    <>
      <h2>List Shenanigans</h2>
      <section className="container">
        {/* left list */}
        <ul>
          {lists.left.map((item) => (
            <li key={item}>
              {item}{' '}
              <button onClick={() => handleClick(item, 'right')}>→</button>
            </li>
          ))}
        </ul>
        {/* right list */}
        <ul>
          {lists.right.map((item) => (
            <li key={item}>
              <button onClick={() => handleClick(item, 'left')}>←</button>{' '}
              {item}
            </li>
          ))}
        </ul>
        <ul></ul>
      </section>
    </>
  )
}

export default ListShenanigans
