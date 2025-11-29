# APPDEV1 Final Exam – React Todo Application

This project is the final practical exam for APPDEV1.
It demonstrates the use of **React, Vite, Redux Toolkit, Axios, Routing, Environment Variables**, and **GitHub Pages Deployment** by converting a Todo App template into a full working CRUD application using the JSONPlaceholder API.

---

## 🚀 Live Demo

The live version of the app is deployed on GitHub Pages:
👉 **[https://thealiane09.github.io/appdev1-final-exam/](https://thealiane09.github.io/appdev1-final-exam/)**

---

## 📝 Project Features

### ✅ Core Requirements Implemented

* Converted template into **React + Vite** project
* Implemented **full CRUD functionality** using JSONPlaceholder `/todos` API
* Used **Axios** for all API requests
* Added **React Router** for page navigation (Home, Login, Todos)
* Implemented **Redux Toolkit** for state management
* Created **reusable components**:

  * AddTodoForm
  * TodoItem
  * TodoList
* Added **theme toggle (light/dark mode)**
* Implemented **Login validation** using:

  * JSONPlaceholder `/users` (limited to 3 users)
  * Password stored in `.env`
* Used **environment variables** via Vite
* Deployed to **GitHub Pages** using `gh-pages`

---

## 📁 Folder Structure

```
src/
│── app/
│   └── store.js
│── features/
│   └── todos/
│       ├── todosSlice.js
│       └── todosAPI.js
│── components/
│   ├── AddTodoForm.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
│── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   └── Todos.jsx
│── App.jsx
│── main.jsx
```

---

## ⚙️ Environment Variables

Create a `.env` file at the root of your project:

```
VITE_APP_SECRET_PASSWORD=SECRET123
VITE_APP_API_URL=https://jsonplaceholder.typicode.com
```

---

## 🛠️ Technologies Used

* **React (Vite)**
* **Redux Toolkit**
* **React Router DOM**
* **Axios**
* **JavaScript (ES6)**
* **CSS / Template Styling**
* **GitHub Pages Deployment**

---

## 📦 Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/thealiane09/appdev1-final-exam.git
cd appdev1-final-exam
```

### 2. Install dependencies

```
npm install
```

### 3. Run the app locally

```
npm run dev
```

### 4. Build the project

```
npm run build
```

### 5. Deploy to GitHub Pages

```
npm run deploy
```

---

## 🖼️ Screenshots

(Add your screenshots here)

```
/screenshots
  ├── home.png
  ├── login.png
  └── todos.png
```

---



---

