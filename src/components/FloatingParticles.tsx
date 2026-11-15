import React, { useMemo } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
  type: 'gold-sparkle' | 'gold-dust' | 'gold-heart'
}

export const FloatingParticles: React.FC = () => {
  const particles: Particle[] = useMemo(() => {
    const list: Particle[] = []
    for (let i = 0; i < 18; i++) {
      list.push({
        id: i,
        x: Math.floor((i * 5.5 + 4) % 96),
        y: Math.floor((i * 11 + 6) % 92),
        size: 8 + ((i * 5) % 12),
        duration: 14 + ((i * 3) % 10),
        delay: ((i * 1.8) % 7),
        opacity: 0.18 + ((i % 4) * 0.08),
        type: i % 3 === 0 ? 'gold-sparkle' : i % 3 === 1 ? 'gold-dust' : 'gold-heart'
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
          className="absolute animate-float-gold"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        >
          {p.type === 'gold-sparkle' && (
            <span 
              className="text-gold-400 drop-shadow-[0_0_8px_rgba(214,173,85,0.6)]"
              style={{ fontSize: `${p.size + 4}px` }}
            >
              ✦
            </span>
          )}

          {p.type === 'gold-dust' && (
            <div
              className="rounded-full bg-gradient-to-tr from-gold-500 to-gold-300 blur-[1px] shadow-[0_0_10px_rgba(214,173,85,0.6)]"
              style={{
                width: `${p.size * 0.7}px`,
                height: `${p.size * 0.7}px`,
              }}
            />
          )}

          {p.type === 'gold-heart' && (
            <svg
              className="text-gold-400/50 drop-shadow-[0_0_8px_rgba(214,173,85,0.4)]"
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </div>
      ))}

      {/* Atmospheric Royal Cadbury Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cadbury-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 left-10 w-[500px] h-[500px] bg-cadbury-800/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-gold-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Custom float animation keyframes */}
      <style>{`
        @keyframes floatSlowGold {
          0% {
            transform: translateY(0px) rotate(0deg) scale(0.95);
          }
          50% {
            transform: translateY(-30px) translateX(10px) rotate(10deg) scale(1.05);
          }
          100% {
            transform: translateY(0px) rotate(0deg) scale(0.95);
          }
        }
        .animate-float-gold {
          animation: floatSlowGold infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}
