const orderModel = require("../schemas/orderSchema");

// Get all orders
const getOrders = async (req, res) => {
  try {
    const orders = await orderModel
      .find()
      .populate("userId", "name email") // Get user info
      .populate("items.foodId", "foodName price image") // Get food details
      .sort({ createdAt: -1 }); // Newest first

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get orders for a specific user
const getUserOrders = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ userId: req.params.userId })
      .populate("items.foodId", "foodName price image")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new order
const createOrder = async (req, res) => {
  try {
    const { userId, items, totalPrice, deliveryAddress } = req.body;

    const newOrder = new orderModel({
      userId,
      items, // Array of { foodId, quantity, price }
      totalPrice,
      deliveryAddress,
      status: "pending", // Default status
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update order (usually for status updates)
const updateOrder = async (req, res) => {
  try {
    const { status } = req.body;

    const updatedOrder = await orderModel.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Order updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete order
const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await orderModel.findByIdAndDelete(req.params.id);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getOrders,
  getUserOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
