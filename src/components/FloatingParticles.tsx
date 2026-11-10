import React, { useMemo } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
  type: 'heart' | 'glow' | 'star'
}

export const FloatingParticles: React.FC = () => {
  // Generate consistent deterministic particles so there is no layout thrashing
  const particles: Particle[] = useMemo(() => {
    const list: Particle[] = []
    // 16 gentle floating hearts
    for (let i = 0; i < 16; i++) {
      list.push({
        id: i,
        x: Math.floor((i * 6.25 + 3) % 96),
        y: Math.floor((i * 13 + 5) % 90),
        size: 10 + ((i * 7) % 14), // 10px to 24px
        duration: 12 + ((i * 3) % 10), // 12s to 22s
        delay: ((i * 2.3) % 8),
        opacity: 0.15 + ((i % 5) * 0.05), // subtle 0.15 to 0.35
        type: i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'glow' : 'star'
      })
    }
    return list
  }, [])

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          {p.type === 'heart' && (
            <svg
              className="text-pink-400/40 drop-shadow-[0_0_8px_rgba(244,63,94,0.4)]"
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}

          {p.type === 'glow' && (
            <div
              className="rounded-full bg-rose-400/30 blur-[2px] shadow-[0_0_12px_rgba(251,113,133,0.5)]"
              style={{
                width: `${p.size * 0.75}px`,
                height: `${p.size * 0.75}px`,
              }}
            />
          )}

          {p.type === 'star' && (
            <span 
              className="text-rose-300/40 text-[10px]"
              style={{ fontSize: `${p.size * 0.65}px` }}
            >
              ✦
            </span>
          )}
        </div>
      ))}

      {/* Atmospheric radial background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-3/4 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-plum-800/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-pink-900/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Custom float animation keyframes */}
      <style>{`
        @keyframes floatSlow {
          0% {
            transform: translateY(0px) rotate(0deg) scale(0.95);
          }
          50% {
            transform: translateY(-28px) translateX(12px) rotate(8deg) scale(1.05);
          }
          100% {
            transform: translateY(0px) rotate(0deg) scale(0.95);
          }
        }
        .animate-float {
          animation: floatSlow infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}
