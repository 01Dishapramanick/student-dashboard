import { supabase } from '@/lib/supabase/server'
import { Course } from '@/types'
import HeroTile from '@/components/HeroTile'
import CourseCard from '@/components/CourseCard'
import ActivityTile from '@/components/ActivityTile'
import Sidebar from '@/components/sidebar'
import BentoGrid from '@/components/BentoGrid'

export default async function Home() {
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')

  if (error) throw new Error(error.message)

  return (
    <div className="flex min-h-screen bg-zinc-950">
      <Sidebar />
      <main className="flex-1 p-6">
        <BentoGrid courses={courses ?? []} />
      </main>
    </div>
  )
}