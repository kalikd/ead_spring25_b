import { useEffect, useState } from "react";

function Clock(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [count, setCount] = useState(20);
    useEffect(() => {
        // const interval = setInterval(() => {
        //     setTime(new Date().toLocaleTimeString())
        // }, 1000)
        
        // return () => {
        //     clearInterval(interval
        //     )
        // }
        console.log('useEffect called')
        setTime(new Date().toLocaleTimeString())
        return () => {
            console.log('Unmounting')
        }
    }, [])
    return (
        <div>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <button className="bg-[#000000] text-white p-2 rounded-lg" onClick={() => setCount(count + 1)}>Change Time</button>
        </div>
    );
}
export default Clock;