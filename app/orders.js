const express = require("express");
const app = express();

app.use(express.json());
orders = [
    {
        user_id: 1,
        products: [],
        total_price: 250,
        status: "PENDING"
    }
]

app.post('/orders', (req, res) => {
    const { user_id, products, total_price, status = PENDING } = req.body;
    const order = { user_id, products, total_price, status };

    if (products.length <= 0 ) {
        return res.status(400).send({ message: "Product missed!" });
    };

    if (total_price <= 0) {
        return res.status(400).send({ message: "Price must be greater than 0!" });
    };

    orders.push(order);
    res.status(200).json({
        message: "Order created successfully!",
        order
    });
    console.log(order);
})

app.get("/orders", (req, res) => {
    res.status(200).json(orders);
    console.log(orders);
})

app.listen(3001, () => {
    console.log("Hello from order server!")
})