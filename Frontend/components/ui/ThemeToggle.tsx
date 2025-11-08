'use client'

import { useState } from 'react'
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react'
import { useTheme } from '@/lib/theme'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ] as const

  const currentTheme = themes.find(t => t.value === theme) || themes[2]
  const CurrentIcon = currentTheme.icon

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        aria-label="Toggle theme"
      >
        <CurrentIcon className="w-4 h-4" />
        <span className="hidden sm:block text-sm font-medium">
          {currentTheme.label}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20">
            <div className="py-2">
              {themes.map((themeOption) => {
                const Icon = themeOption.icon
                const isActive = theme === themeOption.value
                
                return (
                  <button
                    key={themeOption.value}
                    onClick={() => {
                      setTheme(themeOption.value)
                      setIsOpen(false)
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                      isActive 
                        ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{themeOption.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-orange-500 rounded-full" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export function SimpleThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      )}
    </button>
  )
}
