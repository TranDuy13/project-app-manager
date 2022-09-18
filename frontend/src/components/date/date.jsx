import { useEffect } from "react";
import { useState } from "react";
import './date.scss'

function Datetime() {
  const useDate = () => {
    const locale = "en";
    const [showDate, setDate] = useState(new Date());
    useEffect(() => {
      const timer = setInterval(() => {
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer);
      };
    }, []);

    const day = showDate.toLocaleDateString(locale, { weekday: "long" });
    const date = `${day}, ${showDate.getDate()} ${showDate.toLocaleDateString(
      locale,
      {
        month: "long",
      }
    )}\n\n`;

    const hour = showDate.getHours();
    const wish = `Good ${
      (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
    }, `;

    const time = showDate.toLocaleTimeString(locale, {
      hour: "numeric",
      hour12: true,
      minute: "numeric",
    });
    return {
        date,
        time,
        wish,
      };
  };
  const { date, time, wish } = useDate();
  
  return (
    <>
    
      <div className="date">{date}</div>
      <div className="time">{time}</div>
      <div className="greetings">{wish}&nbsp;</div>
    </>
  );
}
export default Datetime;
