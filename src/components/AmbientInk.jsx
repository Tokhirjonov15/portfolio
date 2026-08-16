// 잉크 안개 — 배경 앰비언트. 진홍/종이빛 얼룩이 아주 천천히 떠다니고,
// 그 위에 미세한 종이 먼지가 깜빡인다. 전부 CSS 애니메이션(transform/opacity)이라
// GPU 합성만 일어나고, prefers-reduced-motion 에서는 전역 규칙이 정지시킨다.

const DUST_COUNT = 26

// 결정적 의사난수 — 렌더마다 위치가 튀지 않도록 인덱스에서 유도
const rand = (i, salt) => {
  const v = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453
  return v - Math.floor(v)
}

export default function AmbientInk() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="ink-blob ink-blob-a" />
      <div className="ink-blob ink-blob-b" />
      <div className="ink-blob ink-blob-c" />
      {Array.from({ length: DUST_COUNT }).map((_, i) => (
        <span
          key={i}
          className="ink-dust"
          style={{
            left: `${rand(i, 1) * 100}%`,
            top: `${rand(i, 2) * 100}%`,
            animationDelay: `${rand(i, 3) * 5}s`,
            animationDuration: `${3.5 + rand(i, 4) * 4}s`,
          }}
        />
      ))}
    </div>
  )
}
