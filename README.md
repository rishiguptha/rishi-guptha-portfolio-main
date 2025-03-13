# Rishi Guptha Mankala Portfolio

## Description

This project is a professional portfolio website built with [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Vite](https://vitejs.dev/). The site uses [Tailwind CSS](https://tailwindcss.com/) for styling and leverages several modern web techniques such as CSS transitions, transforms, and the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for scroll reveal effects. The code is organized into reusable components and custom hooks, making it easy to maintain and extend.

## Interesting Techniques

- **Scroll Reveal with Intersection Observer:**  
  Elements become visible as they enter the viewport using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). See [src/hooks/useScrollReveal.tsx](./src/hooks/useScrollReveal.tsx) for details.

- **Parallax Tilt Effect:**  
  The project cards implement a 3D parallax tilt effect on hover using CSS transforms and transitions. Learn more about [CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) and [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/transition).

- **Responsive Design with Tailwind CSS:**  
  Responsive layouts are achieved using Tailwind’s mobile-first utility classes. This ensures the site adapts smoothly to various screen sizes.

- **Dynamic Theming:**  
  A custom hook manages theme switching between light and dark modes, utilizing CSS variables and the [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query.

## Non-Obvious Technologies and Libraries

- **Vite:** Fast development and optimized production builds. [Vite Documentation](https://vitejs.dev/).
- **Radix UI:** Provides accessible, unstyled UI components. [Radix UI](https://www.radix-ui.com/).
- **shadcn-ui:** A collection of high-quality UI components built on top of Radix UI and Tailwind CSS.
- **react-resizable-panels:** Enables resizable layouts. [react-resizable-panels](https://github.com/romainberger/react-resizable-panels).
- **embla-carousel-react:** A lightweight carousel library. [Embla Carousel](https://www.embla-carousel.com/).
- **cmdk:** A command menu component for React, ideal for quick navigation. [cmdk on GitHub](https://github.com/pacocoursey/cmdk).
- **sonner:** A notification system that enhances user feedback. [Sonner on GitHub](https://github.com/sonner-io/sonner).
- **vaul:** A library for building accessible drawers and modals. [Vaul on GitHub](https://github.com/vauljs/vaul).

## Project Structure

```plaintext
rishiguptha-rishi-guptha-portfolio/
├── public/                  # Static assets and public files.
├── src/
│   ├── components/          # Reusable React components (e.g., [About.tsx](./src/components/About.tsx), [Navbar.tsx](./src/components/Navbar.tsx), [ProjectCard.tsx](./src/components/ProjectCard.tsx)).
│   ├── hooks/               # Custom hooks (e.g., [useTheme.tsx](./src/hooks/useTheme.tsx), [useScrollReveal.tsx](./src/hooks/useScrollReveal.tsx)).
│   ├── lib/                 # Constants and utility functions (e.g., [constants.ts](./src/lib/constants.ts), [utils.ts](./src/lib/utils.ts)).
│   ├── pages/               # Page components (e.g., [Index.tsx](./src/pages/Index.tsx), [NotFound.tsx](./src/pages/NotFound.tsx)).
│   ├── App.tsx              # Main App component.
│   ├── main.tsx             # Application entry point.
│   └── index.css            # Global styles and Tailwind CSS configuration.
├── package.json             # Project metadata and dependencies.
├── tsconfig.json            # TypeScript configuration.
├── vite.config.ts           # Vite build configuration.
└── README.md                # This documentation file.
```
- public/: Contains static files such as images and other assets.
- src/components/: Houses all the React components that make up the site.
- src/hooks/: Includes custom hooks for state management, theming, and scroll effects.
- src/lib/: Contains constants and utility functions used across the project.
- src/pages/: Defines the main pages, including the home page and error pages.


## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
```plaintext
git checkout -b feature/my-feature
```
3. Make your changes and commit them:
```plaintext
git commit -m 'Add my feature'
```
4. Push your branch:
```plaintext
git push origin feature/my-feature
```
5. Open a pull request.


Built with clarity and efficiency by Rishi Guptha.

---
Please review this preview and let me know if you'd like any modifications or additional details.
