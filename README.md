# 📌 Task Tracker for Enterprise Teams

A scalable task and project management application designed for large companies.

---

## 🧱 Technologies

### Frontend

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Feature-Sliced Design (FSD) architecture
- 
## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/henicanan/vue-devtracker-client.git
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
