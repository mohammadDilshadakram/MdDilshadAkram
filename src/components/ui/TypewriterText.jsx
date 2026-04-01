import React, { useEffect, useState } from 'react';

export default function TypewriterText({ texts, speed = 100, wait = 2000, className }) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[currentTextIndex];

            if (!isDeleting) {
                // Typing
                setCurrentText(fullText.substring(0, currentText.length + 1));

                if (currentText.length === fullText.length) {
                    setTimeout(() => setIsDeleting(true), wait);
                    return;
                }
            } else {
                // Deleting
                setCurrentText(fullText.substring(0, currentText.length - 1));

                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                    return;
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentTextIndex, texts, speed, wait]);

    return (
        <span className={className}>
            {currentText}
            <span className="animate-pulse">|</span>
        </span>
    );
}
