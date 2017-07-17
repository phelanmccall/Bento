# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id`
  - User Profile

### Session

- `POST /api/session`
- `DELETE /api/session`

### Projects

- `GET /api/projects`
  - Projects Index
- `POST /api/projects`
- `GET /api/projects/:id`
- `PATCH /api/projects/:id`
- `DELETE /api/projects/:id`

### Teams

- `GET /api/teams`
- `POST /api/teams`
- `GET /api/teams/:id`
- `DELETE /api/teams/:id`
- `GET /api/teams/:id/projects`
  - index of all projects for a team

### Tasks
- `GET /api/tasks`
- `POST /api/tasks`
- `GET /api/tasks/:id`
- `DELETE /api/tasks/:id`
- `GET /api/tasks/:id/project/:id`
  - the project for this task
