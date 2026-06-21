<div align="center">

# Umair Iqbal — Portfolio

A dark-themed, animation-driven developer portfolio built with React, Tailwind CSS, and Framer Motion.

[![Live Demo](https://img.shields.io/badge/Live-Demo-c4f135?style=for-the-badge)](https://umair-portfolio-xi.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

</div>

---

## Overview

Personal portfolio showcasing my frontend development work, skills, and projects. Built from scratch with a focus on performance, responsive design, and smooth, purposeful animation — not motion for the sake of motion.

**Live:** [umair-portfolio-xi.vercel.app](https://umair-portfolio-xi.vercel.app)

---

## Features

- **Dark theme** — violet and electric lime accent palette, designed for contrast and visual hierarchy
- **Typewriter hero animation** — cycles through role titles on load
- **Scroll-triggered animations** — sections fade and stagger into view using Framer Motion's `whileInView`
- **Animated skill bars** — fill dynamically based on proficiency level
- **Filterable project gallery** — live demo and source code links for every project
- **Functional contact form** — EmailJS integration with real-time send status feedback
- **Fully responsive** — mobile-first layout, tested from 320px to 1920px+
- **Optimized assets** — compressed images, lazy-loaded where applicable

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Email Service | EmailJS |
| Icons | Boxicons, React Icons |
| Fonts | Syne, DM Sans (Google Fonts) |
| Deployment | Vercel |
| Build Tool | Vite |

---

## Project Structure

```
src/
├── assets/              # Images, resume PDF
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── ScrollUp.jsx
│   ├── Social.jsx
│   └── Data.jsx         # Project + nav data
├── App.jsx
├── main.jsx
└── index.css             # Tailwind theme tokens, animations
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/umair-iqbal-61/My-portfolio.git
cd My-portfolio
npm install
```

### Environment Setup

This project uses EmailJS for the contact form. If you're forking this, replace the service ID, template ID, and public key in `src/components/Contact.jsx` with your own EmailJS credentials.

### Run Locally

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## Featured Projects

| Project | Description | Links |
|---|---|---|
| **Dax Marketing** | Marketing agency landing page | [Live](https://dax-marketing.vercel.app) · [Code](https://github.com/umair-iqbal-61/Dax-Marketing) |
| **Movie Explorer** | Movie discovery app with search and details | [Live](https://movie-explorer-alpha-beige.vercel.app) · [Code](https://github.com/umair-iqbal-61/movie-explorer) |
| **Pawpal** | Pet care / adoption platform UI | [Live](https://pawpal-seven.vercel.app) · [Code](https://github.com/umair-iqbal-61/Pawpal) |

---

## Connect

- **Email:** ui0886342@gmail.com
- **Fiverr:** [umair_iqbal01](https://www.fiverr.com/umair_iqbal01)
- **Portfolio:** [umair-portfolio-xi.vercel.app](https://umair-portfolio-xi.vercel.app)

---

## License

This project is open for reference, but please don't copy the design or content 1:1 for your own portfolio. Fork it, learn from it, but make it yours.