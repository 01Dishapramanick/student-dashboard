import SkeletonLoader from '@/components/SkeletonLoader'

export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 p-4">
      <SkeletonLoader />
    </main>
  )
}