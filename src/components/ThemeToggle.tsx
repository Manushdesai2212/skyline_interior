import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="border-[3px] border-border bg-surface p-2 text-text-primary shadow-sm transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:border-border-dark dark:bg-surface-dark dark:text-text-primary-dark"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-accent-secondary" />
      ) : (
        <Moon className="h-5 w-5 text-accent-primary" />
      )}
    </button>
  )
}
