import { useState, useEffect } from 'react';
import { formatTime } from '../utils/formatTime';

export function Hour() {
  const [currentTime, setCurrentTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>{currentTime}</p>
    </div>
  );
}
