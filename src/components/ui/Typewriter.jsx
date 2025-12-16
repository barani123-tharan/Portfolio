import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let timeout;
    const startTyping = () => {
      let i = 0;
      setDisplayedText('');
      const type = () => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i));
          i++;
          timeout = setTimeout(type, speed);
        }
      };
      type();
    };

    const delayTimeout = setTimeout(startTyping, delay);
    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay]);

  return <span>{displayedText}</span>;
};

export default Typewriter;