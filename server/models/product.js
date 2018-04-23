const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Must include product name"], minlength: [3, "Product name must be at least 3 characters"]},
    quantity: {type: Number, required: [true, "Must include product qty."], min: [0, "Enter a valid qty."]},
    price: {type: Number, required: [true, "Must include a product price"], min: [.01, "Product cannot be free!"]}
}, {timestamps: true})

mongoose.model('Product', ProductSchema);
const Product = mongoose.model('Product');