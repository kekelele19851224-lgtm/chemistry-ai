# Chemistry AI - Intelligent Chemistry Assistant

A comprehensive chemistry learning platform built with Next.js 14, featuring AI-powered assistance, interactive tools, and educational resources.

## 🧪 Features

### Core Functionality
- **AI-Powered Chat Assistant**: Intelligent chemistry Q&A system with 10,000+ pre-written answers
- **Interactive Periodic Table**: Clickable elements with detailed properties, trends, and comparisons
- **Chemistry Calculators**: Molecular weight, molarity, pH, gas laws, and unit conversions
- **3D Molecule Viewer**: Interactive 3D molecular structure visualization using Three.js
- **Smart Search**: Fuzzy search with keyword matching and typo tolerance

### User Experience
- **Mobile-First Design**: Responsive layout optimized for all devices
- **Safari Optimization**: Enhanced compatibility with iOS Safari
- **PWA Support**: Installable as a Progressive Web App
- **Touch-Friendly Interface**: Optimized for mobile interactions
- **Accessibility**: WCAG 2.1 AA compliant with proper focus management

### Technical Features
- **SEO Optimized**: Meta tags, structured data, sitemap, and Open Graph
- **Performance**: Server-side rendering, image optimization, and lazy loading
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS, and Three.js
- **Dark Mode Support**: System preference detection and manual toggle

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/chemistry-ai.git
cd chemistry-ai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📱 Mobile Optimization

The application is optimized for mobile devices with:
- **Safe Area Support**: Handles notched devices (iPhone X+)
- **Touch Gestures**: Swipe, pinch, and tap interactions
- **Viewport Prevention**: Prevents unwanted zoom on input focus
- **Performance**: Optimized for mobile networks and devices

## 🧮 Available Tools

### Calculators
- **Molecular Weight Calculator**: Calculate molecular weights from chemical formulas
- **Molarity Calculator**: Calculate molarity, moles, or volume
- **pH Calculator**: Calculate pH for acids and bases
- **Gas Law Calculator**: Ideal gas law calculations (PV=nRT)

### Interactive Features
- **Periodic Table**: 118 elements with properties and trends
- **3D Molecule Viewer**: Visualize molecular structures in 3D
- **Equation Balancer**: Balance chemical equations (coming soon)
- **Unit Converter**: Convert between different units

## 🎯 Chemistry Topics Covered

- **Basic Concepts**: Atomic structure, chemical bonding, periodic trends
- **Chemical Reactions**: Stoichiometry, balancing equations, reaction types
- **Organic Chemistry**: Hydrocarbons, functional groups, mechanisms
- **Inorganic Chemistry**: Ionic compounds, coordination chemistry
- **Physical Chemistry**: Gas laws, thermodynamics, kinetics

## 🏗️ Architecture

```
src/
├── app/                 # Next.js app router
├── components/          # React components
├── data/               # Static data (periodic table, Q&A)
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries and constants
├── types/              # TypeScript type definitions
└── utils/              # Helper functions
```

### Key Components
- `ChatInterface`: AI-powered question answering
- `PeriodicTable`: Interactive periodic table
- `ChemistryCalculators`: Collection of calculation tools
- `MoleculeViewer`: 3D molecular visualization

## 🔧 Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Webpack (via Next.js)

## 🌐 SEO & Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for performance
- **Structured Data**: JSON-LD for search engines
- **Meta Tags**: Open Graph and Twitter Card support
- **Sitemap**: Auto-generated XML sitemap

## 📊 Data Sources

- **Periodic Table**: Complete data for all 118 elements
- **Chemistry Q&A**: 10,000+ questions across 5 categories
- **Molecular Data**: Common molecules with 3D structures
- **Chemical Constants**: Physical and mathematical constants

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Chemistry data sourced from reliable scientific databases
- Molecular structures from open chemistry repositories
- Icons provided by Lucide React
- Fonts by Vercel (Geist Sans & Geist Mono)

## 📧 Contact

For questions, suggestions, or support:
- Create an issue on GitHub
- Email: chemistry-ai@example.com
- Website: https://chemistry-ai.vercel.app

---

Built with ❤️ for chemistry education and learning.