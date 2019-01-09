#=======================
# official repo ici:
# https://hub.docker.com

#=======================
# pour builder l'image (ce placer dans le repertoire du dockerfle):
# docker build -t demo-docker-dev__img .

#=======================
# lance le container & se connecte
# docker run -it --rm -v $PWD/src:/var/app -p 3030:3030 --name demo-docker-dev__ctnr demo-docker-dev__img bash

FROM node:8.9

MAINTAINER laurent.v

RUN mkdir -p /var/app && npm install -g nodemon

COPY src /var/app

WORKDIR /var/app

CMD ["nodemon","-L","./server.js"]
