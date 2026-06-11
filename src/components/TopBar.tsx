import { useEffect, useRef, useState } from 'react'

type Theme = 'dark' | 'light'

interface TopBarProps {
  onToggleDrawer: () => void
}

export function TopBar({ onToggleDrawer }: TopBarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')
  const [language, setLanguage] = useState<string>('English')
  const menuRef = useRef<HTMLDivElement | null>(null)

  // Close menu on click-outside / Escape
  useEffect(() => {
    if (!menuOpen) return
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const cycleLanguage = () =>
    setLanguage((prev) =>
      prev === 'English' ? '日本語' : prev === '日本語' ? 'Español' : 'English'
    )

  return (
    <header className="flex justify-between items-center w-full px-container-padding-desktop py-stack-md bg-transparent absolute top-0 left-0 right-0 z-30">
      <button
        type="button"
        onClick={onToggleDrawer}
        className="md:flex hidden text-on-surface-variant hover:text-on-surface transition-opacity opacity-80 active:opacity-100 p-2 rounded-full"
        aria-label="Toggle navigation drawer"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      <div className="flex items-center gap-gutter">
        <a
          href="#"
          className="hidden sm:flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-opacity opacity-80 active:opacity-100 font-label-md text-label-md"
        >
          <span>Parent Company</span>
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </a>

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-on-surface-variant hover:text-on-surface transition-opacity opacity-80 active:opacity-100 p-2 rounded-full"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-label="More options"
          >
            <span className="material-symbols-outlined">more_vert</span>
          </button>

          {menuOpen && (
            <div
              role="menu"
              className="absolute right-0 mt-2 w-64 bg-surface-container border border-outline-variant rounded-xl shadow-xl py-2 z-50"
            >
              <button
                type="button"
                role="menuitem"
                onClick={toggleTheme}
                className="w-full text-left px-4 py-2 font-label-md text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                  </span>
                  Toggle Theme
                </span>
                <span className="font-label-sm text-on-surface-variant/70 uppercase">
                  {theme}
                </span>
              </button>

              <button
                type="button"
                role="menuitem"
                onClick={cycleLanguage}
                className="w-full text-left px-4 py-2 font-label-md text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">language</span>
                  Language
                </span>
                <span className="font-label-sm text-on-surface-variant/70">
                  {language}
                </span>
              </button>

              <div className="border-t border-outline-variant my-1" />
              <div className="px-4 py-2 font-label-sm text-on-surface-variant/50">
                Theme & language persistence coming soon.
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
