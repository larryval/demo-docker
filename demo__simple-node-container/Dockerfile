#=======================
# official repo ici:
# https://hub.docker.com/_/node/

#=======================
# pour builder l'image (ce placer dans le repertoire du dockerfle):
# docker build -t demo-simple .

#=======================
# lance le container
# docker run -it --rm -v $(pwd):/var/www -p 3030:3030 --name demo-simple__ctnr demo-simple

FROM node:8.4-slim

MAINTAINER Larry

COPY . /var/www
WORKDIR /var/www

RUN npm install -g nodemon

RUN npm install && cd public && npm install

CMD ["nodemon","-L","./server.js"]