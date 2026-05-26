'use client'

export default function Error() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          Something went wrong!
        </h2>
        <p className="text-zinc-400">
          Could not connect to the database. Please try again.
        </p>
      </div>
    </main>
  )
}