# [PT Primac Perkasa Indonesia] Technical Test - Todo API with Express

Author: Alfarell Muchamad Yuwanto

A simple **ToDo REST API** built with **Express.js** using an **Object-Oriented (OOP)** and modular structure.  
This project demonstrates a backend architecture, complete with route separation, controllers, validator handling, and 404 fallback routes.

## Tech Stack

- [Express JS](https://expressjs.com/)

## Setup & Installation

```bash
# Setup .env

cp .env.example .env
```

```bash
# Install dependencies

npm install
```

```bash
# Run server

npm start
```

```bash
# Or run development server with nodemon to automatically restart on file changes

npm run dev
```

## API Endpoints

- `[GET] /todos`

  response:

  ```json
  {
    "data": [
      {
        "id": "stirng",
        "title": "string",
        "description": "string",
        "createdAt": "string",
        "updatedAt": "string"
      }
    ]
  }
  ```

- `[POST] /todos`

  body payload:

  ```json
  {
    "title": "string",
    "description": "string"
  }
  ```

  response:

  ```json
  {
    "id": "string"
  }
  ```

- `[PATCH] /todos/:id`

  body payload:

  ```json
  {
    "title": "string",
    "description": "string"
  }
  ```

  response:

  ```text
  No Content
  ```

- `[DELETE] /todos/:id`

  response:

  ```json
  {
    "title": "string",
    "description": "string"
  }
  ```
