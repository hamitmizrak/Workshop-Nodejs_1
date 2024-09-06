#!/bin/bash

# NOT: Eğer Linux üzerinde project_docker.sh çalışmazsa
# x: eXecute
chmod +x project_docker.sh

# Docker Compose ayağa kaldır
# docker-compose up -d

# Docker Compose ile tüm servisleri ayağa kaldır
docker-compose up --build
