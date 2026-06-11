import { useState } from 'react'
import { Sidebar, type PinnedSession } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import { CenterCanvas } from './components/CenterCanvas'

const PLACEHOLDERS = [
  'Ask about our Corporate Style Generator...',
  'Generate a Minic3D TTRPG Character...',
  'View Hermes Local Agent architecture...',
  'Compose a marketing brief with the Marketing Brain...',
  'Draft a new agent workflow...',
]

const SEED_PINNED: PinnedSession[] = [
  {
    id: 'p1',
    title: 'Style Gen — Q3 brand refresh',
    preview: 'Palette: #2563EB primary, ghost borders...',
    timestamp: '2h ago',
  },
  {
    id: 'p2',
    title: 'Minic3D: Half-orc bard',
    preview: 'Backstory sketch and stat block draft...',
    timestamp: 'Yesterday',
  },
  {
    id: 'p3',
    title: 'Hermes — local agent eval',
    preview: 'Latency p50 420ms on RTX 4090...',
    timestamp: 'Mon',
  },
]

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [pinnedSessions] = useState<PinnedSession[]>(SEED_PINNED)

  const handleSubmitCommand = (value: string) => {
    // For now: log to console as required. Real chat wiring comes later.
    // eslint-disable-next-line no-console
    console.log('[command submitted]', value)
  }

  return (
    <div className="font-sans text-body-md bg-background text-on-background min-h-screen flex overflow-hidden">
      <div className="ambient-glow" aria-hidden="true" />

      <Sidebar
        isDrawerOpen={isDrawerOpen}
        onCloseDrawer={() => setDrawerOpen(false)}
        pinnedSessions={pinnedSessions}
      />

      <main className="flex-1 flex flex-col md:ml-20 h-screen relative z-10">
        <TopBar onToggleDrawer={() => setDrawerOpen((v) => !v)} />

        <CenterCanvas
          onSubmitCommand={handleSubmitCommand}
          placeholders={PLACEHOLDERS}
        />
      </main>
    </div>
  )
}

export default App
