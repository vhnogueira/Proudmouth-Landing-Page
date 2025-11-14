# ProudMouth Landing Page - Developer Documentation

## Project Overview

ProudMouth is a Canadian entrepreneurial networking and podcast/media distribution platform. This landing page is designed to attract entrepreneurs, podcast creators, and business owners to launch their shows through ProudMouth's ecosystem and gain access to Canada's largest entrepreneurial community (120,000+ business owners and entrepreneurs).

### Key Features
- Responsive single-page landing design
- Application form for prospective users
- Auto-rotating testimonial slider
- Pricing packages display
- Mobile-friendly navigation
- Contact information and social links

## Technology Stack

- **HTML5** - Semantic markup structure
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No frameworks, pure JS for interactions
- **Google Fonts** - Montserrat font family

### External Dependencies (CDN)
- Tailwind CSS: `https://cdn.tailwindcss.com`
- Google Fonts: Montserrat (weights: 400, 500, 600, 700, 800)

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Optional: Local HTTP server for development

### Quick Setup

**Option 1: Direct File Opening**
```bash
# Simply open the HTML file in your browser
open index.html
```

**Option 2: Using Python HTTP Server**
```bash
# Navigate to project directory
cd /path/to/Proudmouth-Landing-Page

# Start Python server
python -m http.server 8000

# Open browser to http://localhost:8000
```

**Option 3: Using Node.js http-server**
```bash
# Install globally (one time)
npm install -g http-server

# Run server
http-server

# Open browser to http://localhost:8080
```

## Project Structure

```
Proudmouth-Landing-Page/
├── index.html                          # Main landing page (674 lines)
├── design-guide.md                     # Design system documentation
├── claude.md                           # This file - Developer documentation
├── page content without structure.html # Content outline/wireframe
├── screencapture-*.png                 # Screenshot reference
└── img/
    └── ProudMouth_WorkMark_Horizontal-sm.png  # Logo
```

### File Descriptions

- **index.html** - Complete responsive landing page with all sections
- **design-guide.md** - Color palette, typography, and component styling guide
- **claude.md** - Developer documentation (this file)
- **page content without structure.html** - Original content structure outline
- **img/** - Logo and image assets directory

## Design System

### Color Palette

```css
Primary Red:  #ec202c  /* Buttons, CTAs, accents */
Dark Navy:    #273249  /* Footer, headings */
Light Mint:   #bad7d9  /* Testimonial section background */
Light Gray:   #F5F6F6  /* Card borders, backgrounds */
White:        #FFFFFF  /* Cards, content backgrounds */
```

### Typography

- **Font Family:** Montserrat (Google Fonts)
- **Weights Used:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Responsive Breakpoints (Tailwind)

- `sm:` - 640px and up
- `md:` - 768px and up (tablets)
- `lg:` - 1024px and up (desktop)
- `xl:` - 1280px and up (large desktop)

## Page Sections

### 1. Header/Navigation
- Sticky navigation bar with ProudMouth logo
- Desktop: Horizontal navigation menu
- Mobile: Hamburger menu with slide-down panel
- Navigation links: HOME, ABOUT, SERVICES, PACKAGES, CONTACT

### 2. Hero Section
- Large headline with value proposition
- Red accent underline
- Primary CTA button: "Apply for Access"

### 3. Benefits + Application Form
- Left column: 5 key benefits with checkmark icons
- Right column: Contact form (Full Name, Email, Phone, Company, Message)
- Form submission currently shows placeholder alert

### 4. Testimonial Slider
- Auto-rotating carousel with 3 testimonials
- Navigation arrows (hidden on mobile)
- Dot indicators for navigation
- Auto-advance every 5 seconds
- Pause on hover
- Touch/swipe support
- Keyboard navigation (arrow keys)

### 5. Feature Cards
- 3-column grid: The Problem, The Opportunity, The Solution
- Icon badges and descriptive text
- Hover effects with shadow

### 6. Pricing Packages
- 3 tiers: Amplify ($1,000), Authority Builder ($1,500), Influence Accelerator ($2,500)
- "Most Popular" badge on middle tier
- Monthly pricing with feature lists

### 7. Footer
- 4-column layout: About, Quick Links, Resources, Contact
- Social media icons (Facebook, Twitter, LinkedIn, Instagram, YouTube)
- Copyright and policy links

## JavaScript Functionality

### Mobile Menu Toggle

```javascript
// Opens/closes mobile navigation menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
```

### Testimonial Slider

**Key Features:**
- Track-based transform animation
- Automatic advancement (5-second intervals)
- Pause on hover
- Keyboard navigation (Left/Right arrows)
- Touch/swipe gesture support
- Dot indicators with click navigation

**Main Functions:**
- `updateSlider()` - Updates active testimonial and indicators
- `nextTestimonial()` - Advances to next slide
- `prevTestimonial()` - Returns to previous slide
- Arrow key event listeners for keyboard navigation
- Touch event handlers for mobile swipe

### Form Submission

Currently shows a placeholder alert. To integrate with backend:

```javascript
// Located in index.html around line 661
document.getElementById('application-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form handling logic here
    // Example: send data to API endpoint
});
```

## Customization Guide

### Changing Colors

Update Tailwind classes throughout `index.html`:

```html
<!-- Example: Change button color from red to blue -->
<!-- From: -->
<button class="bg-[#ec202c] hover:bg-red-700">

