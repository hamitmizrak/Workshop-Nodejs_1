alert("index.js Javascript çalıştı");

console.error("index.js Javascript error");
console.warn("index.js Javascript warn");
console.log("index.js Javascript log");
console.info("index.js Javascript info");

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
mongoose.connect('mongodb://localhost/blog',{useNewUrlParser:true, useUnifiedTopology:true }); 

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
const port= 3000;
app.listen(port,()=>{
    console.log(`Sunucu: ${port} portunda dinliyor. http://localhost:${port}`);
    
});
