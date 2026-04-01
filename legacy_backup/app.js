// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureDirection: 'vertical',
    smoothWheel: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

// Integrate Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Z-Axis Scroll Animation
const wrapper = document.querySelector(".z-scroll-wrapper");
const sections = gsap.utils.toArray(".z-section");

// Create a master timeline pinned to the wrapper
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".z-scroll-wrapper",
        pin: true,
        scrub: 1,
        // The scroll distance corresponds to the number of sections
        end: () => "+=" + (sections.length * 100) + "%",
        anticipatePin: 1
    }
});

sections.forEach((section, i) => {
    // We don't need to animate the last section out, it should stay as the destination
    if (i < sections.length - 1) {
        const nextSection = sections[i + 1];

        // Ensure next section is ready to be animated in
        gsap.set(nextSection, { scale: 0.8, opacity: 0, visibility: 'visible' });

        // Animation step: Current section zooms out (forward), Next section zooms in
        tl.to(section, {
            scale: 2, // Scale up to simulate passing through
            opacity: 0,
            duration: 1,
            ease: "power2.in",
            onComplete: () => {
                // Optimization: hide after it's "passed" content to avoid rendering
                gsap.set(section, { visibility: 'hidden' });
            },
            onReverseComplete: () => {
                gsap.set(section, { visibility: 'visible' });
            }
        }, i)
            .to(nextSection, {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }, i); // Overlap start times perfectly
    }
});

// Sidebar Navigation
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


// Typed.js Initialization
var typed = new Typed(".text", {
    strings: ["Mern developer", "Software Enginner", "Content writer", "Freelancer", "Learner"],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
})

// Cleanup old IntersectionObserver logic as it's replaced by ScrollTrigger

