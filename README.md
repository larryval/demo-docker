![alt text](img/docker-is-your-firend.png)


# démo-docker  

Démo simple de la baleine bleue :)  

#### Docker hub - pour choper une image:  
https://hub.docker.com/

#### Hype 

- utilise peu de ressources
- se lance trés rapidement
- apps isolées
- no more env probs & setup
- pouvoir choisir la techno la plus adaptée 

## 1) demo simple - 1 container

#### Builder l'image (rdv ici /demo__simple-container)

```
docker build -t demo-simple .
```

- -t : nomme l'image "demo-simple"  


#### Lancer un container de cette image et s'y connecter

```
docker run -it --rm -p 3030:3030 --name demo-simple__ctnr demo-simple bash
```  

- -it : ou "**interactive terminal**" va se connecter comme en ssh au container qui va se lancer.  
  
- --rm : ou "**remove**" supprime le container quand il s'arretera  

- -v : partage le contenu de ton repertoire actuel (pwd) au repertoire /var/[mon_rep] de ton container

- -p : route le port 3030 d'un service du container vers le port 3030 extérieur sur lequel on se branche

- --name : nomme le container qui va tourner : demo-simple__ctnr  

le dernier paramètre étant le nom de l'image que l'on vient juste de créer : **demo-simple**

**rdv au** (docker-tool-box):  
**192.168.99.100:3030**


## 2) demo - n container

Il faut d'abord builder les images de nos services (3 dans notre cas), mais c'est pas comme les antibiotiques, c'est pas automatique. Voir la doc de [docker-compose, tag:**build**](https://docs.docker.com/compose/compose-file/#build)

Construire un fichier docker-compose.yaml, pour définir les containers qui vont tourner ensemble sur le même réseaux, puis

```
docker-compose up
```

et zou   
 
- mongodb sur le port 27017
- mongodb-ui sur le port 1234
- node-api sur le port 4040

## Docker cmd utiles:  

- Pour virer container zombie:  
    `docker rm $(docker ps -q -f 'status=exited')`  
    et  
    `docker rm $(docker ps -q -f 'status=created')`  

- Pour virer les images dangling :  
    `docker rmi $(docker images -q -f dangling=true)`  

- Pour virer les volumes inutiles:  
    `docker volume rm $(docker volume ls -qf dangling=true)`  
    
- Pour afficher les stats:  
    `docker stats $(docker ps --format '{{.Names}}')`    


## ressources

- video VM vs Docker container
https://www.youtube.com/watch?v=TvnZTi_gaNc

- Docker adoption:  
https://www.datadoghq.com/docker-adoption/

- Alpine base image vs Debian ou autre OS classique:  
https://blog.codeship.com/alpine-based-docker-images-make-difference-real-world-apps/  

- Un exemple d'API avec Hapi.js + swagger + mongodb  
https://github.com/dwyl/hapi-typescript-example


C:\_larry\dev-lars\demo-docker