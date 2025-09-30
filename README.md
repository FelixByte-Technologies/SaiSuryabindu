# Sai Suryabindu Ventures LLP - Solar Energy Website

A modern, professional website for Sai Suryabindu Ventures LLP, showcasing solar energy solutions and government subsidy information. Built with React, TypeScript, and Tailwind CSS.

## 🛠️ Tech Stack

- ⚡️ **Vite** - Fast build tool and development server
- ⚛️ **React 19** - Latest React with TypeScript support
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **Yarn** - Fast, reliable, and secure dependency management
- 🔧 **TypeScript** - Type-safe JavaScript
- 🎯 **React Icons** - Professional icon library (FontAwesome)
- 📱 **Responsive Design** - Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FelixByte-Technologies/SaiSuryabindu.git
   cd SaiSuryabindu
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5174`

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # Company information
│   ├── Contact.tsx     # Contact details and team
│   ├── Footer.tsx      # Footer with links and info
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Process.tsx     # Installation process
│   ├── Services.tsx    # Services and products
│   └── Subsidy.tsx     # Government subsidy information
├── assets/             # Static assets
├── App.tsx            # Main App component
├── main.tsx           # Application entry point
└── index.css          # Global styles with Tailwind directives
```

## 🎨 Features

### UI/UX
- **Modern Design**: Clean, professional layout with green color scheme
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Icons**: Professional FontAwesome icons throughout
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: Screen reader friendly with proper semantic HTML

### Components
- **Hero Section**: Eye-catching landing area with key benefits
- **Services**: Solar installation services with feature lists
- **Process**: Step-by-step installation process
- **Subsidy**: Government subsidy information and payment details
- **About**: Company information and statistics
- **Contact**: Team details and contact information
- **Footer**: Links and additional company information

## 🔧 Development

The project uses Vite's hot module replacement (HMR) for fast development. Any changes to the source files will automatically reload the browser.

Tailwind CSS is configured to scan all TypeScript and TSX files in the `src` directory for class names, ensuring optimal purging of unused styles in production builds.

## 📦 Dependencies

### Production
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-icons` - Icon library

### Development
- `@types/react` - React TypeScript types
- `@types/react-dom` - React DOM TypeScript types
- `@vitejs/plugin-react` - Vite React plugin
- `typescript` - TypeScript compiler
- `vite` - Build tool
- `tailwindcss` - CSS framework
- `eslint` - Code linting

## 🚀 Deployment

1. Build the project:
   ```bash
   yarn build
   ```

2. The built files will be in the `dist` directory

3. Deploy the `dist` directory to your hosting service

## 📄 License

© 2024 Sai Suryabindu Ventures LLP. All rights reserved.