import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagneticCursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // Move cursor and follower
        const onMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        // Hover effects for links and buttons
        const onMouseEnterLink = () => {
            gsap.to(cursor, { scale: 0, duration: 0.2 });
            gsap.to(follower, {
                scale: 3,
                backgroundColor: 'rgba(0, 112, 243, 0.3)',
                borderColor: 'transparent',
                duration: 0.3
            });
        };

        const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
            gsap.to(follower, {
                scale: 1,
                backgroundColor: 'transparent',
                borderColor: '#0070f3',
                duration: 0.3
            });
        };

        document.addEventListener('mousemove', onMouseMove);

        const links = document.querySelectorAll('a, button, .magnetic-target');
        links.forEach(link => {
            link.addEventListener('mouseenter', onMouseEnterLink);
            link.addEventListener('mouseleave', onMouseLeaveLink);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            links.forEach(link => {
                link.removeEventListener('mouseenter', onMouseEnterLink);
                link.removeEventListener('mouseleave', onMouseLeaveLink);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-electric-blue rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border border-electric-blue rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 blur-[1px]"
            />
        </>
    );
}
