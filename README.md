# Todo App

A simple task management app (CRUD) built with Node.js, Express, and MongoDB, with a test frontend in vanilla JavaScript.

## Features

- Create new tasks (title, description)
- Display task list as cards (grid layout)
- Mark tasks as completed (checkbox)
- Edit a task (title, description, status)
- Delete a task
- Input validation and error handling

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- Vanilla JavaScript (test frontend)
- HTML / CSS (Grid, modal animations)

## Project Structure

\`\`\`
src/
├── models/
├── controllers/
├── routes/
├── middleware/
├── config/
public/
├── index.html
├── style.css
├── script.js
.env.example
.gitignore
server.js
\`\`\`

## Getting Started

1. Clone the repository:
   \`\`\`fish
   git clone https://github.com/DawidKumor/todo-app-backend.git
   \`\`\`

2. Install dependencies:
   \`\`\`fish
   npm install
   \`\`\`

3. Copy `.env.example` to `.env` and fill in the values (e.g. MongoDB connection string):
   \`\`\`fish
   cp .env.example .env
   \`\`\`

4. Start the server:
   \`\`\`fish
   npm run dev
   \`\`\`

5. Open `http://localhost:3000` in your browser.

## API Endpoints

| Method | Endpoint   | Description              | Body                                   |
| ------ | ---------- | ------------------------ | -------------------------------------- |
| GET    | /tasks     | Returns all tasks        | —                                      |
| POST   | /tasks     | Creates a new task       | `{ title, description }`               |
| PATCH  | /tasks/:id | Partially updates a task | `{ title?, description?, completed? }` |
| DELETE | /tasks/:id | Deletes a task           | —                                      |

## Author

Your name — [GitHub](https://github.com/DawidKumor)
