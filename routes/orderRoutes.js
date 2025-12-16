const express = require("express");
const { 
  getOrders, 
  createOrder, 
  deleteOrder, 
  updateOrder,
  getUserOrders // If you want to get orders by user
} = require("../controllers/orderController"); // Import order controllers
const verifyJWT = require("../controllers/middleware/verifyJWT");

const orderRouter = express.Router();

// Get all orders (admin only probably)
orderRouter.get("/", verifyJWT, getOrders);

// Get orders for a specific user
orderRouter.get("/user/:userId", verifyJWT, getUserOrders);

// Create a new order
orderRouter.post("/", verifyJWT, createOrder);

// Update order status (for admin or delivery tracking)
orderRouter.put("/:id", verifyJWT, updateOrder);

// Delete order
orderRouter.delete("/:id", verifyJWT, deleteOrder);

module.exports = orderRouter;