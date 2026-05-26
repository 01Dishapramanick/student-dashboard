# Student Dashboard

A futuristic, highly animated Student Dashboard built for the Frontend Intern Challenge.

## Live Demo
https://student-dashboard-flax.vercel.app

## GitHub
https://github.com/01Dishapramanick/student-dashboard

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Architecture

### Server/Client Component Split
- `app/page.tsx` — Server Component that fetches courses from Supabase
- `components/BentoGrid.tsx` — Client Component handling staggered animations
- `components/Sidebar.tsx` — Client Component with collapsible desktop nav + mobile bottom nav
- `components/CourseCard.tsx` — Client Component with animated progress bar + gradient mesh
- `components/HeroTile.tsx` — Client Component with greeting + streak indicator
- `components/ActivityTile.tsx` — Client Component with contribution graph
- `components/SkeletonLoader.tsx` — Pulsing skeleton shown during data fetch
- `lib/supabase/server.ts` — Server-side Supabase client
- `app/loading.tsx` — Automatic loading UI using Next.js conventions
- `app/error.tsx` — Graceful error handling for database failures

### Data Fetching
- Courses fetched server-side using `@supabase/supabase-js`
- RLS policy enabled on Supabase for public read access
- Environment variables stored securely in `.env.local`

### Animations
- Staggered entrance using Framer Motion `staggerChildren`
- Spring physics on all tiles (`stiffness: 300, damping: 20`)
- `layoutId` used for sidebar active state highlight
- Progress bars animate from 0% to actual value on load
- Hover states use `scale` and `boxShadow` only — no layout shifts

### Responsive Design
- Desktop (>1024px): Full sidebar + 3-column bento grid
- Tablet (768-1024px): Sidebar collapses to icons only
- Mobile (<768px): Bottom navigation bar + single column grid

## Setup
1. Clone the repo
2. Copy `.env.example` to `.env.local`
3. Add your Supabase URL and anon key
4. Run `npm install`
5. Run `npm run dev`

## Challenges
- Fixing hydration mismatch in ActivityTile caused by `Math.random()`
- Setting up correct RLS policies in Supabase for public read access
- Managing server/client component boundary with Framer Motion
- Ensuring zero layout shifts on all hover animations