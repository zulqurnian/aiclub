import { useEffect, useRef } from 'react'

export interface PinnedSession {
  id: string
  title: string
  preview: string
  timestamp: string
}

interface SidebarProps {
  isDrawerOpen: boolean
  onCloseDrawer: () => void
  pinnedSessions: PinnedSession[]
}

interface RailItem {
  id: string
  label: string
  icon: string
  filled?: boolean
}

const RAIL_ITEMS: RailItem[] = [
  { id: 'chat',     label: 'Chat',     icon: 'chat',           filled: true  },
  { id: 'search',   label: 'Search',   icon: 'search'                       },
  { id: 'library',  label: 'Library',  icon: 'library_books'                },
  { id: 'settings', label: 'Settings', icon: 'settings'                     },
]

export function Sidebar({ isDrawerOpen, onCloseDrawer, pinnedSessions }: SidebarProps) {
  const drawerRef = useRef<HTMLDivElement | null>(null)

  // Click-outside-to-close
  useEffect(() => {
    if (!isDrawerOpen) return
    const handlePointer = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        onCloseDrawer()
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseDrawer()
    }
    document.addEventListener('mousedown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isDrawerOpen, onCloseDrawer])

  return (
    <>
      {/* Permanent left rail (desktop only) */}
      <nav
        className="hidden md:flex flex-col items-center py-stack-lg gap-stack-md bg-surface fixed left-0 top-0 h-full w-20 border-r border-outline-variant z-40"
        aria-label="Primary navigation"
      >
        <div className="mb-stack-lg flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-[32px]">
            temp_preferences_custom
          </span>
        </div>

        <div className="flex flex-col gap-stack-md w-full items-center">
          {RAIL_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`group relative flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all active:scale-90 ${
                item.filled
                  ? 'text-primary bg-primary-container/10 scale-95'
                  : 'text-on-surface-variant hover:text-primary scale-95'
              }`}
              title={item.label}
              type="button"
            >
              <span
                className="material-symbols-outlined"
                style={item.filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="font-label-sm text-label-sm sr-only group-hover:not-sr-only absolute left-14 bg-surface-container-highest px-2 py-1 rounded whitespace-nowrap z-50">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-auto">
          <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center">
            <span className="material-symbols-outlined text-on-surface-variant">person</span>
          </div>
        </div>
      </nav>

      {/* Drawer overlay (slides over the center canvas) */}
      {isDrawerOpen && (
        <>
          {/* Soft scrim — purely visual, clicks pass through to document mousedown */}
          <div
            className="fixed inset-0 bg-black/30 z-40 md:left-20"
            aria-hidden="true"
          />
          <div
            ref={drawerRef}
            role="dialog"
            aria-label="Pinned sessions"
            className="tw-drawer-panel fixed left-20 top-0 h-full w-80 bg-surface-container-low border-r border-outline-variant z-50 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-stack-md border-b border-outline-variant">
              <h2 className="font-headline-md text-on-surface">Pinned Sessions</h2>
              <button
                onClick={onCloseDrawer}
                className="text-on-surface-variant hover:text-on-surface p-1 rounded-full"
                aria-label="Close drawer"
                type="button"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-stack-sm">
              {pinnedSessions.length === 0 ? (
                <div className="font-body-md text-on-surface-variant/60 text-center mt-8 px-4">
                  No pinned sessions yet. Pin a chat from the history menu to see it here.
                </div>
              ) : (
                pinnedSessions.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className="text-left p-3 rounded-xl hover:bg-surface-container transition-colors group"
                  >
                    <div className="font-label-md text-on-surface truncate">{s.title}</div>
                    <div className="font-body-md text-on-surface-variant/70 text-sm truncate mt-1">
                      {s.preview}
                    </div>
                    <div className="font-label-sm text-on-surface-variant/50 mt-1">
                      {s.timestamp}
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
