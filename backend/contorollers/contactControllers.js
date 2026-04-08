import ContactModel from "../models/contactModel.js";

// Save a new contact message
export const saveContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: "Please provide name, email and message" });
        }

        const newMessage = new ContactModel(req.body);
        await newMessage.save();

        res.status(201).json({
            success: true,
            message: "Message saved successfully",
            data: newMessage
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all contact messages
export const getContactMessages = async (req, res) => {
    try {
        const messages = await ContactModel.find().sort({ createdAt: -1 });
        res.status(200).json({
            count: messages.length,
            data: messages
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
