//alert("index.js Javascript çalıştı");

//console.error("index.js Javascript error");
//console.warn("index.js Javascript warn");
//console.log("index.js Javascript log");
console.info("index.js Server ayağa kalktı");

// npm start
// npm run start
// node index.js

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Express, Mongo, BodyParser

// Import
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Mongo db bağlantısı
// npm install mongodb
// Mongodb cloud içinde cluster oluştur ve oluşturduğun URL buraya ekle
// https://cloud.mongodb.com/v2/65afa13b68122c4c16c1e42a#/overview
// username: hamitmizrak
// password: hW2uLZCdHkjheB8l
//const databaseUrl="localhost/blog";
const databaseUrl="mongodb+srv://hamitmizrak:hW2uLZCdHkjheB8l@cluster0.zbkvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Eskiden
// mongoose.connect(`${databaseUrl}`,{useNewUrlParser:true, useUnifiedTopology:true });
mongoose.connect(`${databaseUrl}`);

// Orta katmanlar (Middleware)
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// EJS için Görüntüleme Motorunu Set
app.set('view engine', 'ejs');

// Rotalar (Router)
const blogRoutes = require('./routes/blog_routes');
app.use('/blog', blogRoutes);

// Anasayfa Path
app.get('/', (request,response)=>{
    response.render('index');
});

// Sunucuyu Başlatma
/*
0-1023
1024-49151
49152-65535
*/

//const port= 3000;
const port= 1111; // nginx için değiştirdim.
app.listen(port,()=>{
    console.log(`Sunucu: ${port} portunda dinliyor. http://localhost:${port}`);
});
