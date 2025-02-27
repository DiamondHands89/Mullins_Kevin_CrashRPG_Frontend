# Crash Land RPG

## Overview

Welcome to **Crash Land RPG**! This is an engaging and adventurous role-playing game (RPG) that immerses players in a world filled with challenges, quests, and epic battles. The game leverages modern web development technologies to deliver a seamless and interactive experience.

## Technologies Used

### MERN Stack
- **MongoDB**: Used as the database to store game data, player profiles, and progress.
- **Express.js**: Powers the backend server and handles API requests and responses.
- **React.js**: Provides a dynamic and responsive user interface (UI) for players.
- **Node.js**: Facilitates server-side operations and real-time gameplay mechanics.

### TypeScript
- **TypeScript**: Enhances code quality and maintainability by adding static typing to JavaScript. Used across both frontend and backend components of the game.

### Additional Technologies
- **Redux**: Manages the application's state and ensures efficient data flow between components.
- **Socket.IO**: Enables real-time communication and multiplayer gameplay features.
- **Webpack**: Bundles and optimizes the game's assets for improved performance.
- **Babel**: Transpiles modern JavaScript/TypeScript code to ensure compatibility with various browsers.
- **Sass**: Provides advanced styling capabilities for the game's UI.

## Backend RESTful Routes

### Authentication
- **POST /api/auth/register**: Register a new player.
- **POST /api/auth/login**: Authenticate an existing player and generate a token.
- **GET /api/auth/profile**: Get the authenticated player's profile information.

### Players
- **GET /api/players**: Get a list of all players.
- **GET /api/players/:id**: Get details of a specific player by ID.
- **PUT /api/players/:id**: Update the profile information of a specific player by ID.
- **DELETE /api/players/:id**: Delete a specific player by ID.

### Quests
- **GET /api/quests**: Get a list of all available quests.
- **GET /api/quests/:id**: Get details of a specific quest by ID.
- **POST /api/quests**: Create a new quest.
- **PUT /api/quests/:id**: Update a specific quest by ID.
- **DELETE /api/quests/:id**: Delete a specific quest by ID.

### Inventory
- **GET /api/inventory**: Get the player's inventory items.
- **POST /api/inventory**: Add an item to the player's inventory.
- **PUT /api/inventory/:itemId**: Update an item in the player's inventory.
- **DELETE /api/inventory/:itemId**: Remove an item from the player's inventory.

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/username/crash-land-rpg.git
    ```

2. **Install Dependencies**:
    ```bash
    cd crash-land-rpg
    npm install
    ```

3. **Set Up Environment Variables**:
    - Create a `.env` file in the root directory and add the following variables:
    ```plaintext
    MONGO_URI=<your_mongo_db_connection_string>
    PORT=3000
    JWT_SECRET=<your_jwt_secret>
    ```

4. **Run the Application**:
    ```bash
    npm run dev
    ```

## Usage

- **Start the Game**: Open your web browser and navigate to `http://localhost:3000`.
- **Create a Player Profile**: Register or log in to start your adventure.
- **Explore and Complete Quests**: Dive into the game's world, complete quests, and 

## Project Structure

- **Backend**: [Backend Repository](https://github.com/DiamondHands89/Mullins_Kevin_CrashRPG_Backend)
- **Frontend**: [Frontend Repository](https://github.com/DiamondHands89/Mullins_Kevin_CrashRPG_Frontend)