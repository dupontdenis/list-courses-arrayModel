# List Courses API

This project is a Node.js RESTful API for managing a list of courses. It uses Express and organizes code into controllers, models, and routes. The API supports basic CRUD operations for courses and includes server-side views for course management.

## Features

- List all courses
- Get details for a specific course
- Add a new course
- Update an existing course
- Delete a course

## Folder Structure

- `app_api/` - API controllers, models, and routes
- `app_server/` - Server-side controllers, routes, and views (Pug templates)
- `public/` - Static assets (JS, CSS, fonts)
- `index.js` - Main entry point

## API Endpoints

### List Courses

- `GET /api/courses` - Returns all courses

### Get Course

- `GET /api/courses/:courseId` - Returns details for a specific course

### Add Course

- `POST /api/courses` - Adds a new course
  - Body: `{ "name": "Course Name", "description": "Course Description" }`

### Update Course

- `PUT /api/courses/:courseId` - Updates a course
  - Body: `{ "name": "New Name", "description": "New Description" }`

### Delete Course

- `DELETE /api/courses/:courseId` - Deletes a course

## How to Run

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. API runs on `http://localhost:3000`

## REST Test Example

See `rest_test.http` for sample requests.

## License

MIT
