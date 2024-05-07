import { useState } from 'react'

function Pixel() {
  const [color, setColor] = useState(getColor())
  const [lock, setLock] = useState(false)

  function getColor() {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  }

  const handleClick = () => {
    if (!lock) {
      setColor(getColor())
    }
  }

  const handleDoubleClick = () => {
    setLock(true)
    setColor('#000000')
  }

  const handleRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setLock(false)
    setColor(getColor())
  }

  return (
    <div
      onContextMenu={handleRightClick}
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
      className="pixel"
      style={{ background: color }}
    ></div>
  )
}

export default Pixel
