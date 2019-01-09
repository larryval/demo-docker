#=======================
# pour builder l'image (ce placer dans le repertoire du Dockerfle):
# docker build -t demo-mongodb-ui .

# lance le container
# docker run -it --rm -p 1234:1234 --name demo-mongodb-ui__ctnr demo-mongodb-ui bash

FROM node:8.9

MAINTAINER laurent.v

RUN apt-get update && \
    apt-get install git netcat-traditional -y && \
    git clone https://github.com/mrvautin/adminMongo.git && \
    cd adminMongo && npm install

WORKDIR adminMongo

CMD ["node","app"]
