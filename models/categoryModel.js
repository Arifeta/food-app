const mongoose = require("mongoose");

// schema

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Restaurant title is required"],
    },
    imageUrl: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s",
    },
  },
  { timestamps: true }
);

// export
module.exports = mongoose.model("Category", categorySchema);
