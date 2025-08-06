import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    catagory: String,
    progress: Number,
    priority: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

// ✅ Proper model check to avoid OverwriteModelError
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
