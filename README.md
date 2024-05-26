## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Introduction
The Next.js 'TOPIC' app is a web application for managing and organizing topics.

## Features
- Add New Topic: Add new topics with title, description, and details.
- Edit Topic: Modify existing topic details.
- Delete Topic: Remove topics from the database.
- List Topics: Display a list of all topics.

## Installation
1. Clone the repository: ` git clone https://github.com/atharva-0123-cs/mongodb-curd.git`
2. Navigate to the project directory: `cd mongodb-curd`
3. Install dependencies: `npm install`

## Configuration
1. Rename `.env.example` to `.env`.
2. Edit `.env` and set your MongoDB connection URL.

## Usage
1. Run the development server: `npm run dev`
2. Access the app in your browser at `http://localhost:3000`.

## API Endpoints
- GET `/api/topics`: Retrieve all topics.
- POST `/api/topics`: Add a new topic.
- PUT `/api/topics/:id`: Update a topic by ID.
- DELETE `/api/topics/:id`: Delete a topic by ID.

## Dependencies
- Next.js
- React
- Node.js
- MongoDB
- Mongoose

## License
This project is licensed under the MIT License.