<!-- To: -->
<button class="bg-blue-600 hover:bg-blue-700">
```

### Adding Testimonials

1. Locate the testimonial slider section in `index.html`
2. Add a new testimonial div within the slider track
3. Update the dot indicators count
4. Adjust JavaScript `totalTestimonials` variable

```html
<!-- Add new testimonial -->
<div class="min-w-full px-4">
    <div class="bg-white rounded-lg shadow-lg p-8">
        <p class="text-gray-600 mb-6">"Your testimonial text here..."</p>
        <div class="flex items-center">
            <div class="text-sm font-semibold">Name</div>
            <div class="text-gray-500 text-sm ml-2">Company</div>
        </div>
    </div>
</div>
```

### Modifying Pricing Tiers

Update the pricing section in `index.html` (around line 350-450):

```html
<!-- Example: Change price -->
<div class="text-4xl font-bold mb-4">$1,000<span class="text-lg">/mo</span></div>
```

### Adding New Sections

Follow the existing structure pattern:

```html
<section class="py-16 bg-white">
    <div class="container mx-auto px-6 max-w-7xl">
        <!-- Your section content -->
    </div>
</section>
```

## Deployment

### Static Hosting Options

**GitHub Pages:**
```bash
# Push to GitHub repository
git push origin main

# Enable GitHub Pages in repository settings
# Select source: main branch / root directory
```

**Vercel:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Netlify:**
```bash
# Drag and drop folder to Netlify dashboard
# Or connect GitHub repository
```

**AWS S3 + CloudFront:**
- Upload files to S3 bucket
- Enable static website hosting
- Configure CloudFront for CDN

### Pre-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify form submission works
- [ ] Test testimonial slider on mobile and desktop
- [ ] Check responsive design on various screen sizes
- [ ] Optimize images (compress, proper formats)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all external CDN links are accessible
- [ ] Check page load performance
- [ ] Review SEO meta tags
- [ ] Test accessibility with screen readers

## Git Workflow

### Branch Naming Convention

- Feature branches: `claude/feature-name-[session-id]`
- Bug fix branches: `claude/fix-name-[session-id]`
- Current branch: `claude/create-dev-documentation-015iWtyu7BGxau41bPECfGU4`

### Commit Message Guidelines

- Use clear, descriptive commit messages
- Start with verb: "Add", "Fix", "Update", "Remove"
- Examples:
  - "Add testimonials slider with three testimonials"
  - "Fix testimonial slider responsive design and shadow issues"
  - "Update pricing tier features"

### Git Commands

```bash
# Check current status
git status

# Create and switch to new branch
git checkout -b claude/new-feature-name

