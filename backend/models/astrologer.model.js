import mongoose from "mongoose";

const astrologerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    bio : {
        type : String,
        default : "",
    },
    avatarUrl : {
        type : String,
        default : "",

    },
    specialization: {
        type: [String],
        default: [],
    },

    availableSlots: [
        {
            dayOfWeek: {
                type: String,
                enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                required: true,
            },
            startTime: {
                type: String,
                required: true,
            },
            endTime: {
                type: String,
                required: true,
            },
            slotDuration: {
                type: Number,
                default: 15,
            },
        },
    ],
    timezone : {
        type : String,
        default : "UTC",
        required : true,
    },
    isActive : {
        type : Boolean,
        default : true,
    },
},{timestamps:true})

const Astrologer = mongoose.model("Astrologer",astrologerSchema)

export default Astrologer