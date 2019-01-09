#=======================
# official repo ici:
# https://hub.docker.com

#=======================
# pour builder l'image (ce placer dans le repertoire du dockerfle):
# docker build -t demo-docker__img .

#=======================
# lance le container détaché -d
# mode alone :)
# docker run --rm -d -p 3030:3030 --name demo-docker__ctnr demo-docker__img

FROM node:8.9

MAINTAINER laurent.v

RUN apt-get update && \
    apt-get install vim -y && \
    mkdir -p /var/app

COPY src /var/app

WORKDIR /var/app

RUN  npm install -g nodemon && \
     npm install && cd public && \
     npm install

CMD ["nodemon","-L","./server.js"]
