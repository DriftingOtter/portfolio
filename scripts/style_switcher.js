function style_switcher() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const styleSheet = document.getElementById('dynamic-style');
    
    // Define breakpoints for mobile and default (desktop)
    const mobileWidth  = 1080;  // max-width for mobile
    const mobileHeight = 2340; // max-height for mobile
    
    if (width <= mobileWidth && height <= mobileHeight) {
        // Mobile view (small screens)
        styleSheet.setAttribute('href', 'style/mobile_style.css');
    } else {
        // Default view (desktop and larger screens)
        styleSheet.setAttribute('href', 'style/style.css');
    }
}

// Run the function on page load and when the window is resized
window.addEventListener('load', style_switcher);
window.addEventListener('resize', style_switcher);

