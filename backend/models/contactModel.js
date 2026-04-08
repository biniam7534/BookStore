import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: false,
        },
        subject: {
            type: String,
            required: false,
        },
        message: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["New", "Read", "Replied"],
            default: "New",
        },
    },
    {
        timestamps: true,
    }
);

const ContactModel = mongoose.model("Contact", contactSchema);

export default ContactModel;
