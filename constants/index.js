/**
 * Constants and Data for Mojito Cocktail Website
 * 
 * This file contains all the data structures used throughout the application,
 * including navigation links, product listings, and content information.
 * Centralizing this data makes it easier to update the website content
 * without modifying component code.
 */

/**
 * Navigation Links
 * Used in the Navbar component to generate navigation menu items
 * Each item has an id (used for href links) and a display title
 */
const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "work",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

/**
 * Cocktail Menu Items
 * List of alcoholic cocktails with pricing and details
 */
const cocktailLists = [
 {
	name: "Chapel Hill Shiraz",
	country: "AU",
	detail: "Battle",
	price: "$10",
 },
 {
	name: "Caten Malbee",
	country: "AU",
	detail: "Battle",
	price: "$49",
 },
 {
	name: "Rhino Pale Ale",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Irish Guinness",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

/**
 * Non-Alcoholic Mocktail Menu Items
 * List of non-alcoholic drinks with pricing and details
 */
const mockTailLists = [
 {
	name: "Tropical Bloom",
	country: "US",
	detail: "Battle",
	price: "$10",
 },
 {
	name: "Passionfruit Mint",
	country: "US",
	detail: "Battle",
	price: "$49",
 },
 {
	name: "Citrus Glow",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Lavender Fizz",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

/**
 * Profile Images
 * Used for team member or customer testimonial sections
 */
const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

/**
 * Feature Highlights
 * Key selling points about the cocktails
 * Used in marketing/feature sections
 */
const featureLists = [
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Ice-cold every time",
 "Expertly shaken & stirred",
];

/**
 * Quality Statements
 * Descriptions of quality aspects of the cocktail preparation
 */
const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Bartending artistry in action",
 "Freshly muddled flavors",
];

/**
 * Store Information
 * Contact details and location information
 * Used in the footer or contact sections
 */
const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

/**
 * Business Hours
 * Operating hours for the establishment
 * Used in the footer or contact sections
 */
const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

/**
 * Social Media Links
 * Social platform information with icons
 * Used in the footer or contact sections
 */
const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

/**
 * Featured Cocktail Details
 * Comprehensive information about signature cocktails
 * Used in the cocktail showcase section with images and descriptions
 */
const allCocktails = [
 {
	id: 1,
	name: "Classic Mojito",
	image: "/images/drink1.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 2,
	name: "Raspberry Mojito",
	image: "/images/drink2.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "/images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
 },
];

/**
 * Export all constants for use throughout the application
 * These can be imported individually or as a group in components
 * 
 * Example usage:
 * ```jsx
 * // Import all constants
 * import * as constants from '../constants';
 * 
 * // Or import specific constants
 * import { navLinks, cocktailLists } from '../constants';
 * ```
 */
export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};
