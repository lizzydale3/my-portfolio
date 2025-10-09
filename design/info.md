# Lizzy Dale Portfolio Website

## Overview

This is a professional portfolio website for Lizzy Dale, a Master's in Computer Science graduate specializing in embedded systems, robotics, machine learning, and cloud technologies. The site showcases technical projects, educational background, and professional experience through a clean, modern interface.

The website is built as a full-stack application with a React frontend and Express.js backend, designed to be deployed as a single application. It features a responsive design with both light and dark themes, smooth animations, and professional presentation of technical content.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components with Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design system including light/dark theme support
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the entire stack
- **API Design**: RESTful API structure with `/api` prefix for all backend routes
- **Development**: Hot module replacement and development middleware integration
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (via Neon serverless) configured for production deployment
- **Schema Management**: Drizzle migrations with schema defined in TypeScript
- **Development Storage**: In-memory storage implementation for development/testing
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage

### Styling and Design System
- **Design Approach**: Professional, minimalist design inspired by modern developer portfolios
- **Color System**: Carefully crafted color palette with semantic color variables for consistent theming
- **Typography**: Inter font family for clean, professional appearance with defined hierarchy
- **Component Library**: Custom component variants using class-variance-authority for consistent styling
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive design
- **Animation**: Subtle hover effects and smooth transitions using CSS transitions

### Development and Build Process
- **Monorepo Structure**: Client and server code in organized directories with shared schema
- **Path Mapping**: TypeScript path aliases for clean imports (`@/`, `@shared/`)
- **Asset Management**: Static assets handling with proper bundling and optimization
- **Development Experience**: Hot reload, error overlays, and development-specific tooling
- **Build Process**: Optimized production builds with code splitting and asset optimization

## External Dependencies

### UI and Component Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives for building the component system
- **Lucide React**: Modern icon library providing consistent iconography throughout the application
- **Class Variance Authority**: Type-safe variant API for styling components consistently
- **Embla Carousel**: Lightweight carousel library for project showcases

### Development and Build Tools
- **Vite**: Modern build tool with fast HMR and optimized production builds
- **TypeScript**: Static type checking across the entire application stack
- **ESBuild**: Fast JavaScript bundler for server-side code compilation
- **PostCSS**: CSS processing with Autoprefixer for cross-browser compatibility

### Database and ORM
- **Drizzle ORM**: Type-safe ORM for PostgreSQL with migration support
- **Neon Database**: Serverless PostgreSQL database service for production deployment
- **Drizzle Kit**: Migration and schema management tools for database operations

### State Management and Data Fetching
- **TanStack React Query**: Powerful server state management with caching, synchronization, and background updates
- **React Hook Form**: Performance-focused forms with minimal re-renders and excellent TypeScript support

### Utility Libraries
- **Date-fns**: Modern date utility library for handling date operations
- **Clsx & Tailwind Merge**: Utility libraries for conditional and merged class names
- **Zod**: TypeScript-first schema validation for runtime type checking

### Deployment and Production
- **Express.js**: Web application framework for Node.js handling API routes and serving static files
- **Connect-pg-simple**: PostgreSQL session store for Express sessions in production environment