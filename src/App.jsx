/**
 * Main App Component
 * 
 * This is the root component of the Mojito Cocktail website application.
 * It registers GSAP plugins and renders the main layout structure.
 * 
 * Features:
 * - GSAP plugin registration (ScrollTrigger, SplitText)
 * - Main layout structure with Navbar and Hero components
 * - Placeholder section for additional content
 */
// Import React library for creating components
import React from 'react'
// Import the core GSAP library for animations
import gsap from 'gsap';
// Import GSAP plugins for scroll-triggered animations and text splitting
import { ScrollTrigger, SplitText } from "gsap/all";
// Import the navigation bar component
import Navbar from "./components/Navbar.jsx";
// Import the hero section component
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";
import Art from './components/Art.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/Contact.jsx';

// Register GSAP plugins for use throughout the application
gsap.registerPlugin(ScrollTrigger, SplitText);

// Define the main App component as a functional component
const App = () => {
    // Return the JSX structure that defines the UI
    return (
        // Main container that wraps the entire application
        <main>
            {/* Render the navigation bar at the top of the page */}
            <Navbar/>
            {/* Render the hero section with animations */}
            <Hero />
            <Cocktails/>
            <About/>
            <Art/>
            <Menu/>
            <Contact/>
            {/* Placeholder section - can be replaced with actual content sections */}
            {/* This div creates a full-height black section for additional content */}
            <div className='h-dvh bg-black '/>
        </main>
    )
}

// Export the App component as the default export from this module
export default App
