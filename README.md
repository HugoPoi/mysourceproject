mysourceproject
===============

Vente/Achat de code source avec license non-commercial.
Ce base sur le même modèle que les sites qui vendent des dissertations et autres devoirs.

Cible visé : étudiant.

Dépendances du front (javascript html):
  AngularJS (+ ngUpload) http://angularjs.org/
  Bootstrap http://twitter.github.com/bootstrap/
  FontAwesome http://fortawesome.github.com/Font-Awesome/#
  
API Json :
  PHP 5.3
  MySQL
  
Les dépendances sont gérer dans le git.

Pour l'installation :
  Créer une base mysql, script dans /bdd
  Configurer la connexion à la base de données dans le fichier /app/api/connect.db.php
  Monter le dossier /app en tant que Vhost