const express = require("express");
const app = express();
app.use(express.json());
let data = [
    {
        email: "jame@gmail.com",
        password: "123456"
    }
];

app.post("/users/register", (req, res) => {
    const { username, email, password, is_admin = false } = req.body;
    const uniqueEmail = data.find(item => item.email !== email);

    if (username.length < 3) {
        return res.status(400).send({ message: "Username must be more than 3 characters!" });
    }
    if (password.length < 6) {
        return res.status(400).send({ message: "Password should be more than 6 characters!" });
    }
    if (!uniqueEmail) {
        res.send({ message: "Email already exists" })
    }
    const user = {
        username,
        email,
        password,
        is_admin
    };
    data.push(user);
    res.status(200).json({
        message: "User created successfully!",
        user: { username, email, is_admin }
    });
    console.log(data);
});
app.post("/users/login",(req,res)=>{
    const {email, password} = req.body;
    const verifyEmail = data.find(item => item.email === email);
    const verifyPassword = data.find(item => item.password === password);

    if(!verifyEmail || !verifyPassword){
        res.status(400).send({ message: "Wrong credititinal!" });
    }

    res.send({message:"User logged in successfully!"});
});

app.listen(3001,()=>{
    console.log("Hello from server");
});


