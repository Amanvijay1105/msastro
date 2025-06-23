import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    astrologer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Astrologer",
        required : true,
    },
    startTime : {
        type : Date,
        required : true,
    },

    endTime : {
        type : Date,
        required : true,
    },

    status : {
        type : String,
        enum : ['PENDING','CONFIRMED','CANCELLED'],
        default : "PENDING",
    },
    meetingLink : {
        type : String
    },
    durationMins : {
        type : Number,
        required : true,
    },

    fee: {
        type: Number,
        required: true,
    },
    razorpayOrderId: {
        type: String,
    },
},{timestamps:true})

const Booking = mongoose.model("Booking",bookingSchema)

export default Booking