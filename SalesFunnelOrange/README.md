# GoHighLevel Affiliate Landing Page

A modern, high-converting landing page for GoHighLevel with lead capture and affiliate link integration.

## Features

- Responsive, modern design with animations and smooth scrolling
- Lead capture form integrated with Netlify Forms
- Mobile-friendly with adaptive layout
- Optimized for conversions with strategic CTAs
- SEO and social sharing meta tags
- Interactive elements (FAQ accordion, pricing toggle)

## Project Structure

- `ChatGPTFunnel.html` - Main HTML file
- `styles.css` - All styling including animations and responsive design
- `script.js` - JavaScript for interactive elements and animations

## Setup Instructions

1. **Local Development**
   - Clone or download this repository
   - Open `ChatGPTFunnel.html` in a browser to preview

2. **Deploy to Netlify**
   - Push the project to a GitHub repository
   - Sign in to Netlify and select "New site from Git"
   - Connect to your GitHub repository
   - Deploy settings: Leave build command empty, publish directory is the project root
   - Click "Deploy site"

3. **Netlify Form Setup**
   - Forms will automatically work after deployment
   - Access form submissions in your Netlify dashboard under "Forms"

## Affiliate Links

- Free Trial: `https://affiliates.gohighlevel.com/?fp_ref=1lj1q`
- Default: `https://www.gohighlevel.com/?fp_ref=1lj1q`

## Customization Guide

### Changing Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-orange: #FF6240;
    --secondary-orange: #FF8C69;
    /* more variables */
}
```

### Updating Content

Edit the HTML sections in `ChatGPTFunnel.html` to update:
- Headlines and copy
- Features and benefits
- Testimonials
- Pricing information

### Adding More Sections

Follow the existing HTML structure pattern for consistency.

## SEO Optimization

The page includes basic SEO tags. Consider enhancing with:
- Structured data markup
- Additional keywords in content
- Image alt text optimization

## Future Improvements

- Add A/B testing for headlines and CTAs
- Implement cookie-based tracking
- Add exit-intent popups for improved conversions
- Integrate with Google Tag Manager

---

© 2023 VertexHub. All rights reserved.
