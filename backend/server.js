import mongoose from 'mongoose';
import express from "express";
import cors from "cors";
import "dotenv/config";
import UserRoutes from './src/routes/userRoutes.js';


const app = express();
app.use(express.json())
app.use(cors())

const productSchema = new mongoose.Schema({
    title: String,
    description:String,
    type: String,
    image: String,
    price: Number,
})

const productModel = mongoose.model("product", productSchema);

app.get("/product", async (req, res) => {
    const product = await productModel.find()
    res.send(product)
})

app.get("/product/:id", async (req, res) => {
    const { id } = req.params
    const product = await productModel.findById(id)
    res.send(product)
})

app.post("/product", async (req, res) => {
    const { title,description, type, price, image } = req.body;
    const newProduct = new productModel({ title,description, type, price, image });
    await newProduct.save();
    res.status(201).send("Item created");
})

app.delete("/product/:id", async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await productModel.findByIdAndDelete(id);
    res.send("item deleted");
})


app.put("/product/:id", async (req, res) => {
    const { id } = req.params
    const { title,description, type, price, image, } = req.body
    await productModel.findByIdAndUpdate(id, { title,description, type, price, image})
    res.send("Item updated")
})


app.use("/api",UserRoutes)

app.listen(process.env.PORT, () => {
    console.log(`api running on ${process.env.PORT} `)
})

mongoose.connect(process.env.Connection_string)
    .then(() => console.log("Connected!"))
    .catch((err)=> console.log("Not Connected!"));