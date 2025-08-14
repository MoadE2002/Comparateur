# SGEL PV Comparator

**1er Comparateur au Monde en PV** - A modern, responsive solar panel comparison tool built with React and Material-UI.

## Features

- 🏠 **Clean, Modern Design** - Purple and grey color scheme with professional layout
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🔍 **Advanced Search** - Multiple criteria search with filtering options
- 🏷️ **Brand Filtering** - Filter by popular solar panel brands (LONGI, JinKo, TrinaSolar, ASTRONERGY)
- 💰 **Price Sorting** - Sort products by highest or lowest price
- 🆕 **Product Highlights** - NEW ARRIVAL tags and featured products
- 🎨 **Interactive UI** - Hover effects, smooth transitions, and intuitive navigation

## Technology Stack

- **React 18** - Modern React with hooks
- **Material-UI 5** - Professional UI components
- **Vite** - Fast build tool and development server
- **Emotion** - CSS-in-JS styling
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sgel-pv-comparator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Main navigation and search
│   └── MainContent.jsx     # Product display and search interface
├── assets/
│   └── theme/
│       └── index.jsx       # Custom Material-UI theme
├── App.jsx                 # Main application component
└── index.jsx               # Application entry point
```

## Design Features

### Header
- SGEL logo with tagline
- Search bar with magnifying glass icon
- Navigation tabs (Panneaux/Onduleurs)
- "Comparer" call-to-action button

### Sidebar
- Price sorting options (highest/lowest)
- Brand filtering with colored checkboxes
- Integrated into main content area

### Main Content
- Featured product with technical specifications
- Advanced search with multiple criteria
- Product grid with comparison cards

## Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px

## Customization

The theme can be easily customized by modifying `src/assets/theme/index.jsx`:

- Primary colors (purple theme)
- Secondary colors (grey theme)
- Typography settings
- Component styling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ for the solar energy industry
