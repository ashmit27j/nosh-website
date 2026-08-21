# Nosh

Create a complete, production-ready single-page landing website for my Unity game called "Death Penalty."

The website should be delivered as a fully functional Next.js project using React, TypeScript, Tailwind CSS, and Framer Motion. The code should be clean, modular, well-commented, responsive, and ready to run without additional setup beyond npm install.

================================================================================

OVERVIEW

================================================================================

Death Penalty is a fast-paced first-person parkour shooter built in Unity.

The website is meant to feel like the official landing page for a premium indie game.

The design language should be inspired by the atmosphere of Ghostrunner, but it must NOT copy any assets, layouts, branding, or copyrighted visuals. Instead, capture the same feeling:

• Dark

• Futuristic

• Industrial

• Cyberpunk

• Minimal

• Cinematic

• Premium

• High-end game launch page

Avoid making it look like a SaaS landing page or startup website.

The entire experience should feel polished and immersive with subtle animations and excellent spacing.

================================================================================

TECH STACK

================================================================================

Use:

• Next.js (App Router)

• React

• TypeScript

• Tailwind CSS

• Framer Motion

Do NOT use heavy UI libraries.

Use reusable components.

Keep the codebase organized.

================================================================================

COLOR PALETTE

================================================================================

Background:

#070707

Secondary Surface:

#101010

Cards:

#151515

Primary Accent:

#E53935

Text:

#FFFFFF

Secondary Text:

#A0A0A0

Borders:

rgba(255,255,255,0.08)

Avoid excessive neon effects.

No rainbow gradients.

No flashy glowing borders.

================================================================================

TYPOGRAPHY

================================================================================

Use a bold modern display font for headings.

Use a clean sans-serif font for everything else.

Large typography.

Plenty of whitespace.

Strong hierarchy.

================================================================================

WEBSITE STRUCTURE

================================================================================

The website consists of ONLY ONE PAGE.

Sections:

1. Hero

2. Downloads

3. Developers

4. Footer

================================================================================

NAVIGATION

================================================================================

Create a floating transparent navigation bar.

Initially transparent.

After scrolling:

• blur background

• subtle border

• slightly darker background

Navbar contains:

Logo:

Death Penalty

Navigation links:

Home

Downloads

Developers

On desktop:

Links displayed horizontally.

On mobile:

Hamburger menu.

Smooth scrolling.

================================================================================

HERO SECTION

================================================================================

The hero should occupy the full viewport height.

Background:

Dark industrial image placeholder or abstract gradient with subtle grid texture.

Overlay:

Dark cinematic gradient.

Centered content.

Large heading:

DEATH PENALTY

Subtitle:

Fast-paced first-person parkour shooter built in Unity.

Below the subtitle place a large gameplay video.

Use a placeholder video.

The video should:

• be embedded

• autoplay disabled

• rounded corners

• subtle shadow

• widescreen cinematic aspect ratio

• responsive

I will replace the video later.

Below the video place two buttons.

Primary button:

Download Game

Secondary button:

Unity Cloud Project

Both buttons should support placeholder URLs.

Hero animations:

• fade in

• slide upward

• slight parallax while scrolling

• elegant transitions

================================================================================

DOWNLOADS SECTION

================================================================================

Heading:

Downloads

Centered layout.

Create two premium download cards.

CARD 1

Title:

Windows Build

Description:

Download the latest Windows executable of Death Penalty.

Large button:

Download .exe

Placeholder link.

CARD 2

Title:

Unity Project

Description:

Access the Unity Cloud project.

Large button:

Open Unity Cloud

Placeholder link.

Cards should animate upward while entering viewport.

Hover:

• lift slightly

• soft shadow

• subtle scale

================================================================================

DEVELOPERS SECTION

================================================================================

Heading:

Developers

Centered.

Create three elegant profile cards.

Each card contains:

• circular avatar placeholder

• developer name

• role

• GitHub button

• LinkedIn button

Developer 1

Ashmit Jain

Role:

Gameplay Programming • Systems • UI

Developer 2

Sukhada Gulhane

Role:

Game Design • Programming

Developer 3

Neerav Reddy

Role:

Programming

Use placeholder links for GitHub and LinkedIn.

Cards should animate with staggered fade-up effects.

Hover interactions:

• slight elevation

• subtle border highlight

• smooth transition

================================================================================

FOOTER

================================================================================

Minimal.

Include:

Death Penalty

Made with Unity.

Copyright ©

================================================================================

ANIMATIONS

================================================================================

Use Framer Motion throughout.

Hero:

• fade

• slide

• stagger

Cards:

• fade up

• stagger

Buttons:

• smooth hover

• slight scale

• subtle shine

Scrolling:

• fade between sections

• parallax

• progress indicator at top

Respect prefers-reduced-motion.

================================================================================

BACKGROUND DETAILS

================================================================================

Add subtle premium details:

• animated gradient overlays

• faint industrial grid

• very light noise texture

• smooth scrolling

• custom scrollbar

• soft shadows

• microinteractions

Do NOT overdo visual effects.

Everything should feel restrained and premium.

================================================================================

RESPONSIVENESS

================================================================================

Desktop:

Large cinematic spacing.

Tablet:

Proper scaling.

Mobile:

Everything stacked vertically.

Buttons become full width.

Video remains responsive.

No horizontal scrolling.

Typography scales naturally.

================================================================================

ACCESSIBILITY

================================================================================

Semantic HTML.

Keyboard navigation.

Accessible buttons.

ARIA labels where necessary.

Proper heading hierarchy.

================================================================================

SEO

================================================================================

Include metadata.

Open Graph tags.

Description.

Theme color.

Favicon placeholder.

================================================================================

PERFORMANCE

================================================================================

Aim for Lighthouse score above 95.

Lazy load media.

Optimize rendering.

Keep bundle size minimal.

================================================================================

PROJECT STRUCTURE

================================================================================

Organize components similar to:

app/

    page.tsx

components/

    Navbar.tsx

    Hero.tsx

    DownloadCard.tsx

    DeveloperCard.tsx

    Footer.tsx

================================================================================

DATA

================================================================================

Store developer information inside an array.

Store download links as constants.

Use placeholder values.

Example:

const EXE_DOWNLOAD = "#";

const UNITY_CLOUD = "#";

const developers = [

{

name: "Ashmit Jain",

role: "Gameplay Programming • Systems • UI",

github: "#",

linkedin: "#"

},

{

name: "Sukhada Gulhane",

role: "Game Design • Programming",

github: "#",

linkedin: "#"

},

{

name: "Neerav Reddy",

role: "Programming",

github: "#",

linkedin: "#"

}

];

================================================================================

FINAL DELIVERABLE

================================================================================

Generate the complete production-ready project with all files, components, animations, responsive layouts, Tailwind styling, Framer Motion integration, SEO metadata, and clean TypeScript code.

The finished website should feel like the official launch page of a premium indie parkour FPS, emphasizing speed, precision, atmosphere, and cinematic presentation through minimalistic design rather than excessive visual effects.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8c772d7a-1257-4050-afcf-c4c01bfbfcd2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
