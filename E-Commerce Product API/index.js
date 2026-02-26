const express = require("express");
const app = express();

app.use(express.json());

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];

app.get("/", (req, res) => {
    res.send("Server is running");
});

// Return all products.

app.get("/products", (req,res) => {
    res.status(200).json(products);
});

// Return product by ID.

app.get("/products/:id", (req,res) => {
    const productId = Number(req.params.id);
    const product = products.find(p => p.id === productId);

    if(!product){
        return res.status(404).json({message: "product not found"});
    }

    res.status(200).json(product);
});

// Return products by category.

app.get("/products/category/:categoryName", (req, res) => {
    const productCategory = req.params.categoryName.toLowerCase();
    const Category = products.filter(c => c.category.toLowerCase() == productCategory);

    if(!Category){
        return res.status(404).json({message: "catagory not found"});
    }

    res.status(200).json(Category);
});

// Add a new product

app.post("/products", (req, res) => {
    const newProduct = {
        id: products.length+1,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating
    };

    products.push(newProduct);

    res.status(201).json({
        message: "User created",
        product: newProduct
    });
});

// Replace entire product.

app.put("/products/:id", (req, res) => {
    const productId = Number(req.params.id);
    const index = products.findIndex(p => p.id === productId);

    if(index === -1){
        return res.status(404).json({ message: "Product not found"});
    }

    products[index] = {
        id: productId,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock,
        rating: req.body.rating

    };

    res.status(200).json({
        message: "product replaced",
        product: products[index]
    });
});

//[Routes-6]Update only stock value:-
app.put("/products/:id/stock", (req, res) => {
  const productId = Number(req.params.id);
  const index = products.findIndex(p => p.id === productId);
 
   if (index === -1) {
     return res.status(404).json({ message: "Product not found" });
   }

  products[index].stock = req.body.stock;
 
  res.status(200).json({
    message: "Stock updated successfully",
    product: products[index]
  });
});



//[Routes-7]Update only price:-
app.put("/products/:id/price", (req, res) => {
  const productId = Number(req.params.id);
  const index = products.findIndex(p => p.id === productId);

   if (index === -1) {
     return res.status(404).json({ message: "Product not found" });
   }

  products[index].price = req.body.price;
 
  res.status(200).json({
    message: "price updated successfully",
    product: products[index]
  });
});


app.listen(3000, ()=> {
    console.log("server is started on server 3000");
});

