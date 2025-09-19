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

// Real projects data - Eric Yung's portfolio projects
export const projects: Project[] = [
  {
    id: 1,
    title: 'Puzzle Pathfinder',
    description: 'Interactive grid-based pathfinding solver using Dijkstra\'s Algorithm with prize collection, budget optimization, and dual solving modes for complex pathfinding challenges.',
    longDescription: 'Advanced pathfinding visualization tool featuring interactive grid editing, algorithm optimization, and real-time path calculation with comprehensive state management.',
    detailedDescription: [
      'Built an interactive pathfinding application that demonstrates advanced algorithm implementation and optimization techniques.',
      'Features a 15x15 grid editor with prize category management and Dijkstra\'s algorithm implementation for optimal route calculation.',
      'The application supports multiple solving modes and provides visual feedback for algorithm execution and path optimization.',
      'Developed with Next.js and TypeScript for optimal performance, type safety, and modern web development practices.'
    ],
    image: '/images/projects/puzzle-pathfinder.png',
    images: ['/images/projects/puzzle-pathfinder.png'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Dijkstra\'s Algorithm', 'Optimization'],
    githubUrl: 'https://github.com/ericyung1/puzzle-pathfinder',
    liveUrl: 'https://puzzle-pathfinder.vercel.app',
    featured: true,
    category: 'Algorithm Visualization',
    duration: '2 weeks',
    challenges: [
      'Implementing Dijkstra\'s algorithm efficiently with priority queue optimization',
      'Creating intuitive grid editing interface with responsive design',
      'Managing complex state for prizes, costs, and pathfinding data',
      'Optimizing pathfinding performance for real-time visualization'
    ],
    solutions: [
      'Implemented optimized Dijkstra\'s algorithm with priority queue data structure',
      'Built responsive grid interface with keyboard navigation and accessibility features',
      'Used React state management and local storage for data persistence',
      'Added visual feedback system for algorithm steps and path highlighting'
    ],
    features: [
      'Interactive 15×15 Grid Editor',
      'Dijkstra\'s Algorithm Implementation',
      'Prize Category Management',
      'Multiple Solving Modes',
      'Keyboard Navigation',
      'State Persistence',
      'Responsive Design',
      'Visual Path Highlighting'
    ]
  },
  {
    id: 2,
    title: 'Mini Crossword',
    description: 'NYT-style 5×5 crossword puzzle generator with AI-powered clues, advanced constraint satisfaction algorithms, and interactive solving interface.',
    longDescription: 'Intelligent crossword puzzle application featuring AI-generated clues, backtracking algorithms, and comprehensive puzzle generation with multiple templates.',
    detailedDescription: [
      'Developed an advanced crossword puzzle generator that uses AI integration to create engaging puzzles with high-quality, NYT-style clues.',
      'Implemented backtracking algorithms with constraint satisfaction for efficient puzzle generation and OpenAI API integration.',
      'The application includes 15 different puzzle templates and a 34K+ word database for variety and complexity.',
      'Built with modern web technologies including Next.js and TypeScript, deployed on Vercel for optimal performance and scalability.'
    ],
    image: '/images/projects/mini-crossword.png',
    images: ['/images/projects/mini-crossword.png'],
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'React', 'Constraint Satisfaction'],
    githubUrl: 'https://github.com/ericyung1/mini-crossword',
    liveUrl: 'https://mini-crossword-beige.vercel.app',
    featured: true,
    category: 'AI Application',
    duration: '3 weeks',
    challenges: [
      'Implementing crossword generation algorithms with constraint satisfaction',
      'Integrating OpenAI API for high-quality clue generation',
      'Creating responsive crossword interface with interactive features',
      'Optimizing word placement algorithms for efficient puzzle generation'
    ],
    solutions: [
      'Used backtracking algorithm with constraint satisfaction and variable ordering heuristics',
      'Integrated GPT-4o-mini API for generating contextual, NYT-style clues',
      'Built flexible grid system using CSS Grid with responsive design principles',
      'Implemented most constrained variable heuristic for optimal word placement'
    ],
    features: [
      'AI-Powered Clue Generation',
      'Backtracking Algorithm',
      '15 Crossword Templates',
      '34K+ Word Database',
      'Interactive Solving Interface',
      'Keyboard Navigation',
      'Timer Functionality',
      'Auto-Check Feature'
    ]
  },
  {
    id: 3,
    title: 'Grid Packer',
    description: 'Visual square packing optimization tool featuring customizable constraints, multiple square sizes, etc.',
    longDescription: 'Interactive optimization tool for square packing problems with constraint solving, algorithm visualization, and performance analysis.',
    detailedDescription: [
      'Built a comprehensive visualization tool for exploring square packing algorithms and optimization strategies with real-time feedback.',
      'Features interactive grid editing with customizable constraints and multiple algorithm implementations for different packing approaches.',
      'The application provides detailed visual feedback for algorithm performance and optimization results with comparative analysis.',
      'Developed with modern web technologies including Next.js and TypeScript for smooth interactive experience and responsive design.'
    ],
    image: '/images/projects/grid-packer.png',
    images: ['/images/projects/grid-packer.png'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Optimization Algorithms', 'Data Visualization'],
    githubUrl: 'https://github.com/ericyung1/grid-packer',
    liveUrl: 'https://grid-packer.vercel.app',
    featured: false,
    category: 'Algorithm Visualization',
    duration: '2 weeks',
    challenges: [
      'Implementing efficient square packing algorithms with constraint satisfaction',
      'Creating intuitive visualization interface for complex algorithm interactions',
      'Optimizing algorithm performance for real-time visualization and feedback',
      'Handling complex grid interactions with multiple square sizes and constraints'
    ],
    solutions: [
      'Implemented multiple greedy packing strategies with optimization heuristics',
      'Built responsive visualization components with smooth animations and transitions',
      'Added performance monitoring and algorithm comparison features',
      'Created interactive constraint system with real-time validation and feedback'
    ],
    features: [
      'Interactive Grid Interface',
      'Multiple Packing Algorithms',
      'Real-time Visualization',
      'Algorithm Comparison',
      'Performance Metrics',
      'Responsive Design',
      'Export Functionality',
      'Custom Grid Sizes'
    ]
  },
  {
    id: 4,
    title: 'True Count Trainer',
    description: 'Interactive training application for practicing Hi-Lo true count calculations with visual deck tracking.',
    longDescription: 'Comprehensive mathematical training tool featuring card counting algorithms, statistical analysis, and progressive difficulty levels.',
    detailedDescription: [
      'Developed an interactive training application for practicing mathematical calculations and statistical analysis in card counting scenarios.',
      'Features multiple counting system implementations with realistic simulation algorithms and comprehensive performance tracking.',
      'The application provides detailed feedback and statistical analysis to track improvement and learning progress.',
      'Built with React and TypeScript featuring engaging UI, smooth animations, and mobile-responsive design.'
    ],
    image: '/images/projects/truecount-trainer.png',
    images: ['/images/projects/truecount-trainer.png'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'SVG Graphics'],
    githubUrl: 'https://github.com/ericyung1/truecount-trainer',
    liveUrl: 'https://truecount-trainer.vercel.app',
    featured: false,
    category: 'Educational Application',
    duration: '2 weeks',
    challenges: [
      'Implementing accurate mathematical algorithms for card counting calculations',
      'Creating realistic simulation scenarios with proper statistical modeling',
      'Building engaging user interface with smooth animations and responsive design',
      'Developing comprehensive progress tracking and performance analytics system'
    ],
    solutions: [
      'Implemented Hi-Lo counting system with accurate mathematical calculations and validation',
      'Created realistic deck simulation with proper shuffling algorithms and statistical accuracy',
      'Built intuitive training interface with progressive difficulty and immediate feedback',
      'Added comprehensive statistics dashboard with performance tracking and trend analysis'
    ],
    features: [
      'Multiple Counting Systems',
      'Realistic Game Scenarios',
      'Progress Tracking',
      'Statistics Dashboard',
      'Card Animation',
      'Difficulty Levels',
      'Training Modes',
      'Performance Analytics'
    ]
  },
  {
    id: 5,
    title: 'Finlytics Dashboard',
    description: 'Full-stack financial analytics dashboard with AI-powered revenue predictions, interactive data visualizations, etc.',
    longDescription: 'Comprehensive financial analytics platform featuring machine learning integration, real-time data processing, and advanced business intelligence tools.',
    detailedDescription: [
      'Built a full-stack financial analytics dashboard designed for comprehensive business intelligence and predictive analytics.',
      'Features AI-powered revenue forecasting with machine learning algorithms and real-time data visualization capabilities.',
      'The application provides detailed insights into financial performance with KPI tracking and advanced analytics tools.',
      'Developed with modern tech stack including React, Node.js, and MongoDB with responsive design and data export functionality.'
    ],
    image: '/images/projects/finlytics-dashboard.png',
    images: ['/images/projects/finlytics-dashboard.png'],
    technologies: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Recharts', 'Machine Learning'],
    githubUrl: 'https://github.com/ericyung1/finlytics-dashboard',
    liveUrl: 'https://finlytics-dashboard.vercel.app',
    featured: false,
    category: 'Financial Dashboard',
    duration: '4 weeks',
    challenges: [
      'Integrating machine learning algorithms for revenue prediction and forecasting',
      'Creating complex data visualizations with interactive charts and real-time updates',
      'Handling large datasets with efficient data processing and API management',
      'Building scalable full-stack architecture with responsive dashboard layout'
    ],
    solutions: [
      'Implemented predictive analytics with machine learning models and statistical algorithms',
      'Used Recharts library for interactive data visualizations with custom components',
      'Built efficient API layer with Express.js and MongoDB for data management',
      'Created modular dashboard architecture with responsive design and export functionality'
    ],
    features: [
      'Portfolio Tracking',
      'Real-time Market Data',
      'Interactive Charts',
      'Performance Analytics',
      'Risk Assessment',
      'Data Export',
      'Responsive Design',
      'Custom Alerts'
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
