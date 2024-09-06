#!/bin/bash

# NOT: Eğer Linux üzerinde project_manuel.sh çalışmazsa
# x: eXecute
chmod +x project_manuel.sh

# Node js ayağa kaldır
# & = anlamı
# node index.js komutunun çalıştıktan sonra terminali "bloklayarak" (kilitleyerek) diğer komutlara geçişi engellemesidir. Yani, node index.js çalıştığında terminal bu süreçte bekler ve docker-compose up -d komutunu çalıştırmaz.

# 1.YOL
#node index.js &

# 2.YOL
#npm start

# 3.YOL
# Eğer biz bir script yazarsak run yazmak zorundayız.
# npm run start

# 4.YOL Nodemon ile ayağa kaldır
# node monitoring
npm run nodemon

# 5.YOL Nodemon ile ayağa kaldır
# q: terminal çıktısındaki çok detayı gösterme
#npm run nodemon_q

