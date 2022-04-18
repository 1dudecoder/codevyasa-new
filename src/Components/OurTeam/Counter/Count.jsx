import React, { useRef, useEffect, useState } from "react";

const Count = (props) => {

  const { label, number, duration , type } = props.data;
  const [count, setCount] = useState("0");
  const containerRef = useRef(null);
  const [isvisibal, setvisibal] = useState(false);

  const callbackFunction = (entries) => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    setvisibal(true);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    setvisibal(true);
    const observer = new IntersectionObserver(callbackFunction, options);
    if (isvisibal === false && containerRef.current) {
      observer.observe(containerRef.current);
    }
  }, [number, duration]);

  return (
    <div  className="" >
      <div ref={containerRef} className="p-4 lg:p-10 flex flex-col place-items-center place-content-center">
        <p>{label}</p>
        <h1 className= {`border-2 border-bcolor  text-lg p-5 mt-2  sm:text-4xl sm:mt-2  rounded-full sm:px-7 sm:py-10`}>
          {count}{type}
        </h1>
      </div>

    </div>
  );
};

export default Count;
