import { useState } from "react";

function Counter(){

  // const [count, setCount] = useState(0)
  const [obj, setObj] = useState({name: 'KD', age: 25, count: 0})

  function increment(offset){
    // setCount((count) => count+ offset)
    setObj((obj) => {
      return {
        ...obj,
        count: obj.count + offset
      }
    })
  }
  function decrement(offset){
    // setCount(count => count - offset)
  }
    return (
      <>
        <h1>Counter</h1>
        <button onClick={() => decrement(1)}>Decrement</button>
        <h3>{obj.count}</h3>
        <button onClick={() => increment(5)}>Increment</button>

        <h3>
        {obj.name } - {obj.age}
          </h3>
      </>

    )
  }

export default Counter;