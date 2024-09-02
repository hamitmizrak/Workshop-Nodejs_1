# Workshop Node JS
[GitHub Node Js ](https://github.com/hamitmizrak/Workshop-Nodejs_1)
[Node JS](https://nodejs.org/en)

--- 


## Git Tutorial
```sh
git clone https://github.com/hamitmizrak/Workshop-Nodejs_1

```
---


## Node JS Download
```sh
DİKKKATTT: node js için her zaman  LTS olanı indirin.

https://nodejs.org/en/download/prebuilt-installer

LTS Kararlı Sürüm: 20.17.0 

node -v
npm -v
```
---

## Node JS NPM INIT
```sh
npm init -y 

npm init

package name: 
1-) herşeyi küçük harfle yaz
2-) boşluk kullanma bunun yerine (- veya _ kullan)
3-) Türkçe karakterlerden (üğşçö) kullanma

version: v1.0.0 (Semantic version)
description: Html5,css3,bootstrap5 js, es, nodejs, jquery, express
entry point: index.js
test command: test 
git repository: https://github.com/hamitmizrak/Workshop-Nodejs_1
keywords: Html5,css3,bootstrap5, js, es, nodejs, nodemon, jquery, express
author: Yüksek Bilgisayar Mühendisi Hamit Mızrak
license: ISC
Is this OK? yes
```
---

## Node JS NPM INSTALL, EXPRESS, NODEMON
```sh
npm search express
npm install express
npm install express --save
npm install express -g

npm install express@4.17.1
npm install nodemon --save-dev
npm install nodemon -D

npm uninstall express
npm update express

npm list
npm list -g           (Global olarak herşeyi göster)
npm list -g --depth=0 (Global olarak, sadece ana branch'e yüklediğim dosyaları göster)

npm root     : Local projedeki node_modules gösterir.
npm root -g  : Glocal projedeki node_modules gösterir.

npm install
npm update

npm start
npm test

```
---


## NPM LOCAL INSTALL
```sh
npm install express typescript mongoose body-parser ejs
npm install nodemon --save-dev

```
---

## NPM GLOCAL INSTALL
```sh
npm install -g express typescript mongoose body-parser ejs

express     : Node.js üzerinden hızlı ve minimal(minimalist) web uygulaması için gerekli js frameworkudur. Express sunucu tarafıdan HTTPS isteklerini yönetmek için kullanıyoruz. Yangın olarak REST API web geliştirmek için kullanıyoruz.
typescript  :  js kullanarak OOP daha yakın uygulamalar çıkarmak. Bir dildir. interface, abstact, enum vb
mongoose    : NoQql yer alan Mongo DB için Node.js ile MongoDB veritabanı arasında köprüdür. ODM(Object Data Modeling). Mongoose, MongoDB üzerinden C-R-U-D işlemlerimizi yapmamıza olanak sağlar
body-parser : Express.js uygulamalarında HTTP istekler(request) gövdede(body) verilerini ayrıştırma için kullanalın bir ara katmandır(middleware). Gelen bir post istekleri `request.body` üzerinden erişim sağlıyorum. Bundan dolayı form verilerimizi ,JSON formalarındaki verilere kolayca erişim sağlamış oluruz.
NOT: Express ^4.16.0 üstündeki sürümlerde body-parse express dahil edilmiştir.
ejs(Embedded Javascript Templates) : 
- EJS şablon motoru.
- EJS: dinamik değişen verileri HTML sayfalarında an be an görmek içindir 
- EJS: Express ile birlikte kullandığımızda sunucu tarafında dinamik HTML sayfaları oluşturmamıza olanak sağlar.
- EJS, Javascript kodlarımızı HTML içine gömerek proje kodlarımızı interaktif bir şekilde çalışmasını sağlar.
- EJS: Sytax  `<% %> <%= %>` bu komutları HTML içinde Javascript kodlarını rahatlıkla ekleyebilirsiniz. Bundan dolayı veritabanındaki verileri dinamik olarak son kullanıcı(end user) gösterebiliriz.  
```
---


## Node JS Nodemon
```sh
Nodemon_

-- package.json -- 
"script" :{
"start": "node index.js",
"nodemon": "nodemon index.js",
"nodemon_q": "nodemon -q index.js",
}

```
---


## Node JS NPM  EXPRESS, NODEMON
```sh
npm search express

-- LOCAL --
npm install express 
npm install express --save

npm install typescript 
npm install typescript express
npm install typescript@5.5.4 --save

npm install nodemon --save-dev


-- GLOBAL --
npm install express --save -g
npm install nodemon --save-dev -g
npm install typescript@5.5.4 --save -g

-- package.json -- 
"script" :{
"start": "node index.js",
"nodemon": "nodemon index.js",
"nodemon_q": "nodemon -q index.js",
}

npm run nodemon
npm run nodemon_1

```
---


## Node JS Nedir ?
```sh
NodeJS :
- Chrome V8 Javascript motorunu kullanan, 
- açık kaynak kodlu, 
- hızlı ve etkili bir platformdur.
- Server Side(Server[Sunucu]) tarafından çalışan bir Javascript framework'udur. 
- Ryan Dahl ve Isaac Z. Schluter tarafından 2009 yılında geliştirmeye başlamış.
```
---


## Node JS Özellikleri
```sh
Javascript betik dilimiz senkron(Aynı anda sadece bir iş yapan) çalışır.

Event-Driven (Olay odaklıdır),Non-Blocking I/O Modeli (Engelsiz Input(Girdi), Output(Çıktı)):
- Bu özellikler amaçı JS özelliğinden olan senkron özelliğini, asenkron(Aynı anda birden fazla process) özelliğe taşımaktır.
- Single Threaded(Tek iş parçasıcı) mimarisinde sahiptir.
- Npm'i otomatik olarak sisteme yükerl
- Full stack(frontend,backend) aynı dil(JS) üzerinden projemizi geliştirme imkanını sağlar.
- API ile çalışmamıza olanak sağlar.
- Gerçek zamanlı uygulamalar(Message: Socket) yüksek performans sağlar.
- Express(Middleware: orta katman), node js için popüler bir web geliştirme platformudur. 
- Veri tabanı erişimlerinde MongoDB, mysql, postgresql
- Routing(yönlendirme)
```
---


## Node JS Olay odaklı(event-driven) , engelsiz(non-blocking) I/O Modeli, Event Loop
```sh
- Bu model amacı performans metriğini artırmak içindir
- Olay odaklı programlamada, bir programın olaylar(event) tepki verme şeklidir.
- Uzun süren işlemlerde(Ağ etkileşimi) bazen bekleyebiliyoruz. Biz bunu asenkron olarak işlersek beklemeden diğer işlemlerin sürdürülebilirliğini artırmış oluruz.
- Yani işlemlerin tamamlanmasını beklemeden diğer tetiklenen(trigger) olaylara yanıt vermedir.
- Aynı anda  birden fazla işlem(process) çalışır ve bloke olmadan devam eder.
- Event-Loop(Olay döngüsü): uygulamaları dinliyor ve işlem bekleyenleri işliyor.
- Callback function: programalada callback functionlar olay odaklı programlanın bir parçasıdır.
- Olay odaklı bu model ölçeklenebilinirliliğini sağlar ve eş zamanlı çalışmayı sağlar
```
---

## Node JS Tarihçesi
```sh
2009 geliştirilmeye başlandı
2010 Non-blocking (Engelsiz)
Windows
LTS(Long Term Support: Uzaun vadeli destek)
```
---

## Node JS Node JS Framework
```sh
- Express.js (En popüler olanı) hafiftir.
- Koa.js (ES6 destekliyor) daha az kod
- Nest.js (TS ile geliştirildi)
- Meteor.js (Full- stack) JS uygulamaları geliştirmek için uygundur.
- Sails.js (MVC) mimarisine dayanır.
- Hapi.js (Büyük ölçekli projeler için uygundur)
```
---

## Node JS Framework Express
```sh
- Middleware: orta katman için uygundur.
- Esnektir, 
- Hızlıdır (Minimalist)
- SPA uygulamalarında(Single Page Application) idealdir SPA(React,Angular)
- node js için en popüler hafif,esnek, bir web geliştirme platformudur. 
- Http istekleri (GET,POST,PUT, DELETE) için birçok özellikler sağlar.
- Hızlı prototype oluşturmada, RESTful API geliştirmede 
- Yönlendirme (Routing): Yönlendirme mekanizması vardır.
```
---

## Npm Nedir
```sh
Npm(Node Package Management): Paket yönetim sistemidir.
Npm bize hızlı kodlar yazmamız için gereken alt yapıyı sunar.
```
---




## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

## Node JS
```sh

```
---

