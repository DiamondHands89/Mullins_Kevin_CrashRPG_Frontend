# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Overview

Crash Land RPG takes players on a nostalgic journey through a mysterious world filled with branching story paths, treasure rewards, and stat upgrades. As you progress, you'll explore diverse areas—from eerie forests to bustling marketplaces—and overcome various challenges to earn diamonds and enhance your character.

## Features

- **Interactive Adventure:** A text-based, branching storyline within the world of Crash Land.
- **Stat and Currency System:** Earn diamonds and use them to upgrade your character's stats such as health, mana, strength, and agility.
- **Backend API:** RESTful endpoints built with Express and TypeScript, interfacing with a MongoDB database.
- **Modern Frontend:** A Vite-powered React application with an authentic old-school RPG visual style.
- **User Authentication:** (Optional) JWT-based authentication for user registration and login.
- **State Management:** Context API for managing game state across the React application.
- **Responsive Navigation:** Multiple pages including Adventure, Dashboard, Upgrade, and Characters Dashboard.

## Technologies

- **Backend:** Node.js, Express, TypeScript, MongoDB, Mongoose, JWT
- **Frontend:** React, Vite, TypeScript, React Router, Axios, CSS (custom retro styling)
- **Other Tools:** dotenv, ts-node, nodemon (optional), and more