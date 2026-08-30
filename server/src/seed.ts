import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/database";
import Product from "./models/Product";

dotenv.config();

const products = [
  {
    name: "Earthbound Ceramic Mug",
    description:
      "A handcrafted ceramic mug with a warm earthy finish, perfect for everyday coffee and tea.",
    price: 799,
    category: "Ceramic Mugs",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a",
    stock: 25,
    rating: 4.8,
  },
  {
    name: "Rustic Clay Mug",
    description:
      "A rustic handmade clay mug inspired by traditional pottery craftsmanship.",
    price: 699,
    category: "Ceramic Mugs",
    image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18",
    stock: 18,
    rating: 4.7,
  },
  {
    name: "Terracotta Planter",
    description:
      "A beautifully crafted terracotta planter that brings a natural touch to your space.",
    price: 999,
    category: "Clay Pots",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    stock: 20,
    rating: 4.9,
  },
  {
    name: "Handcrafted Clay Pot",
    description:
      "Traditional handcrafted clay pot made with natural textures and an artisan finish.",
    price: 1299,
    category: "Clay Pots",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa",
    stock: 15,
    rating: 4.8,
  },
  {
    name: "Earth Tone Ceramic Vase",
    description:
      "An elegant ceramic vase designed to complement modern and earthy interiors.",
    price: 1499,
    category: "Decorative Vases",
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c",
    stock: 12,
    rating: 4.9,
  },
  {
    name: "Minimalist Clay Vase",
    description:
      "A minimal handmade vase with a natural matte texture and timeless silhouette.",
    price: 1199,
    category: "Decorative Vases",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d",
    stock: 16,
    rating: 4.7,
  },
  {
    name: "Hand-painted Ceramic Plate",
    description:
      "A handcrafted ceramic plate featuring subtle artisan-inspired detailing.",
    price: 899,
    category: "Handcrafted Plates",
    image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0",
    stock: 30,
    rating: 4.8,
  },
  {
    name: "Artisan Dinner Plate",
    description:
      "A premium handmade plate designed for beautiful everyday dining experiences.",
    price: 1099,
    category: "Handcrafted Plates",
    image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4",
    stock: 22,
    rating: 4.9,
  },
];

const seedProducts = async () => {
  try {
    await connectDB();

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log(`🌱 ${products.length} products inserted successfully`);

    await mongoose.connection.close();

    console.log("🔌 MongoDB connection closed");
    process.exit(0);
  } catch (error) {
    console.error("❌ Product seeding failed:", error);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedProducts();