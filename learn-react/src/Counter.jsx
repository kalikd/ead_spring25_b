import { useState } from "react"
export default function Counter(){
    // const [count, setCount] = useState(50)
    const [isLoading, setIsLoading] = useState(false)
    const [obj, setObj] = useState({
        count: 50,
        name: 'Ali',
        age:40
    })

    function increment(offset){
        setObj((prev) => ({
            ...prev,
            count: prev.count + offset
        }))
    }

    return (
        <>
            <h1>Counter</h1>
            <button onClick={() => setCount(count-1)}>-</button>
            <h4>{obj.count}</h4>
            <button onClick={() =>increment(5)}>+</button>
            <h3>{obj.name} - {obj.age}</h3>
        </>
    )
}