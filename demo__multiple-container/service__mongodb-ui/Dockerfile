#=======================
# pour builder l'image (ce placer dans le repertoire du Dockerfle):
# docker build -t demo-mongodb-ui .

# lance le container
# docker run -it --rm -p 1234:1234 --name demo-mongodb-ui__ctnr demo-mongodb-ui bash

FROM mrvautin/adminmongo

MAINTAINER laurent.v

WORKDIR app/user

RUN npm install

CMD ["npm","start"]
