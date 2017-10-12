![alt text](img/docker-is-your-firend.png)


# démo-docker  

Démo simple de la baleine bleue :)  


#### Pour installer docker sur Windobe  

 - Si tu as WindobePro & un CPU qui supporte la virtualisation( normalement oui ), une applie toute cuite est là au téléchargement.  
 [Install Docker for Windows](https://docs.docker.com/docker-for-windows/install/)  
 
 - Sinon, il faut installer [docker-tool-box](https://docs.docker.com/toolbox/toolbox_install_windows/#step-2-install-docker-toolbox), sa va installer une virtual-box trés légère avec un linux OS par défaut qui va s'occuper de lancer Docker.
   

#### Pour installer docker sur Mac

- https://docs.docker.com/docker-for-mac/install/#download-docker-for-mac
   

#### docker hub - pour choper une image:  
https://hub.docker.com/

## 1) demo simple

#### Builder l'image (rdv ici /demo__simple-container)

- -t : nomme l'image "demo-simple"  

```
docker build -t demo-simple .
```  

#### Lancer un container de cette image  

- -it : ou "**interactive terminal**" va se connecter comme en ssh au container qui va se lancer.  
  
- --rm : ou "**remove**" supprime le container qui il s'arretera  
  

- -v : partage le contenu de ton repertoire actuel (pwd) au repertoire /var/www de ton container

- -p : route le port 3030 d'un service du container vers le port 3030 exterieur sur lequel on se branche

- --name : nomme le container qui va tourner : demo-simple__ctnr  

le dernier paramètre étant le nom de l'image que l'on vien juste de créer : **demo-simple**

```
docker run -it --rm -v $(pwd):/var/www -p 3030:3030 --name demo-simple__ctnr demo-simple
```

