# 🎓 Student CGPA API

A lightweight RESTful API built with **Node.js** and **Express.js** that provides student data including CGPA, branch, and semester information.

## 🌐 Live Server

🔗 **Base URL:** [https://student-cgpa-api-159v.onrender.com](https://student-cgpa-api-159v.onrender.com)

## 📖 API Documentation

Full Postman documentation available here:
📄 [https://documenter.getpostman.com/view/50839173/2sBXcEmgWN](https://documenter.getpostman.com/view/50839173/2sBXcEmgWN)

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Deployment:** Render

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project directory
cd <project-folder>

# Install dependencies
npm install

# Start the server
node index.js
```

The server will start on **http://localhost:3000**

---

## 📡 API Endpoints

### `GET /`
Health check — confirms the server is running.

**Response:**
```
server is running
```

---

### `GET /students`
Returns a list of all students.

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "name": "Aarav Sharma",
    "branch": "CSE",
    "semester": 8,
    "cgpa": 9.3
  },
  ...
]
```

---

### `GET /students/topper`
Returns the student with the highest CGPA.

**Response:** `200 OK`
```json
{
  "id": 1,
  "name": "Aarav Sharma",
  "branch": "CSE",
  "semester": 8,
  "cgpa": 9.3
}
```

---

### `GET /students/average`
Returns the average CGPA of all students.

**Response:** `200 OK`
```json
{
  "averageCGPA": 8.51
}
```

---

### `GET /students/count`
Returns the total number of students.

**Response:** `200 OK`
```json
{
  "totalStudents": 10
}
```

---

### `GET /students/:id`
Returns a student by their unique ID.

**URL Parameter:** `id` — the student's numeric ID

**Response:** `200 OK`
```json
{
  "id": 3,
  "name": "Rohan Kulkarni",
  "branch": "ECE",
  "semester": 6,
  "cgpa": 8.4
}
```

**Error Response:** `404 Not Found`
```json
{
  "message": "student not found"
}
```

---

### `GET /students/branch/:branchName`
Returns all students in a specific branch (case-insensitive).

**URL Parameter:** `branchName` — e.g., `CSE`, `IT`, `ECE`, `AI`, `Data Science`

**Example:** `/students/branch/CSE`

**Response:** `200 OK`
```json
[
  { "id": 1, "name": "Aarav Sharma", "branch": "CSE", "semester": 8, "cgpa": 9.3 },
  { "id": 4, "name": "Meera Iyer", "branch": "CSE", "semester": 8, "cgpa": 9.1 },
  ...
]
```

---

## 🗂️ Available Branches

| Branch       | Students |
|--------------|----------|
| CSE          | 4        |
| IT           | 2        |
| ECE          | 2        |
| AI           | 1        |
| Data Science | 1        |

---

## 📁 Project Structure

```
project/
│
├── index.js        # Main server file
├── package.json    # Project metadata & dependencies
└── README.md       # Project documentation
```

---

## 👤 Author

Made with ❤️ using Node.js & Express
