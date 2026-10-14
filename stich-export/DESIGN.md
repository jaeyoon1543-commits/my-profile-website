---
name: Cobalt Minimalist Portfolio
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#4e565d'
  on-tertiary: '#ffffff'
  tertiary-container: '#676e76'
  on-tertiary-container: '#eaf1fa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#dce3ec'
  tertiary-fixed-dim: '#c0c7d0'
  on-tertiary-fixed: '#151c23'
  on-tertiary-fixed-variant: '#40484f'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.025em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system projects clarity, technical precision, and forward-thinking professionalism. Tailored for creative engineers, product designers, and technical leaders, the aesthetic balances modern minimalism with energetic cobalt highlights to establish immediate credibility and refined taste.

### Aesthetic Principles
- **Intentional Negative Space:** Generous whitespace acts as an active structural element, allowing portfolio case studies and typography to command full focus without distraction.
- **Engineered Precision:** Clean borders, modular grid alignment, and micro-interactions communicate meticulous craft and functional clarity.
- **Electric Focal Points:** High-contrast cobalt blue draws intent and guides eye tracking directly to primary interactions, active project previews, and navigation milestones.

## Colors

The palette relies on a surgical light canvas balanced by crisp slate contrasts and luminous electric blue accents.

### Color Tokens & Roles
- **Canvas (`#FFFFFF`)**: Base foundation providing maximum optical brilliance and contrast.
- **Surface Soft (`#F8FAFC`)**: Canvas tint used for subtle section shifts, code blocks, and inactive card backgrounds.
- **Surface Tint (`#EFF6FF`)**: Gentle electric blue tint reserved for hover states, selected chips, and highlight badges.
- **Border Subtle (`#E2E8F0`)**: Low-contrast boundary lines providing structural separation without visual weight.
- **Border Active (`#CBD5E1`)**: Elevated border token applied during interaction states and focused containers.
- **Primary Electric Cobalt (`#2563EB`)**: High-visibility accent reserved for primary actions, active navigation indicators, and key focus states.
- **Secondary Slate (`#1E293B`)**: Rich, saturated slate used for prominent headlines, high-priority icons, and primary dark buttons.
- **Neutral Text (`#64748B`)**: Balanced body slate ensuring AAA contrast for supporting paragraphs and secondary metadata.

## Typography

The typographic architecture is built on `Inter` with direct font-stack fallback to `Pretendard`, `Apple SD Gothic Neo`, and `sans-serif` to guarantee native multi-script harmony between Latin and Korean text.

### Typography Rules
- **Display & Headline Hierarchy:** Headlines leverage negative tracking (`-0.015em` to `-0.025em`) and dense line heights to project confidence and contemporary editorial quality.
- **Hangul & Latin Balance:** Maintain standard body tracking (`0em` to `0.005em`) for regular weights. When Korean characters render alongside English characters, ensure `word-break: keep-all` to preserve natural phrase breaks without awkward single-syllable wraps.
- **Metadata & Labels:** `label-sm` utilizes an uppercase transformation with widened tracking (`0.04em`) for project tags, dates, and category markers.

## Layout & Spacing

A disciplined 8-point geometric spatial scale guides layout distribution, balancing structure with open breathing space.

### Grid & Form Factors
- **Desktop (min-width: 1024px):** 12-column fluid grid locked within a maximum content boundary of `1200px`. Uses `gutter: 1.5rem` and `margin: 3rem`.
- **Tablet (768px - 1023px):** 8-column layout with `gutter: 1.25rem` and outer page margin of `2rem`.
- **Mobile (max-width: 767px):** 4-column layout with `gutter-mobile: 1rem` and `margin-mobile: 1.25rem`.

### Vertical Flow
- **Major Portfolio Sections (Home, About, Projects, Contact):** Spaced using `margin` multipliers (`5rem` to `7rem` on desktop, `3.5rem` on mobile) to produce distinctive chapter boundaries.
- **Component Stacks:** Internal card elements, form groups, and list sequences leverage strict `space-sm` (`0.5rem`), `space-md` (`1rem`), and `space-lg` (`1.5rem`) rhythm.

## Elevation & Depth

