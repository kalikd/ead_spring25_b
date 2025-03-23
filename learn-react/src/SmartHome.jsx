import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaRegLightbulb, FaTemperatureHigh, FaTv, FaFan, FaLock, FaUnlock } from "react-icons/fa";

const SmartHome = () => {
  const [isInside, setIsInside] = useState(false);
  const [temperature, setTemperature] = useState(24);
  const [isFanOn, setIsFanOn] = useState(false);
  const [isDoorLocked, setIsDoorLocked] = useState(true);

  useEffect(() => {
    if (isInside) {
      document.title = "🏡 Welcome Home!";
      setTemperature(22);
    } else {
      document.title = "🌙 Away Mode";
      setTemperature(28);
    }
  }, [isInside]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-950 text-white">
      {/* Smart Home Glass Panel */}
      <motion.div
        className={`w-[400px] h-[500px] rounded-2xl shadow-2xl bg-opacity-10 backdrop-blur-2xl border border-gray-500 flex flex-col items-center justify-center transition-all duration-500 ${
          isInside ? "bg-white/10 border-blue-400" : "bg-gray-800/10 border-gray-500"
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-semibold mb-4">
          {isInside ? "🏡 You're Home!" : "🌙 Away Mode"}
        </h2>

        {/* Lights */}
        <div className="flex items-center space-x-4 my-3">
          <span className="text-xl">Lights:</span>
          {isInside ? (
            <FaLightbulb className="text-yellow-400 text-4xl drop-shadow-lg transition-all duration-300" />
          ) : (
            <FaRegLightbulb className="text-gray-500 text-4xl transition-all duration-300" />
          )}
        </div>

        {/* Temperature Control */}
        <div className="flex items-center space-x-4 my-3">
          <FaTemperatureHigh className="text-red-400 text-3xl" />
          <p className="text-lg">Temperature: {temperature}°C</p>
        </div>

        {/* TV Control */}
        <div className="flex items-center space-x-4 my-3">
          <FaTv className={`text-4xl transition-all duration-300 ${isInside ? "text-blue-400" : "text-gray-500"}`} />
          <p className="text-lg">{isInside ? "📺 Netflix ON" : "📴 OFF"}</p>
        </div>

        {/* Fan Control */}
        <div className="flex items-center space-x-4 my-3">
          <FaFan
            className={`text-4xl transition-all duration-300 ${
              isFanOn ? "text-green-400 animate-spin" : "text-gray-500"
            }`}
          />
          <p className="text-lg">{isFanOn ? "🌪️ Fan ON" : "❄️ Fan OFF"}</p>
          <button
            className="px-3 py-1 text-sm rounded-lg bg-gray-700 hover:bg-green-500 transition-all"
            onClick={() => setIsFanOn(!isFanOn)}
          >
            {isFanOn ? "Stop Fan" : "Start Fan"}
          </button>
        </div>

        {/* Door Lock */}
        <div className="flex items-center space-x-4 my-3">
          {isDoorLocked ? <FaLock className="text-red-500 text-3xl" /> : <FaUnlock className="text-green-400 text-3xl" />}
          <p className="text-lg">{isDoorLocked ? "🔒 Door Locked" : "🔓 Door Unlocked"}</p>
          <button
            className="px-3 py-1 text-sm rounded-lg bg-gray-700 hover:bg-yellow-500 transition-all"
            onClick={() => setIsDoorLocked(!isDoorLocked)}
          >
            {isDoorLocked ? "Unlock" : "Lock"}
          </button>
        </div>

        {/* Smart Home Toggle Button */}
        <button
          className="mt-6 px-6 py-3 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500"
          onClick={() => setIsInside(!isInside)}
        >
          {isInside ? "🚪 Leave Home" : "🏡 Enter Home"}
        </button>
      </motion.div>
    </div>
  );
};

export default SmartHome;
