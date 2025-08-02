/**
 * Navbar Component
 * 
 * A responsive navigation bar with scroll-triggered background animation.
 * 
 * Features:
 * - Dynamic navigation links from constants
 * - Background color transition on scroll
 * - Blur effect when scrolled
 * 
 * Animation details:
 * - Uses GSAP ScrollTrigger to detect when the navbar scrolls out of view
 * - Transitions from transparent to semi-transparent black with blur
 */
import React from 'react'
import {navLinks} from "../../constants/index.js";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

const Navbar = () => {
    // Set up GSAP animations when component mounts
    useGSAP(() => {
        // Create a timeline with ScrollTrigger
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top' // Animation starts when bottom of nav reaches top of viewport
            }
        });

        // Animate navbar background from transparent to semi-transparent with blur
        navTween.fromTo('nav', 
            {
                backgroundColor: 'transparent', // Initial state
            },
            {
                backgroundColor: '#00000050', // Final state (semi-transparent black)
                backgroundFilter: 'blur(10px)', // Add blur effect
                duration: 1,
                ease: 'power1.inOut' // Smooth easing function
            }
        )
    })

    return (
        <nav>
            <div>
                {/* Logo and brand name */}
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo"/>
                    <p>Velvet Pour</p>
                </a>

                {/* Navigation links dynamically generated from constants */}
                <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
