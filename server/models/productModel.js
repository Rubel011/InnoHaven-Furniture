const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    thumbnail_pic_url: { type: String, required: true },
    pic_urls: { type: [String], required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    texture: { type: String, required: true },
    weight: { type: String, required: true },
    size: { type: String, required: true }
}, { versionKey: false })

const Product = mongoose.model("Product", productSchema);

module.exports = { Product }