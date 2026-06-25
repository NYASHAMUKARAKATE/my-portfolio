# My Portfolio

A modern, full-stack personal portfolio application designed to showcase projects, skills, professional experience, and blog posts, while also providing a contact form for visitors to get in touch. 

This repository is divided into two main parts: a **Next.js frontend** and a **Django backend**.

##  Features

- **Projects Showcase**: Display a curated list of projects with details, tech stack, and links (GitHub/Live).
- **Skills Directory**: Categorized skills (Frontend, Backend, DevOps, etc.) with proficiency levels.
- **Experience Timeline**: A timeline of professional job experiences and history.
- **Blog / Posts**: Markdown-based blog posts to share knowledge and updates.
- **Contact Form**: An integrated contact form that stores messages in the database.
- **Admin Dashboard**: Manage all content easily via the built-in Django admin interface.

## Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) (v16+)
- **Library**: [React](https://react.dev/) (v19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

### Backend
- **Framework**: [Django](https://www.djangoproject.com/)
- **Database**: SQLite (default for development, can be swapped for PostgreSQL/MySQL)
- **Language**: Python

## Project Structure

```text
my-portfolio/
├── backend/          # Django application
│   ├── core/         # Main Django project configuration settings
│   ├── portfolio/    # Django app managing models (Projects, Skills, Posts, etc.)
│   ├── manage.py     # Django command-line utility
│   └── requirements.txt
├── frontend/         # Next.js application
│   ├── src/          # Next.js App Router and components
│   ├── public/       # Static assets
│   ├── package.json  # NPM dependencies and scripts
│   └── next.config.ts
└── README.md         # This file
```

## Getting Started

To run this project locally, you will need to start both the backend server and the frontend development server.

### 1. Backend Setup (Django)

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```
3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Apply database migrations:
   ```bash
   python manage.py migrate
   ```
5. (Optional) Create a superuser to access the admin panel:
   ```bash
   python manage.py createsuperuser
   ```
6. Run the development server:
   ```bash
   python manage.py runserver
   ```
   The backend API will be available at `http://127.0.0.1:8000/`.

### 2. Frontend Setup (Next.js)

1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   # or yarn install / pnpm install / bun install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000/`.

##  Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
