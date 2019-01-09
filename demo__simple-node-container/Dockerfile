#=======================
# official repo ici:
# https://hub.docker.com

#=======================
# pour builder l'image (ce placer dans le repertoire du dockerfle):
# docker build -t demo-simple .

#=======================
# lance le container
# mode alone :)
# docker run --rm -p 3030:3030 --name demo-simple__ctnr demo-simple

# mode connexion -it
# docker run -it --rm -v $(pwd)/src:/var/app -p 3030:3030 --name demo-simple__ctnr demo-simple bash

FROM node:8.9

MAINTAINER laurent.v

RUN mkdir -p /var/app

COPY src /var/app

WORKDIR /var/app

COPY ./package.json /var/app

RUN  npm install -g nodemon && \
     npm install && cd public && \
     npm install

CMD ["nodemon","-L","./server.js"]
