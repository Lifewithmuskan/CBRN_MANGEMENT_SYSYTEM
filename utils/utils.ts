// Generate points for inner and outer rings
export const pointsInner = Array.from({ length: 40 }).map((_, idx) => {
  const angle = (idx / 40) * Math.PI * 2
  const x = Math.cos(angle) * 5
  const z = Math.sin(angle) * 5
  const y = (Math.random() - 0.5) * 0.5

  // Select a random color
  const colors = ["#ff4000", "#ff0000", "#ff8000"]
  const color = colors[Math.floor(Math.random() * colors.length)]

  return {
    idx,
    position: [x, y, z],
    color,
  }
})

export const pointsOuter = Array.from({ length: 60 }).map((_, idx) => {
  const angle = (idx / 60) * Math.PI * 2
  const x = Math.cos(angle) * 8
  const z = Math.sin(angle) * 8
  const y = (Math.random() - 0.5) * 0.5

  // Select a random color
  const colors = ["#0080ff", "#00ffff", "#0040ff"]
  const color = colors[Math.floor(Math.random() * colors.length)]

  return {
    idx,
    position: [x, y, z],
    color,
  }
})
