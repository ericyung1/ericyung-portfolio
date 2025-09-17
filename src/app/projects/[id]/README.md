# Project Detail Pages - DISABLED

This directory contains the project detail page functionality that has been temporarily disabled.

## Files:
- `page.tsx.disabled` - Main project detail page component
- `not-found.tsx.disabled` - 404 page for invalid project IDs

## To Re-enable:
1. Rename `page.tsx.disabled` → `page.tsx`
2. Rename `not-found.tsx.disabled` → `not-found.tsx`
3. Uncomment the project detail links in `src/components/ProjectsSection.tsx`
4. Re-add `FaEye` import if needed

## Features When Enabled:
- Individual project showcase pages
- Dynamic routing `/projects/[id]`
- Detailed project information
- Image galleries
- Challenges & solutions
- Technology breakdowns
- Back navigation to projects section

The shared project data in `src/lib/data/projects.ts` remains active and contains all the detailed information needed for the project detail pages.
