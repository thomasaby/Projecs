# 🛠️ Project Manager – Django REST API

#Last Updated: 041825

A full-featured project management backend built with Django and Django REST Framework. This RESTful API supports user authentication, secure password handling, and CRUD operations for managing projects. Designed for easy integration with modern frontend frameworks like React or Vue.

---

## 🚀 Features

- 🔐 User registration and login with JWT authentication
- 🔒 Secure password hashing
- 📁 CRUD operations for projects
- 🗓️ PostgreSQL integration
- 📦 Clean project structure for scalability
- ⚙️ Ready for frontend consumption (React/Vue/Angular)

---

## 📦 Tech Stack

- Python 3.x
- Django
- Django REST Framework
- PostgreSQL
- Poetry (for dependency management)
- JWT (JSON Web Tokens)

---

## 🧑‍💻 Project Model

Each project includes:

- `name` – Project title
- `location` – Where the project is based
- `description` – Details about the project
- `estimated_cost` – Planned budget
- `actual_cost` – Final cost

---

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/project-manager-api.git
   cd project-manager-api
   ```

2. **Install dependencies**

   ```bash
   poetry install
   ```

3. **Apply migrations**

   ```bash
   poetry run python manage.py migrate
   ```

4. **Run the server**
   ```bash
   poetry run python manage.py runserver
   ```

---

## 🔐 Authentication

This project uses **JWT authentication** via `djangorestframework-simplejwt`. After login, include the token in the Authorization header:

---

## 🛣️ Roadmap

- [ ] Add admin dashboard
- [ ] Role-based access (admin/user)
- [ ] Cost prediction using ML
- [ ] API documentation with Swagger or ReDoc
- [ ] Deploy to Render or Heroku

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📬 Contact

For any questions, feel free to reach out via GitHub or email me at: thomasaby34@gmail.com
