import { useState } from 'react'

function FunWithNumbers() {
  const [currentNumber, setCurrentNumber] = useState(3)

  // Example of creating a seperate function for each 'onClick'
  const minusThree = () => {
    const result = currentNumber - 3
    setCurrentNumber(result)
  }

  // Example of creating a single 'handleClick' function with conditionals 
  const handleClick = (operator: string, int: number) => {
    switch (operator) {
      case 'x':
        setCurrentNumber(currentNumber * int)
        break
      case '/':
        setCurrentNumber(currentNumber / int)
        break
      case '+':
        setCurrentNumber(currentNumber + int)
        break
    }
  }

  return (
    <>
      <h2>Fun with Numbers</h2>
      <p>{currentNumber}</p>

      {/* Example of changing state directly inside the 'onClick' */}
      <button onClick={() => setCurrentNumber((num) => (num *= 5))}>* 5</button>
      <button
        onClick={() => {
          minusThree()
        }}
      >
        - 3
      </button>
      <button
        onClick={() => {
          handleClick('/', 2)
        }}
      >
        / 2
      </button>
      <button
        onClick={() => {
          handleClick('+', 10)
        }}
      >
        + 10
      </button>
    </>
  )
}

export default FunWithNumbers
