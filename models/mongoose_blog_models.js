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
      minlength: [5, "Blog Başlığı için minumum 5 karakter olmalıdır"],
      maxlength: [100, "Blog Başlığı için maksimum 100 karakter olmalıdır"],
    },

    // Content
    // content: String,
    content: {
        type: String,
        required: [true, "Blog İçeriği için gereklidir"],
        trim: true,
        minlength: [5, "Blog İçeriği için minumum 50 karakter olmalıdır"],
      },

    // Author
    author: String,

    // Etiketler (alanı için en az bir etiket zorunluluğu getirildi.)
    // Tags (Etiketler): Blog gönderilerine etiketler ekleyerek onları kategorize edebilir ve aramalarda bu etiketleri kullanabilirsiniz.
    tags: {
      type: [String],
      validate: {
        validator: function (v) {
          return Array.isArray(v) && v.length > 0;
        },
        message: "En az bir etiket olmalıdır",
      },
    },

    // Date
    date: {
      type: Date,
      default: Date.now(),
    },

    // Blog Görüntüleme (Default: 0)
    views: {
      type: Number,
      default: 0,
      min: [0, "Blog Gösterimi için Negatif Değer Alınmaz."],
    },

    // Durum (Proje için bu bir taslak mı yoksa canlı ortam için mi ?)
    // Enum Durum Alanı: status: Blog gönderisinin durumu "draft" veya "published" olarak belirlenir. Bu, bir gönderinin taslak mı yoksa yayınlanmış mı olduğunu gösterir.
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  }, //end Attributes Properties

  {
    // Oluşturma ve güncellemem zamanları sisteme eklemek
    // Zaman Bilgileri: timestamps: createdAt ve updatedAt alanları otomatik olarak eklenir ve her işlemde güncellenir.
    timestamps: true,
  }
); //end PostSchema

// Sanal alan (Virtuals) - İçerik özetini döndürme
// summary: Blog içeriğinin ilk 100 karakterini döndüren bir sanal alan ekledik.
// Bu, API cevaplarında sadece kısa bir özet göstermek için kullanılabilir.
PostSchema.virtual("summary").get(function () {
  return this.content.substring(0, 100) + "..."; // İlk 100 karakter ve ardından ...
});

// Şema için ön middleware - Her kaydetmeden önce başlık ve içeriği büyük harflerle güncelleme
// Şema Middleware (Pre-save Hook): pre("save"): Kaydedilmeden önce başlık ve içeriğin ilk harflerini büyük yapmak için bir ön middleware ekledik.
PostSchema.pre("save", function (next) {
  this.header = this.header.charAt(0).toUpperCase() + this.header.slice(1);
  this.content = this.content.charAt(0).toUpperCase() + this.content.slice(1);
  next();
});

// Statik metot - Belirli bir yazara ait tüm blogları bulma
// Statik Metot: findByAuthor: Belirli bir yazara ait tüm blog gönderilerini bulmak için statik bir metot ekledik. Bu, belirli yazara göre blog filtrelemek için kullanılabilir.
PostSchema.statics.findByAuthor = function (authorName) {
  return this.find({ author: authorName });
};

// Instance metodu - Görüntüleme sayısını artırma
// Instance Metot: incrementViews: Her blog gönderisine ait görüntüleme sayısını artırmak için bir instance metot ekledik. Bu, bir gönderi görüntülendiğinde görüntüleme sayısını artırmanızı sağlar.
PostSchema.methods.incrementViews = function () {
  this.views += 1;
  return this.save();
};

// Sanal alanların JSON'a dahil edilmesi
PostSchema.set("toJSON", { virtuals: true });

// Module Exports modelName(BlogModel)
// BlogModel modelini dışa aktarmak
// Post kullanımı daha yaygındır
// module.exports = mongoose.model('Post', PostSchema );

// 1.YOL
// module.exports = mongoose.model('BlogModel', PostSchema );

// 2.YOL
const Blog = mongoose.model("BlogModel", PostSchema);
module.exports = Blog;
