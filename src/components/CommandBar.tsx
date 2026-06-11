import { useEffect, useRef, useState, type FormEvent } from 'react'

interface CommandBarProps {
  placeholders: string[]
  onSubmit: (value: string) => void
}

const TYPE_SPEED_MS = 55       // ms per character typed
const DELETE_SPEED_MS = 30     // ms per character deleted
const PAUSE_AFTER_TYPE_MS = 2000 // 2s pause once fully typed
const PAUSE_AFTER_DELETE_MS = 400

type Phase = 'typing' | 'pausing' | 'deleting' | 'pausing-after-delete'

export function CommandBar({ placeholders, onSubmit }: CommandBarProps) {
  const [value, setValue] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState<Phase>('typing')
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const timerRef = useRef<number | null>(null)

  const currentPlaceholder = placeholders[placeholderIndex] ?? ''

  // Typewriter loop
  useEffect(() => {
    if (focused || value.length > 0) {
      // Hold steady once user is interacting
      return
    }

    if (phase === 'typing') {
      if (typed.length < currentPlaceholder.length) {
        timerRef.current = window.setTimeout(() => {
          setTyped(currentPlaceholder.slice(0, typed.length + 1))
        }, TYPE_SPEED_MS)
      } else {
        timerRef.current = window.setTimeout(() => setPhase('pausing'), PAUSE_AFTER_TYPE_MS)
      }
    } else if (phase === 'pausing') {
      setPhase('deleting')
    } else if (phase === 'deleting') {
      if (typed.length > 0) {
        timerRef.current = window.setTimeout(() => {
          setTyped((prev) => prev.slice(0, -1))
        }, DELETE_SPEED_MS)
      } else {
        timerRef.current = window.setTimeout(() => {
          setPlaceholderIndex((i) => (i + 1) % placeholders.length)
          setPhase('pausing-after-delete')
        }, PAUSE_AFTER_DELETE_MS)
      }
    } else if (phase === 'pausing-after-delete') {
      setPhase('typing')
    }

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [typed, phase, currentPlaceholder, placeholders, focused, value])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onSubmit(trimmed)
    setValue('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[700px] flex flex-col gap-1"
    >
      <div
        className={`chat-input-bar rounded-full flex items-center px-6 py-4 w-full input-glow transition-all duration-300 ${
          focused ? 'border-primary-container/50' : ''
        }`}
      >
        <button
          type="button"
          className="text-on-surface-variant hover:text-on-surface transition-colors p-1 -ml-2 rounded-full"
          aria-label="Attach"
        >
          <span className="material-symbols-outlined text-[24px]">add</span>
        </button>

        <div className="flex-1 mx-4 overflow-hidden flex items-center h-6 relative">
          {/* Real input — transparent text, visible caret */}
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent text-on-surface font-body-md text-body-md outline-none placeholder:text-transparent"
            aria-label="Command input"
          />
          {/* Animated placeholder, hidden once the user types or focuses */}
          {value.length === 0 && !focused && (
            <span
              className="absolute inset-y-0 left-0 flex items-center text-on-surface-variant font-body-md text-body-md pointer-events-none whitespace-nowrap"
              aria-hidden="true"
            >
              {typed}
              <span className="tw-caret" />
            </span>
          )}
        </div>

        <button
          type="button"
          className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-full"
          aria-label="Voice input"
        >
          <span className="material-symbols-outlined text-[24px]">mic</span>
        </button>

        <button
          type="submit"
          disabled={!value.trim()}
          className="ml-2 text-on-surface-variant hover:text-primary disabled:opacity-30 disabled:hover:text-on-surface-variant disabled:cursor-not-allowed transition-colors p-1 -mr-2 rounded-full"
          aria-label="Send message"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_upward</span>
        </button>
      </div>

      <div className="flex justify-between items-center px-4 mt-2">
        <span className="font-label-sm text-label-sm text-on-surface-variant/60 flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">history</span>
          AI Journey: From RAGs to Agents
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant/60">
          Today
        </span>
      </div>
    </form>
  )
}
