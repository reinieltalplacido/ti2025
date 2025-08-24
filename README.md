# The International 2025 - TI2025 Website

A modern, responsive website for The International 2025 Dota 2 Championship tournament.

## 🏆 Tournament Information

- **Prize Pool**: $2,004,464
- **Start Date**: September 4th, 2025
- **Location**: Barclays Arena, Hamburg, Germany
- **Teams**: 16 elite teams competing
- **Duration**: September 4-15, 2025

## ✨ Features

### 🎯 Hero Section
- **Background Image**: High-quality TI2025 banner with gradient overlays
- **Countdown Timer**: Real-time countdown to tournament start
- **Tournament Stats**: Prize pool, date, and location highlights
- **Call-to-Action**: Watch Live and Learn More buttons

### 👥 Teams Section
- **16 Teams Display**: Grid layout with team cards
- **Team Information**: Names, regions, and logos
- **Interactive Cards**: Hover effects and animations
- **Responsive Design**: Adapts to all screen sizes

### 📅 Schedule Section
- **Tournament Stages**: Group Stage, Playoffs, Semi Finals, Grand Finals
- **Upcoming Matches**: Detailed match information with times
- **Status Indicators**: Upcoming status badges
- **Interactive Elements**: Set reminder buttons

### 🏅 Tournament History
- **Previous Winners**: Timeline of past TI champions
- **Historical Data**: Prize pools, locations, and champions
- **Statistics**: Total tournaments, prize pools, and countries
- **Visual Timeline**: Alternating left-right layout

### 🎨 Design Theme
- **Color Scheme**: Purple (#8b5cf6), White, and Black
- **Typography**: Geist Font family
- **Modern UI**: Glassmorphism effects and gradients
- **Responsive**: Mobile-first design approach

## 🛠️ Technical Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom CSS variables
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Components**: React functional components with TypeScript
- **Performance**: Next.js Image optimization and lazy loading

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Geist fonts
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Global styles and theme variables
│   └── favicon.ico         # Site favicon
├── components/
│   ├── ui/
│   │   └── CountdownTimer.tsx    # Countdown component
│   └── sections/
│       ├── HeroSection.tsx       # Hero section with banner
│       ├── TeamsSection.tsx      # Teams grid display
│       ├── ScheduleSection.tsx   # Tournament schedule
│       ├── TournamentHistorySection.tsx  # Historical data
│       └── Footer.tsx            # Site footer
└── public/
    └── ti2025banner.jpeg   # Hero background image
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors
The theme colors are defined in `globals.css`:
- Primary: `#8b5cf6` (Purple)
- Primary Dark: `#7c3aed`
- Primary Light: `#a78bfa`
- Background: White/Black (light/dark mode)

### Fonts
- **Primary**: Geist Sans (variable: `--font-geist-sans`)
- **Monospace**: Geist Mono (variable: `--font-geist-mono`)

### Components
All sections are modular and can be easily customized:
- Update team data in `TeamsSection.tsx`
- Modify schedule in `ScheduleSection.tsx`
- Change tournament history in `TournamentHistorySection.tsx`

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind CSS responsive classes
- **Grid Layouts**: Adaptive grid systems for different screen sizes
- **Touch Friendly**: Optimized for touch interactions

## 🔧 Performance Features

- **Image Optimization**: Next.js Image component with quality settings
- **Lazy Loading**: Components load as needed
- **CSS Variables**: Efficient theme switching
- **Minimal Dependencies**: Lightweight component structure

## 🌟 Future Enhancements

- [ ] Dark/Light mode toggle
- [ ] Live match updates
- [ ] Team statistics and profiles
- [ ] Interactive bracket system
- [ ] Social media integration
- [ ] Newsletter subscription
- [ ] Multi-language support

## 📄 License

This project is created for The International 2025 tournament showcase.

---

**Built with ❤️ for the Dota 2 community**
