# Mojito Cocktail Website

A modern, animated cocktail website showcasing GSAP animations and React components. This project demonstrates advanced web animation techniques using GSAP (GreenSock Animation Platform) with a focus on scroll-triggered animations and text effects.

![Mojito Cocktail Website](public/images/logo.png)

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Animation Techniques](#animation-techniques)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Performance Considerations](#performance-considerations)

## Overview

This project is a visually engaging cocktail website featuring a mojito theme. It demonstrates modern web development techniques including:

- Responsive design for all device sizes
- Advanced GSAP animations
- Component-based architecture with React
- Tailwind CSS for styling
- Scroll-triggered effects and video scrubbing

The website includes a hero section with animated text and parallax effects, a navbar with scroll-triggered background changes, and placeholder sections for cocktail listings.

## Technologies Used

- **React**: Frontend library for building the user interface
- **Vite**: Build tool and development server
- **GSAP (GreenSock Animation Platform)**: Animation library
  - ScrollTrigger plugin: For scroll-based animations
  - SplitText plugin: For text animation effects
- **Tailwind CSS**: Utility-first CSS framework
- **React Responsive**: For responsive design adaptations

## Project Structure

```
mojito/
├── constants/
│   └── index.js         # Data constants (navigation, cocktails, etc.)
├── public/
│   ├── fonts/           # Custom fonts
│   ├── images/          # Image assets
│   └── videos/          # Video assets
├── src/
│   ├── components/
│   │   ├── Hero.jsx     # Hero section with GSAP animations
│   │   └── Navbar.jsx   # Navigation bar with scroll effects
│   ├── App.jsx          # Main application component
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles and Tailwind configuration
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
└── package.json         # Project dependencies and scripts
```

## Key Components

### Hero Component (`src/components/Hero.jsx`)

The Hero component is the main landing section of the website featuring:

- Text animations using GSAP's SplitText plugin
- Parallax effect on leaf images during scroll
- Video scrubbing animation tied to scroll position
- Responsive design with mobile adaptations

The component uses the `useGSAP` hook to set up animations that trigger on component mount and during scroll events.

```jsx
// Key animation techniques in Hero.jsx
useGSAP(() => {
  // Text animation with SplitText
  const heroSplit = new SplitText(".title", {
    type: "chars, words",
  });

  gsap.from(heroSplit.chars, {
    yPercent: 100,
    duration: 1.8,
    ease: "expo.out",
    stagger: 0.06,
  });

  // Parallax scroll effects
  gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  })
  .to(".right-leaf", { y: 200 }, 0)
  .to(".left-leaf", { y: -200 }, 0);

  // Video scrubbing animation
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "video",
      start: startValue,
      end: endValue,
      scrub: true,
      pin: true,
    },
  });

  videoRef.current.onloadedmetadata = () => {
    tl.to(videoRef.current, {
      currentTime: videoRef.current.duration,
    });
  };
}, []);
```

### Navbar Component (`src/components/Navbar.jsx`)

The Navbar component features:

- Dynamic navigation links from constants
- Scroll-triggered background change animation
- Responsive design

```jsx
// Key animation in Navbar.jsx
useGSAP(() => {
  const navTween = gsap.timeline({
    scrollTrigger: {
      trigger: 'nav',
      start: 'bottom top'
    }
  });

  navTween.fromTo('nav', {
    backgroundColor: 'transparent',
  }, {
    backgroundColor: '#00000050',
    backgroundFilter: 'blur(10px)',
    duration: 1,
    ease: 'power1.inOut'
  });
});
```

### App Component (`src/App.jsx`)

The App component serves as the main container, registering GSAP plugins and rendering the Navbar and Hero components.

```jsx
// App.jsx structure
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero />
      <div className='h-dvh bg-black '/>
    </main>
  );
}
```

## Animation Techniques

This project showcases several advanced animation techniques:

1. **Text Animation with SplitText**
   - Splitting text into characters and words
   - Animating individual characters with staggered timing
   - Adding gradient effects to text

2. **Scroll-Triggered Animations**
   - Parallax effects on images
   - Background color changes on scroll
   - Pinning elements during scroll

3. **Video Scrubbing**
   - Controlling video playback based on scroll position
   - Creating an interactive video experience

4. **Responsive Animations**
   - Adapting animation parameters based on device size
   - Using media queries with the React Responsive library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd mojito
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Modifying Content

Content data is stored in `constants/index.js` and can be easily modified:

- `navLinks`: Navigation menu items
- `cocktailLists`: List of cocktails with details
- `mockTailLists`: List of mocktails
- `allCocktails`: Detailed cocktail information with images

### Styling

The project uses Tailwind CSS with custom utilities defined in `src/index.css`:

- Custom color variables in the theme section
- Utility classes like `flex-center`, `col-center`, `text-gradient`
- Component-specific styles

### Adding New Animations

To add new GSAP animations:

1. Import necessary GSAP plugins
2. Use the `useGSAP` hook in your component
3. Create timeline or tween animations
4. Configure ScrollTrigger for scroll-based animations

Example:
```jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MyComponent = () => {
  useGSAP(() => {
    gsap.from(".my-element", {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".my-section",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
      }
    });
  }, []);

  return <div className="my-section">
    <div className="my-element">Animated content</div>
  </div>;
};
```

## Performance Considerations

- **Image Optimization**: Large images are used for visual impact but should be optimized for production
- **Video Preloading**: Videos use the `preload="auto"` attribute to ensure smooth playback
- **Animation Timing**: GSAP animations are optimized with appropriate easing functions
- **Mobile Adaptations**: Different animation parameters are used for mobile devices to ensure performance

---

Created with ❤️ using React, GSAP, and Tailwind CSS
