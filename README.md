# Student Dashboard

A futuristic, highly animated Student Dashboard built for the Frontend Intern Challenge.

## Live Demo
https://student-dashboard-flax.vercel.app

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Architecture

### Server/Client Split
- `app/page.tsx` is a **Server Component** that fetches courses directly from Supabase
- All interactive components (`Sidebar`, `HeroTile`, `CourseCard`, `ActivityTile`) are **Client Components** marked with `'use client'`
- `loading.tsx` provides automatic skeleton UI while data loads
- `error.tsx` handles database connection failures gracefully

### Data Fetching
- Supabase client is initialized server-side in `lib/supabase/server.ts`
- Courses are fetched using `@supabase/supabase-js` inside a Server Component
- Environment variables are stored securely in `.env.local` (never committed)

## Setup
1. Clone the repo
2. Copy `.env.example` to `.env.local`
3. Add your Supabase URL and anon key
4. Run `npm install`
5. Run `npm run dev`

## Challenges
- Handling the server/client component boundary with Framer Motion
- Fixing hydration mismatches caused by random values in ActivityTile
- Setting up correct RLS policies in Supabase for public read access