const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    nic: { type: String, required: true, trim: true },
    dob: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },

    startLocation: { type: String, required: true, trim: true },
    endLocation: { type: String, required: true, trim: true },
    routeNumber: { type: String, required: true, trim: true },
    seasonPeriod: { type: String, required: true, trim: true },

    photoUrl: { type: String, default: "" },

    status: {
      type: String,
      enum: ["PENDING", "APPROVED", "REJECTED"],
      default: "PENDING",
    },

    payment: {
      amount: { type: Number, default: 0 },
      status: {
        type: String,
        enum: ["UNPAID", "PAID"],
        default: "UNPAID",
      },
      paidAt: { type: Date },
      cardLast4: { type: String, default: "" },
      payerEmail: { type: String, default: "" },
      nameOnCard: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