Visual hierarchy is maintained through high-contrast boundary definition paired with soft, low-intensity ambient shadows.

### Elevation Hierarchy
- **Level 0 (Flat Canvas):** Clean `#FFFFFF` base or `#F8FAFC` background without cast shadows. Delimited purely by a `1px solid #E2E8F0` hairline border.
- **Level 1 (Interactive Surface / Project Cards):** Renders with a 1px border (`#E2E8F0`) and an ambient tinted drop: `box-shadow: 0 1px 3px 0 rgba(30, 41, 59, 0.04), 0 1px 2px -1px rgba(30, 41, 59, 0.02)`.
- **Level 2 (Active Hover / Elevated Panels):** Triggered on card focus or hover. The border shifts to `#CBD5E1` and the shadow deepens smoothly: `box-shadow: 0 10px 25px -5px rgba(30, 41, 59, 0.06), 0 8px 10px -6px rgba(30, 41, 59, 0.03)`.
- **Level 3 (Fixed Navigation Bar / Floating Modals):** Translucent backdrop blur layer (`backdrop-filter: blur(12px)`) at `rgba(255, 255, 255, 0.85)` framed with a bottom border of `1px solid rgba(226, 232, 240, 0.8)` and a faint diffusion: `0 4px 20px -2px rgba(30, 41, 59, 0.04)`.

## Shapes

The design system incorporates geometric rounding that softens sharp technical layouts while remaining distinctly architectural and sleek.

### Rounding Tokens
- **Base (0.5rem / 8px):** Applied to form inputs, buttons, filter chips, and inline code tags.
- **Large (1rem / 16px):** Applied to project preview cards, modal containers, and feature panels.
- **Pill (9999px):** Applied strictly to status indicators (e.g., "Available for work" badges) and icon-only floating action elements.

## Components

### Buttons
- **Primary Action:** Background `#2563EB`, text `#FFFFFF`, border-radius `0.5rem`, padding `0.75rem 1.5rem`. Subtle hover scale transform `translateY(-1px)` with background transition to `#1D4ED8`.
- **Secondary Action:** Background `#FFFFFF`, text `#1E293B`, border `1px solid #E2E8F0`, hover background `#F8FAFC`, hover border `#CBD5E1`.
- **Ghost Action:** Background transparent, text `#64748B`, hover text `#1E293B`, hover background `#EFF6FF`.

### Cards (Portfolio & Case Studies)
- Constructed with a `#FFFFFF` body, `1px solid #E2E8F0` border, and `1rem` corner radius.
- Project media containers use an internal `0.75rem` radius with an overflow crop.
- Hover states animate the container `translateY(-2px)` accompanied by Elevation Level 2 and an active title text color transition to `#2563EB`.

### Chips & Badges
- **Tech Stack Chips:** Background `#EFF6FF`, text `#2563EB`, border `1px solid rgba(37, 99, 235, 0.12)`, font size `12px` (`label-sm`), padding `0.25rem 0.625rem`, border-radius `0.375rem`.
- **Status Dot Badge:** Pill-shaped (`rounded-full`) pill with a live pulsing green dot (`#10B981`) and neutral background (`#F8FAFC`) with border `#E2E8F0`.

### Form Fields (Contact Section)
- **Text Inputs & Textareas:** Background `#FFFFFF`, border `1px solid #E2E8F0`, padding `0.75rem 1rem`, text color `#1E293B`.
- **Focus State:** Border color shifts to `#2563EB` with an external glow ring: `box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15)`. Placeholder rendered in `#94A3B8`.

### Checkboxes & Radios
- Size `18px x 18px`, border `1.5px solid #CBD5E1`, background `#FFFFFF`, border-radius `4px` (checkbox) or `50%` (radio).
- Checked state changes background to `#2563EB` and border to `#2563EB` with an embedded white SVG checkmark.

### Navigation Header
- Fixed sticky dock at the top of the viewport. Height `64px`.
- Frosted glass effect with `rgba(255, 255, 255, 0.85)` background, border-bottom `1px solid #E2E8F0`.
- Active section links display a bold `#1E293B` label with a bottom electric cobalt dot indicator.