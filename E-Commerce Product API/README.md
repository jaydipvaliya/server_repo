# 🛒 E-Commerce Product API

A RESTful API built with **Node.js** and **Express.js** for managing e-commerce products — supporting full CRUD operations including adding, updating, and filtering products.

## 🌐 Live Server

🔗 **Base URL:** [https://e-commerce-product-api-8108.onrender.com](https://e-commerce-product-api-8108.onrender.com)

## 📖 API Documentation

Full Postman documentation available here:
📄 [https://documenter.getpostman.com/view/50839173/2sBXcGFg1u](https://documenter.getpostman.com/view/50839173/2sBXcGFg1u)

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
Server is running
```

---

### `GET /products`
Returns a list of all products.

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 799,
    "stock": 25,
    "rating": 4.3
  },
  ...
]
```

---

### `GET /products/:id`
Returns a single product by its unique ID.

**URL Parameter:** `id` — the product's numeric ID

**Response:** `200 OK`
```json
{
  "id": 1,
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 799,
  "stock": 25,
  "rating": 4.3
}
```

**Error Response:** `404 Not Found`
```json
{
  "message": "product not found"
}
```

---

### `GET /products/category/:categoryName`
Returns all products in a given category (case-insensitive).

**URL Parameter:** `categoryName` — e.g., `Electronics`, `Footwear`, `Fashion`

**Example:** `/products/category/Electronics`

**Response:** `200 OK`
```json
[
  { "id": 1, "name": "Wireless Mouse", "category": "Electronics", "price": 799, "stock": 25, "rating": 4.3 },
  { "id": 4, "name": "Smart Watch", "category": "Electronics", "price": 4999, "stock": 12, "rating": 4.4 }
]
```

---

### `POST /products`
Adds a new product to the list.

**Request Body:**
```json
{
  "name": "Mechanical Keyboard",
  "category": "Electronics",
  "price": 3499,
  "stock": 20,
  "rating": 4.6
}
```

**Response:** `201 Created`
```json
{
  "message": "User created",
  "product": {
    "id": 6,
    "name": "Mechanical Keyboard",
    "category": "Electronics",
    "price": 3499,
    "stock": 20,
    "rating": 4.6
  }
}
```

---

### `PUT /products/:id`
Replaces an entire product by ID.

**URL Parameter:** `id` — the product's numeric ID

**Request Body:**
```json
{
  "name": "Updated Product",
  "category": "Accessories",
  "price": 1299,
  "stock": 15,
  "rating": 4.0
}
```

**Response:** `200 OK`
```json
{
  "message": "product replaced",
  "product": {
    "id": 3,
    "name": "Updated Product",
    "category": "Accessories",
    "price": 1299,
    "stock": 15,
    "rating": 4.0
  }
}
```

**Error Response:** `404 Not Found`
```json
{
  "message": "Product not found"
}
```

---

### `PUT /products/:id/stock`
Updates only the stock value of a product.

**URL Parameter:** `id` — the product's numeric ID

**Request Body:**
```json
{
  "stock": 100
}
```

**Response:** `200 OK`
```json
{
  "message": "Stock updated successfully",
  "product": { ... }
}
```

---

### `PUT /products/:id/price`
Updates only the price of a product.

**URL Parameter:** `id` — the product's numeric ID

**Request Body:**
```json
{
  "price": 999
}
```

**Response:** `200 OK`
```json
{
  "message": "price updated successfully",
  "product": { ... }
}
```

---

## 🗂️ Available Categories

| Category    | Products |
|-------------|----------|
| Electronics | 2        |
| Footwear    | 1        |
| Accessories | 1        |
| Fashion     | 1        |

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
