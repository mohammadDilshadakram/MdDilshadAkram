import React, { useEffect, useRef, useState } from 'react';

const CYBER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';

export default function ScrambleText({ text, className, hover = true }) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);

    const scramble = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        scramble();
        return () => clearInterval(intervalRef.current);
    }, [text]);

    return (
        <span
            className={className}
            onMouseEnter={hover ? scramble : undefined}
        >
            {displayText}
        </span>
    );
}
