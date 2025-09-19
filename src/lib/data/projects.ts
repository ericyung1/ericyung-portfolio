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
    description: '[PLACEHOLDER] Intelligent grid pathfinding solver with Dijkstra\'s Algorithm. Interactive puzzle editor with prize categories and optimal path finding.',
    longDescription: '[PLACEHOLDER] Grid-based pathfinding application featuring interactive editing, prize management, and advanced algorithms for optimal route calculation.',
    detailedDescription: [
      '[PLACEHOLDER] This project was built to solve the challenge of creating an interactive pathfinding visualization tool.',
      '[PLACEHOLDER] Features include a 15x15 grid editor, prize category management, and Dijkstra\'s algorithm implementation.',
      '[PLACEHOLDER] The application supports multiple solving modes and provides visual feedback for optimal paths.',
      '[PLACEHOLDER] Built with Next.js and TypeScript for optimal performance and type safety.'
    ],
    image: '/images/projects/puzzle-pathfinder.png',
    images: ['/images/projects/puzzle-pathfinder.png'],
    technologies: ['[PLACEHOLDER]', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ericyung1/puzzle-pathfinder',
    liveUrl: 'https://puzzle-pathfinder.vercel.app',
    featured: true,
    category: 'Algorithm Visualization',
    duration: '[PLACEHOLDER]',
    challenges: [
      '[PLACEHOLDER] Implementing Dijkstra\'s algorithm efficiently',
      '[PLACEHOLDER] Creating intuitive grid editing interface',
      '[PLACEHOLDER] Managing complex state for prizes and costs',
      '[PLACEHOLDER] Optimizing pathfinding performance'
    ],
    solutions: [
      '[PLACEHOLDER] Implemented optimized Dijkstra\'s with priority queue',
      '[PLACEHOLDER] Built responsive grid with keyboard navigation',
      '[PLACEHOLDER] Used local storage for state persistence',
      '[PLACEHOLDER] Added visual feedback for algorithm steps'
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
    description: '[PLACEHOLDER] AI-powered crossword puzzle generator with OpenAI integration. Features automatic clue generation and interactive solving interface.',
    longDescription: '[PLACEHOLDER] Intelligent crossword puzzle application with AI-generated clues, multiple templates, and interactive solving experience.',
    detailedDescription: [
      '[PLACEHOLDER] An advanced crossword puzzle generator that uses AI to create engaging puzzles with high-quality clues.',
      '[PLACEHOLDER] Features backtracking algorithms for puzzle generation and OpenAI integration for NYT-style clues.',
      '[PLACEHOLDER] The application includes 15 different templates and a 34K+ word database for variety.',
      '[PLACEHOLDER] Built with modern web technologies and deployed on Vercel for optimal performance.'
    ],
    image: '/images/projects/mini-crossword.png',
    images: ['/images/projects/mini-crossword.png'],
    technologies: ['[PLACEHOLDER]', 'Next.js', 'TypeScript', 'OpenAI API'],
    githubUrl: 'https://github.com/ericyung1/mini-crossword',
    liveUrl: 'https://mini-crossword-beige.vercel.app',
    featured: true,
    category: 'AI Application',
    duration: '[PLACEHOLDER]',
    challenges: [
      '[PLACEHOLDER] Implementing crossword generation algorithms',
      '[PLACEHOLDER] Integrating OpenAI for clue generation',
      '[PLACEHOLDER] Creating responsive crossword interface',
      '[PLACEHOLDER] Optimizing word placement algorithms'
    ],
    solutions: [
      '[PLACEHOLDER] Used backtracking with constraint satisfaction',
      '[PLACEHOLDER] Integrated GPT-4o-mini for quality clues',
      '[PLACEHOLDER] Built flexible grid system with CSS Grid',
      '[PLACEHOLDER] Implemented most constrained variable heuristic'
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
    description: '[PLACEHOLDER] Interactive grid packing visualization tool for exploring different packing algorithms and optimization strategies.',
    longDescription: '[PLACEHOLDER] Grid-based packing algorithm visualization with interactive controls and multiple solving approaches.',
    detailedDescription: [
      '[PLACEHOLDER] A visualization tool for exploring different grid packing algorithms and optimization strategies.',
      '[PLACEHOLDER] Features interactive grid editing and multiple algorithm implementations.',
      '[PLACEHOLDER] The application provides visual feedback for different packing approaches.',
      '[PLACEHOLDER] Built with modern web technologies for smooth interactive experience.'
    ],
    image: '/images/projects/grid-packer.png',
    images: ['/images/projects/grid-packer.png'],
    technologies: ['[PLACEHOLDER]', 'Next.js', 'TypeScript', 'Algorithm Visualization'],
    githubUrl: 'https://github.com/ericyung1/grid-packer',
    liveUrl: 'https://grid-packer.vercel.app',
    featured: false,
    category: 'Algorithm Visualization',
    duration: '[PLACEHOLDER]',
    challenges: [
      '[PLACEHOLDER] Implementing efficient packing algorithms',
      '[PLACEHOLDER] Creating intuitive visualization interface',
      '[PLACEHOLDER] Optimizing algorithm performance',
      '[PLACEHOLDER] Handling complex grid interactions'
    ],
    solutions: [
      '[PLACEHOLDER] Implemented multiple packing strategies',
      '[PLACEHOLDER] Built responsive visualization components',
      '[PLACEHOLDER] Added performance monitoring and optimization',
      '[PLACEHOLDER] Created smooth animation system'
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
    description: '[PLACEHOLDER] Blackjack card counting practice application with different counting systems and training modes.',
    longDescription: '[PLACEHOLDER] Comprehensive blackjack training tool with multiple counting systems and practice scenarios.',
    detailedDescription: [
      '[PLACEHOLDER] A blackjack card counting trainer designed to help users practice different counting systems.',
      '[PLACEHOLDER] Features multiple counting methods and realistic game scenarios.',
      '[PLACEHOLDER] The application provides feedback and statistics to track improvement.',
      '[PLACEHOLDER] Built with engaging UI and smooth card animations.'
    ],
    image: '/images/projects/truecount-trainer.png',
    images: ['/images/projects/truecount-trainer.png'],
    technologies: ['[PLACEHOLDER]', 'React', 'JavaScript', 'Game Logic'],
    githubUrl: 'https://github.com/ericyung1/truecount-trainer',
    liveUrl: 'https://truecount-trainer.vercel.app',
    featured: false,
    category: 'Educational Game',
    duration: '[PLACEHOLDER]',
    challenges: [
      '[PLACEHOLDER] Implementing accurate card counting logic',
      '[PLACEHOLDER] Creating realistic game scenarios',
      '[PLACEHOLDER] Building engaging user interface',
      '[PLACEHOLDER] Tracking user progress effectively'
    ],
    solutions: [
      '[PLACEHOLDER] Implemented multiple counting systems',
      '[PLACEHOLDER] Created realistic deck simulation',
      '[PLACEHOLDER] Built intuitive training interface',
      '[PLACEHOLDER] Added comprehensive statistics tracking'
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
    description: '[PLACEHOLDER] Financial analytics dashboard with data visualization, portfolio tracking, and market insights.',
    longDescription: '[PLACEHOLDER] Comprehensive financial dashboard featuring portfolio analysis, market data, and investment tracking.',
    detailedDescription: [
      '[PLACEHOLDER] A financial analytics dashboard designed for portfolio management and market analysis.',
      '[PLACEHOLDER] Features real-time data visualization and comprehensive investment tracking.',
      '[PLACEHOLDER] The application provides insights into market trends and portfolio performance.',
      '[PLACEHOLDER] Built with modern data visualization libraries and responsive design.'
    ],
    image: '/images/projects/finlytics-dashboard.png',
    images: ['/images/projects/finlytics-dashboard.png'],
    technologies: ['[PLACEHOLDER]', 'React', 'Chart.js', 'Financial APIs'],
    githubUrl: 'https://github.com/ericyung1/finlytics-dashboard',
    liveUrl: 'https://finlytics-dashboard.vercel.app',
    featured: false,
    category: 'Financial Dashboard',
    duration: '[PLACEHOLDER]',
    challenges: [
      '[PLACEHOLDER] Integrating financial data APIs',
      '[PLACEHOLDER] Creating complex data visualizations',
      '[PLACEHOLDER] Handling real-time data updates',
      '[PLACEHOLDER] Building responsive dashboard layout'
    ],
    solutions: [
      '[PLACEHOLDER] Implemented efficient API management',
      '[PLACEHOLDER] Used Chart.js for interactive charts',
      '[PLACEHOLDER] Added real-time data streaming',
      '[PLACEHOLDER] Created flexible dashboard components'
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
