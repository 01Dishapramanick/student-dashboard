'use client'

import { motion } from 'framer-motion'
import HeroTile from './HeroTile'
import ActivityTile from './ActivityTile'
import CourseCard from './CourseCard'
import { Course } from '@/types'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

export default function BentoGrid({ courses }: { courses: Course[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3"
    >
      <motion.div variants={item} className="md:col-span-2">
        <HeroTile />
      </motion.div>
      <motion.div variants={item} className="md:col-span-1">
        <ActivityTile />
      </motion.div>
      {courses.map((course) => (
        <motion.div variants={item} key={course.id}>
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.div>
  )
}