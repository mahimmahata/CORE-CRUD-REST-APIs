# Core CRUD REST APIs

A lightweight, robust, and modular RESTful API built from scratch using Node.js, Express, and MongoDB. This project focuses strictly on mastering backend fundamentals, clean routing architecture, schema modeling, and full CRUD operations tested via Postman.

---

### 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (via Mongoose ODM)
* **Environment Management:** dotenv
* **API Client:** Postman

---

### ✨ Features

* **Complete CRUD Operations:** Create, Read, Update, and Delete endpoints with clean HTTP status codes.
* **Mongoose Schema Modeling:** Structured data validation and persistent storage.
* **Modular Backend Architecture:** Clean separation of concerns (`Database/`, `Schema/`, `app.js`, and `server.js`).
* **Clean Configuration:** Production-safe `.gitignore` safeguarding environment secrets and dependencies.

---

### 📡 API Endpoints (v1.0)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/items` | Create a new record |
| `GET` | `/api/items` | Fetch all records |
| `PUT` | `/api/items/:id` | Update an existing record by ID |
| `DELETE` | `/api/items/:id` | Delete a record by ID |

*(Note: Adjust the exact paths above if your route names differ)*

---

### 🚀 Roadmap

* [x] **v1.0 (Current):** Core CRUD REST API & Database Integration
* [ ] **v2.0 (Next):** Authentication & Security Layer (JWT, bcrypt password hashing, auth middleware, and cookies)

---

### 💬 Feedback & Suggestions

This project represents the core foundation of my backend development journey. Code reviews, architectural advice, and suggestions from fellow developers are warmly welcomed!
