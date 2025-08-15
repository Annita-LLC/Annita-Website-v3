import React from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'gradient' | 'glass' | 'white'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  loading?: boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    icon: Icon,
    iconPosition = 'left',
    loading = false,
    children, 
    onClick,
    disabled,
    type = 'button',
    ...props 
  }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden"
    
    const variants = {
      primary: "bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-primary-500",
      secondary: "bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-secondary-500",
      accent: "bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-accent-500",
      outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
      ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500 hover:shadow-md transform hover:-translate-y-0.5",
      gradient: "bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 hover:from-primary-700 hover:via-secondary-700 hover:to-accent-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-primary-500",
      glass: "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 focus:ring-white/50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
      white: "bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    }
    
    const sizes = {
      sm: "px-4 py-2 text-sm rounded-lg",
      md: "px-6 py-3 text-base rounded-xl",
      lg: "px-8 py-4 text-lg rounded-xl",
      xl: "px-10 py-5 text-xl rounded-2xl"
    }

    const buttonClasses = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      className
    )

    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-inherit">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
        
        <span className={cn("flex items-center gap-2", loading && "opacity-0")}>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
