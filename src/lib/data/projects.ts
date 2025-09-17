export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  detailedDescription: string[]
  image: string
  images: string[] // Additional images for detail page
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
  category: string
  duration: string
  challenges: string[]
  solutions: string[]
  features: string[]
}

// Placeholder projects data - clearly marked for easy replacement
export const projects: Project[] = [
  {
    id: 1,
    title: '[PLACEHOLDER] E-Commerce Platform',
    description: '[PLACEHOLDER] A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.',
    longDescription: '[PLACEHOLDER] Comprehensive e-commerce platform featuring user registration, product catalog, shopping cart, secure payments via Stripe, order management, and admin panel.',
    detailedDescription: [
      '[PLACEHOLDER] This project was built to solve the challenge of creating a modern, scalable e-commerce platform that could handle high traffic and provide a seamless user experience.',
      '[PLACEHOLDER] The application features a complete user authentication system, product catalog with search and filtering, shopping cart functionality, and secure payment processing through Stripe.',
      '[PLACEHOLDER] The admin dashboard allows for complete product management, order tracking, and customer analytics with real-time updates.',
      '[PLACEHOLDER] Built with performance in mind, the application uses server-side rendering for SEO optimization and implements caching strategies for fast loading times.'
    ],
    image: '/dragon.png', // Primary image
    images: ['/dragon.png', '/castle_background.png', '/mountain_foreground.png'], // Additional images
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT', 'Tailwind'],
    githubUrl: 'https://github.com/ericyung1',
    liveUrl: 'https://example.com',
    featured: true,
    category: 'Full-Stack Development',
    duration: '3 months',
    challenges: [
      '[PLACEHOLDER] Implementing secure payment processing with Stripe',
      '[PLACEHOLDER] Building a scalable product catalog with advanced search',
      '[PLACEHOLDER] Creating real-time order tracking and notifications',
      '[PLACEHOLDER] Optimizing performance for high traffic loads'
    ],
    solutions: [
      '[PLACEHOLDER] Integrated Stripe webhooks for reliable payment processing',
      '[PLACEHOLDER] Implemented Elasticsearch for fast product search',
      '[PLACEHOLDER] Used WebSockets for real-time order updates',
      '[PLACEHOLDER] Implemented Redis caching and CDN optimization'
    ],
    features: [
      'User Authentication & Authorization',
      'Product Catalog with Search & Filtering',
      'Shopping Cart & Checkout Process',
      'Secure Payment Processing (Stripe)',
      'Order Management & Tracking',
      'Admin Dashboard & Analytics',
      'Responsive Design',
      'SEO Optimization'
    ]
  },
  {
    id: 2,
    title: '[PLACEHOLDER] Task Management App',
    description: '[PLACEHOLDER] Collaborative task management application with real-time updates, team workspaces, and project tracking capabilities.',
    longDescription: '[PLACEHOLDER] Full-featured task management system with drag-and-drop boards, real-time collaboration, file attachments, and team analytics.',
    detailedDescription: [
      '[PLACEHOLDER] A comprehensive task management solution designed to improve team productivity and project organization.',
      '[PLACEHOLDER] Features include drag-and-drop Kanban boards, real-time collaboration, file attachments, and detailed project analytics.',
      '[PLACEHOLDER] The application supports multiple team workspaces with role-based permissions and advanced project tracking.',
      '[PLACEHOLDER] Built with modern web technologies to ensure fast performance and seamless user experience across all devices.'
    ],
    image: '/castle_background.png',
    images: ['/castle_background.png', '/stars.png', '/mountain_foreground.png'],
    technologies: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Prisma'],
    githubUrl: 'https://github.com/ericyung1',
    liveUrl: 'https://example.com',
    featured: false,
    category: 'Web Application',
    duration: '2 months',
    challenges: [
      '[PLACEHOLDER] Implementing real-time collaboration features',
      '[PLACEHOLDER] Building intuitive drag-and-drop interfaces',
      '[PLACEHOLDER] Managing complex state across multiple users',
      '[PLACEHOLDER] Ensuring data consistency in real-time updates'
    ],
    solutions: [
      '[PLACEHOLDER] Used Socket.io for real-time communication',
      '[PLACEHOLDER] Implemented React DnD for smooth drag-and-drop',
      '[PLACEHOLDER] Used Redux for predictable state management',
      '[PLACEHOLDER] Implemented optimistic updates with conflict resolution'
    ],
    features: [
      'Drag-and-Drop Kanban Boards',
      'Real-time Collaboration',
      'Team Workspaces',
      'File Attachments',
      'Project Analytics',
      'Role-based Permissions',
      'Mobile Responsive',
      'Offline Support'
    ]
  },
  {
    id: 3,
    title: '[PLACEHOLDER] Weather Dashboard',
    description: '[PLACEHOLDER] Interactive weather dashboard with location-based forecasts, historical data visualization, and customizable widgets.',
    longDescription: '[PLACEHOLDER] Comprehensive weather application with 7-day forecasts, interactive maps, weather alerts, and data visualization charts.',
    detailedDescription: [
      '[PLACEHOLDER] An interactive weather dashboard that provides comprehensive weather information with beautiful data visualizations.',
      '[PLACEHOLDER] Features location-based forecasts, historical weather data, interactive maps, and customizable dashboard widgets.',
      '[PLACEHOLDER] The application integrates multiple weather APIs to provide accurate and up-to-date weather information.',
      '[PLACEHOLDER] Built with a focus on user experience and data visualization to make weather information easily accessible and understandable.'
    ],
    image: '/mountain_foreground.png',
    images: ['/mountain_foreground.png', '/stars.png', '/dragon.png'],
    technologies: ['React', 'Chart.js', 'Weather API', 'CSS3', 'LocalStorage'],
    githubUrl: 'https://github.com/ericyung1',
    liveUrl: 'https://example.com',
    featured: false,
    category: 'Data Visualization',
    duration: '1 month',
    challenges: [
      '[PLACEHOLDER] Integrating multiple weather data sources',
      '[PLACEHOLDER] Creating responsive data visualizations',
      '[PLACEHOLDER] Handling location-based services',
      '[PLACEHOLDER] Optimizing API calls and data caching'
    ],
    solutions: [
      '[PLACEHOLDER] Built unified API layer for multiple weather services',
      '[PLACEHOLDER] Used Chart.js with responsive configurations',
      '[PLACEHOLDER] Implemented geolocation with fallback options',
      '[PLACEHOLDER] Added intelligent caching with service workers'
    ],
    features: [
      '7-Day Weather Forecasts',
      'Interactive Weather Maps',
      'Historical Data Charts',
      'Location-based Services',
      'Weather Alerts',
      'Customizable Widgets',
      'Data Export',
      'Mobile Optimized'
    ]
  },
  {
    id: 4,
    title: '[PLACEHOLDER] Portfolio Website',
    description: '[PLACEHOLDER] Modern, responsive portfolio website with parallax effects, smooth animations, and optimized performance.',
    longDescription: '[PLACEHOLDER] Personal portfolio featuring parallax scrolling, mobile-first design, and modern web technologies.',
    detailedDescription: [
      '[PLACEHOLDER] A modern portfolio website showcasing projects, skills, and experience with engaging visual effects.',
      '[PLACEHOLDER] Features parallax scrolling, smooth animations, and mobile-first responsive design.',
      '[PLACEHOLDER] Built with Next.js for optimal performance and SEO, deployed on Vercel with analytics.',
      '[PLACEHOLDER] Includes interactive project showcases, skill visualizations, and professional experience timeline.'
    ],
    image: '/stars.png',
    images: ['/stars.png', '/castle_background.png', '/dragon.png'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vercel'],
    githubUrl: 'https://github.com/ericyung1',
    liveUrl: 'https://example.com',
    featured: false,
    category: 'Portfolio',
    duration: '2 weeks',
    challenges: [
      '[PLACEHOLDER] Creating smooth parallax effects',
      '[PLACEHOLDER] Optimizing performance across devices',
      '[PLACEHOLDER] Implementing responsive design',
      '[PLACEHOLDER] SEO optimization for portfolio content'
    ],
    solutions: [
      '[PLACEHOLDER] Used transform3d for GPU-accelerated animations',
      '[PLACEHOLDER] Implemented lazy loading and image optimization',
      '[PLACEHOLDER] Used CSS Grid and Flexbox for responsive layouts',
      '[PLACEHOLDER] Added comprehensive meta tags and structured data'
    ],
    features: [
      'Parallax Scrolling Effects',
      'Responsive Design',
      'Interactive Animations',
      'Project Showcases',
      'Skills Visualization',
      'Contact Integration',
      'SEO Optimized',
      'Fast Loading'
    ]
  },
  {
    id: 5,
    title: '[PLACEHOLDER] Social Media Dashboard',
    description: '[PLACEHOLDER] Analytics dashboard for social media management with post scheduling, engagement tracking, and performance insights.',
    longDescription: '[PLACEHOLDER] Comprehensive social media management tool with content calendar, analytics, and multi-platform posting.',
    detailedDescription: [
      '[PLACEHOLDER] A comprehensive social media management dashboard for tracking engagement and scheduling content across multiple platforms.',
      '[PLACEHOLDER] Features include post scheduling, engagement analytics, performance insights, and content calendar management.',
      '[PLACEHOLDER] The dashboard integrates with major social media APIs to provide unified management across platforms.',
      '[PLACEHOLDER] Built with data visualization in mind to help users understand their social media performance at a glance.'
    ],
    image: '/self_portrait.jpg',
    images: ['/self_portrait.jpg', '/dragon.png', '/castle_background.png'],
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Social APIs', 'Chart.js'],
    githubUrl: 'https://github.com/ericyung1',
    liveUrl: 'https://example.com',
    featured: true,
    category: 'Dashboard',
    duration: '4 months',
    challenges: [
      '[PLACEHOLDER] Integrating multiple social media APIs',
      '[PLACEHOLDER] Building complex data visualizations',
      '[PLACEHOLDER] Managing scheduled posts across time zones',
      '[PLACEHOLDER] Handling rate limits and API quotas'
    ],
    solutions: [
      '[PLACEHOLDER] Built unified API abstraction layer',
      '[PLACEHOLDER] Used Chart.js with custom configurations',
      '[PLACEHOLDER] Implemented timezone-aware scheduling system',
      '[PLACEHOLDER] Added intelligent rate limiting and queue management'
    ],
    features: [
      'Multi-platform Integration',
      'Post Scheduling',
      'Engagement Analytics',
      'Content Calendar',
      'Performance Insights',
      'Team Collaboration',
      'Custom Reports',
      'Mobile App'
    ]
  }
]

// Helper function to get project by ID
export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id)
}

// Helper function to get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

// Helper function to get regular projects
export function getRegularProjects(): Project[] {
  return projects.filter(project => !project.featured)
}
