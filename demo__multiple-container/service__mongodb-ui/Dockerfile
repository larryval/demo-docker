#=======================
# pour builder l'image (ce placer dans le repertoire du dockerfle):
# docker build -t demo-mongodb-ui .

# lance le container
# docker run -it --rm -p 1234:1234 --name demo-mongodb-ui__ctnr demo-mongodb-ui

FROM node:8.4-slim

MAINTAINER larry

RUN apt-get update
RUN apt-get install git netcat-traditional -y
RUN git clone https://github.com/mrvautin/adminMongo.git && cd adminMongo && npm install

EXPOSE 1234

CMD ["node","adminMongo/app"]