# 📌 Task Tracker for Enterprise Teams

A scalable task and project management application designed for large companies.

---

## 🧱 Technologies

### Frontend

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/) — state management
- Feature-Sliced Design (FSD) architecture
- SCSS modules and custom UI components

### Backend

- [NestJS](https://nestjs.com/)
- [TypeORM / Prisma]
- PostgreSQL
- JWT / Cookie-based authentication
- Role-based access control (RBAC)

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/henicanan/task-tracker-ft.git
cd task-tracker-ft

# Install dependencies
npm install

# Start frontend
npm run dev
```

src/
├── app/ # app-level (main.ts, router, App.vue)
├── pages/ # pages (LoginPage, RegisterPage, etc.)
├── features/ # features: auth, task-create, etc.
├── entities/ # business entities: user, task, project
├── shared/ # reusable modules (ui, lib, api, styles)
└── widgets/ # complex UI compositions (NavBar, Sidebar, etc.)
