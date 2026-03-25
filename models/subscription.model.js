import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Subscription name is required"],
        trim: true,
        minLength: [2, "Subscription name must be at least 2 characters long"],
        maxLength: [100, "Subscription name must be less than 100 characters long"],
    },
    price: {
        type: Number,
        required: [true, "Subscription price is required"],
        min: [0, "Price must be greater than or equal to 0"],
    },
    currency: {
        type: String,
        required: [true, "Currency is required"],
        trim: true,
        uppercase: true,
        enum: {
            values: ['PHP', 'USD', 'EUR'],
            message: 'Please enter a valid currency',
            default: 'PHP'
        }
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly']
    },
    category: {
        type: String,
        enum: ['sports', 'news', 'entertainment', 'lifestyle', 'technology', 'finance', 'health', 'education', 'politics', 'other'],
        required: [true, "Subscription category is required"],
    }, 
    paymentMethod: {
        type: String,
        required: [true, "Payment method is required"],
        trim: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'canceled', 'expired'],
        default: 'active'
    },
    startDate: {
        type: Date,
        required: [true, "Start date is required"],
        validate: {
            validator: (value) =>  value <= new Date(),
            message: "Start date must be in the past or present"
            
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function (value) {
                return value > this.startDate;
            },
            message: "Renewal date must be in the future"
        }
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User reference is required"],
        index: true,
    }
}, { timestamps: true });

subscriptionSchema.pre('save', function () {
    if(!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };
        
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }

    if(this.renewalDate < new Date()) {
        this.status = 'expired';
    }

});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;