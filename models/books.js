const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const bookSchema = new Schema(
    {
        title: String,
        author: String,
        thumbnail: String,
        description: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Book", bookSchema)