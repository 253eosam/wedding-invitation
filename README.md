# Wedding Invitation

A modern wedding invitation web app built with Next.js 15 and React 19.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **CSS**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation**: [Motion One](https://motion.dev/)
- **Date Handling**: [Day.js](https://day.js.org/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Masonry Layout**: [React Masonry CSS](https://www.npmjs.com/package/react-masonry-css)
- **Runtime**: [Node.js 20](https://nodejs.org/en)
- **Linting/Formatting**: [ESLint 9](https://eslint.org/), [Prettier 3](https://prettier.io/)

## 📦 Scripts

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `yarn dev`      | Run the development server with Turbopack |
| `yarn build`    | Build the app for production              |
| `yarn start`    | Start the production server               |
| `yarn export`   | Export the app as static HTML             |
| `yarn lint`     | Run ESLint                                |
| `yarn lint:fix` | Run ESLint with auto-fix                  |
| `yarn deploy`   | Alias for `yarn build`                    |

## 🛠️ Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/wedding-invitation.git
   cd wedding-invitation
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the development server:

   ```bash
   yarn dev
   ```

4. Build for production:

   ```bash
   yarn build
   ```

5. (Optional) Export static files:

   ```bash
   yarn export
   ```

## 📝 Linting and Formatting

- Run linter:

  ```bash
  yarn lint
  ```

- Run linter with auto-fix:

  ```bash
  yarn lint:fix
  ```

Prettier and ESLint are pre-configured to maintain consistent code style.

## 🧩 Project Structure

```
.
├── public/         # Static assets
├── src/            # Application source code
├── styles/         # Global styles (Tailwind CSS)
├── pages/          # Next.js pages
├── components/     # Reusable components
├── models/         # Data models (modify here for reuse)
├── tsconfig.json   # TypeScript configuration
├── tailwind.config.js # Tailwind configuration
├── .eslintrc.json  # ESLint configuration
└── package.json    # Project manifest
```

> To reuse this project, simply update the data inside the `models` directory to fit your needs.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with ❤️ and Next.js
