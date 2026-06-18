module.exports = {
  email: 'sairajkashid@example.com', // Aap apni sahi email id yahan daal sakte hain

  siteMetadata: {
    title: 'Sairaj Sandip Kashid',
    description: 'Sairaj Sandip Kashid is a final-year engineering student at MIT World Peace University, specializing in backend architectures, distributed systems, and intelligent multi-agent search systems.',
    siteUrl: 'https://v4-two-sepia.vercel.app',
    image: '/og.png',
    twitterUsername: '@sairajkashid',
  },

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sairajkashid-prog',
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/sairaj-kashid', // Aap apna real link yahan daal sakte hain
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/sairaj',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: '500',
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
