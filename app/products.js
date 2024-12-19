const express = require("express");
const app = express();

app.use(express.json());
products = [
    {
        name: "phone",
        description: "new phone",
        price: "450_000",
        category: "technology",
        image_url: "",
        is_active: true
    }
]

app.post('/products', (req, res) => {
    const { name, description, price, category, image_url, is_active = true } = req.body;
    const product = { name, description, price, category, image_url, is_active };

    if (name.length < 1) {
        return res.status(400).send({ message: "Name must be more than 1 characters!" });
    };

    if (price <= 0) {
        return res.status(400).send({ message: "Price must be greater than 0!" });
    };

    products.push(product);
    res.status(200).json({
        message: "Product added successfully!",
        product
    });
    console.log(product);
})

app.get("/products", (req,res)=>{
    res.status(200).json(products);
    console.log(products);
})

app.listen(3001, () => {
    console.log("Hello from product server!")
})