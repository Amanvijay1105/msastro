import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    booking : {
        type : mongoose.Schema.Types/Object,
        ref : "Booking",
        required : true,
    },

    razorpayPayment : {
        type : String,
        required : true,
    },

    currency: {
        type: String,
        default: 'INR',
    },

    status: {
        type: String,
        enum: ['INITIATED', 'SUCCESS', 'FAILED', 'REFUNDED'],
        default: 'INITIATED',
    },
},{timestamps : true})
const Payment = mongoose.model("Payment",paymentSchema)

export default Payment