export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Eric Yung",
    "jobTitle": "Software Engineer",
    "description": "Software Engineer based in St. Louis, MO. Specializing in full-stack development with React, TypeScript, Node.js, and modern web technologies.",
    "url": "https://ericyung-portfolio.vercel.app",
    "email": "eyung@wustl.edu",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "St. Louis",
      "addressRegion": "MO",
      "addressCountry": "US"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Washington University in St. Louis"
    },
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Full Stack Development",
      "Web Development",
      "Software Engineering"
    ],
    "sameAs": [
      "https://github.com/ericyung1",
      "https://www.linkedin.com/in/eyung/"
    ],
    "seeks": {
      "@type": "JobPosting",
      "title": "Software Engineer",
      "employmentType": "FULL_TIME"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
