import { useState, useEffect } from "react";

function Clock(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    },[count])
    return (
        <div className="flex flex-col items-center justify-center min-h-[200px] p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl">
            <h1 className="text-2xl font-bold text-gray-100 mb-4">Timer</h1>
            <h3 className="text-4xl font-mono text-blue-400 mb-6">{time}</h3>
            <button 
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg 
                          transform transition-all duration-200 hover:scale-105 active:scale-95 
                          shadow-lg hover:shadow-blue-500/50"
                onClick={() => setCount(count + 1)}
            >
                Update Time
            </button>
        </div>
    )
}

export default Clock;