# Stage changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to remote
git push -u origin claude/new-feature-name
```

## Browser Support

### Supported Browsers

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Known Compatibility

- CSS Grid and Flexbox (widely supported)
- CSS Custom Properties (supported in all modern browsers)
- ES6 JavaScript features (arrow functions, const/let, template literals)
- Touch events for mobile devices

## Performance Optimization

### Current Performance Considerations

- **CDN Usage:** Tailwind CSS and Google Fonts loaded via CDN
- **No Build Process:** Direct HTML/CSS/JS delivery
- **Minimal JavaScript:** Only essential interactions

### Optimization Opportunities

1. **Image Optimization**
   - Compress logo images (currently PNG)
   - Consider WebP format for better compression
   - Implement lazy loading for below-fold images

2. **Font Loading**
   - Consider self-hosting fonts to reduce external requests
   - Use `font-display: swap` for better perceived performance

3. **CSS Optimization**
   - Consider using custom Tailwind build to reduce CSS size
   - Extract only used utility classes

4. **Caching Strategy**
   - Implement proper cache headers for static assets
   - Use service worker for offline capability (optional)

## Accessibility Guidelines

### Current Accessibility Features

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Alt text for images
- Form labels properly associated with inputs
- Keyboard navigation support for slider

### Improvements to Consider

- Add ARIA labels for slider controls
- Ensure sufficient color contrast ratios (WCAG AA)
- Add skip navigation link
- Implement focus indicators for all interactive elements
- Add screen reader announcements for slider changes

## Troubleshooting

### Common Issues

**Issue: Styles not appearing**
- **Cause:** CDN blocked or unavailable
- **Solution:** Check internet connection, verify CDN URL is accessible

**Issue: Mobile menu not toggling**
- **Cause:** JavaScript error or incorrect ID selectors
- **Solution:** Check browser console for errors, verify element IDs match

**Issue: Testimonial slider not auto-advancing**
- **Cause:** JavaScript not loaded or timer cleared
- **Solution:** Check if script is executing, verify no console errors

**Issue: Form submission not working**
- **Cause:** Event listener not attached or default not prevented
- **Solution:** Verify form ID matches JavaScript selector

### Debug Mode

Open browser developer tools:
- Chrome/Edge: F12 or Cmd+Option+I (Mac)
- Firefox: F12 or Cmd+Option+I (Mac)
- Safari: Cmd+Option+I (Mac, after enabling developer menu)

Check console for JavaScript errors and network tab for failed requests.

## Testing Checklist

### Functional Testing

- [ ] Navigation links scroll to correct sections
- [ ] Mobile menu opens and closes
- [ ] Application form collects all required fields
- [ ] Testimonial slider advances automatically
- [ ] Slider navigation arrows work
- [ ] Slider dot indicators work
- [ ] Touch swipe works on mobile devices
- [ ] Keyboard arrows navigate slider
- [ ] Social media links open correct pages
- [ ] "Apply for Access" CTA scrolls to form

### Responsive Testing

- [ ] Test on mobile (320px - 767px)
- [ ] Test on tablet (768px - 1023px)
- [ ] Test on desktop (1024px+)
- [ ] Test on large desktop (1280px+)
- [ ] Verify hamburger menu on mobile
- [ ] Verify horizontal nav on desktop
- [ ] Check testimonial slider arrows hide on mobile
- [ ] Verify pricing cards stack properly on mobile

### Cross-Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

## Contributing

### Code Style Guidelines

1. **HTML**
   - Use semantic HTML5 elements
   - Maintain consistent indentation (2 spaces)
   - Add comments for major sections
   - Use descriptive class names

2. **CSS/Tailwind**
   - Follow Tailwind utility-first approach
   - Group related utilities (layout, spacing, colors, typography)
   - Use design system colors consistently
   - Maintain responsive design principles

3. **JavaScript**
   - Use ES6+ syntax
   - Add comments for complex logic
   - Keep functions focused and single-purpose
   - Use descriptive variable names

### Pull Request Process

1. Create a feature branch from main
2. Make your changes
3. Test thoroughly (see Testing Checklist)
4. Commit with clear messages
5. Push to your branch
6. Create pull request with description of changes
7. Wait for review and approval

## Resources

### Documentation
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google Fonts](https://fonts.google.com/)

### Tools
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - VS Code extension
- [Can I Use](https://caniuse.com/) - Browser compatibility checker
- [PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing
- [WAVE](https://wave.webaim.org/) - Accessibility evaluation tool

## Contact & Support

For questions or issues related to this project:
- Review the `design-guide.md` for design system details
- Check this documentation for development guidelines
- Refer to git commit history for implementation examples

---

**Last Updated:** 2025-11-14
**Version:** 1.0
**Maintained By:** Development Team
