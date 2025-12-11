'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface WelcomeLoaderProps {
  onComplete: () => void
}

const WelcomeLoader = ({ onComplete }: WelcomeLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)

  const phases = useMemo(
    () => [
      { title: 'Setting the stage', detail: 'Warming up your Annita experience', accent: 'from-[#003366] to-[#4B0082]' },
      { title: 'Syncing systems', detail: 'Connecting services and data layers', accent: 'from-[#4B0082] to-[#FF6600]' },
      { title: 'Tuning performance', detail: 'Optimizing for speed and clarity', accent: 'from-[#FF6600] to-[#00AF54]' },
      { title: 'Ready to go', detail: 'Finishing touches before launch', accent: 'from-[#00AF54] to-[#003366]' }
    ],
    []
  )

  const handleComplete = useCallback(() => {
    setIsLoading(false)
    setTimeout(onComplete, 450)
  }, [onComplete])

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const startTime = Date.now()
    const duration = 2800

    const tick = () => {
      const elapsed = Date.now() - startTime
      const next = Math.min((elapsed / duration) * 100, 100)
      setProgress(next)

      if (next >= 100) {
        handleComplete()
      } else {
        requestAnimationFrame(tick)
      }
    }

    const timer = setTimeout(() => requestAnimationFrame(tick), 200)
    return () => clearTimeout(timer)
  }, [isClient, handleComplete])

  if (!isClient) {
    return (
      <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/30 border-t-white" />
      </div>
    )
  }

  const phaseIndex = Math.min(phases.length - 1, Math.floor((progress / 100) * phases.length))
  const phase = phases[phaseIndex]

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[70] overflow-hidden bg-gradient-to-br from-[#0b1b3a] via-[#0f2c54] to-[#150c2f] text-white"
        >
          {/* subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />

          {/* glow orbs */}
          <div className="pointer-events-none absolute inset-0 blur-3xl">
            <div className="absolute -left-10 top-0 h-80 w-80 rounded-full bg-[#FF6600]/20" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#4B0082]/25" />
            <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#00AF54]/15" />
          </div>

          <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
            <div className="max-w-xl text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
              >
                <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-sm font-semibold tracking-wide uppercase text-white/80">
                  Annita is getting ready
                </span>
              </motion.div>

              <div className="mx-auto h-64 w-64 sm:h-72 sm:w-72">
                <div className="relative h-full w-full">
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${phase.accent} opacity-30 blur-2xl`}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  <motion.div
                    className="absolute inset-1 rounded-full border border-white/10 bg-white/5 backdrop-blur"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                    style={{
                      mask: 'radial-gradient(circle at center, transparent 58%, black 59%)',
                      WebkitMask: 'radial-gradient(circle at center, transparent 58%, black 59%)'
                    }}
                  />

                  <motion.div
                    className="absolute inset-3 rounded-full border border-white/15 bg-gradient-to-br from-white/10 to-white/5 shadow-[0_0_50px_rgba(0,0,0,0.35)]"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    style={{
                      mask: 'radial-gradient(circle at center, transparent 63%, black 64%)',
                      WebkitMask: 'radial-gradient(circle at center, transparent 63%, black 64%)'
                    }}
                  />

                  <motion.div
                    className={`absolute inset-6 rounded-full border-2 border-transparent bg-[conic-gradient(var(--tw-gradient-from),var(--tw-gradient-to))] ${phase.accent}`}
                    style={{
                      mask: 'radial-gradient(circle at center, transparent 68%, black 69%)',
                      WebkitMask: 'radial-gradient(circle at center, transparent 68%, black 69%)'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  />

                  <motion.div
                    className="absolute inset-12 flex items-center justify-center rounded-full bg-white text-slate-900 shadow-2xl"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full bg-white ring-1 ring-slate-100 shadow-lg">
                      <Image
                        src="/images/logo/annita-logo.svg"
                        alt="Annita logo"
                        fill
                        className="object-contain"
                        sizes="112px"
                        priority
                      />
                    </div>
                  </motion.div>

                  {[...Array(6)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.35)]"
                      animate={{
                        x: [0, Math.cos((i * Math.PI) / 3) * 110],
                        y: [0, Math.sin((i * Math.PI) / 3) * 110],
                        opacity: [0.2, 1, 0.2],
                        scale: [0.8, 1.15, 0.8]
                      }}
                      transition={{
                        duration: 3 + i * 0.2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="space-y-3"
              >
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  A modern workspace for African innovation
                </h1>
                <p className="text-base sm:text-lg text-white/80">
                  {phase.title} • {phase.detail}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mx-auto w-full max-w-md"
              >
                <div className="relative h-2 overflow-hidden rounded-full bg-white/10 backdrop-blur">
                  <motion.div
                    className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${phase.accent}`}
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'easeOut', duration: 0.25 }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs font-medium text-white/70">
                  <span>{Math.round(progress)}%</span>
                  <span>Launching Annita</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeLoader
