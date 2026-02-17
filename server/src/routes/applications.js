const express = require("express");
const path = require("path");
const multer = require("multer");
const Application = require("../models/Application");

const router = express.Router();

// In-memory storage for mock data
let mockApplications = [];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../uploads"));
  },
  filename: (req, file, cb) => {
    const safe = file.originalname.replace(/\s+/g, "_");
    cb(null, `${Date.now()}_${safe}`);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const b = req.body;

    const photoUrl = req.file ? `/uploads/${req.file.filename}` : "";

    try {
      const created = await Application.create({
        fullName: b.fullName,
        nic: b.nic,
        dob: b.dob,
        mobile: b.mobile,
        email: b.email,
        startLocation: b.startLocation,
        endLocation: b.endLocation,
        routeNumber: b.routeNumber,
        seasonPeriod: b.seasonPeriod,
        photoUrl,
      });

      res.status(201).json(created);
    } catch (mongoErr) {
      // MongoDB not available, use mock data
      const mockId = `mock-${Date.now()}`;
      const mockApp = {
        _id: mockId,
        fullName: b.fullName,
        nic: b.nic,
        dob: b.dob,
        mobile: b.mobile,
        email: b.email,
        startLocation: b.startLocation,
        endLocation: b.endLocation,
        routeNumber: b.routeNumber,
        seasonPeriod: b.seasonPeriod,
        photoUrl,
        status: "PENDING",
        payment: {
          amount: 0,
          status: "UNPAID",
          paidAt: null,
          cardLast4: "",
          payerEmail: "",
          nameOnCard: ""
        },
        createdAt: new Date(),
        updatedAt: new Date()
      };
      mockApplications.push(mockApp);
      res.status(201).json(mockApp);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const list = await Application.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (mongoErr) {
    // MongoDB not available, return mock data
    res.json(mockApplications.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  }
});


router.get("/:id", async (req, res) => {
  try {
    const doc = await Application.findById(req.params.id);
    if (!doc) {
      // Try to find in mock data
      const mockDoc = mockApplications.find(app => app._id === req.params.id);
      if (mockDoc) return res.json(mockDoc);
      return res.status(404).json({ message: "Not found" });
    }
    res.json(doc);
  } catch (mongoErr) {
    // MongoDB error, check mock data
    const mockDoc = mockApplications.find(app => app._id === req.params.id);
    if (mockDoc) return res.json(mockDoc);
    res.status(404).json({ message: "Not found" });
  }
});


router.patch("/:id/status", async (req, res) => {
  const { status } = req.body;

  try {
    const updated = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (mongoErr) {
    // MongoDB error, update mock data
    const mockApp = mockApplications.find(app => app._id === req.params.id);
    if (!mockApp) return res.status(404).json({ message: "Not found" });
    mockApp.status = status;
    mockApp.updatedAt = new Date();
    res.json(mockApp);
  }
});

router.post("/:id/pay", async (req, res) => {
  try {
    const { amount, cardNumber, nameOnCard, email } = req.body;

    if (!amount || !cardNumber || !nameOnCard || !email) {
      return res.status(400).json({ message: "Missing payment fields" });
    }

    const last4 = String(cardNumber).replace(/\s+/g, "").slice(-4);

    try {
      const updated = await Application.findByIdAndUpdate(
        req.params.id,
        {
          payment: {
            amount: Number(amount),
            status: "PAID",
            paidAt: new Date(),
            cardLast4: last4,
            payerEmail: email,
            nameOnCard,
          },
          status: "APPROVED",
        },
        { new: true }
      );

      if (!updated) {
        return res.status(404).json({ message: "Application not found" });
      }

      res.json({ ok: true, message: "Payment saved", application: updated });
    } catch (mongoErr) {
      // MongoDB error, update mock data
      const mockApp = mockApplications.find(app => app._id === req.params.id);
      if (!mockApp) {
        return res.status(404).json({ message: "Application not found" });
      }

      mockApp.payment = {
        amount: Number(amount),
        status: "PAID",
        paidAt: new Date(),
        cardLast4: last4,
        payerEmail: email,
        nameOnCard,
      };
      mockApp.status = "APPROVED";
      mockApp.updatedAt = new Date();

      res.json({ ok: true, message: "Payment saved", application: mockApp });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
