import React, {useEffect, useState} from "react";
import {Text} from "react-native";

const Timer = () => {
    const [timer, setTimer] = useState(new Date());

    useEffect(() => {
        const updatedTimer = () => {setTimer(new Date())};
        const interval = setInterval(updatedTimer, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    return (
        <Text>
            {timer.toLocaleString()}
        </Text>
   );
};

export default Timer;