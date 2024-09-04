// MongoDB için veritabanı işlemlerinde kullanmak üzere `BlogModel` adında model oluşturalım.
// Mongoose adında ki kütüphaneyi ekle ve bu kütüphaneye erişmek için `mongoose` adını kullan.
const mongoose = require('mongoose');

// Schema
const PostSchema = new mongoose.Schema({
    header: String,
    content: String,
    author: String,
    date: {
        type: Date,
        default: Date.now()
    }
}); //end PostSchema

// Module 
module.exports = mongoose.model('BlogModel', PostSchema )
 