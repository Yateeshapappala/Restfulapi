# 📌 Backend Development Internship Assignment

This project is a **RESTful API** built using **Node.js, Express, and MongoDB**.  
It includes **CRUD operations**, **JWT authentication**, and a **To-Do List API**.

---

## 🚀 Features
✅ **Task 1:** Basic CRUD API (Independent, No Database)  
✅ **Task 2:** MongoDB Schema for To-Do App  
✅ **Task 3:** JWT Authentication & User Management  
✅ **Task 4:** To-Do List API with Full CRUD & MongoDB  

---   

## 🛠️ Setup & Installation

### **1️⃣ Clone the Repository**
```sh
git clone <repository-link>
cd restfulapi
```

### **2️⃣ Install Dependencies**
```sh
cd task1
npm install

cd ../to-do
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file inside `todo/` and add:
```
MONGO_URI=mongodb+srv://your_username:your_password@your-cluster.mongodb.net/todoDB?retryWrites=true&w=majority
JWT_SECRET=your_secret_key
PORT=5000
```

### **4️⃣ Run the Servers**
#### ✅ **Start Task 1 API (Basic CRUD)**
```sh
cd task1
node index.js
```
Server runs at: **`http://localhost:4000`**

#### ✅ **Start Task 2-4 API (To-Do + Users + Auth)**
```sh
cd to-do
npm run dev
```
Server runs at: **`http://localhost:5000`**

---

## 📌 API Endpoints (Use Postman to Test)

### **✅ Task 1: Basic CRUD API**
| Operation  | Method | URL |
|------------|--------|--------------------------------|
| Create Item | `POST` | `http://localhost:4000/items` |
| Get All Items | `GET` | `http://localhost:4000/items` |
| Get Item by ID | `GET` | `http://localhost:4000/items/:id` |
| Update Item | `PUT` | `http://localhost:4000/items/:id` |
| Delete Item | `DELETE` | `http://localhost:4000/items/:id` |

---

### **✅ Task 2-4: To-Do API (MongoDB + Auth)**
| Operation  | Method | URL |
|------------|--------|--------------------------------|
| **Users:** Register | `POST` | `http://localhost:5000/users/register` |
| **Users:** Login | `POST` | `http://localhost:5000/users/login` |
| **Users:** Get All (Protected) | `GET` | `http://localhost:5000/users` |
| **Users:** Get by ID (Protected) | `GET` | `http://localhost:5000/users/:id` |
| **Users:** Delete (Protected) | `DELETE` | `http://localhost:5000/users/:id` |
| **To-Do:** Create (Protected) | `POST` | `http://localhost:5000/todos` |
| **To-Do:** Get All (Protected) | `GET` | `http://localhost:5000/todos` |
| **To-Do:** Get by ID (Protected) | `GET` | `http://localhost:5000/todos/:id` |
| **To-Do:** Update (Protected) | `PUT` | `http://localhost:5000/todos/:id` |
| **To-Do:** Delete (Protected) | `DELETE` | `http://localhost:5000/todos/:id` |

---

## 🛠 Technologies Used
- **Node.js** - JavaScript runtime  
- **Express.js** - Backend framework  
- **MongoDB** - NoSQL Database  
- **Mongoose** - MongoDB ODM  
- **JWT** - Authentication  
- **Postman** - API Testing  

---

## 📌 Notes
- **Task 1** (Basic CRUD) runs on `http://localhost:4000`.  
- **Task 2-4** (To-Do API + Users) runs on `http://localhost:5000`.  
- **Authentication Required**: Use JWT tokens for protected routes.  
- **MongoDB Atlas is used**: Ensure your database is connected.  

---

## 🎯 Conclusion
This project successfully implements:
- **Task 1:** Simple CRUD API
- **Task 2:** MongoDB Schema for To-Do   
- **Task 3:** JWT Authentication & User Management   
- **Task 4:** To-Do CRUD API (With DB)

--
