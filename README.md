# Lizzy Dale — Portfolio Website

This is my personal portfolio website, built as a full-stack application with a **React (Vite + TypeScript)** frontend and an **Express.js + TypeScript** backend. The site is styled using **Tailwind CSS** with **shadcn/ui** and **Radix UI** components for a clean, professional look.  

🌐 [Visit My Portfolio](https://my-portfolio-lizzydale3s-projects.vercel.app)

---

## Main Features

- **Responsive Design**: Light/dark theme, mobile-first layout, smooth transitions and animations
- **Projects Showcase**: Highlights 4 main technical projects:
  - Big Data ETL Pipeline (Python, AWS, Apache Spark, PostgreSQL)
  - UK Web Change Tracker (Python, ML, SQLite, BeautifulSoup, FastAPI)
  - Autonomous Robot Simulation (C++, ROS, OpenCV, SLAM)
  - Custom Processor Design (VHDL, FPGA, Computer Architecture)
- **Professional Bio**: Education and expertise areas highlighted on the About page
- **Contact Section**: Direct email and LinkedIn integration

## Technologies & Architecture

### Frontend
- **Framework**: React 18 + TypeScript
- **Routing**: Wouter
- **UI**: shadcn/ui, Radix UI, Lucide React, Class Variance Authority
- **Styling**: Tailwind CSS, custom design system
- **State Management**: TanStack React Query
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js + Express.js
- **Language**: TypeScript
- **API**: RESTful, `/api` route prefix
- **Database**: PostgreSQL (Neon serverless) via Drizzle ORM, Connect-pg-simple for sessions

### Development
- **Monorepo Structure**: Organized client and server directories, shared schema
- **Hot Reload**: Fast development experience with error overlays
- **Build**: Optimized production with code splitting

## External Libraries

- **Embla Carousel**: Project showcase carousel
- **React Hook Form**: Forms
- **Date-fns**: Date utilities
- **Clsx, Tailwind Merge**: Utility class merging
- **Zod**: Schema validation

## Accessibility & Standards

- Full dark/light mode support
- Professional color contrast and typography
- Fast loading, mobile-responsive, accessible layouts

---