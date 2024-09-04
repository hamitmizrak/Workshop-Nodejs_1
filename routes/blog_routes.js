/*
Node.js ve Express.js kullanarak blog projesi için gerekli yönetim sistemlerinde kullanmak üzere
CRUD (Create Read Update Delete) için gerekli API'ler yazalım.
Yazacağımız API ile MongoDB veritabanında blog projemiz için yazma, okuma, silme, güncelleme işlemleri yapacağız.
Aşağıdaki kodta Exress.js yardımıyla Router  nesnesini farklı HTTP isteklerine cevap verebilecek router yapılar oluşturulacaktır.
*/

/////////////////////////////////////////////////////////////////////
// Import Express (Express:  Node.js için esnek bir web uygulama çatısını inşa eder)
// Bu modlüller beraber HTTP istekleri(request) işleyecek ve istemciye(server) yanıt dönecektir.
const express = require("express");

// Import Router
const router = express.Router();

// Import Mongoose Schema
const MongooseBlogModelApi = require("../models/mongoose_blog_models");

//////////////////////////////////////////////////////////////////////
// C R U D

////////////////////////////////
// CREATE BLOG
router.post("/", async (request, response) => {
  // Mongoose Blog Model Verileri Almak
  const create = new MongooseBlogModelApi({
    header: request.body.header,
    content: request.body.content,
    author: request.body.author,
  }); //end create

  // Mongoose Blog Model Alınan Verileri Göndermek
  try {
    await create.save(); // Database kaydetmek
    response.status(200).json(create);
  } catch (err) {
    response
      .status(400)
      .json({ message: "MongoDb Ekleme sırasında bir hata meydana geldi" });
    // Hata çıktısı
    console.error(err);
  } // end catch
}); // end blogPost



////////////////////////////////
// FIND BLOG
router.get("/", async (request, response) => {
  try {
    const find = await MongooseBlogModelApi.find();
    response.status(200).json(find);
  } catch (err) {
    response
      .status(400)
      .json({ message: "MongoDb Bulma sırasında bir hata meydana geldi" });
    // Hata çıktısı
    console.error(err);
  } //end catch
}); // end blogRead



////////////////////////////////
// UPDATE BLOG
// Güncelleme ve Silme işlemlerinde ID'e göre yapılır.
router.put("/:id", async (request, response) => {
  try {
    const update = await MongooseBlogModelApi.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    response.status(200).json(update);
  } catch (err) {
    response
      .status(400)
      .json({ message: "MongoDb Güncelleme sırasında bir hata meydana geldi" });
    // Hata çıktısı
    console.error(err);
  } //end catch
}); // end blogUpdate



////////////////////////////////
// DELETE BLOG
router.delete("/:id", async (request, response) => {
  try {
    const id= request.params.id;
    console.log(id);
    
   const result= await MongooseBlogModelApi.findByIdAndDelete(id);
   console.log(result);
   
    response.status(200).json({ message: "Blog Id silindi." });
  } catch (err) {
    response
      .status(400)
      .json({ message: "MongoDb Silme sırasında bir hata meydana geldi" });
    // Hata çıktısı
    console.error(err);
  } //end catch
}); // end blogDelete



////////////////////////////////
// Export 
module.exports = router;
