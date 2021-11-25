# Todolist API with Node, Express and MongoDB

This is a basic todolist API with CRUD operations using the MVC architecture

## Installation

- Clone the repository
- Run `npm install`
- Create a .env file and set these environment variables: MONGO_URI and PORT
- Run `node server.js`

## API endpoints

- `GET /api/v1/todos` : get the list of todos
- `GET /api/v1/todos/:todoId` : get a specific todo
- `POST /api/v1/todos` : create a todo (only the 'label' field is required)
- `PATCH /api/v1/todos/:todoId` : update the todo with the given id
- `DELETE /api/v1/todos/:todoId` : delete the todo with the given id
