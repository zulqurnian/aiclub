---
name: Lumina Noir
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#39393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#ffb596'
  on-tertiary: '#581e00'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.04em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 4px
  container-padding-desktop: 32px
  container-padding-mobile: 16px
  gutter: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality is sophisticated, intelligent, and unobtrusive. It is designed for power users and creative professionals who require a focused, high-performance AI environment. The emotional response should be one of calm authority and seamless technical capability.

The design style is **Premium Minimalism** with a focus on depth through light-play rather than heavy shadows. It leverages the "Atmospheric Dark" aesthetic—using a deep, monochromatic base contrasted with vibrant, glowing focal points. Interactive elements are treated as light sources, emitting a soft, radial blue glow that cuts through the dark interface, creating a sense of energy and responsiveness without visual clutter.

## Colors

The palette is anchored in a true-dark foundation to maximize contrast and reduce eye strain during extended sessions.

*   **Primary Background (#131314):** A deep charcoal black used for the main application canvas.
*   **Surface Containers (#1E1F20):** Subtle elevation for cards, chat bubbles, and sidebars.
*   **Action Blue (#2563EB):** A vibrant, high-saturation blue used for primary CTA buttons and active states.
*   **Glow Accent (#3B82F6):** A slightly lighter blue used for radial gradients and focus rings.
*   **Typography:** High-clarity white for primary content and muted gray for metadata and secondary labels.

## Typography

This design system utilizes **Inter** for its systematic clarity and excellent legibility at small sizes. The typographic hierarchy is intentionally tight, using subtle weight shifts (400 to 600) to establish order without the need for excessive size scaling. Large headlines use negative letter spacing to feel more compact and modern, while small labels use increased tracking for better readability against dark backgrounds.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous inner margins to create a sense of "air" and luxury. 

*   **Desktop:** 12-column grid with a maximum content width of 1200px for chat logs. Sidebars are fixed at 280px.
*   **Tablet:** 8-column grid with 24px margins.
*   **Mobile:** 4-column grid with 16px margins.

Spacing is governed by a 4px base unit. Stacked elements (like messages in a thread) should favor closer proximity (stack-sm) while distinct sections (input area vs. history) use wider gaps (stack-lg) to delineate functional boundaries.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Luminescent Effects**. Shadows are avoided in favor of:
1.  **Surface Tiers:** Background is #131314; floating elements (cards, menus) use #1E1F20.
2.  **Stroke Definition:** Containers use a 1px solid border of #2A2B2C to separate from the background.
3.  **Radial Glows:** Interactive elements like the primary "Send" button or active AI status indicators feature a soft 40px radial blur (color: #2563EB at 15% opacity) positioned behind the element to simulate a soft backlight.

## Shapes

The shape language is strictly **Pill-shaped (Level 3)**. This approach softens the technical nature of the AI interface, making it feel more approachable and organic. All buttons, input fields, and chips use maximum corner radii. Chat bubbles use a hybrid approach: fully rounded on three corners with a smaller radius (8px) on the anchor corner to indicate the speaker.

## Components

*   **Buttons:** Primary buttons are solid Blue (#2563EB) with white text. Secondary buttons are "Ghost" style with a 1px white-alpha border. All use a pill shape.
*   **Chat Input:** A large, pill-shaped container (#1E1F20) with 24px horizontal padding. The text is vertically centered.
*   **Chips/Badges:** Small pill shapes used for suggested prompts or model tags. These use a #2A2B2C background with secondary text.
*   **Iconography:** Use 20px / 1.5pt stroke icons. Icons should be minimalist and monolinear, utilizing the secondary text color (#9CA3AF) to remain unobtrusive.
*   **Message Bubbles:** User messages are outlined (Ghost style); AI messages are solid surface (#1E1F20) to ground the information provided by the system.
*   **Loading State:** A subtle pulsing blue radial glow behind the AI's avatar or name while processing.