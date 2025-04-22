import { useState } from "react"

function CounterX(props){
    const [count, setCount] = useState(0);
    function increment(){
        setCount(prev => prev + 1);
    }
    return(
        <>
            {
                props.render(count, increment)
            }
        
        </>
    )
}
export default CounterX