import React, { useState, useEffect, useRef } from 'react';

function DelayedUpdateComponent() {
  const [value, setValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const tempValue = useRef('');

  const handleChange = (event) => {
    tempValue.current = event.target.value;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (tempValue.current !== displayValue) {
        setDisplayValue(tempValue.current);
      }
    }, 1000); // Update every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [displayValue]);

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Type something..." />
      <p>Delayed Display Value: {displayValue}</p>
    </div>
  );
}

export default DelayedUpdateComponent;
