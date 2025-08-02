/**
 * Hero Component
 *
 * A responsive hero section for a mojito cocktail website featuring GSAP animations.
 *
 * Features:
 * - Text animations using SplitText
 * - Parallax effect on leaf images during scroll
 * - Video scrubbing animation tied to scroll position
 * - Responsive design with mobile adaptations
 *
 * Example usage:
 * ```jsx
 * import Hero from './components/Hero';
 *
 * function App() {
 *   return (
 *     <div className="app">
 *       <Hero />
 *       <OtherContent />
 *     </div>
 *   );
 * }
 * ```
 */
// Import useGSAP hook for integrating GSAP with React's lifecycle
import { useGSAP } from "@gsap/react";
// Import the core GSAP library for animations
import gsap from "gsap";
// Import SplitText plugin for text animation effects
import { SplitText } from "gsap/all";
// Import useRef hook to create references to DOM elements
import { useRef } from "react";
// Import useMediaQuery hook for responsive design adaptations
import { useMediaQuery } from "react-responsive";

// Define the Hero functional component
const Hero = () => {
 // Create a reference to the video element for controlling playback
 const videoRef = useRef();

 // Detect if the device is mobile (screen width less than 768px)
 // This is used to adjust animation parameters for smaller screens
 const isMobile = useMediaQuery({ maxWidth: 767 });

 // Use GSAP's React hook to set up animations when component mounts
 useGSAP(() => {
	// Split the main title text into individual characters and words for animation
	const heroSplit = new SplitText(".title", {
	 type: "chars, words", // Split by both characters and words for more animation options
	});

	// Split the subtitle text into lines for animation
	const paragraphSplit = new SplitText(".subtitle", {
	 type: "lines", // Split by lines for paragraph animation
	});

	// Apply text-gradient class to each character before animating
	// This adds a white-to-gray gradient effect to the text
	heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

	// Animate the title characters from below (100% y-position) to their normal position
	gsap.from(heroSplit.chars, {
	 yPercent: 100, // Start position is 100% below normal position
	 duration: 1.8, // Animation takes 1.8 seconds
	 ease: "expo.out", // Use exponential easing for a natural feel
	 stagger: 0.06, // Delay each character by 0.06 seconds for a sequential effect
	});

	// Animate the subtitle lines from invisible and below to visible and normal position
	gsap.from(paragraphSplit.lines, {
	 opacity: 0, // Start completely transparent
	 yPercent: 100, // Start position is 100% below normal position
	 duration: 1.8, // Animation takes 1.8 seconds
	 ease: "expo.out", // Use exponential easing for a natural feel
	 stagger: 0.06, // Delay each line by 0.06 seconds
	 delay: 1, // Start this animation 1 second after the title animation
	});

	// Create a GSAP timeline for parallax scroll effects
	gsap
	.timeline({
	 scrollTrigger: {
		trigger: "#hero", // The section that triggers this animation
		start: "top top", // Animation starts when the top of hero reaches the top of viewport
		end: "bottom top", // Animation ends when the bottom of hero reaches the top of viewport
		scrub: true, // Smoothly animate as user scrolls (ties animation progress to scroll position)
	 },
	})
	// Move the right leaf down 200px as user scrolls
	.to(".right-leaf", { y: 200 }, 0) // The 0 parameter makes this start at the beginning of the timeline
	// Move the left leaf up 200px as user scrolls
	.to(".left-leaf", { y: -200 }, 0) // The 0 parameter makes this start at the beginning of the timeline
	// Move the arrow down 100px as user scrolls (currently commented out in JSX)
	.to(".arrow", { y: 100 }, 0); // The 0 parameter makes this start at the beginning of the timeline

	// Set responsive scroll trigger positions based on device type
	const startValue = isMobile ? "top 50%" : "center 60%"; // Different start position for mobile
	const endValue = isMobile ? "120% top" : "bottom top"; // Different end position for mobile

	// Create a GSAP timeline for video scrubbing animation
	let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video", // The element that triggers this animation
		start: startValue, // Animation starts at position defined by startValue
		end: endValue, // Animation ends at position defined by endValue
		scrub: true, // Smoothly animate as user scrolls (ties animation progress to scroll position)
		pin: true, // Pin the video element during the animation
	 },
	});

	// Wait for video metadata to load before setting up the animation
	videoRef.current.onloadedmetadata = () => {
	 // Animate the video's currentTime property from 0 to its duration as user scrolls
	 // This creates a "scrubbing" effect where scroll position controls video playback
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration, // Animate to the end of the video
	 });
	};
 }, []);

 // Render the Hero component
 return (
	<>
	 {/* Main hero section with noisy background texture */}
	 <section id="hero" className="noisy">
		{/* Main title that will be animated with SplitText */}
		<h1 className="title">MOJITO</h1>

		{/* Left decorative leaf image with parallax scroll effect */}
		<img
		 src="/images/hero-left-leaf.png"
		 alt="left-leaf"
		 className="left-leaf" // This class is targeted by the parallax animation
		/>
		{/* Right decorative leaf image with parallax scroll effect */}
		<img
		 src="/images/hero-right-leaf.png"
		 alt="right-leaf"
		 className="right-leaf" // This class is targeted by the parallax animation
		/>

		{/* Container for the main content body */}
		<div className="body">
		 {/* Arrow image (currently commented out) */}
		 {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}

		 {/* Content container for text elements */}
		 <div className="content">
			{/* Tagline section - only visible on medium screens and larger */}
			<div className="space-y-5 hidden md:block">
			 <p>Cool. Crisp. Classic.</p>
			 {/* Subtitle that will be animated with SplitText */}
			 <p className="subtitle">
				Sip the Spirit <br /> of Summer
			 </p>
			</div>

			{/* Call-to-action section */}
			<div className="view-cocktails">
			 {/* Description text that will be animated with SplitText */}
			 <p className="subtitle">
				Every cocktail on our menu is a blend of premium ingredients,
				creative flair, and timeless recipes — designed to delight your
				senses.
			 </p>
			 {/* Link to cocktails section */}
			 <a href="#cocktails">View cocktails</a>
			</div>
		 </div>
		</div>
	 </section>

	 {/* Video container positioned absolutely to cover the viewport */}
	 <div className="video absolute inset-0">
		{/* Video element that will be controlled by scroll position */}
		<video
		 ref={videoRef} // Reference used to control video playback in the animation
		 muted // Video plays without sound
		 playsInline // Allows inline playback on mobile devices
		 preload="auto" // Preloads the video for smoother playback
		 src="/videos/output.mp4" // Path to the video file
		/>
	 </div>
	</>
 );
};

// Export the Hero component as the default export from this module
export default Hero;
