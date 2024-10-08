# My Next.js Portfolio Project [here](https://dev-parth.netlify.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The project serves as a personal portfolio showcasing my skills, projects, and experience as a full-stack developer.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

The project is organized into several key components and pages:

- **Components**:
  - **BreathingLines**: An animated line component that enhances the visual appeal of the page.
  - **CodeBlock**: Displays code snippets with syntax highlighting and animations.
  - **SkillsOrbit**: A circular layout showcasing various skills with rotating icons.
  - **Projects**: Displays project cards with hover effects that reveal additional information.
  - **Navbar**: A responsive navigation bar that allows users to scroll to different sections of the page.
  - **ProjectsAccordion**: An accordion-style component for displaying project details in a collapsible format.

- **Pages**:
  - **Home (app/page.tsx)**: The main landing page that integrates various components, including the navigation bar, breathing lines, and sections for about, skills, and projects.
  - **Loading (app/loading.tsx)**: A simple loading spinner displayed while the main content is being loaded.
  - **Projects (app/Projects/page.tsx)**: A dedicated page for showcasing projects, structured with a grid layout.

## Key Features

- **Responsive Design**: The application is designed to be responsive, adapting to different screen sizes using Material-UI's grid system and media queries.
- **Animations**: Utilizes Framer Motion for smooth animations, enhancing user experience with visual feedback.
- **Dynamic Content**: The project includes dynamic elements such as hover effects and animated transitions, making the interface interactive.
- **Custom Fonts**: Integrates Google Fonts (Itim and Mirza) for typography, enhancing the visual appeal of the text.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Conclusion

This project showcases my skills as a full-stack developer, particularly in front-end technologies like React, Material-UI, and animation libraries. If you have any questions or feedback, feel free to reach out!
