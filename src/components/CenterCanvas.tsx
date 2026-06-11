import { CommandBar } from './CommandBar'

interface CenterCanvasProps {
  onSubmitCommand: (value: string) => void
  placeholders: string[]
}

export function CenterCanvas({ onSubmitCommand, placeholders }: CenterCanvasProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-[800px] w-full mx-auto px-container-padding-mobile md:px-container-padding-desktop">
      <div className="text-[80px] mb-stack-md leading-none select-none" aria-hidden="true">
        🧠
      </div>
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-on-surface mb-stack-lg tracking-tight text-center">
        PWCOM AI CLUB
      </h1>
      <button
        type="button"
        className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 rounded-full hover:opacity-90 transition-opacity mb-stack-lg flex items-center gap-2"
        style={{ boxShadow: '0 0 20px rgba(37, 99, 235, 0.2)' }}
      >
        <span className="font-bold">+ Book an Appointment</span>
      </button>

      <CommandBar placeholders={placeholders} onSubmit={onSubmitCommand} />
    </div>
  )
}
