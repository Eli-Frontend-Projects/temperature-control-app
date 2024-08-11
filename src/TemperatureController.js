import { useState, useEffect } from "react";


function TemperatureController(){
    const [temperature, setTemperature] = useState(30);
    //console.log(document.body.style.backgroundColor);
    useEffect(() => {
        document.body.style.backgroundColor = getBackgroundColor();
      }, [temperature]);
    
      const increaseTemperature = () => {
        setTemperature(prevTemp => prevTemp + 1);
      };
    
      const decreaseTemperature = () => {
        setTemperature(prevTemp => prevTemp - 1);
      };
    
      const getBackgroundColor = () => {
        if (temperature < 15) return '#00f'; // Cold - Blue
        if (temperature < 30) return '#0f0'; // Warm - Green
        return '#f00'; // Hot - Red
      };
    return (
        <div>
            <button onClick={decreaseTemperature}>-</button>
            <button onClick={increaseTemperature}>+</button>
        </div>
    )
}

export default TemperatureController;