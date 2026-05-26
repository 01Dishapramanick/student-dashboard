'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, BookOpen, BarChart2, Settings, ChevronLeft, ChevronRight } from 'lucide-react'

const navItems = [
  { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
  { icon: <BookOpen size={20} />, label: 'Courses' },
  { icon: <BarChart2 size={20} />, label: 'Progress' },
  { icon: <Settings size={20} />, label: 'Settings' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('Dashboard')

  return (
    <motion.nav
      animate={{ width: collapsed ? 72 : 220 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="hidden md:flex flex-col h-screen bg-zinc-900 border-r border-white/10 p-3 overflow-hidden"
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="self-end p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 mb-6"
      >
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => setActive(item.label)}
              className="relative w-full flex items-center gap-3 px-3 py-2 rounded-xl text-zinc-400 hover:text-white transition-colors"
            >
              {active === item.label && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-violet-600/30 rounded-xl border border-violet-500/30"
                />
              )}
              <span className="relative z-10">{item.icon}</span>
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10 text-sm font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}