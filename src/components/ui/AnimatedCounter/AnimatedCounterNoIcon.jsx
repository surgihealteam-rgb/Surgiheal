import { useEffect, useRef, useState } from "react";

const AnimatedCounterNoIcon = ({ end, suffix, label, duration = 2000, delay = 0 }) => {
  const [count, ref] = useCounter(end, duration, delay);
  
  return (
    <div className="text-center" ref={ref}>
      <div className="text-2xl font-bold text-gray-900">
         <h2>
            <span className="text-2xl  font-sans font-bold">{count.toLocaleString()}</span>
            <span className="text-2xl font-serif font-bold ">{suffix}</span>
        </h2>
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default AnimatedCounterNoIcon;



const useCounter = (end, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let start = 0;
      const increment = end / (duration / 16); // 60fps
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [end, duration, delay, isVisible]);

  return [count, ref];
};