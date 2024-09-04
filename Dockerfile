# Node.js tabanlı bir imaj kullan
FROM node:16

# Uygulama dizinini oluştur
WORKDIR /usr/src/app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# NPM SSL doğrulamasını devre dışı bırak
RUN npm config set strict-ssl false

# Bağımlılıkları yükle
RUN npm install

# Uygulama kodunu kopyala
COPY . .

# Uygulama portunu belirle
EXPOSE 1111

# Uygulamayı başlat
CMD [ "node", "index.js" ]
