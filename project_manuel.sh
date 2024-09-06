#!/bin/bash

# Docker Compose ayağa kaldır
docker-compose up -d

# Node js ayağa kaldır
# & = anlamı
# node index.js komutunun çalıştıktan sonra terminali "bloklayarak" (kilitleyerek) diğer komutlara geçişi engellemesidir. Yani, node index.js çalıştığında terminal bu süreçte bekler ve docker-compose up -d komutunu çalıştırmaz.
node index.js &

