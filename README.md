# React + Vite + Tailwind CSS + TypeScript

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## Features

- ⚡️ **Vite** - Fast build tool and development server
- ⚛️ **React 19** - Latest React with TypeScript support
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **Yarn** - Fast, reliable, and secure dependency management
- 🔧 **TypeScript** - Type-safe JavaScript

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start the development server:
   ```bash
   yarn dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## Project Structure

```
src/
├── assets/          # Static assets
├── App.tsx         # Main App component
├── main.tsx        # Application entry point
└── index.css       # Global styles with Tailwind directives
```

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Yarn** - Package manager
- **ESLint** - Code linting

## Development

The project uses Vite's hot module replacement (HMR) for fast development. Any changes to the source files will automatically reload the browser.

Tailwind CSS is configured to scan all TypeScript and TSX files in the `src` directory for class names, ensuring optimal purging of unused styles in production builds.