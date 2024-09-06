// MongoDB için veritabanı işlemlerinde kullanmak üzere `BlogModel` adında model oluşturalım.
// Mongoose adında ki kütüphaneyi ekle ve bu kütüphaneye erişmek için `mongoose` adını kullan.
// mongoose paketini sisteme dahil ediyoruz.
// Mongoose MongoDB ile bağlantı kurarken sağlıklı ve hızlı bağlantıs için  bir ODM(Object Data Modeling)
// NOT: Eğer bu sayfada Typescript kullansaydım reqire yerine import kullanacaktım.
const mongoose = require("mongoose");

// Schema adından (PostSchema)
const PostSchema = new mongoose.Schema(
  {
    // 1.YOL: Header
    //header: String,

    // 2.YOL Header (Validation)
    header: {
      type: String,
      required: [true, "Blog Başlığı için gereklidir"],
      trim: true,
    },

    // Content
    content: String,

    // Author
    author: String,

    // Date
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    // Oluşturma ve güncellemem zamanları sisteme eklemek
    timestamps: true,
  }
); //end PostSchema

// Module Exports modelName(BlogModel)
// BlogModel modelini dışa aktarmak
// Post kullanımı daha yaygındır
// module.exports = mongoose.model('Post', PostSchema );

// 1.YOL
// module.exports = mongoose.model('BlogModel', PostSchema );

// 2.YOL
const Blog = mongoose.model("BlogModel", PostSchema);
module.exports = Blog;
