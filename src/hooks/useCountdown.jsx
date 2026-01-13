import { useEffect, useState } from "react";

const useCountdown = (endTime) => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const end = new Date(endTime).getTime();
            const diff = end - now;

            if (diff <= 0) {
                clearInterval(timer);
                setTimeLeft({ ended: true });
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    return timeLeft;
};

export default useCountdown;
