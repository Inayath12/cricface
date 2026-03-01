// import { useEffect, useState } from "react";

// const LimitedOfferTimer = () => {
//   const targetDate = new Date();
//   targetDate.setDate(targetDate.getDate() + 5);

//   const [timeLeft, setTimeLeft] = useState(targetDate.getTime());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(targetDate.getTime() - new Date().getTime());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const days = Math.max(Math.floor(timeLeft / (1000 * 60 * 60 * 24)), 0);
//   const hours = Math.max(
//     Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
//     0
//   );

//   return (
//     <div className="bg-black text-white text-center py-4 text-sm">
//       Limited Offer Ending In: {days} Days {hours} Hours
//     </div>
//   );
// };

// export default LimitedOfferTimer;

import { useEffect, useState } from "react";

const LimitedOfferTimer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  // Set target date (5 days from first load)
  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 2);

    const interval = setInterval(() => {
      const difference = target.getTime() - new Date().getTime();
      setTimeLeft(difference > 0 ? difference : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-5">

      {/* Glow Pulse Background */}
      <div className="absolute inset-0 animate-pulse bg-red-500 opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center">

        <span className="text-sm md:text-base font-semibold tracking-wide uppercase animate-pulse">
          🔥 Limited Time Offer Ends In
        </span>

        <div className="flex gap-3 text-lg md:text-2xl font-bold">

          <TimeBox value={format(days)} label="Days" />
          <TimeBox value={format(hours)} label="Hours" />
          <TimeBox value={format(minutes)} label="Minutes" />
          <TimeBox value={format(seconds)} label="Seconds" />

        </div>

      </div>
    </div>
  );
};

const TimeBox = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-center bg-black/30 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
      <span className="text-xl md:text-2xl font-black tracking-widest">
        {value}
      </span>
      <span className="text-xs uppercase tracking-wide opacity-80">
        {label}
      </span>
    </div>
  );
};

export default LimitedOfferTimer;