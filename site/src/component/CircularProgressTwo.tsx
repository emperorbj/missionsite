import { useEffect, useState } from "react";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";

const CircularProgressTwo = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const handleIncrement = (prev: number) => {
            if (prev === 10) {
                return 0;
            }
            return prev + 2;
        };

        const interval = setInterval(() => {
            setValue((prev) => handleIncrement(prev)); // Use functional updater
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatedCircularProgressBar
            max={10}
            min={0}
            value={value}
            gaugePrimaryColor="rgb(79 70 229)"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
        />
    );
};

export default CircularProgressTwo;
