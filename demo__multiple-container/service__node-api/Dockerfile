#=======================
# pour builder l'image (ce placer dans le repertoire du dockerfle):
# docker build -t demo-node-api .

#=======================
# lance le container
# docker run -it --rm -v $(pwd):/var/www -p 4040:4040 --name demo-node-api__ctnr demo-node-api

FROM node:8.9

MAINTAINER laurent.v

COPY . /var/www
WORKDIR /var/www

RUN npm install -g nodemon && npm install

CMD ["nodemon","-L","./src/server-api.js"]

