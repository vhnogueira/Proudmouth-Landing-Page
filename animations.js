// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // HERO SECTION ANIMATIONS
    // ============================================

    // Hero title - fade in and slide up
    gsap.from('#home h1', {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
    });

    // Red accent line - width animation
    gsap.from('#home .w-20.h-1.bg-proud-red', {
        duration: 0.8,
        width: 0,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.8
    });

    // Hero subtitle - fade in
    gsap.from('#home p', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 1
    });

    // ============================================
    // BENEFITS + FORM SECTION ANIMATIONS
    // ============================================

    // Benefits heading
    gsap.from('.bg-proud-gray h2', {
        scrollTrigger: {
            trigger: '.bg-proud-gray',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    });

    // Benefit items - stagger animation
    gsap.from('.bg-proud-gray .space-y-6 > div', {
        scrollTrigger: {
            trigger: '.bg-proud-gray .space-y-6',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        x: -30,
        opacity: 0,
        stagger: 0.15,
        ease: 'power2.out'
    });

    // Checkmark icons - scale in
    gsap.from('.bg-proud-gray .space-y-6 svg', {
        scrollTrigger: {
            trigger: '.bg-proud-gray .space-y-6',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.6,
        scale: 0,
        opacity: 0,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        delay: 0.3
    });

    // Form container - slide in from right
    gsap.from('.bg-proud-gray .bg-white.p-8.shadow-lg', {
        scrollTrigger: {
            trigger: '.bg-proud-gray',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    // Form inputs - stagger animation
    gsap.from('#application-form > div', {
        scrollTrigger: {
            trigger: '#application-form',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.3
    });

    // ============================================
    // TESTIMONIAL SECTION ANIMATIONS
    // ============================================

    // Testimonial cards - fade in
    gsap.from('.testimonial-slide', {
        scrollTrigger: {
            trigger: '.bg-proud-mint',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        scale: 0.9,
        opacity: 0,
        ease: 'power3.out'
    });

    // Quote icons - rotate and scale
    gsap.from('.testimonial-slide svg', {
        scrollTrigger: {
            trigger: '.bg-proud-mint',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        scale: 0,
        rotation: -180,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.3
    });

    // Navigation buttons - slide in from sides
    gsap.from('#prev-testimonial', {
        scrollTrigger: {
            trigger: '.bg-proud-mint',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        x: -30,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.5
    });

    gsap.from('#next-testimonial', {
        scrollTrigger: {
            trigger: '.bg-proud-mint',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        x: 30,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.5
    });

    // Indicator dots - scale in
    gsap.from('.testimonial-dot', {
        scrollTrigger: {
            trigger: '.bg-proud-mint',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 0.5,
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.7
    });

    // ============================================
    // FEATURE CARDS SECTION (Problem/Opportunity/Solution)
    // ============================================

    // Detect if mobile device
    const isMobile = window.innerWidth < 768;

    // Feature cards - stagger animation (optimized for mobile)
    gsap.from('.bg-white.border-2.border-proud-gray', {
        scrollTrigger: {
            trigger: '#packages',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: isMobile ? 0.5 : 1,
        y: isMobile ? 20 : 50,
        opacity: 0,
        stagger: isMobile ? 0.08 : 0.2,
        ease: 'power3.out'
    });

    // Feature card icons - bounce in (simplified for mobile)
    gsap.from('.bg-white.border-2.border-proud-gray svg', {
        scrollTrigger: {
            trigger: '#packages',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: isMobile ? 0.4 : 0.8,
        scale: 0,
        rotation: isMobile ? 0 : 360,
        opacity: 0,
        stagger: isMobile ? 0.08 : 0.2,
        ease: isMobile ? 'power2.out' : 'back.out(2)',
        delay: isMobile ? 0.1 : 0.3
    });

    // ============================================
    // PACKAGES/PRICING SECTION ANIMATIONS
    // ============================================

    // Pricing section heading
    gsap.from('#packages h2', {
        scrollTrigger: {
            trigger: '#packages',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    });

    // Red accent line
    gsap.from('#packages .w-20.h-1.bg-proud-red', {
        scrollTrigger: {
            trigger: '#packages',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        width: 0,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.3
    });

    // Pricing subtitle
    gsap.from('#packages > div > div > p', {
        scrollTrigger: {
            trigger: '#packages',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        y: 20,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.5
    });

    // Pricing cards - stagger with special attention to middle card
    const pricingCards = gsap.utils.toArray('#packages .grid > div');

    gsap.from(pricingCards, {
        scrollTrigger: {
            trigger: '#packages .grid',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        y: 60,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.7
    });

    // ============================================
    // FOOTER CTA SECTION ANIMATIONS
    // ============================================

    // CTA heading
    gsap.from('#contact h2', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        y: 40,
        opacity: 0,
        ease: 'power3.out'
    });

    // CTA subtitle
    gsap.from('#contact p', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.2
    });

    // CTA button
    gsap.from('#contact a', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.4
    });

    // Add subtle pulse animation to CTA button
    gsap.to('#contact a', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        scale: 1.05,
        duration: 1.2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1
    });

    // ============================================
    // INTERACTIVE HOVER ANIMATIONS
    // ============================================

    // Add hover animations to all buttons
    const buttons = document.querySelectorAll('button, a.inline-block');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Add parallax effect to hero section
    gsap.to('#home', {
        scrollTrigger: {
            trigger: '#home',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        backgroundPosition: '50% 100%',
        ease: 'none'
    });

    // Add smooth reveal animation for feature cards on hover
    const featureCards = document.querySelectorAll('.bg-white.border-2.border-proud-gray');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });

    // Add hover effect to pricing cards
    const pricingCardsElements = document.querySelectorAll('#packages .grid > div');
    pricingCardsElements.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -15,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });

    // ============================================
    // PAGE LOAD ANIMATION
    // ============================================

    // Create a timeline for page load
    const pageLoadTimeline = gsap.timeline();

    // Fade in the entire page
    pageLoadTimeline.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });

    console.log('GSAP animations initialized successfully!');
});
