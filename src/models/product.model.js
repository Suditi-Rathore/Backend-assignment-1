import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true , default: 0},
  description: { type: String },
}, { timestamps: true }
);



const Product = mongoose.model('Product', productSchema);
{ Product };
export default Product;