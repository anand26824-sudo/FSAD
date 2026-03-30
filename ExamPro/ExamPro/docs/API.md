# API Documentation

## Endpoints (Future Backend)

### Auth
- `POST /api/auth/login` — Student login
- `POST /api/auth/logout` — Logout

### Exams
- `GET /api/exams` — List all exams
- `GET /api/exams/:id` — Get exam by ID
- `GET /api/exams/:id/questions` — Get questions

### Results
- `POST /api/results` — Submit exam result
- `GET /api/results/:userId` — Get student results

### Admin
- `POST /api/exams` — Create exam
- `PUT /api/exams/:id` — Update exam
- `GET /api/reports/analytics` — Get analytics
