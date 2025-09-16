# Eric Yung - Portfolio

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable React components
│   └── lib/                 # Utilities and data
├── public/                  # Static assets
│   ├── castle_background.png
│   ├── dragon.png
│   ├── mountain_foreground.png
│   ├── stars.png
│   ├── self_portrait.jpg
│   └── eric-yung-resume.pdf
└── backup/                  # Original files backup
```

## 🔄 Migration Notes

**File Moves:**
- All images moved from root to `/public/`
- Resume renamed: `Eric Yung's Resume.pdf` → `eric-yung-resume.pdf`
- Legacy HTML/CSS/JS files backed up to `/backup/` then removed

**Tech Stack Migration:**
- **From:** Vanilla HTML/CSS/JavaScript
- **To:** Next.js 14 + React + TypeScript + Tailwind CSS

## 🎨 Design System

**Colors:**
- Teal Primary: `#208599`
- Teal Secondary: `#8ae4da`
- Dark Blue: `#124757`

**Typography:**
- Primary: Poppins (Google Fonts)

## 📝 Content Management

Content is designed to be easily editable:
- Project data will be in `/src/lib/data/`
- Component-based architecture for easy updates
- Placeholder content clearly marked for replacement

## 🚢 Deployment

This project is configured for deployment on Vercel:

```bash
npm run build
```

## 📊 Development Phases

- [x] **Phase 1**: Project setup & asset migration
- [ ] **Phase 2**: Parallax hero section
- [ ] **Phase 3**: Navigation & basic sections
- [ ] **Phase 4**: About section
- [ ] **Phase 5**: Experience section
- [ ] **Phase 6**: Skills section
- [ ] **Phase 7**: Projects section
- [ ] **Phase 8**: Project detail pages
- [ ] **Phase 9**: Contact section
- [ ] **Phase 10**: Performance & SEO
- [ ] **Phase 11**: Final polish & deployment

## 🔗 Contact

- **Email**: eyung@wustl.edu
- **LinkedIn**: [https://www.linkedin.com/in/eyung/](https://www.linkedin.com/in/eyung/)
- **GitHub**: [https://github.com/ericyung1](https://github.com/ericyung1)
