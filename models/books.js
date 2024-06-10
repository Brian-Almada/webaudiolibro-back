const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const bookSchema = new Schema(
    {
        title: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Book", bookSchema)